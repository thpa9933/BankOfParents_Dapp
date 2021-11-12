const routes = require('next-routes')();

// colon indicates the variable address will be dynanmic
// first argument is var and second indicates what component to display
routes
    .add('/loan/new', '/loan/new');

module.exports = routes;