// como sera largo el guardado en cloud bynari usamos este helpers
export const fileUpload = async (file) => {

   const formData = new FormData()

   formData.append("upload_preset", "react-journal")
   formData.append("file", file)

   try {
      const resp = await fetch("https://api.cloudinary.com/v1_1/jeysonrgxd/upload", {
         method: "POST",
         body: formData
      })

      if (resp.ok) {
         const cloudResp = await resp.json()

         return cloudResp

      }
      else {
         throw await resp.json()
      }
   } catch (error) {
      throw error
   }
}