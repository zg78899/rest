import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {signOut} from '../lib/api';
import Cookies from 'js-cookie';
import {useAuthed} from '../lib/hooks';


const SignOut = (props) => {
  const session=useAuthed();
  signOut(session);
  Cookies.remove('session');
  props.history.push('/');
    return (
      <>
     
      </>
    )
  }
export default SignOut;

