'use client'

import { userSignIn } from '@/fetch/user.fetch'
import { IUserSignInState } from '@/interface/user.interface'
import EmailSVG from '@/public/images/svg/EmailSVG'
import EyeSlashSVG from '@/public/images/svg/EyeSlashSVG'
import EyeViewSVG from '@/public/images/svg/EyeViewSVG'
import KeySVG from '@/public/images/svg/KeySVG'
import { useAuthStore } from '@/store/useAuth.store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useRef, useState } from 'react'
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form'
import { toast } from 'react-toastify'

interface ISignInProps {
  isShowCloseButton?: boolean
}

const SignIn: FC<ISignInProps> = ({ isShowCloseButton = true }) => {
  const [showPassword, setShowPassword] = useState(false)
  const queryClient = useQueryClient()
  const router = useRouter()
  const refCloseButton = useRef<any>(null)
  const setIsSignedIn = useAuthStore((state) => state.setIsSignedIn)

  const {
    data: userData,
    isPending,
    mutate,
  } = useMutation({
    mutationFn: userSignIn,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  const { handleSubmit, control, resetField } = useForm<IUserSignInState>({
    defaultValues: { identifier: '', password: '' },
    values: { identifier: '', password: '' },
  })

  const { errors } = useFormState({ control })

  const userSignInClick: SubmitHandler<IUserSignInState> = (data) => {
    mutate({
      identifier: data.identifier,
      password: data.password,
    })

    resetField('identifier')
    resetField('password')
  }

  const responseMessage = () => {
    if (userData?.error && userData?.error.name === 'ValidationError') {
      const notify = () => toast.error('Не правильно введены данные!')
      notify()
    }

    if (userData?.user) {
      const notify = () => toast.success('Вход выполнен успешно!')
      notify()
    }
  }

  const createCookie = () => {
    if (!userData?.jwt) return

    const config = {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
      domain: process.env.HOST ?? 'localhost',
      secure: process.env.NODE_ENV === 'production',
    }

    setCookie('jwt', userData?.jwt, config)
    setIsSignedIn(true)
    isShowCloseButton && refCloseButton.current?.click()
    router.push('/dashboard/user-edit')
  }

  useEffect(() => {
    responseMessage()
    createCookie()
  }, [userData])

  return (
    <div role='form'>
      <Controller
        control={control}
        name='identifier'
        rules={{
          required: 'Обязательное поле для заполнения!',
          minLength: {
            value: 6,
            message: `Минимум 6 символа`,
          },
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Не правильно введён email',
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <label className='form-control'>
            <div className='label'>
              <span className='label-text'>What is your email?</span>
            </div>
            <label
              className={
                !!errors.identifier?.message
                  ? 'input input-bordered flex items-center gap-2 input-error'
                  : 'input input-bordered flex items-center gap-2'
              }
            >
              <EmailSVG className='w-4 h-4 opacity-70' />
              <input
                type='text'
                className='grow'
                placeholder='Email'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            </label>
            <div className='label'>
              <span className='label-text-alt text-error'>
                {errors.identifier?.message}
              </span>
            </div>
          </label>
        )}
      />
      <Controller
        control={control}
        name='password'
        rules={{
          required: 'Обязательное поле для заполнения!',
          minLength: {
            value: 6,
            message: `Минимум 6 символа`,
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <label className='form-control'>
            <div className='label'>
              <span className='label-text'>What is your password?</span>
            </div>
            <label
              className={
                !!errors.password?.message
                  ? 'input input-bordered flex items-center gap-2 input-error'
                  : 'input input-bordered flex items-center gap-2'
              }
            >
              <KeySVG className='w-4 h-4 opacity-70' />
              <input
                type={showPassword ? 'text' : 'password'}
                className='grow'
                placeholder='Password'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
              {showPassword ? (
                <EyeViewSVG
                  onClick={() => setShowPassword(!showPassword)}
                  className='w-4 h-4 opacity-70 cursor-pointer'
                />
              ) : (
                <EyeSlashSVG
                  onClick={() => setShowPassword(!showPassword)}
                  className='w-4 h-4 opacity-70 cursor-pointer'
                />
              )}
            </label>
            <div className='label'>
              <span className='label-text-alt text-error'>
                {errors.password?.message}
              </span>
            </div>
          </label>
        )}
      />
      <div className='flex justify-between mt-4'>
        {isShowCloseButton && (
          <form method='dialog'>
            <button className='btn' ref={refCloseButton}>
              Закрыть
            </button>
          </form>
        )}
        <button
          className={
            isShowCloseButton ? 'btn join-item' : 'btn join-item mx-auto'
          }
          onClick={handleSubmit(userSignInClick)}
          disabled={isPending}
        >
          {isPending ? 'Загрузка...' : 'Войти'}
        </button>
      </div>
    </div>
  )
}

export default SignIn
