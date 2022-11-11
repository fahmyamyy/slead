import express from 'express';
import { getUsers, getUser, insertUser } from '../controllers/userController.js';

const router = express.Router();

// URL Router
// router.get('/user', getUsers);
// router.get('/user', getUsers);
// router.get('/user/:id', getUser);
// router.post('/user', insertUser);


export default router;