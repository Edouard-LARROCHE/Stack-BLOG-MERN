import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    getPostsData: (state, action) => {
      return action.payload;
    },
    likePostData: (state, action) => {
      return state.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            likers: [action.payload.userId, ...post.likers],
          };
        }
        return post;
      });
    },
    unLikePostData: (state, action) => {
      return state.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            likers: post.likers.filter((id) => id !== action.payload.userId),
          };
        }
        return post;
      });
    },
  },
});

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
    dispatch(getPostsData(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const likePost = (postId, userId) => (dispatch) => {
  axios({
    method: 'patch',
    url: `${process.env.REACT_APP_API}/posts/like-post/` + postId,
    data: { id: userId },
  })
    .then(() => {
      dispatch(likePostData({ userId, postId }));
    })
    .catch((err) => console.log(err));
};

export const unLikePost = (postId, userId) => (dispatch) => {
  axios({
    method: 'patch',
    url: `${process.env.REACT_APP_API}/posts/unlike-post/` + postId,
    data: { id: userId },
  })
    .then(() => {
      dispatch(unLikePostData({ userId, postId }));
    })
    .catch((err) => console.log(err));
};

export const { getPostsData, likePostData, unLikePostData } = postsSlice.actions;
export default postsSlice.reducer;
