import React,{Component} from 'react';
import SearchComponent from "../../common/searchComponent/SearchComponent"
import "./SearchPage.css"
import SearchResults from '../SearchResults/component/resultItem/ResultItem';
class SearchPage extends Component {
    SearchResults=(data,searchValue)=>{
        console.log(this.props,"the data is ",data)
             this.props.history.push({
                pathname: '/search-results',
                state: { detail: data,searchValue:searchValue }
              })
            // console.log(this.state);
         

    }
    render() { 

        
        return ( 
        <div className="search_page">
            <SearchComponent 
            SearchResults={this.SearchResults} 
            value="" 
            placeholder="Search for an artist..." 
            url="/search"/>
        </div> );
    }
}
 
export default SearchPage;