import { writable } from 'svelte/store';

import { USER_TYPE } from './consts';

// const getUserType = () => {
//   return localStorage.getItem('userType') || '';
// };

const setUserTypeLocally = (newUserType) => {
  localStorage.setItem('userType', newUserType);
  localStorage.setItem('expiration', new Date(new Date().getTime() + 3600 * 1000));
};

function getItem(name, defaultValue) {
  const expiration = JSON.parse(localStorage.getItem('expiration'));
  if (expiration && new Date(expiration) > new Date()) {
    return JSON.parse(localStorage.getItem(name)) || defaultValue;
  }
  return defaultValue;
}

function setItemLocally(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
  localStorage.setItem('expiration', JSON.stringify(new Date(new Date().getTime() + 60 * 1000)));
}

export const userType = writable(getItem('userType', ''));

export function setUserType (newUserType) {
  if (newUserType === USER_TYPE.user || newUserType === USER_TYPE.admin) {
    userType.set(newUserType);
    setItemLocally('userType', newUserType);
  }
}

export const cartItems = writable(getItem('cartItems', []));

export function addToCart(item) {
  cartItems.update(oldItems => {
    return [...oldItems, item];
  });
}

export function removeFromCart(title) {
  cartItems.update(oldItems => {
    return oldItems.filter(item => item.title !== title);
  });
}
