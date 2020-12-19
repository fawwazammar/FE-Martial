import BaseService from './baseService';
import API from '../config/rest';

const getDrug = (_id) => {
  return BaseService.get(API.DRUG, { _id });
};

const getAllDrugs = (_id, name) => {
  return BaseService.get(API.DRUG, { _id, name });
};

const postDrug = (name) => {
  return BaseService.post(API.DRUG, { name });
};

export default { getDrug, getAllDrugs, postDrug };
