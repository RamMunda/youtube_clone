import React, { useEffect, useState } from 'react'
import '../video/_video.scss';
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router';
const Video = (props) =>{

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)
 
    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')
    const _videoId = props.data.id?.videoId || props.data.id;
    const channelId = props.data.channelId;

    const history = useHistory();
    useEffect(() => {
       const get_video_details = async () => {
          const {
             data: { items },
          } = await request('/videos', {
             params: {
                part: 'contentDetails,statistics',
                id: _videoId,
             },
          })
          setDuration(items[0].contentDetails.duration)
          setViews(items[0].statistics.viewCount)
       }
       get_video_details()
    }, [_videoId])
 
    useEffect(() => {
       const get_channel_icon = async () => {
          const {
             data: { items },
          } = await request('/channels', {
             params: {
                part: 'snippet',
                id: channelId,
             },
          })
          setChannelIcon(items[0].snippet.thumbnails.default)
       }
       get_channel_icon()
    }, [channelId])

    const onclickHandler = id =>{
       history.push(`/watch/${id}`);
    }
    return (
        <div className="video" onClick={ ()=>{onclickHandler(_videoId)}}>
            <div className="image_content">
                {/* <img className="image1" src={props.data.thumnailImage} alt="tour" /> */}
                <LazyLoadImage src={props.data.thumnailImage} effect='blur' />
                <span className="video_duration">{_duration}</span>
            </div>
            <div className="channelandcontent">
                <div className="channelicon">
                    <LazyLoadImage src={channelIcon?.url} effect='blur' />
                    {/* <img src={channelIcon?.url} alt=""/> */}
                </div>
                <div className="channelcontent">
                    <h3>{String(props.data.title).substring(0,50)}{String(props.data.title).length>=20 && <span> . . . .</span>}</h3>
                    <h4>{props.data.channelName}</h4>
                    <h4><span>{numeral(views).format('0.a')} Views •</span><span>{moment(props.data.publish_time).fromNow()}</span></h4>
                </div>
            </div>
            
        </div>
    )
}
export default Video;
