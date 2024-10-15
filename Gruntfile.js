module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dist/style.css' : 'src/style.less' 
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/app.min.js' : 'src/app.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'uglify']);
};