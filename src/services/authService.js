import axios from 'axios';
import { errorReturnHandler } from '@/utils/services';
import { API_URL } from '@/constants/customConfigs';
const token = 'token';
/*******************************************************************************/
/*                             login Service                                   */
/*******************************************************************************/
export const loginService = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      {
        email,
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: 'success', data: response.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};
