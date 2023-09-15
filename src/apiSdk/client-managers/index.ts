import axios from 'axios';
import queryString from 'query-string';
import { ClientManagerInterface, ClientManagerGetQueryInterface } from 'interfaces/client-manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getClientManagers = async (
  query?: ClientManagerGetQueryInterface,
): Promise<PaginatedInterface<ClientManagerInterface>> => {
  const response = await axios.get('/api/client-managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createClientManager = async (clientManager: ClientManagerInterface) => {
  const response = await axios.post('/api/client-managers', clientManager);
  return response.data;
};

export const updateClientManagerById = async (id: string, clientManager: ClientManagerInterface) => {
  const response = await axios.put(`/api/client-managers/${id}`, clientManager);
  return response.data;
};

export const getClientManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/client-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteClientManagerById = async (id: string) => {
  const response = await axios.delete(`/api/client-managers/${id}`);
  return response.data;
};
