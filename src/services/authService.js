import axios from 'axios';
import Cookies from 'js-cookie';
import { errorReturnHandler } from '@/utils/services';
import { API_URL } from '@/constants/customConfigs';
/*******************************************************************************/
/*                             login Service                                   */
/*******************************************************************************/
export const loginService = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    // set token in cookies
    Cookies.set('token', response.data.token, {
      expires: 90, // 90 day
    });
    return { status: 'success', data: response.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};
/*******************************************************************************/
/*                        forget password service                              */
/*******************************************************************************/
export const forgetPasswordService = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/users/forgotPassword`, {
      email,
    });
    return { status: 'success', data: response.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};

/*******************************************************************************/
/*                        reset password service                              */
/*******************************************************************************/
export const resetPasswordService = async (otp, password, passwordConfirm) => {
  try {
    const response = await axios.patch(
      `${API_URL}/users/resetPassword/${otp}`,
      {
        password,
        passwordConfirm,
      }
    );
    return { status: 'success', data: response.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};
