import axios from 'axios';
import queryString from 'query-string';
import { AgricultureInterface, AgricultureGetQueryInterface } from 'interfaces/agriculture';
import { GetQueryInterface } from '../../interfaces';

export const getAgricultures = async (query?: AgricultureGetQueryInterface) => {
  const response = await axios.get(`/api/agricultures${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createAgriculture = async (agriculture: AgricultureInterface) => {
  const response = await axios.post('/api/agricultures', agriculture);
  return response.data;
};

export const updateAgricultureById = async (id: string, agriculture: AgricultureInterface) => {
  const response = await axios.put(`/api/agricultures/${id}`, agriculture);
  return response.data;
};

export const getAgricultureById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/agricultures/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAgricultureById = async (id: string) => {
  const response = await axios.delete(`/api/agricultures/${id}`);
  return response.data;
};
