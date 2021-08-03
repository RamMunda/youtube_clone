import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import Watchscreenvideos from './watchscreenvideos/Watchscreenvideos';
import './_watchscreen.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import store from '../../redux/store';
import { connect } from 'react-redux';
import {getPopularVideos, getVideosByCategory} from '../../action/videoAction';

const  Watchscreen = ({videos}) =>{
    const {dispatch} = store;
    const allstatedata = store.getState();
    const activecategory = allstatedata.homevideo.activeCategory;

    const history = useHistory();  
    const accessToken = useSelector(state => state.auth.accessToken);
    useEffect(() => {
      if(!accessToken){
          history.push('/');
      }
    }, [])

    const fetchData = () =>{

        if(allstatedata.homevideo.activeCategory==="All"){
            dispatch(getPopularVideos());
        }
        if(allstatedata.homevideo.activeCategory!=="All"){
            dispatch(getVideosByCategory(activecategory));
        }        
    }
    
    return (
        <div className="watchscreen">
            <Sidebar />
            <div className="watchscreen_wrapper homescreen_warapper">
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    // loader={
                    //    <div className='spinner-border text-danger d-block mx-auto'></div>
                    // }
                    >
                    { videos ? videos.map(video=>
                    <Watchscreenvideos key={video.id} 
                    data={
                        {channelId:video.snippet.channelId,
                        id:video.id,
                        thumnailImage:video.snippet.thumbnails.medium.url,
                        description:video.snippet.description,
                        channelName:video.snippet.channelTitle,
                        channelIcon:video.snippet.thumbnails.default.url,
                        title:video.snippet.title,
                        statistics:video.statistics,
                        views:video.statistics?.viewCount || 12356665,
                        publish_time:video.snippet.publishedAt}
                        }/>) : <span></span>}
                </InfiniteScroll>
            </div>

        </div>
    )
}
const mapStateToProps = (state) =>({
    videos:state.homevideo.videos
});
export default connect(mapStateToProps)(Watchscreen);
