import React from 'react'

// en los props nos viene informacion de acuerdo al router el cual es nuestro componente que
//envuelve todo , usamos uno de esos que es history para navegar
export const LoginScreen = ({history}) => {

    const handleLogin = () =>{
        // history.push("/") // navegamos a la ruta principal "/"

        // remplazamos la ruta "/login" con la principal "/" esto es para no regresar al 
        // login una vez entrado al dashboard, esto se ve util cuando se da atras
        history.replace("/") 

    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
