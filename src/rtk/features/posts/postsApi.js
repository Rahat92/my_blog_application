import createRequest from "../../axios"

const getPosts = async(id) => {
    let response = await createRequest.get(`/`)
    // if(id){
    //     response = await createRequest.get(`/${id}`)
    // }
    // if(tags){
    //     const params = URLSearchParams({})
    //     console.log(params)
    // }
    
    return response.data
}
export default getPosts;