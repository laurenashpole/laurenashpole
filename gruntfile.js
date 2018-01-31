module.exports = function (grunt) {
    var jsFiles = [
        'assets/js/utilities/utilities.js',
        'assets/js/components/base.js',
        'assets/js/components/analytics.js',
        'assets/js/components/contact.js',
        'assets/js/components/download-button.js',
        'assets/js/components/filter.js',
        'assets/js/components/form-bind.js',
        'assets/js/components/gallery.js',
        'assets/js/components/nav.js',
        'assets/js/components/modal.js',
        'assets/js/components/mailing.js',
        'assets/js/pages/base.js',
        'assets/js/pages/font.js',
        'assets/js/pages/fonts.js',
        'assets/js/pages/contact.js',
        'assets/js/libs/vanilla-tilt.js',
        'assets/js/router.js'
    ];

    var jsAdminFiles = [
        'assets/js/utilities/utilities.js',
        'assets/js/components/base.js',
        'assets/js/components/admin.js',
        'assets/js/pages/admin.js'
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
                    dest: 'public/css',
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
