import React from 'react';

const VideoListItem = props => {
  // console.log(props);
  // const videoData = {
  //   title: props.videos.snippet.title,
  //   img: props.snippet.thumnail.default.url,
  //   channel: props.snippet.chanelTitle
  // };

  const dsd = props.videos.map(video => (
    <div >
      {/* {console.log(props.onVideoSelect)} */}
      <li onClick={() => props.onVideoSelect(video)}>
        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
        <div>
          <span>{video.snippet.title}</span>
          <small>{video.snippet.channelId}</small>
        </div>
      </li>
    </div>
  ))
  return (
    <>{dsd}</>
  )
}
export default VideoListItem;
