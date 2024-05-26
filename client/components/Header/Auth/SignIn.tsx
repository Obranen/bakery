'use client'

import { IUserState } from '@/interface/user.interface'
import EmailSVG from '@/public/images/svg/EmailSVG'
import EyeSlashSVG from '@/public/images/svg/EyeSlashSVG'
import EyeViewSVG from '@/public/images/svg/EyeViewSVG'
import KeySVG from '@/public/images/svg/KeySVG'
import { useState } from 'react'
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form'

type IUserSignInState = Omit<IUserState, 'userName'>

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { handleSubmit, control, resetField } = useForm<IUserSignInState>({
    defaultValues: { email: '', password: '' },
    values: { email: '', password: '' },
  })

  const { errors } = useFormState({ control })

  const loginUser: SubmitHandler<IUserState> = (data) => {
    console.log('data', data)

    resetField('email')
    resetField('password')
  }
  return (
    <div role='form'>
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
          <button className='btn'>Закрыть</button>
        </form>
        <button
          className='btn join-item'
          // onClick={handleSubmit(userCreateClick)}
          // disabled={userCreateMutation.isPending}
        >
          {/* {userCreateMutation.isPending ? 'Загрузка...' : 'Войти'} */}
          Войти
        </button>
      </div>
    </div>
  )
}

export default SignIn
