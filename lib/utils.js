const utils = {};

utils.fileExtension = (URL) => {
    // css/main.css -> css
    return URL.split('.')[1];
}

export { utils }