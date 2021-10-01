import { combineReducers } from "redux";
import basketReducer from './basketReducer';
import googleReducer from "./googleReducer";
import newsReducer from "./newsReducer";
import { forumReducer } from './forumReducer'

export default combineReducers({
    basket: basketReducer,
    google: googleReducer,
    news: newsReducer,
    forum: forumReducer
});