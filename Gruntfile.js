module.exports = function (grunt) {

    //GRUNT CONFIGUTATION
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        base_path_app: 'public',
        base_path_build: 'build/www',

        /* grunt-exec */
        exec: {
            clean_app: {command: 'rm -rf  <%= base_path_build %>/'},
            remove_index_dev: {command: 'rm  <%= base_path_build %>/index.dev.html'}
        },

        /* grunt-contrib-cssmin */
        cssmin: {
            css: {files: {'<%= base_path_build %>/app.css': '<%= base_path_build %>/app.css'}}
        },

        /* grunt-contrib-copy */
        copy: {
            all: {
                expand: true,
                flatten: true,
                src: '<%= base_path_app %>/*',
                dest: '<%= base_path_build %>/'
            },
            languages: {
                expand: true,
                flatten: true,
                src: '<%= base_path_app %>/languages/*',
                dest: '<%= base_path_build %>/languages'
            }
        },

        /* grunt-cordova-config */
        cordova_config: {

            /* CONFIG ANDROID */
            config_android: {
                options: {
                    id: 'com.sosdriver.org',
                    version: '1.0.0',
                    name: 'SOSDriver',
                    author: {
                        name: 'paulo silva',
                        email: 'silva.guzman.paulo@gmail.com'
                    },
                    description: 'SOSDriver',
                    preferences: [
                        {name: 'Fullscreen', value: 'false'},
                        {name: 'Orientation', value: 'portrait'},
                        {name: 'StatusBarStyle', value: 'lightcontent'},
                        {name: 'StatusBarBackgroundColor', value: '#000000'}
                    ]
                },
                dest: 'build/config.xml'
            },

            /* CONFIG IOS */
            config_ios: {
                options: {
                    id: 'com.sosdriver.org',
                    version: '1.0.0',
                    name: 'SOSDriver',
                    author: {
                        name: 'Paulo Silva',
                        email: 'silva.guzman.paulo@gmail.com'

                    },
                    description: '',
                    preferences: [
                        {name: 'Fullscreen', value: 'false'},
                        {name: 'Orientation', value: 'portrait'},
                        {name: 'StatusBarOverlaysWebView', value: 'true'},
                        {name: 'StatusBarStyle', value: 'lightcontent'},
                        {name: 'DisallowOverscroll', value: 'true'},
                        {name: 'WebViewBounce', value: 'false'}
                    ]
                },
                dest: 'build/config.xml'
            },

            /* CONFIG WP8 */
            config_wp8: {
                options: {
                  id: 'com.sosdriver.org',
                  version: '1.0.0',
                  name: 'SOSDriver',
                  author: {
                      name: 'Paulo Silva',
                      email: 'silva.guzman.paulo@gmail.com'

                  },
                    description: '',
                    preferences: [
                        {name: 'Fullscreen', value: 'false'},
                        {name: 'Orientation', value: 'portrait'},
                        {name: 'StatusBarOverlaysWebView', value: 'true'},
                        {name: 'DisallowOverscroll', value: 'true'},
                        {name: 'WebViewBounce', value: 'false'}
                    ]
                },
                dest: 'build/config.xml'
            }
        },

        /* grunt-cordovacli */
        cordovacli: {
            options: {
                path: 'build'
            },
            add_plugins: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        'https://github.com/apache/cordova-plugin-statusbar.git',
                        'https://github.com/apache/cordova-plugin-dialogs.git',
                        'https://github.com/apache/cordova-plugin-inappbrowser.git',
                        'https://github.com/apache/cordova-plugin-geolocation.git'
                    ]
                }
            },
            build_android: {
                options: {
                    command: 'build',
                    platforms: ['android']
                }
            },
            build_ios: {
                options: {
                    command: 'build',
                    platforms: ['ios']
                }
            },
            build_wp8: {
                options: {
                    command: 'build',
                    platforms: ['wp8']
                }
            },
            emulate_ios: {
                options: {
                    command: 'emulate',
                    platforms: ['ios']
                }
            },
            run_android: {
                options: {
                    command: 'run',
                    platforms: ['android']
                }
            },
            run_ios: {
                options: {
                    command: 'run',
                    platforms: ['ios']
                }
            }
        }

    });

    /* GRUNT PLUGINS*/
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-cordovacli');
    grunt.loadNpmTasks('grunt-cordova-config');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /****************************** ANDROID CONFIGURATION ******************************/

    /* TEST */
    grunt.registerTask('test_android', [
        'exec:clean_app', 'copy', 'exec:remove_index_dev', 'cssmin',
        'cordova_config:config_android',
        'cordovacli:add_plugins',
        'cordovacli:run_android'
    ]);

    /* BUILD  */
    grunt.registerTask('build_android', [
        'exec:clean_app', 'copy', 'exec:remove_index_dev', 'cssmin',
        'cordova_config:config_android',
        'cordovacli:add_plugins',
        'cordovacli:build_android'
    ]);

    /* RUN */
    grunt.registerTask('run_android', [
        'exec:clean_app', 'copy', 'exec:remove_index_dev', 'cssmin',
        'cordova_config:config_android',
        'cordovacli:add_plugins',
        'cordovacli:run_android'
    ]);

    /****************************** IOS CONFIGURATION ******************************/

    /* BUILD */
    grunt.registerTask('build_ios', [
        'exec:clean_app', 'copy', 'exec:remove_index_dev', 'cssmin',
        'cordova_config:config_ios',
        'cordovacli:add_plugins',
        'cordovacli:build_ios'
    ]);

    /* EMULATE */
    grunt.registerTask('emulate_ios', [
        'exec:clean_app', 'copy', 'exec:remove_index_dev', 'cssmin',
        'cordova_config:config_ios',
        'cordovacli:add_plugins',
        'cordovacli:emulate_ios'
    ]);

    /* RUN */
    grunt.registerTask('run_ios', [
        'exec:clean_app', 'copy', 'exec:remove_index_dev', 'cssmin',
        'cordova_config:config_ios',
        'cordovacli:add_plugins',
        'cordovacli:run_ios'
    ]);


    /****************************** WINDOWS PHONE CONFIGURATION ******************************/

    /* WINDOWS PHONE BUILD */
    grunt.registerTask('build_wp8', [
        'exec', 'copy', 'cssmin',
        'cordova_config:config_wp8',
        'cordovacli:add_plugins',
        'cordovacli:build_wp8'
    ]);

};
