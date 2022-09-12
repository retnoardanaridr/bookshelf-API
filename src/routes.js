const { handler } = require('@hapi/hapi/lib/cors');
const {
    addBooks,
    getAllBooks,
    getBooksDetail,
    editBooks,
    deleteBooks,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooks,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksDetail,
    },
    {
        method: 'PUT',
        path: '/books/{bookid}',
        handler: editBooks,
    },
    {
        method: 'DELETE',
        path: '/books/{bookid}',
        handler: deleteBooks,
    },
];

module.exports = routes;