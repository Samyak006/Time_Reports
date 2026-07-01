import api from "./api"
const onPageLoad = () =>{
    api.get("timekeepers").then((response)=>console.log(response.data))
  }
  
export default onPageLoad;
  