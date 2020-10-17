import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';

//OVER-FETCHING ISSUE - SOLUTION 1
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, 'userId'));

  //option 1 - await
  await Promise.all(
    userIds.map(async (userId) => {
      await dispatch(fetchUser(userId));
    })
  );

  //options2:awaiting is optional
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  //option 3: lodash chain but without waiting
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach((id) => dispatch(fetchUser(id)))
  //   .value(); //exec
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};

//OVER-FETCHING ISSUE - SOLUTION 2: LODASH - MOMOIZE
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// });
