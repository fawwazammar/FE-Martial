import BaseService from './baseService';
import API from '../config/rest';

const getAllDoctors = (_id, name) => {
  return BaseService.get(API.DOCTOR, { _id, name });
};

export default { getAllDoctors };
