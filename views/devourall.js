const allDevoured = require('./devoured');

const render = devoured => devoured.map(i => allDevoured.render(i) + "<hr/>").join("");
exports.render = render;
