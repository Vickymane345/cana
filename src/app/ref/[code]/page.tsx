import { redirect } from 'next/navigation';

export default function ReferralRedirect({ params }: { params: { code: string } }) {
  redirect(`/screens/auth/Signup?ref=${encodeURIComponent(params.code)}`);
}
