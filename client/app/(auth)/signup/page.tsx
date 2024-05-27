import SignUp from '@/components/auth/SignUp'

const SignUpPage = () => {
  return (
    <main className='bg-secondaryLight'>
      <div className='flex justify-center items-center h-[85vh]'>
      <div className='font-robotoSerifRegular'>
        <h1 className='text-xl font-bold text-center font-robotoRegular'>Регистрация</h1>
        <SignUp isShowCloseButton={false} />
      </div>
      </div>
    </main>
  )
}

export default SignUpPage
