var elixir = require('laravel-elixir');
elixir(function(mix) {

    mix.sass('app.scss')
    .coffee('app.coffee')
    .copy([
       '../vendor/*/dist/*.min.js'
    ], 'public/js/vendor.js')
    .browserSync({
       port: 8081,
       proxy: 'shoppinglist/public'
    });
});
