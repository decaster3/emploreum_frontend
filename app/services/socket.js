import { BASEURL } from '../global-constants';

const io = require('socket.io-client');
console.log(BASEURL);
const socket = io(BASEURL);
export default socket;
