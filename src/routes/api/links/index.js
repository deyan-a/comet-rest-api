const express = require('express');
const {
    Router,
} = express;

const linksRoutes = require('./link.routes');
const {
    LinkService,
} = require('../../../services');

const {
    middlewares,
} = require('../../../helpers');

const router = new Router();

Object.values(linksRoutes).forEach((route) => {
    router[route.method](
        route.path, [middlewares.isAdminMiddleware],
        route.handler({
            LinkService,
        }));
});


module.exports = router;
