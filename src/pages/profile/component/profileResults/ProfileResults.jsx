import React,{Component} from 'react';
import "./ProfileResults.css"
class ProfileResults extends Component {
   
    render() { 
    let{
    image,
    albumName,
    profileName, 
    release_date, 
    total_tracks,
    url } = this.props;

    return ( 
            
        <figure className="figure_profile">
            <img src={image} alt={albumName}/>

            <div className="container result_container">
                <div className="figure_info1">
                    <figcaption className="figure-caption text-left">
                        <h4>{profileName}</h4>
                    </figcaption>
                    <figcaption className="figure-caption text-left">
                        { albumName}
                    </figcaption>
                </div>
                <div className="figure_info2 text-left">
                    <figcaption className="figure-caption text-left">
                        {release_date}
                    </figcaption>
                    <figcaption className="figure-caption text-left">
                        {total_tracks} tracks
                    </figcaption>       
                </div> 
            </div>

            <div className="Spotify_link text-center">
                <figcaption className="figure-caption link">
                    <a href={url}>Preview on Spotify</a>
                </figcaption>
            </div>
        </figure>
         );
    }
}
 
export default ProfileResults;