
import axiosInstance from './axios';

/**
 * 
 * authentication
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async (payload: any) => {
  const response = await axiosInstance.post('/login', payload);
  return response.data;
};

/**
 * game type
 */
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
export const DeleteGameType = async (id: any) => {
  const response = await axiosInstance.delete('/games-type/'+id);
  return response.data;
};

/**
 * location
 */
export const GetAllLocation = async () => {
  const response = await axiosInstance.get('/locations');
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetByIdLocation = async (id: any) => {
  const response = await axiosInstance.get('/locations/'+id);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CreateLocation = async (payload: any) => {
  const response = await axiosInstance.post('/locations', payload);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateLocation = async (payload: any) => {
  const response = await axiosInstance.patch('/locations', payload);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeleteLocation = async (id: any) => {
  const response = await axiosInstance.delete('/locations/'+id);
  return response.data;
};

/**
 * admin
 */
export const GetAllUsers = async (userType: string) => {
  const response = await axiosInstance.get('/users?user_type='+userType);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetByIdUsers = async (id: any) => {
  const response = await axiosInstance.get('/users/'+id);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CreateUsers = async (payload: any) => {
  const response = await axiosInstance.post('/registration', payload);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateUsers = async (payload: any) => {
  const response = await axiosInstance.patch('/users', payload);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeleteUsers = async (id: any) => {
  const response = await axiosInstance.delete('/users/'+id);
  return response.data;
};

/**
 * Ground
 */
export const GetAllGround = async (user_id: string) => {
  const response = await axiosInstance.get('/grounds?user_id='+user_id);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetByIdGround = async (id: any) => {
  const response = await axiosInstance.get('/grounds/'+id);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CreateGround = async (payload: any) => {
  const response = await axiosInstance.post('/grounds', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateGround = async (payload: any) => {
  const response = await axiosInstance.post('/ground-update', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeleteGround = async (id: any) => {
  const response = await axiosInstance.delete('/grounds/'+id);
  return response.data;
};


/**
 * availability
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const availability = async (payload: any)  => {
  const response = await axiosInstance.post('/availability', payload);
  return response.data;
};
