'use client'

import { userCreate } from '@/fetch/user.fetch'
import { IUserState } from '@/interface/user.interface'
import EmailSVG from '@/public/images/svg/EmailSVG'
import EyeSlashSVG from '@/public/images/svg/EyeSlashSVG'
import EyeViewSVG from '@/public/images/svg/EyeViewSVG'
import KeySVG from '@/public/images/svg/KeySVG'
import UserSVG from '@/public/images/svg/UserSVG'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form'
import { toast } from 'react-toastify'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const queryClient = useQueryClient()
  const router = useRouter()
  const refCloseButton = useRef<any>(null)

  const userCreateMutation = useMutation({
    mutationFn: userCreate,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  const { handleSubmit, control, resetField } = useForm<IUserState>({
    defaultValues: { userName: '', email: '', password: '' },
    values: { userName: '', email: '', password: '' },
  })

  const { errors } = useFormState({ control })

  const userCreateClick: SubmitHandler<IUserState> = (data) => {
    userCreateMutation.mutate({
      userName: data.userName,
      email: data.email,
      password: data.password,
    })

    resetField('userName')
    resetField('email')
    resetField('password')
  }

  const responseMessage = () => {
    if (
      userCreateMutation.data?.error &&
      userCreateMutation.data.error.name === 'ApplicationError'
    ) {
      const notify = () =>
        toast.error('Пользователь с таким email уже существует!')
      notify()
    }

    if (
      userCreateMutation.data?.error &&
      userCreateMutation.data.error.name === 'ValidationError'
    ) {
      const notify = () => toast.error('Не правильно введены данные!')
      notify()
    }

    if (userCreateMutation.data?.user) {
      const notify = () => toast.success('Регистрация прошла успешно!')
      notify()
    }
  }

  const createCookie = () => {
    if (!userCreateMutation.data?.jwt) return

    const config = {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
      domain: process.env.HOST ?? 'localhost',
      secure: process.env.NODE_ENV === 'production',
    }

    setCookie('jwt', userCreateMutation.data?.jwt, config)

    refCloseButton.current?.click()
    router.push('/dashboard')
  }

  useEffect(() => {
    responseMessage()
    createCookie()
  }, [userCreateMutation.data])

  return (
    <div role='form'>
      <Controller
        control={control}
        name='userName'
        rules={{
          required: 'Обязательное поле для заполнения!',
          minLength: {
            value: 3,
            message: `Минимум 3 символа`,
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <label className='form-control mt-2'>
            <div className='label'>
              <span className='label-text'>What is your name?</span>
            </div>
            <label
              className={
                !!errors.userName?.message
                  ? 'input input-bordered flex items-center gap-2 input-error'
                  : 'input input-bordered flex items-center gap-2'
              }
            >
              <UserSVG className='w-4 h-4 opacity-70' />
              <input
                type='text'
                className='grow'
                placeholder='Name'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            </label>
            <div className='label'>
              <span className='label-text-alt text-error'>
                {errors.userName?.message}
              </span>
            </div>
          </label>
        )}
      />
      <Controller
        control={control}
        name='email'
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
                !!errors.email?.message
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
                {errors.email?.message}
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
        <form method='dialog'>
          <button className='btn' ref={refCloseButton}>
            Закрыть
          </button>
        </form>
        <button
          className='btn join-item'
          onClick={handleSubmit(userCreateClick)}
          disabled={userCreateMutation.isPending}
        >
          {userCreateMutation.isPending ? 'Загрузка...' : 'Регистрация'}
        </button>
      </div>
    </div>
  )
}

export default SignUp
