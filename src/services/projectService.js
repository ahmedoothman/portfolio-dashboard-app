import axios from 'axios';
import Cookies from 'js-cookie';
import { errorReturnHandler } from '@/utils/services';
import { API_URL } from '@/constants/customConfigs';
/*******************************************************************************/
/*                             add project                                   */
/*******************************************************************************/
export const addProjectService = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/projects`, data, {
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
/*                             get projects                                   */
/*******************************************************************************/
export const getProjectsService = async (searchQuery) => {
  console.log(searchQuery);
  try {
    const response = await axios.get(`${API_URL}/projects`, {
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
/*                             get project                                   */
/*******************************************************************************/
export const getProjectService = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/projects/${id}`, {
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
/*                             update project                                   */
/*******************************************************************************/
export const updateProjectService = async (id, data) => {
  try {
    const response = await axios.patch(`${API_URL}/projects/${id}`, data, {
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
/*                             delete project                                   */
/*******************************************************************************/
export const deleteProjectService = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    return { status: 'success', data: response.data.data };
  } catch (error) {
    return errorReturnHandler(error);
  }
};
