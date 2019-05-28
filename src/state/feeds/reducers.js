import { GET_FEEDS_SUCCESS, GET_FEEDS_FAILURE } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_FEEDS_SUCCESS:
      return {
        ...state,
        followersFeeds: action.payload.followersFeeds,
        newArticleFeeds: action.payload.newArticleFeeds,
        mostReadArticleFeeds: action.payload.mostReadArticleFeeds,
        isFeedsLoading: false,
      };
    case GET_FEEDS_FAILURE:
      return {
        ...state,
        followersFeeds: [],
        newArticleFeeds: [],
        mostReadArticleFeeds: [],
        error: action.payload
      };
    default:
      return state;
  }
};
