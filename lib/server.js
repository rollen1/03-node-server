import http from 'http';
import { utils } from './utils.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}/`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method;
    const parsedPathName = parsedURL.pathname;
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, ''); // regex

    const fileExtension = utils.fileExtension(trimmedPath);
    const textFileExtensions = ['css', 'js', 'svg', 'webmanifest', 'txt'];
    const binaryFileExtensions = ['jpg', 'png', 'ico'];
    const isTextFile = textFileExtensions.includes(fileExtension);
    const isBinaryFile = binaryFileExtensions.includes(fileExtension);

    const isAPI = trimmedPath.indexOf('api/') === 0;

    if (isTextFile) {
        res.end("Tekstinis failas.");
        return;
    }

    if (isBinaryFile) {
        res.end("Binary failas."); 
        return;
    }

    if (isAPI) {
        res.end("API");
        return;
    }

    /*
    Tai kokios gi uzklausos gali ateiti is kliento i si serveri?
    failai download:
        - tekstiniai:
            - css
            - js
            - svg
        - binary:
            - jpg, png, gif (nuotraukos)
            - audio, video
            - woff, eot, ttf (sriftai)
    API (formos, upload file, t.t.)
    HTML turinys (puslapis)
    */

    console.log('URL:', trimmedPath);
    console.log(trimmedPath.split('.'));

    console.log(http);

    // post, get, put, delete
    // create, read, update, delete = CRUD

    res.end('Welcome');

});

server.init = () => {
    server.httpServer.listen(6969);
}

export { server };