/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';
import { type } from 'os';

const questions = [
    {
        type: 'input',
        name : 'url',
        message : 'Enter a URL to generate a QR code: ',
        default: 'https://www.google.com'
    }
]

async function generateQR() {
    try{
        const answers = await inquirer.prompt(questions);
        const url = answers.url;

        fs.writeFile('url.txt', url, (err) => {
            if(err) throw err;
            console.log('URL saved to url.txt');
        });

        const imageBuffer = qr.imageSync(url, { type: 'png' });
        
        fs.writeFile('qrcode.png', imageBuffer, (err) => {
            if(err) throw err;
            console.log('QR code saved to qrcode.png');
        });
    }
    catch(err) {
        console.error('Error: ', err);
    }
}
generateQR();