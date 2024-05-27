'use client'

import ErrorMessage from '@/components/ui/ErrorMessage'

const Error = ({ error }: { error: Error }) => {
  return <ErrorMessage message={error.message} />
}

export default Error
