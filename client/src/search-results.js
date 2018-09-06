import React, {Component} from 'react';
// import './search-results.css';
import Footer from './components/footer';
import Nav from './components/nav-bar.js';
// import SearchBar from './components/search-bar';
// import Trends from './components/trends';
import SearchResults from './components/search-result.js';
// import {withRouter} from 'react-router-dom';
// import { browserHistory } from 'react-router';
import './search-results.css';
import axios from 'axios'


// const API_KEY = '56f0450d2729d1d9861d643496069047'


class SearchResult extends Component {

    constructor(){
        super();
   this.state = {
        place: []
    }
}


// Hanle our search feature functionality

handleChange = (e) => {
    axios.get(`https://chota1.herokuapp.com/place/search/${e.target.value}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                place: res.data
            })
        })
}




    render() {
       
        return(
            <div className='wrapper'>
            <Nav/>
            <div>
            <input type="text" className='searchBar' name='recipeName' onChange={this.handleChange}  placeholder='Search...'/>
                {/* <img src={search} alt='image' className='search-icon'/> */}
            </div>
                
            <div className='detail-body'>
                <div className='body-div'>
                    {/* <div className='Search-term'> trap House</div>
                    <div className='Search-term'> enugu </div> */}
                    <SearchResults items={this.state.place} place={this.state.place}/>
                </div>
            </div>
           <Footer/>
        </div>
        )
    }
}



export default SearchResult