import express from "express";
import { getAllUsers, deleteUser } from "../controllers/users";
import { isAutheticated } from "../middlewares";

export default (router: express.Router)=> {
    router.get('/users', isAutheticated, getAllUsers);
    router.delete('/users/:id', deleteUser);
};
