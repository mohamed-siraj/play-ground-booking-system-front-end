
import axiosInstance from './axios';

export const GetAllGameType = async () => {
  const response = await axiosInstance.get('/games-type');
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetByIdGameType = async (id: any) => {
  const response = await axiosInstance.get('/games-type/'+id);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CreateGameType = async (payload: any) => {
  const response = await axiosInstance.post('/games-type', payload);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateGameType = async (payload: any) => {
  const response = await axiosInstance.patch('/games-type', payload);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeleteGameType = async (payload: any) => {
  const response = await axiosInstance.delete('/games-type', payload);
  return response.data;
};