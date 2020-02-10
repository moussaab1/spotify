import React,{Component} from 'react';
import SearchComponent from "../../common/searchComponent/SearchComponent"
import ResultItem from "./component/resultItem/ResultItem"
import "./SearchResults.css"
class SearchResults extends Component {
    constructor(props) {
        super(props);
        const {searchValue,detail}=props.history.location.state
        this.state = {
          searchValue:searchValue ,
          resultValue: detail.artists.items
          
        };
        
      }
 
      SearchResults=(data,searchValue)=>{
        
        let resultValue = data.artists.items;
        this.setState({resultValue,searchValue})    

    }
    redirectToprofile =(id,name)=>{
     this.props.history.push({
         pathname: '/profile',
         state: { profileId: id,profileName:name}
       })
 
    }
   
    render() { 
        return ( 

            <div className="container">
                <div className="row">
                    <div className="search_result">
                    <SearchComponent 
                    SearchResults={this.SearchResults} 
                    value={this.state.searchValue} 
                    placeholder="Search for an artist..." 
                    url="/search"/>
                    </div>
                </div>
                <div className="row text-center">
                    {this.state.resultValue
                    
                    .map((item, i) => {
                        let {images, name, id, popularity, followers:{total} }= item;
                        return (
                            <div className="col-sm-3" key={i} onClick={()=>this.redirectToprofile(id,name)}>
                                <ResultItem 
                                    image={images.length>0?images[0].url:""} 
                                    name={name} 
                                    id={id} 
                                    followers={total} 
                                    popularity={Math.floor(popularity*5/100)}
                            />
                          </div>
                          
                          
                        );
                      })
                      }
            
                </div>
            </div>
            
            );
    }
}
 
export default SearchResults;