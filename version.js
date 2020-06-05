const fs = require('fs');

// eslint-disable-next-line no-undef
const [ , , version ] = process.argv;

if (!version) {
    throw Error('missing parameter version.');
}

fs.readFile('index.html', 'utf8', (err, contents) => {
    if (err === null) {
        // eslint-disable-next-line no-template-curly-in-string
        fs.writeFileSync('index.html', contents.replace(new RegExp('v=139', 'g'), version));
    }
});
