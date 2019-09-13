import { writable } from 'svelte/store';

import { USER_TYPE } from './consts';

const getUserType = () => {
  return localStorage.getItem('userType') || '';
};

const setUserTypeLocally = (newUserType) => {
  localStorage.setItem('userType', newUserType);
  localStorage.setItem('expiration', new Date(new Date().getTime() + 3600 * 1000));
};

export const userType = writable(getUserType());

export function setUserType (newUserType) {
  if (newUserType === USER_TYPE.user || newUserType === USER_TYPE.admin) {
    userType.set(newUserType);
    setUserTypeLocally(newUserType);
  }
}
