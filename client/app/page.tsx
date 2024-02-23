import Home from '@/component/Home/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Main page',
}

export default function HomePage() {
  return <Home />
}
