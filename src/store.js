import { writable } from 'svelte/store';

export const userType = writable('user');

export function setUserType (newUserType) {
  console.log('set userType');
  (newUserType === 'user' || newUserType === 'admin') &&
    userType.set(newUserType);
}
