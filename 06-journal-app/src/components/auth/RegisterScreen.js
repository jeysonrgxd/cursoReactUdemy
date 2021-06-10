import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

   const [valores, handleInputChange] = useForm({
      name: '',
      email: '',
      password: '',
      againpassword: ''
   })

   const { name, email, password, againpassword } = valores

   const handleRegister = (ev) => {
      ev.preventDefault()

      console.log(name, email, password, againpassword)
   }

   const isFormValid = () => {
      // TODO:
   }

   return (
      <>
         <h3 className="auth__title">Login</h3>
         <form onSubmit={handleRegister}>
            <input
               type="text"
               placeholder="Name"
               name="name"
               className="auth__input mb-5"
               autoComplete="off"
               value={name}
               onChange={handleInputChange}
            />
            <input
               type="text"
               placeholder="Email"
               name="email"
               className="auth__input mb-5"
               autoComplete="off"
               value={email}
               onChange={handleInputChange}
            />

            <input
               type="password"
               placeholder="Password"
               name="password"
               className="auth__input mb-5"
               value={password}
               onChange={handleInputChange}
            />

            <input
               type="password"
               placeholder="Repeat Password"
               name="againpassword"
               className="auth__input mb-5"
               value={againpassword}
               onChange={handleInputChange}
            />

            <button
               type="submit"
               className="btn btn-primary btn-block "
            >
               Register
            </button>

            <Link
               className="link mb-5"
               to="/auth/login">
               Create new account
            </Link>

         </form>
      </>
   )
}
