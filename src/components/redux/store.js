import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducer } from './reducer/auth.reducer';
import { homeVideosReducer } from './reducer/video.reducer';

import { selectedVideoReducer } from './reducer/video.reducer';
import { channelDetailsReducer } from './reducer/channel.reducer';
import { relatedVideoReducer } from './reducer/video.reducer';
const rootReducer = combineReducers({
   auth: authReducer,
   homevideo : homeVideosReducer,
   selectedVideo: selectedVideoReducer,
   channelDetails: channelDetailsReducer,
   relatedVideos: relatedVideoReducer,
})
// const reducer = initialState => initialState;
const store = createStore(
    rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
)

export default store