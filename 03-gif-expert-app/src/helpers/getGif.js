export const getGif = async (categoria) => {
   const url = `http://api.giphy.com/v1/gifs/search?api_key=6SWLzp5ocE96gxC0IM5MRktqb3lMcnf6&q=${encodeURI(categoria)}&limit=10`

   const resp = await fetch(url)
   const { data } = await resp.json()

   // como data tiene un monton de informacion y nosotros queremos solo algunas, ya que este es un array de objetos entonses nos beneficiamos de eso para usar map y devolver nuestro objeto creado con lo que nosotros queremos
   const infoGif = data.map(info => {
      // de cada elemento del array que es un objeto devuelveme un objeto nuevo con los datos que solo yo quiero
      return {
         id: info.id,
         title: info.title,
         url: info.images.downsized_medium.url
      }
   })

   return infoGif
};
