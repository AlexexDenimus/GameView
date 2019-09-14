import { writable } from 'svelte/store';

import { USER_TYPE } from './consts';

function getItem(name, defaultValue) {
  const expiration = JSON.parse(localStorage.getItem('expiration'));
  if (expiration && new Date(expiration) > new Date()) {
    return JSON.parse(localStorage.getItem(name)) || defaultValue;
  }
  return defaultValue;
}

function setItemLocally(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
  localStorage.setItem('expiration', JSON.stringify(new Date(new Date().getTime() + 600 * 1000)));
}

export const userType = writable(getItem('userType', ''));

export function setUserType (newUserType) {
  if (newUserType === USER_TYPE.user || newUserType === USER_TYPE.admin) {
    userType.set(newUserType);
    setItemLocally('userType', newUserType);
  }
}

export const cartItems = writable(getItem('cartItems', []));

export function removeFromCart(id) {
  cartItems.update(oldItems => {
    setItemLocally('cartItems', oldItems.filter(item => item.id !== id));
    return oldItems.filter(item => item.id !== id);
  });
}

export function addToCart(item) {
  cartItems.update(oldItems => {
    setItemLocally('cartItems', [...oldItems, item]);
    return [...oldItems, item];
  });
};

//sdsadfasfasdasdasfasfasd
