import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import express from 'express';

const PORT = process.env.PORT;
const __dirname = import.meta.url;

const server = http.createServer((req, res) => {
	
});

server.listen(PORT, () => {
	console.log(`Server running on ${PORT}.`)
})