import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../../feature-redux/user.slice';
import { getUsers } from '../../feature-redux/users.slice';

const FollowUser = ({ followId }) => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userData._id, followId));
    dispatch(getUsers(userData._id));
  };
  return (
    <div>
      <button onClick={handleFollow}>FOLLOW</button>
    </div>
  );
};

export default FollowUser;