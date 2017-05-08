module.exports = function (grunt) {
    var jsFiles = [
        'assets/js/components/view.js',
        'assets/js/components/analytics.js',
        'assets/js/components/nav.js',
        'assets/js/components/modal.js',
        'assets/js/pages/all.js',
        'assets/js/pages/font.js',
        'assets/js/pages/contact.js',
        'assets/js/router.js'
    ];

    var jsAdminFiles = [
        'assets/js/pages/admin.js',
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: [
                'assets/sass/**/*.scss',
                'assets/js/*.js',
                'assets/js/**/*.js'
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
                    'public/js/javascript.min.js': jsFiles,
                    'public/js/admin.min.js': jsAdminFiles
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
