import React , { useEffect } from 'react';
import '../sidebar/_sidebar.scss';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Login from '../action/authAction';
import store from '../redux/store';
import {connect} from 'react-redux';
// import Loginrequest from '../action/authAction';
const Sidebar = ({user}) => {
    const {dispatch} = store;
    const clickHandler = () =>{
        dispatch(Login());
    }

    useEffect(() => {
    }, [user]);
    return (
        <>
        <div className="sidebar">
            <div className="first_sidebar_menu">
                <div className="home">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="home">
                    <ExploreIcon />
                    <p>Explore</p>
                </div>
                <div className="home">
                    <SubscriptionsIcon />
                    <p>Subscriptions</p>
                </div>
                <div className="horizontal_line phonemodeDisablemenu"></div>
                <div className="home phonemodeDisablemenu">
                    <VideoLibraryIcon />
                    <p>Library</p>
                </div>
                <div className="home">
                    <HistoryIcon />
                    <p>History</p>
                </div>
                { user ? <span className="phonemodeDisablemenu"></span> : <p className="phonemodeDisablemenu">Sign in to like videos, comment, and subscribe.</p>}
                { user ? <span className="phonemodeDisablemenu"></span> : <div className="home signinAvatar phonemodeDisablemenu">
                    <AccountCircleIcon />
                    <p onClick={clickHandler}>Sign In</p>
                </div>}
                <div className="horizontal_line phonemodeDisablemenu"></div>

                <div className="home phonemodeDisablemenu">
                    <OndemandVideoIcon />
                    <p>Your video</p>
                </div>
                <div className="home phonemodeDisablemenu">
                    <WatchLaterIcon />
                    <p>Watch later</p>
                </div>
                <div className="home phonemodeDisablemenu">
                    <ThumbUpAltIcon />
                    <p>Liked video</p>
                </div>
                <div className="home phonemodeDisablemenu">
                    <MenuOpenIcon />
                    <p>Person</p>
                </div>
                <div className="home phonemodeDisablemenu">
                    <OndemandVideoIcon />
                    <p>Mix</p>
                </div>
                <div className="home phonemodeDisablemenu">
                    <MenuOpenIcon />
                    <p>School Management</p>
                </div>
                <div className="home phonemodeDisablemenu">
                    <ArrowDropUpIcon />
                    <p>Show less</p>
                </div>                
            </div>
        </div>
        </>
    )
}
// Sidebar.propTypes = {
//     user: PropTypes.object.isRequired
// };
const mapStateToProps = (state) =>({
    user:state.auth.user
});
export default connect(mapStateToProps,null)(Sidebar);