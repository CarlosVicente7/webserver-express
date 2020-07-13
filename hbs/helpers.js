const hbs = require('hbs');
//helper
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});