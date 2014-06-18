module.exports = function(config){
  config.set({

    preprocessors: {
      'test/coffee/**/*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      }
    },

    basePath : '../',

    files : [
      'lib/lib/ionic/js/angular/angular.js',
      'lib/lib/ionic/js/angular/*.js',
      'lib/lib/ionic/js/angular-ui/*.js',
      'lib/lib/ionic/js/**/*.js',
      'lib/js/**/*.js',
      'lib/js/*.js',
      'test/angular-mocks.js',
      'test/coffee/**/*'
    ],

    autoWatch: false,

    singleRun: true,

    exclude: [
      'lib/lib/ionic/js/**/*.min.js'
    ],

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coffee-preprocessor',
            'karma-phantomjs-launcher'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};