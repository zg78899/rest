import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = props=>{
  const {videoId} = props;
  console.log(props);
  
  if(!videoId) return null;
  // console.log(videoId);
  
  const url=`https://youtube.com/embed/${videoId.id.videoId}`;
  return(
    <div>
      <div>
      <iframe src={url} title={props.videoId.snippet.title}/>
      <h4>{props.videoId.snippet.title}</h4>
      <small>{props.videoId.snippet.channelTitle}</small>
      <br/>
      <small>{props.videoId.snippet.description}</small>

      </div>
     
    </div>
  )

}
export default VideoPlayer;