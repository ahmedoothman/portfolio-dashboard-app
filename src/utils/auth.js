import Cookies from 'js-cookie';
import axios from 'axios';
import { API_URL } from '@/constants/customConfigs';
export const isAuthenticatd = async () => {
  const token = Cookies.get('token');
  if (token === undefined) {
    return false;
  }
  // implement your logic here

  try {
    await axios.get(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// sign out
export const signOut = (navigate) => {
  Cookies.remove('token');
  navigate.push('/login');
};
