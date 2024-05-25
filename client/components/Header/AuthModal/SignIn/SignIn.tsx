'use client'

import { IUserState } from '@/interface/user.interface'
import EmailSVG from '@/public/images/svg/EmailSVG'
import KeySVG from '@/public/images/svg/KeySVG'
import UserSVG from '@/public/images/svg/UserSVG'
import { useState } from 'react'
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form'

const SignIn = () => {
  const [userProps, setUserProps] = useState<IUserState>({
    userName: '',
    email: '',
    password: '',
  })
  // const queryClient = useQueryClient()

  // const commentCreateMutation = useMutation({
  //   mutationFn: createCommentFetch,
  //   onSuccess: async () => {
  //     await queryClient.invalidateQueries({ queryKey: ['comment'] })
  //   },
  // })

  const { handleSubmit, control, resetField } = useForm<IUserState>({
    defaultValues: { userName: '', email: '', password: '' },
    values: userProps,
  })

  const { errors } = useFormState({ control })

  const loginUser: SubmitHandler<IUserState> = (data) => {
    // commentCreateMutation.mutate({
    //   name: data.name,
    //   description: data.description,
    // })

    console.log('data', data)

    resetField('userName')
    resetField('email')
    resetField('password')
  }
  return (
    <div role='form'>
      <Controller
        control={control}
        name='userName'
        rules={{ required: 'Заполните поле!' }}
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
          required: 'Заполните поле!',
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
          required: 'Заполните поле!',
          minLength: {
            value: 3,
            message: `Минимум 3 символа`,
          },
          maxLength: {
            value: 15,
            message: `Максимум 15 символов`,
          },
          pattern: {
            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
            message:
              'Минимум одна заглавная буква, одна строчная буква, одна цифра и один специальный символ',
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
                type='password'
                className='grow'
                placeholder='Password'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
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
          <button className='btn'>Close</button>
        </form>
        <button className='btn join-item' onClick={handleSubmit(loginUser)}>
          Войти
        </button>
      </div>
    </div>
  )
}

export default SignIn
