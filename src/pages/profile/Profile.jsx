import React,{Component} from 'react';
import SearchComponent from "../../common/searchComponent/SearchComponent"
import ProfileResults from "./component/profileResults/ProfileResults"
import Requests from "../../config/Requests";
import "./Profile.css"
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[],
          profileName:""
        };
      }
      componentWillMount(){
        if(this.props.location.state!=undefined){
            const {profileId,profileName} = this.props.location.state
            let url = `/artists/${profileId}/albums` 
            Requests.get(url).then(response => {
                let items=response.data.items
                this.setState({items,profileName})});
            }
      }
    render() { 
        let {profileName}= this.state;
        return (
            <div className="container">
            
            <div className="row">
                <div className="col-sm-12 profile_padding">
                    <h4>{profileName}</h4>
                    <h6>Albums</h6>
                </div>
                {this.state.items.map((item,i)=>{
                    let {images, name, release_date, total_tracks,external_urls:{spotify} }= item;
                    return (
                        <div className="col-sm-3" key={i}>
                            <ProfileResults
                            albumName={name}
                            image={images.length>0?images[0].url:""} 
                            profileName={ profileName} 
                            release_date={release_date} 
                            total_tracks={total_tracks}
                            url={spotify}
                            
                            />
                        </div>);
                })}
            </div>
        </div>
      
        );
    }
}
 
export default Profile;