import Home from '@/components/home/Home'
import { homePageSectionGet, homePageGet } from '@/fetch/homePage.fetch'
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
    queryFn: homePageSectionGet,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  )
}
