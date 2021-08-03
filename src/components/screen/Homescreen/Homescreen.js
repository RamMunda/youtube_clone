import React , { useEffect , useState } from 'react';
import Video from '../../video/Video';
import '../../video/_video.scss';
import {getPopularVideos, getVideosByCategory} from '../../action/videoAction';
import store from '../../redux/store';
import {connect} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component'

const Homescreen = ({videos}) =>{
    const {dispatch} = store;
    const menudata = ["All","Comedies","Bollywood Music","Movie musicals","Trailers","Street food","Indian cuisine","T-Series","Cricket","Conversation","Sushant Singh Rajput","Terrestrial animals","Desserts","B Praak","Music","Chill-out music","Melodies","Recently uploaded","Live"];
    
    const [isclick,setclick] = useState(false);
    const classforlist = isclick ? 'addclassinlist' : "";


    const clickHandler = (m_data) =>{
        dispatch(getVideosByCategory(m_data));
        // setclick(!isclick);
        // if(isclick){
        //     document.querySelectorAll(`li`)[i].classList.add(classforlist);
        // }
        // else{
        //     document.querySelectorAll(`li`)[i].classList.remove(classforlist);
        // }
    }

    useEffect(() => {
        dispatch(getPopularVideos());

    }, [])

    useEffect(() => {
    }, [videos])
    
    const allstatedata = store.getState();
    const activecategory = allstatedata.homevideo.activeCategory;
    const fetchData = () =>{
        if(allstatedata.homevideo.activeCategory==="All"){
            dispatch(getPopularVideos());
        }
        if(allstatedata.homevideo.activeCategory!=="All"){
            dispatch(getVideosByCategory(activecategory));
        }        
    }
    return (
        <>
        <div className="homescreen_warapper">
        <div className="homescreen_menu">
           <ul>
              {menudata.map((m_data,i) =><li onClick={()=>clickHandler(m_data)} className={classforlist} key={i}>{m_data}</li>)}
           </ul>
        </div>
        <div className="homescreen">
        <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            // loader={
            //    <div className='spinner-border text-danger d-block mx-auto'></div>
            // }
            >
             { videos ? videos.map(video=>
             <Video key={video.id} 
             data={
                 {channelId:video.snippet.channelId,
                 id:video.id,
                 thumnailImage:video.snippet.thumbnails.medium.url,
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
        </>
    )
}
const mapStateToProps = (state) =>({
    videos:state.homevideo.videos
});
export default connect(mapStateToProps,null)(Homescreen);
