import Cookies from 'js-cookie';
import axios from 'axios';
import { API_URL } from '@/constants/customConfigs';
export const isAuthenticatd = async () => {
  // implement your logic here
  const token = Cookies.get('token');
  try {
    const response = await axios.get(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return true;
  } catch (error) {
    return false;
  }
};
