requirejs.config({
    baseUrl: "js",
    paths: {
		     jquery: 'jquery-1.12.3',
		     template: 'template'
    },
    shim: {
        'jquery' :{
            exports: 'jQuery'
          },
        'template' :{
            exports: 'tmpl'
            }
        }
});

require (
  [
   'model',
   'view',
   'controller',
   'jquery',
   'template'
  ],

 function() {}
);
