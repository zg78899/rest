import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {ADD_STAR} from './mutation';

const AddStar=({id})=>{
  const [addStar,{ loading,error }]=useMutation(ADD_STAR);
  return (
    <div>
      <button onClick={()=>{
            addStar({
              variables:{
                repoid:id
              }
            })
      }}>
        {loading && <>loading</>}
        {error &&<p>error.message</p>}
      </button>
    </div>
  )
}
export default AddStar;

