const render = function(data) {
    return `
    <h4>${data.burgerName}<h4>
    <button type="button" class="btn btn-outline-dark btn-sm" id="${data.id}" disabled>devoured</button>
    `;
}

exports.render = render;