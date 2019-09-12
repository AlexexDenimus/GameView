import { writable } from 'svelte/store';

import { USER_TYPE } from './consts';

export const userType = writable('');

export function setUserType (newUserType) {
  (newUserType === USER_TYPE.user || newUserType === USER_TYPE.admin) &&
    userType.set(newUserType);
}
