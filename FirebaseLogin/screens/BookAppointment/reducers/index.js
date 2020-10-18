import { combineReducers } from 'redux';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import CarerFormReducer from './CarerFormReducer';
import CarerReducer from './CarerReducer';

export default combineReducers({
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer,
  carers: CarerReducer,
  carerForm: CarerFormReducer
});
