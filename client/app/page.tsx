import Home from '@/components/home/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Main page',
}

export default function HomePage() {
  return <Home />
}
