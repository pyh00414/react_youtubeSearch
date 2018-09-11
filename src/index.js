import React,{Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideDetail from './components/video_detail';

const API_KEY = 'AIzaSyDMP-bVXtVnE_yxz6ngiikqwAVfFTZyoIY';



class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos :[],
            selectedVideo:null
        };

        this.videoSearch('legend');
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term:term}, (videos)=>{
            
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            })
        })
    }
 
    render(){
  
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},400);
        return( 

            <div> 
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}
                videos = {this.state.videos}/>
            </div>
        )
    }
}

export default App;
ReactDom.render(<App />,document.querySelector('.container'));