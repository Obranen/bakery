import Home from '@/components/home/Home'
import { homePageGet } from '@/fetch/homePage.fetch'
import { sectionGet } from '@/fetch/section.fetch'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

export async function generateMetadata() {
  const homePage = await homePageGet()
  const { title, description } = homePage.data.attributes

  return {
    title,
    description,
  }
}

export default async function HomePage() {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery({
    queryKey: ['feature'],
    queryFn: sectionGet,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  )
}
