'use client'

import { userGet, userUpdate, userUpload } from '@/routes/user.route'
import { IUserUpdateState } from '@/interface/user.interface'
import EmailSVG from '@/public/images/svg/EmailSVG'
import UserSVG from '@/public/images/svg/UserSVG'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect } from 'react'
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form'
import { toast } from 'react-toastify'

const UserEdit = () => {
  const queryClient = useQueryClient()

  const userGetData = useQuery({
    queryKey: ['user'],
    queryFn: () => userGet(),
  })

  const userUpdateData = useMutation({
    mutationFn: userUpdate,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  const userUploadData = useMutation({
    mutationFn: userUpload,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  const { handleSubmit, control, resetField } = useForm<IUserUpdateState>({
    defaultValues: { userName: '', email: '' },
    values: {
      userName: userGetData.data?.data.username,
      email: userGetData.data?.data.email,
    },
  })

  const { errors } = useFormState({ control })

  const userUpdateClick: SubmitHandler<IUserUpdateState> = async (data) => {
    const formData = new FormData()
    formData.append('files', data.image[0])

    try {
      const responseUpload = await userUploadData.mutateAsync(formData)

      await userUpdateData.mutateAsync({
        id: userGetData.data?.data.id,
        userName: data.userName,
        email: data.email,
        image: responseUpload,
      })

      resetField('userName')
      resetField('email')
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  const responseMessage = () => {
    if (userUpdateData.data) {
      const notify = () => toast.success('Изменения выполнены успешно!')
      notify()
    }
  }

  useEffect(() => {
    responseMessage()
  }, [userUpdateData.data])

  return (
    <form onSubmit={handleSubmit(userUpdateClick)}>
      {/* <form> */}
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

      {userGetData.data?.data.image && (
        <div className='avatar'>
          <div className='w-32 rounded'>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                userGetData.data?.data.image.url
              }
              width={300}
              height={300}
              alt={userGetData.data?.data.image.alternativeText}
              aria-label={userGetData.data?.data.image.alternativeText}
              priority
            />
          </div>
        </div>
      )}

      <Controller
        control={control}
        name='image'
        rules={{
          required: 'Выберите изображение!',
        }}
        render={({ field: { value, onChange } }) => (
          <label className='form-control'>
            <div className='label'>
              <span className='label-text'>Image</span>
            </div>
            {/* <label
              className={
                !!errors.image?.message
                  ? 'input input-bordered flex items-center gap-2 input-error'
                  : 'input input-bordered flex items-center gap-2'
              }
            > */}
            <input
              type='file'
              className='file-input w-full max-w-xs'
              onChange={(event) => {
                onChange(event.target.files)
              }}
            />
            {/* </label> */}
            {/* <div className='label'>
              <span className='label-text-alt text-error'>
                {errors.image?.message}
              </span>
            </div> */}
          </label>
        )}
      />

      <div className='flex justify-between mt-4'>
        <button
          className={'btn join-item mx-auto'}
          disabled={userUpdateData.isPending}
          type='submit'
          // onClick={handleSubmit(userUpdateClick)}
        >
          {userUpdateData.isPending ? 'Загрузка...' : 'Редактировать'}
        </button>
      </div>
    </form>
  )
}

export default UserEdit
