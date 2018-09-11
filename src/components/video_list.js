import React from 'react';
import VideListItem from './video_list_item';

const VideoList =(props)=>{

  const videItems = props.videos.map((video)=>{
      
      return <VideListItem 
      onVideoSelect={props.onVideoSelect}
         key={video.etg} video={video}/>
  })

    return(
        <ul className="col-md-4  list-group">
           {videItems}
        </ul>
    )
}

export default VideoList; 