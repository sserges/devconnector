import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current user profile
export const getCurrentUserProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      // payload: { msg: error.response.statusText, status: error.response.status }
      payload: { msg: error.response.data.msg, status: error.response.status }
    });
  }
};
