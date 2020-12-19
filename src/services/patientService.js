import BaseService from './baseService';
import API from '../config/rest';

const getAllPatients = (_id, name, sex) => {
  return BaseService.get(API.PATIENT, { _id, name, sex });
};

export default { getAllPatients };
