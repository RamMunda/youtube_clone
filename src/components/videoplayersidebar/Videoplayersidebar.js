import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getPopularVideos} from '../action/videoAction';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../screen/watchscreen/_watchscreen.scss';
import moment from 'moment';
import numeral from 'numeral';
const Videoplayersidebar = () =>{
    const { videos, loading } = useSelector(state => state.homevideo);
    const dispatch = useDispatch()
    console.log(videos.length);
    if(videos.length==0){
        dispatch(getPopularVideos("All"));
    }
    else{
    }
    useEffect(() => {
      console.log(videos);
    }, [])
    return (
        <>
        {videos ? 
        
        videos.map(video =>
            <div className="Videoplayersidebar" key={video.id}>
                <div className="Watchscreenvideos">
                    <div className="tumbnail_image">
                        <LazyLoadImage src={video.snippet.thumbnails.medium?.url} effect='blur' />
                        <span className="duration">6.50</span>
                    </div>
                    <div className="videoDetail">
                        <h1>{String(video.snippet.title).substring(0,60)}{String(video.snippet.title).length>=65}</h1>
                        <p><span>2M Views • </span><span>{moment(video.snippet.publishedAt).fromNow()}</span></p>
                        <div className="channeldetails">
                            <div className="chaneliconAndname">
                                {/* <LazyLoadImage src={channelIcon?.url} effect='blur' /> */}
                                <h2>{video.channelName}</h2>
                            </div>
                            {/* <p>{props.data.description}</p> */}
                        </div>
                    </div>
                </div>
            </div>

            )
        : ""}
        </>
    )
}
export default Videoplayersidebar;
