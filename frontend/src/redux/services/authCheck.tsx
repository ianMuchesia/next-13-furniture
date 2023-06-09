import { AppDispatch } from "../store"

import { setIsAuthenticated, setisNotAuthenticated } from "../features/authSlice"
import axios from "axios"




const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {
            const {data} = await axios.get(`http://localhost:4000/api/v1/auth/showMe`, {withCredentials: true})
        
            if(data.success){
                const {name , userId , role} = data.user
                dispatch(setIsAuthenticated({
                    name,
                    userId,
                    role
                }))
                
            }
            

        } catch (error) {
            dispatch(setisNotAuthenticated())
        }
    }
}


export default checkAuthentication