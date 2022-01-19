 const { createProxyMiddleware } = require('http-proxy-middleware');

 module.exports = function(app) {   app.use(
     `/bookings`,
     createProxyMiddleware({
       target: 'https://wonderlanka-backend.herokuapp.com/bookingmanagement',
       changeOrigin: true,
     })
   );

   app.use(
     '/book',
     createProxyMiddleware({
       target: 'https://wonderlanka-backend.herokuapp.com/bookingmanagement',
       changeOrigin: true,
     })
   );
  

   app.use(
     '/post/delete',
     createProxyMiddleware({       target: 'https://wonderlanka-backend.herokuapp.com/bookingmanagement',
     changeOrigin: true,
     })
   );
   app.use(
    '/post/update',
     createProxyMiddleware({
       target: 'https://wonderlanka-backend.herokuapp.com/bookingmanagement',
       changeOrigin: true,
     })
   );

   app.use(
     '/cancel/save',
     createProxyMiddleware({
       target: 'https://wonderlanka-backend.herokuapp.com/cancelbookings',
       changeOrigin: true,
    })
   );

 };