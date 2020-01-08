import {useState} from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export const useAuthed=()=>{
  const [authed,useAthed]=useState(()=>{
    try{
      const session = Cookies.get('session');
      const key = process.env.REACT_APP_JWT_KEY;
      const res = jwt.verify(session,key);
      return res;
    }catch(e){
      return false;
    }
  });
  return [authed];
}
