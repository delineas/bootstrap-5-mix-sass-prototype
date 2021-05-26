let mix  = require('laravel-mix');

mix
  .sass("scss/styles.scss", "css", {
    sassOptions: {
      outputStyle: "compressed"
    }
  })
  .js("js/scripts.js", "javascript");

mix.minify('javascript/scripts.js');