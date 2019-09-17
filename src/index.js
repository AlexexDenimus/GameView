import App from './App.svelte';
import io from 'socket.io-client';

import './index.css';

const socket = io('http://localhost:3000');
console.log(socket);

export const app = new App({
  target: document.body,
});
