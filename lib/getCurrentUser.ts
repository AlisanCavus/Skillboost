import api from './axiosInst';

interface Session {
    user: {
      token: string;
    };
  }
const getCurrentUser = (session:Session) => {
    if (session) {
      api.get('/current/user', {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  
 export default getCurrentUser;