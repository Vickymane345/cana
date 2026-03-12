export const API_BASE = typeof window !== 'undefined' ? '' : process.env.NEXT_PUBLIC_BASE_URL ?? ''

export const fetcher = async (path: string, opts?: RequestInit) => {
  const res = await fetch(`${API_BASE}${path}`, opts)
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}
