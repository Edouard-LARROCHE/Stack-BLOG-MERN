import React, { useEffect, useState } from 'react';
import { UidContext } from './AppContext';
import axios from 'axios';
// REDUX
import FormPost from './components/post/FormPost';
import GetPost from './components/post/GetPost';
import { useDispatch } from 'react-redux';
import { getUserData } from './feature-redux/user.slice';

const App = () => {
  const dispatch = useDispatch();
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchToken();

    if (uid) dispatch(getUserData(uid));
  }, [dispatch, uid]);

  return (
    <UidContext.Provider value={uid}>
      <div>
        <FormPost />
        <GetPost />
      </div>
    </UidContext.Provider>
  );
};

export default App;
