import { Request, Response } from "express";
import express from 'express';
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});