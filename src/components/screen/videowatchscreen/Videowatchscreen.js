import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './_videowatchscreen.scss';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import SaveIcon from '@material-ui/icons/Save';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import ShowMoreText from 'react-show-more-text';
import {getChannelDetails,checkSubscriptionStatus} from '../../action/channel.action';
import Videoplayersidebar from '../../videoplayersidebar/Videoplayersidebar';

function Videowatchscreen({ snippet , statistics, videoId}) {
    const history = useHistory();
    const accessToken = useSelector(state => state.auth.accessToken);
    useEffect(() => {
      if(!accessToken){
          history.push('/');
      }
    }, [])
    
    const { channelId, channelTitle, description, title, publishedAt } = snippet;
    const { viewCount, likeCount, dislikeCount } = statistics;
 
    const dispatch = useDispatch()
 
    const {
       snippet: channelSnippet,
       statistics: channelStatistics,
    } = useSelector(state => state.channelDetails.channel)
 
    const subscriptionStatus = useSelector(
       state => state.channelDetails.subscriptionStatus
    )
    useEffect(() => {
       dispatch(getChannelDetails(channelId))
       dispatch(checkSubscriptionStatus(channelId));
    }, [dispatch, channelId])

    return (
        <div className="videowatchscreen">
            <div className="videoscreen_and_content__wrapper">
                <div className="videoscreen">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        frameBorder='0'
                        title="title"
                        allowFullScreen
                        width='100%'
                        height='100%'>
                    </iframe>
                </div>
                <div className="channel_content_and_snippet">
                    <div className="videotitle">
                        {title}
                    </div>
                    <div className="viewcount_publish_like_and_Share_content">
                        <div className="view_publishAt">
                            <p><span>{numeral(viewCount).format('0.a')} Views •{' '}</span><span>{moment(publishedAt).fromNow()}</span></p>
                        </div>
                        <div className="like_unlike_share">
                            <ThumbUpAltIcon /><span>{numeral(likeCount).format('0.a')}</span>
                            <ThumbDownIcon /><span>{numeral(dislikeCount).format('0.a')}</span>
                            <ShareIcon /><span>Share</span>
                            <SaveIcon /><span>Save</span>
                            <MoreHorizIcon />
                        </div>
                    </div>
                    <div className="channel_name_and_subscribe">
                        <div className="channel_name_and_icon">
                            <img src={channelSnippet?.thumbnails?.default?.url} alt="channel_icon" />
                            <div className="channel_name_and_Noof_subscriber">
                                <span>{channelTitle}</span>
                                <span className="noof_subscriber">1.96K subscribers</span>
                            </div>
                        </div>
                        <div className="join_subscribe">
                            <a className="join">JOIN</a>
                            <a className="subscribe">
                            {' '}
                     {numeral(channelStatistics?.subscriberCount).format(
                        '0.a'
                     )}{' '}
                     Subscribers
                            </a>
                        </div>
                    </div>
                    <div className="description">
                    <ShowMoreText
                        lines={2}
                        more='SHOW MORE'
                        less='SHOW LESS'
                        anchorClass='showMore'
                        expanded={false}>
                        {description}
                    </ShowMoreText>
                    </div>
                </div>
            </div>
            <div className="extravideo">
                 <Videoplayersidebar />
            </div>
        </div>
    )
}

export default Videowatchscreen
