module.exports = function (grunt) {
    var jsFiles = [
        'assets/js/view.js',
        'assets/js/analytics.js',
        'assets/js/nav.js',
        'assets/js/font-page.js',
        'assets/js/contact-form.js',
        'assets/js/router.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: [
                'assets/sass/**/*.scss',
                'assets/js/*.js'
            ],
            tasks: [
                'sass',
                'cssmin',
                'uglify'
            ]
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'assets/sass',
                    src: ['*.scss'],
                    dest: 'assets/css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/stylesheets',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'public/js/javascript.min.js': jsFiles
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);
};
