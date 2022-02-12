/* eslint react/prop-types: 0 */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function SignIn ({ logIn }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const onSubmit = (data) => {
    logIn(data)
    navigate('home')
  }
  return (
    <div className='container mt-5'>
    <h2 className=''>Inicia Sesión</h2>
    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Direccion de correo</label>
        <span className='text-danger text-small d-block mb-2'>
        {errors.email?.type === 'required' && 'Ingrese el email'}
        </span>
        <input
        type="email"
        className="form-control w-75"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Email"
        {...register('email', { required: true, message: 'Debe ingresar el correo' })}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1">Contraseña</label>
        <span className='text-danger text-small d-block mb-2'>
        {errors.password?.type === 'required' && 'Ingrese la contraseña'}
        </span>
        <input
        type="password"
        className="form-control w-75"
        id="exampleInputPassword1"
        placeholder="Contraseña"
        {...register('password', { required: true, message: 'Debe ingresar la contraseña' })}
        />
      </div>
      <button className="btn btn-primary mt-3">Enviar</button>
    </form>
    </div>
  )
}

export default SignIn
