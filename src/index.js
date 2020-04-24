const { app } = require('./app');
const colors = require('colors');

async function main() { 
    await app.listen(app.get('port'));
    console.log(`${colors.magenta('Server on port:')} ${colors.green(app.get('port'))}`);
};

main();