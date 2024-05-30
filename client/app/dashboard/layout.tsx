import DashboardMenu from '@/components/dashboard/DashboardMenu'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='flex'>
      <div className='w-3/12'><DashboardMenu /></div>
      <div className='w-9/12'>{children}</div>
    </main>
  )
}
