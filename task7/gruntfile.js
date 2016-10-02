//wrapper函数
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/main.css': 'css/main.scss'
                },
            }
        },
        watch: {
            scripts: {
                files: [
                    'css/main.scss'
                ],
                tasks: ['sass']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['sass']);
};