import axios from 'axios';
import { FilterData } from '../components/filter';

const baseURL = 'http://localhost:8080';

export const makeRquest = axios.create({
  baseURL
});

export const buildFilterParams = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    storeId: filterData?.stores?.id,
    ...extraParams
  };
};
