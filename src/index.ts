// const express = require('express');
// const dotenv = require('dotenv');

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript nodeJs Boilerplate');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
