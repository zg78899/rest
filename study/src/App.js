import React, { Component } from 'react';
import './App.css';
import {debounce} from 'lodash';
import axios from 'axios';
import uuid from 'uuid';
import InfiniteScroll from 'react-infinite-scroller';
import Nav from './Component/Nav/Nav';
import SearchBar from './Component/SearchBar/SearchBar'
import {spinner} from './Component/images';
import VideoList from './Component/VideoList/VideoList';
import VideoListItem from './Component/VideoListItem/VideoListItem';
import VideoPlayer from './Component/VideoPlayer/VideoPlayer';
// import VideoPlayer from './Component/VideoPlayer/VideoPlayer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      query: '',
      nextPageToken: null
    }
    // Object.getOwnPropertyNames(App.prototype).forEach(key => this[key] = this[key].bind(this));
    this.getYouTubeData = this.getYouTubeData.bind(this);
    this.defaultState = this.state;
  }

  async getYouTubeData(query) {  
    if (!query) return;
    if (this.state.query !== query) {
      this.setState(this.defaultState);
    }
    const { nextPageToken } = this.state;
    const params = {
      key: 'AIzaSyDFjSfrtwzoi9XHarGiQb7RB2x2UEayGIo',
      q: query,
      part: 'snippet',
      maxResults:10,
      pageToken: nextPageToken
    }
    const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search', { params });
    this.setState ({
      videos: [...this.state.videos, ...data.items],
      query,
      nextPageToken: data.nextPageToken
    },() => console.log('ab', data))
  }

  componentWillMount(){
    this.setState(this.getYouTubeData('여행'))
  }

  // setSelectVideo(id) {
  //   this.setState({selectedVideo : id});
  // }

  render() {
    const {selectedVideo}=this.state;
    return (
      <div className="App">
        <Nav>
          <SearchBar onSearchVideo={debounce(this.getYouTubeData,500)}/>
        </Nav>
        <InfiniteScroll
        // loadMore={()=>this.getYouTubeData(this.state.query)}
        hasMore={!!this.state.nextPageToken && !this.state.selectedVideo}
        loader={
          <div key={uuid.v4()}>
            <img src={spinner} alt="loading"/>
          </div>
        }
        >
        {
        selectedVideo
        ?<VideoPlayer videoId={selectedVideo}/>
        :<VideoList 
           >
          <VideoListItem {...this.state} key={uuid.v4()} onVideoSelect={selectedVideo=>this.setState({selectedVideo})}/>
        </VideoList>
        }
        </InfiniteScroll>
      </div>
    );
  }

}

export default App;