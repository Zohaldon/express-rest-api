import express from "express";
import { deleteUserById, getUsers } from "../db/users";


// LIST Users
export const getAllUsers = async (req: express.Request, res: express.Response)=> {
    try{
      const users = await getUsers();

      return res.status(200).json(users).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

// DELETE a User
export const deleteUser = async (req: express.Request, res: express.Response)=> {
    try{
        const { id } = req.params;

        const deletedUser = await deleteUserById(id);

        return res.json(deletedUser);
    } catch (error) {
       console.log(error);
       res.sendStatus(400);
    }
}