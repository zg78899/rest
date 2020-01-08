import axios from 'axios';


export const signUp = async ({ username, password1: password }) => {
  const { data } = await axios.post('http://localhost:3000/api/signup', {
    username,
    password
  })
  return data;
}
export const signIn = async ({ username, password }) => {
  const { data } = await axios.post('http://localhost:3000/api/signin', {
    username,
    password
  })
  return data;
}
export const user= async (session )=> {
  const headers={
    'Authorization' :`jwt ${session}`
  }
  const {data}=await axios.get('http://localhost:3000/api/user',{headers})
  return data
}
export const signOut=async (session)=>{
  const headers={
    'Authorization':`jwt ${session}`
  };
  const {data}=await axios.get('http://localhost:3000/api/user',{headers})
  return data;
}

