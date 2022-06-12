import React from 'react';
import YouTube from 'react-youtube';

export default function Trailer(props){
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const _onReady = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
    // console.log(this.props.id)
    return <YouTube videoId={props.id} opts={opts} onReady={_onReady} />;

} 