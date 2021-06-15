import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

// importamos la libreria de validacion que instalamos
import validator from 'validator'
import { removeError, setError } from '../../actions/ui'
import { useDispatch, useSelector } from 'react-redux'

export const RegisterScreen = () => {

   const dispatch = useDispatch()

   // obtnemos el stado que nos proporciona redux, nos devuelve un callback con el valor del estado
   // lo destructuramos ya que ya sabemos que devuelve con un console.log
   const { msgError } = useSelector(dataState => dataState.ui)

   const [valores, handleInputChange] = useForm({
      name: '',
      email: '',
      password: '',
      againpassword: ''
   })

   const { name, email, password, againpassword } = valores

   const handleRegister = (ev) => {
      ev.preventDefault()

      if (isFormValid()) {
         console.log("Formulario correcto")
      }

   }

   const isFormValid = () => {
      // TODO:
      if (name.trim().length === 0) {
         dispatch(setError("El nombre es requerido"))
         console.log("El nombre es requerido")
         return false;

      } else if (!validator.isEmail(email)) {

         dispatch(setError("El email no es valido"))
         console.log("El email no es valido")
         return false;

      } else if (password !== againpassword || password.length < 5) {

         dispatch(setError("La contraseñas son distintas"))
         console.log("La contraseñas son distintas")
         return false

      }
      else {
         // removemos el error
         dispatch(removeError())

         return true
      }

   }

   return (
      <>
         <h3 className="auth__title">Login</h3>
         <form onSubmit={handleRegister}>

            {
               msgError &&
               (
                  <div className="auth__alert-error">
                     {msgError}
                  </div>
               )
            }

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
               className="btn btn-primary btn-block"
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
