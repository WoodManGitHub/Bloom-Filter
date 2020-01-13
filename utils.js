const { createHash } = require('crypto');

/**
 * @param {string} algorithm
 * @param {any} content
 * @return {string}
 */
const encrypt = (algorithm, content) => {
    const hash = createHash(algorithm);
    hash.update(content);
    return hash.digest('hex');
};

/**
 * @param {any} content
 * @return {string}
 */
const sha1 = (content) => encrypt('sha1', content);

/**
 * @param {any} content
 * @return {string}
 */
const md5 = (content) => encrypt('md5', content);

/**
 * @param {any} content
 * @return {string}
 */
const sha256 = (content) => encrypt('sha256', content);

const addData = (data, arr) => {
    const md5Data = md5(data);
    const sha1Data = sha1(data);
    const sha256Data = sha256(data);

    const md5place = parseInt(md5Data, 16) % arr.length;
    const sha1place = parseInt(sha1Data, 16) % arr.length;
    const sha256place = parseInt(sha256Data, 16) % arr.length;

    arr[md5place] = true;
    arr[sha1place] = true;
    arr[sha256place] = true;
};

const dataExist = (data, arr) => {
    const md5Data = md5(data);
    const sha1Data = sha1(data);
    const sha256Data = sha256(data);

    const md5place = parseInt(md5Data, 16) % arr.length;
    const sha1place = parseInt(sha1Data, 16) % arr.length;
    const sha256place = parseInt(sha256Data, 16) % arr.length;

    const list = [md5place, sha1place, sha256place];
    let flag = true;

    list.forEach((element) => {
        if (!arr[element]) {
            flag = false;
        }
    });

    return flag;
};

module.exports = { addData, dataExist };
