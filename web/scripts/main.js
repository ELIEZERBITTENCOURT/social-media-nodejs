requirejs.config({
    basePath: './',
  
    paths: {
      'jquery': '../node_modules/bootstrap/dist/jquery/jquery.min',
      'socketio': '../node_modules/socket.io/socket.io',
      'mustache': '../node_modules/bootstrap/dist/mustache/mustache'
    },
  
    shim: {
      mustache: {
        exports: 'Mustache'
      }
    }
  });
  
  require(['view'], function(view) {});