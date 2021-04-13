
export const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
export const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
    uid: 'ABV123',
    username: 'El_papi1502'
});


const user = getUser();

// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');




