"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string | null;
  mainBalance: number;
  investmentBalance: number;
  totalEarn: number;
  totalDeposit: number;
  totalWithdrawals: number;
  roi: number;
  redeemedRoi: number;
  completed: number;
  interestBalance: number;
  rewardPoints: number;
  totalReferrals: number;
  createdAt: string;
}

interface PendingItem {
  id: number;
  amount: number;
  currency: string;
  address?: string;
  status: string;
  createdAt: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
  };
}

interface NewSignup {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string | null;
  createdAt: string;
}

type TabType = "pending" | "users";

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [pendingDeposits, setPendingDeposits] = useState<PendingItem[]>([]);
  const [pendingWithdrawals, setPendingWithdrawals] = useState<PendingItem[]>([]);
  const [newSignups, setNewSignups] = useState<NewSignup[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>("pending");
  const [processingId, setProcessingId] = useState<number | null>(null);
  const usersPerPage = 20;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [usersRes, pendingRes] = await Promise.all([
        fetch("/api/users"),
        fetch("/api/admin/pending"),
      ]);
      
      // Handle users response with defensive check
      if (!usersRes.ok) {
        const errorText = await usersRes.text();
        console.error("Users API error:", usersRes.status, errorText);
        throw new Error(`Users API failed: ${usersRes.status}`);
      }
      const usersData = await usersRes.json();
      
      // Handle pending response with defensive check
      if (!pendingRes.ok) {
        const errorText = await pendingRes.text();
        console.error("Pending API error:", pendingRes.status, errorText);
        throw new Error(`Pending API failed: ${pendingRes.status}`);
      }
      const pendingData = await pendingRes.json();
      
      if (usersData.users) {
        setUsers(usersData.users);
      }
      if (pendingData.pendingDeposits) {
        setPendingDeposits(pendingData.pendingDeposits);
      }
      if (pendingData.pendingWithdrawals) {
        setPendingWithdrawals(pendingData.pendingWithdrawals);
      }
      if (pendingData.newSignups) {
        setNewSignups(pendingData.newSignups);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (id: number, action: "approve" | "reject", type: "deposit" | "withdrawal") => {
    setProcessingId(id);
    
    try {
      const endpoint = type === "deposit" 
        ? `/api/addFunds/approve?transactionId=${id}&action=${action}`
        : `/api/withdrawal/approve?withdrawalId=${id}&action=${action}`;
      
      const response = await fetch(endpoint);
      
      // Handle non-OK responses with defensive check
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`${type} approval API error:`, response.status, errorText);
        alert(`Failed to ${action} ${type}: Server error (${response.status})`);
        return;
      }
      
      const data = await response.json();
      
      if (data.success) {
        alert(`Successfully ${action}ed the ${type}!`);
        // Immediately re-fetch data to update pending counts
        fetchData();
      } else {
        alert(`Failed to ${action} ${type}: ${data.message}`);
      }
    } catch (error) {
      console.error(`Error ${action}ing ${type}:`, error);
      alert(`Failed to ${action} ${type}`);
    } finally {
      setProcessingId(null);
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(searchLower) ||
      user.lastName.toLowerCase().includes(searchLower) ||
      user.username.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower)
    );
  });

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const totalPending = pendingDeposits.length + pendingWithdrawals.length;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-400">Trade GlobalFX Management</p>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2 border-b border-gray-700">
          <button
            onClick={() => setActiveTab("pending")}
            className={`px-4 py-2 rounded-t-lg transition-colors ${
              activeTab === "pending"
                ? "bg-gray-800 text-white border border-b-0 border-gray-700"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            Pending Actions
            {totalPending > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {totalPending}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`px-4 py-2 rounded-t-lg transition-colors ${
              activeTab === "users"
                ? "bg-gray-800 text-white border border-b-0 border-gray-700"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            All Users ({users.length})
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-gray-400 text-sm">Total Users</div>
            <div className="text-2xl font-bold text-white">{users.length}</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-gray-400 text-sm">Total Deposits</div>
            <div className="text-2xl font-bold text-green-400">
              {formatCurrency(users.reduce((sum, u) => sum + u.totalDeposit, 0))}
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-gray-400 text-sm">Total Withdrawals</div>
            <div className="text-2xl font-bold text-red-400">
              {formatCurrency(users.reduce((sum, u) => sum + u.totalWithdrawals, 0))}
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-gray-400 text-sm">Pending Deposits</div>
            <div className="text-2xl font-bold text-yellow-400">{pendingDeposits.length}</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-gray-400 text-sm">Pending Withdrawals</div>
            <div className="text-2xl font-bold text-orange-400">{pendingWithdrawals.length}</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-gray-400 text-sm">New Signups (24h)</div>
            <div className="text-2xl font-bold text-blue-400">{newSignups.length}</div>
          </div>
        </div>
      </div>

      {/* Pending Tab Content */}
      {activeTab === "pending" && (
        <div className="container mx-auto px-4 pb-8">
          {/* New Signups Section */}
          {newSignups.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">New User Signups (Last 24 Hours)</h2>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Username</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Phone</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {newSignups.map((signup) => (
                      <tr key={signup.id} className="hover:bg-gray-750">
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{signup.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-white font-medium">
                          {signup.firstName} {signup.lastName}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{signup.username}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{signup.email}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{signup.phone || "N/A"}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-400">{formatDate(signup.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pending Deposits Section */}
          {pendingDeposits.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-yellow-400">Pending Deposits</h2>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Email</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Currency</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Address</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {pendingDeposits.map((deposit) => (
                      <tr key={deposit.id} className="hover:bg-gray-750">
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{deposit.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-white font-medium">
                          {deposit.user.firstName} {deposit.user.lastName}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{deposit.user.email}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-green-400 font-medium">
                          {formatCurrency(deposit.amount)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{deposit.currency}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300 text-xs">{deposit.address || "N/A"}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-400">{formatDate(deposit.createdAt)}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-center">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleApproval(deposit.id, "approve", "deposit")}
                              disabled={processingId === deposit.id}
                              className="px-3 py-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded text-white text-xs transition-colors"
                            >
                              {processingId === deposit.id ? "Processing..." : "Approve"}
                            </button>
                            <button
                              onClick={() => handleApproval(deposit.id, "reject", "deposit")}
                              disabled={processingId === deposit.id}
                              className="px-3 py-1 bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded text-white text-xs transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pending Withdrawals Section */}
          {pendingWithdrawals.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-orange-400">Pending Withdrawals</h2>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Email</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Currency</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Address</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {pendingWithdrawals.map((withdrawal) => (
                      <tr key={withdrawal.id} className="hover:bg-gray-750">
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{withdrawal.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-white font-medium">
                          {withdrawal.user.firstName} {withdrawal.user.lastName}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{withdrawal.user.email}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-red-400 font-medium">
                          {formatCurrency(withdrawal.amount)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{withdrawal.currency}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300 text-xs">{withdrawal.address}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-400">{formatDate(withdrawal.createdAt)}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-center">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleApproval(withdrawal.id, "approve", "withdrawal")}
                              disabled={processingId === withdrawal.id}
                              className="px-3 py-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded text-white text-xs transition-colors"
                            >
                              {processingId === withdrawal.id ? "Processing..." : "Approve"}
                            </button>
                            <button
                              onClick={() => handleApproval(withdrawal.id, "reject", "withdrawal")}
                              disabled={processingId === withdrawal.id}
                              className="px-3 py-1 bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded text-white text-xs transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* No Pending Items */}
          {pendingDeposits.length === 0 && pendingWithdrawals.length === 0 && newSignups.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="text-xl">No pending items at the moment.</p>
              <p className="mt-2">All deposits, withdrawals, and new signups have been processed.</p>
            </div>
          )}
        </div>
      )}

      {/* Users Tab Content */}
      {activeTab === "users" && (
        <div className="container mx-auto px-4 pb-8">
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by name, username, or email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full md:w-1/3 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Users Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Username</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Phone</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Main Bal</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Invest Bal</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Total Earn</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Total Deposit</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Total Withdraw</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {currentUsers.length > 0 ? (
                    currentUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-750">
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{user.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-white font-medium">
                          {user.firstName} {user.lastName}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{user.username}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{user.email}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-300">{user.phone || "N/A"}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-green-400">
                          {formatCurrency(user.mainBalance)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-purple-400">
                          {formatCurrency(user.investmentBalance)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-yellow-400">
                          {formatCurrency(user.totalEarn)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-blue-400">
                          {formatCurrency(user.totalDeposit)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-red-400">
                          {formatCurrency(user.totalWithdrawals)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-400">
                          {formatDate(user.createdAt)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={11} className="px-4 py-8 text-center text-gray-400">
                        {searchTerm ? "No users found matching your search." : "No users registered yet."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-3 bg-gray-700 border-t border-gray-600">
                <div className="text-sm text-gray-400">
                  Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-600 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1 rounded transition-colors ${
                          currentPage === pageNum
                            ? "bg-blue-600 text-white"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-600 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
