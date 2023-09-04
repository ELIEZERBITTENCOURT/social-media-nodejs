requirejs.config({
    basePath: './',
  
    paths: {
      'jquery': '../node_modules/bootstrap/dist/jquery/jquery.min',
      'socketio': '/Socket.IO/Socket.IO',
      'mustache': '../node_modules/bootstrap/dist/mustache/mustache'
    },
  
    shim: {
      mustache: {
        exports: 'Mustache'
      }
    }
  });
  
  require(['view'], function(view) {});