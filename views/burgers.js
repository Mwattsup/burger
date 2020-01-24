const render = function(data) {
    return `
    <h4>${data.burgerName}<h4>
    <button type="button" class="btn btn-outline-info btn-sm" id="${data.id}">devour it!</button>
    `;
};

exports.render = render;