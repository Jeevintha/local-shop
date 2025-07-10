import {create} from 'zustand';
import {persist} from 'zustand/middleware'

const useAuthStore = create(
    persist(
    (set)=>({
        user : null,
        setUser : (user)=>{
            set({user : user})
        },

        token : null,
        setToken : (token)=>{
            set({token : token})
        },

        logout : ()=>{
            set({
                user : null,
                token : null
            });
            localStorage.removeItem("auth-storage")
        }
    }),
    { name : "auth-storage" }
    )
)

export default useAuthStore