import {api}  from './axiosInst';

export const getCurrentUser = (token :string) => {
    if (token) {
      api.get('/current/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  