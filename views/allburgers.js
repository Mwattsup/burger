const allBurgers = require('./burgers');

const render = burgers => burgers.map(i => allBurgers.render(i) + "<hr/>").join("");
exports.render = render;
