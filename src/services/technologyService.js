import axios from 'axios';
import Cookies from 'js-cookie';
import { errorReturnHandler } from '@/utils/services';
import { API_URL } from '@/constants/customConfigs';

/*******************************************************************************/
/*                             add technology                                   */
/*******************************************************************************/
export const addTechnologyService = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/techs`, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    return { status: 'success', data: response.data.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};
/*******************************************************************************/
/*                             get technologies                                   */
/*******************************************************************************/
export const getTechnologiesService = async (searchQuery) => {
  console.log(searchQuery);
  try {
    const response = await axios.get(`${API_URL}/techs`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    return { status: 'success', data: response.data.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};

/*******************************************************************************/
/*                             get technology                                   */
/*******************************************************************************/
export const getTechnologyService = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    return { status: 'success', data: response.data.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};

/*******************************************************************************/
/*                             update technology                                   */
/*******************************************************************************/
export const updateTechnologyService = async (id, data) => {
  try {
    const response = await axios.patch(`${API_URL}/techs/${id}`, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    return { status: 'success', data: response.data.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};

/*******************************************************************************/
/*                             delete technology                               */
/*******************************************************************************/
export const deleteTechnologyService = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    return { status: 'success', data: response.data.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};
