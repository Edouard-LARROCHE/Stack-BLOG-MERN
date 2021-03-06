import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FollowUser from './FollowUser';
import GetUserPosts from './GetUserPosts';

const GetUsers = () => {
  const usersData = useSelector((state) => state.users);
  const userData = useSelector((state) => state.user);
  const [followId, setFollowId] = useState([]);

  useEffect(() => {
    let array = [];
    usersData.map((users) => {
      if (users._id !== userData._id) return array.push(users._id);
      return setFollowId(array);
    });
  }, [userData._id, usersData]);

  return (
    <div>
      {followId &&
        followId.map((user) => {
          for (let i = 0; i < usersData.length; i++) {
            if (user === usersData[i]._id) {
              return (
                <div key={user}>
                  <img
                    src={usersData[i].pictureUrl ? usersData[i].pictureUrl : '/assets/ICONS/avatar-default.png'}
                    alt={usersData[i].pseudo}
                    style={{ width: '25px' }}
                  />
                  <p> {usersData[i].pseudo} </p>
                  <FollowUser followId={usersData[i]._id} />
                  <GetUserPosts usersDataId={usersData[i]._id} />
                </div>
              );
            }
          }
          return null;
        })}
    </div>
  );
};

export default GetUsers;
