module.exports = [
    {
      path: '/{any*}',
      method: '*',
      handler: function (request, h) {
        return '404 Error! Page Not Found! Sorry';
    }
    },
    {
      path: '/index',
      method: 'GET',
      handler: function (request, reply) {
        reply('hello');
      }
    }
  ]
