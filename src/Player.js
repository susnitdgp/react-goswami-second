import React , {Component} from "react";

class Player extends Component{

  constructor(props){
    super(props)

  }

  componentDidMount(){
    
    const myOptions = {
        "nativeControlsForTouch": false,
        controls: true,
        autoplay: true,
        width: "400",
        height: "200",
      }
      let myPlayer = amp("azuremediaplayer", myOptions);
      myPlayer.src([
              {
                      "src": "//amssamples.streaming.mediaservices.windows.net/3b970ae0-39d5-44bd-b3a3-3136143d6435/AzureMediaServicesPromo.ism/manifest",
                      "type": "application/vnd.ms-sstr+xml"
              }
      ]);

  }

  render(){
  return (
    <div>

    <video id="azuremediaplayer" class="azuremediaplayer amp-default-skin amp-big-play-centered" tabindex="0">
    </video>
    </div>


    )
  }

}

export default Player