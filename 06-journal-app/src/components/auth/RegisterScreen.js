import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
   return (
      <>
         <h3 className="auth__title">Login</h3>
         <form>
            <input
               type="text"
               placeholder="Email"
               name="email"
               className="auth__input mb-5"
               autoComplete="off"
            />

            <input
               type="password"
               placeholder="Password"
               name="password"
               className="auth__input mb-5"
            />

            <input
               type="password"
               placeholder="Repeat Password"
               name="againpassword"
               className="auth__input mb-5"
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
