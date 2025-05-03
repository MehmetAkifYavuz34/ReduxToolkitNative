import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {BASE_URL} from '../../service/urls';

const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await getRequest(BASE_URL);
  console.log(response.data.results);
  return response.data.results;
});

export {getUsers};
