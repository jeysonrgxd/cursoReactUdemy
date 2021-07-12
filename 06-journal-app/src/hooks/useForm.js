import { useState } from 'react';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    // para resetear correctamente el estado y no tener bucles dentro de un useeffect, ya que estamos trabajando con redux es nesesario establecer un objeto que reinicia
    // cuando este reset es llamado puedo establecerle los valores al estado nuevamente
    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }


    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange, reset];

}