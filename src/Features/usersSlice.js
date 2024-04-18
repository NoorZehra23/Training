import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [
    ]
}


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
        registerUser: (state, action) => {   
            const indexEmail = state.users.findIndex((item) => item?.email === action.payload?.email);
            if (indexEmail >= 0) {
                alert('Email already in use ')
            } else {
            let {name, email, password}=action.payload
            let user ={
                id:nanoid(),
                name:name,
                email:email,
                password:password,
                islogged:false,
            }
            state.users.push(user)   
            }
        },


        loginUser: (state, action) => {
            const userExists = state.users.some((user) => user.email === action.email);        
            if (userExists) {
                if (userExists.password===action.password)
            {
                const{id,email, password}=userExists
                state.users.push({id,email,password,islogged:true})
            }    
          else{
            alert("Invalid Password")
          }
        }
        else{
            alert('No record exists')
        }
},



}
})

export const { registerUser, loginUser } = usersSlice.actions
export default usersSlice.reducer