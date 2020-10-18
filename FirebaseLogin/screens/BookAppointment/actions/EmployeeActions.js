import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  CARER_UPDATE,
  CARER_CREATE,
  CARER_FETCH_SUCCESS,
  CARER_SAVE_SUCCESS,

} from './types';

export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  });

export const employeeCreate = ({ name, phone, appointment, date, note, local }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/book_appointment`)
      .push({ name, phone, appointment, date, note, local })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        alert('Created succesfully');
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/book_appointment`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, appointment, date, note, local, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/book_appointment/${uid}`)
      .set({ name, phone, appointment, date, note, local })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        alert('Created succesfully');
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/book_appointment/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
        alert('Created succesfully');

      });
  };
};


//CARER BOOKING

export const carerUpdate = ({ prop, value }) => ({
    type: CARER_UPDATE,
    payload: { prop, value }
  });

export const carerCreate = ({ name, phone, address, type, note }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/book_carer`)
      .push({ name, phone, address, type, note })
      .then(() => {
        dispatch({ type: CARER_CREATE });
        alert('Created succesfully');

        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const carerFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/book_carer`)
      .on('value', snapshot => {
        dispatch({ type: CARER_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const carerSave = ({ name, phone, address, type, note, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/book_carer/${uid}`)
      .set({ name, phone, address, type, note, })
      .then(() => {
        dispatch({ type: CARER_SAVE_SUCCESS });
        alert('Created succesfully');
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const carerDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/book_carer/${uid}`)
      .remove()
      .then(() => {
        alert('Created succesfully');
        Actions.employeeList({ type: 'reset' });
      });
  };
};
