const { addData, dataExist } = require('./utils');


const bfSize = new Array(100000);
bfSize.fill(false);

for (let i = 0; i < 100; i++) {

    addData('600', bfSize);
}

console.log(dataExist('600', bfSize));
console.log(dataExist('700', bfSize));
