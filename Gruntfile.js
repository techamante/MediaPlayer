module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean')
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:{
            build:['out/']
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './out/'
                }
            }
        },
        typescript: {
            base: {
               src:['src/**/*.ts'],
               dest:'out/',
                options: {
                    module: 'amd',
                    target: 'es5'
                },
            }
        },
        watch: {
            files: '*.ts',
            tasks: ['typescript']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        },
        sass:{
            dist:{
                src:'src/**/*.scss',
                dest:'out/css/player.css'
            }
            
        },

        copy:{
            build:{
                files:[{
                    expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'out/'
                },{
                    'angular.js':['bower_components/angular/angular.js']
                }]
            }
        }
    });

    grunt.registerTask('build', ['clean:build','typescript','sass','copy:build']);
     grunt.registerTask('test', ['connect','open','watch']);
 
}