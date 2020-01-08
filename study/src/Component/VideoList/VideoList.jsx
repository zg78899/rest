import React from 'react';
const VideoList= props =>{
  
  console.log(props);
  return (
    <div>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}
export default VideoList;