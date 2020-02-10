import React,{Component} from 'react';
import Requests from "../../config/Requests";
class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search:this.props.value,
            result:[]
        };
      }

    onChange=(e)=>{
        const { name, value } = e.target;
        console.log({ name, value });
        this.setState({ [name]: value });
        console.log(this.state);
      }

    onSearchClick=()=>{
        let{url} = this.props
        let{search}=this.state;
        if(search!=null){
            let args=`?q=${search}&type=artist`;
            Requests.get(`${url}${args}`).then(response => {
               // console.log(response.data);
                this.props.SearchResults(response.data,search);
        });
      }
    }
    _handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        this.onSearchClick();
      }
    }

    render() { 
      let{placeholder} = this.props
      const {search}=this.state;
        return ( 
        <div className="input-group">
            <input className="form-control py-2 border-right-0 border"onKeyDown={this._handleKeyDown} placeholder={placeholder} type="search" value={search} id="example-search-input" name="search" onChange={this.onChange}/>
            <span className="input-group-append">
                <button className="btn btn-outline-secondary border-left-0 border" onClick={this.onSearchClick} type="button">
                    <i className="fa fa-search"></i>
                </button>
              </span>
        </div>
        );
    }
}
 
export default SearchComponent;