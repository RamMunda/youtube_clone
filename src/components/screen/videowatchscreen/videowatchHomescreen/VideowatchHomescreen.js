import React , { useEffect } from 'react'
import Header from '../../../header/Header';
import Videowatchscreen from '../Videowatchscreen'; 
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideoById } from '../../../action/videoAction';
function VideowatchHomescreen() {

    const{id} = useParams();
    const { video, loading } = useSelector(state => state.selectedVideo);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getVideoById(id))
    }, [dispatch, id])

    return (
        <div className="VideowatchHomescreen">
            <Header />
            {video ? <Videowatchscreen snippet={video.snippet} statistics={video.statistics} videoId={id}/> : ""}
        </div>
    )
}

export default VideowatchHomescreen
