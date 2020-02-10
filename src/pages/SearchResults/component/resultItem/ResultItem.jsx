import React,{Component} from 'react';
import "./ResultItem.css"
class SearchResults extends Component {
   
    render() { 
        const{image,
            name,
            id, 
            followers, 
            popularity,}=this.props;   
        return ( 
            
                 <figure className="figure_result" >
                        <img src={image} alt={name}/>
                    <div className="container result_container">
                        <div className="figure_info">
                            <figcaption className="figure-caption text-left">{name}</figcaption>
                            <figcaption className="figure-caption text-left">{followers} followers</figcaption>
                            
                        </div>
                        <div className="star-rating text-left">
                            {Array.apply(null, Array(popularity)).map(
                                (item,i)=><span key={i} className="fa fa-star"   data-rating="1"></span>)}
                        
                    </div>
                    </div>
                </figure>
            

            
         );
    }
}
 
export default SearchResults;