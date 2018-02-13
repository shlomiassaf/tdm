// import localForage from 'localforage';
import { createServer } from 'service-mocker/server';

const server = createServer();
const router = server.router;

router.get('/greet', 'Hello New World!');
