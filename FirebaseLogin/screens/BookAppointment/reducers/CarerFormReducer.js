import {
  CARER_UPDATE,
  CARER_CREATE,
  CARER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  address: '',
  type: '',
  note: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CARER_CREATE:
      return INITIAL_STATE;
    case CARER_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
