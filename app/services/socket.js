import { BASEURL } from '../global-constants';

const io = require('socket.io-client');
const socket = io(BASEURL);

export default socket;
