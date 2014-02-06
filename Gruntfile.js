
module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: [
                "Gruntfile.js",
                "source/javascripts/*.js"
            ],
            options: {
                jshintrc: ".jshintrc",
            }
        },
        useref: {
            html: "public/**/*.html",
            temp: "public"
        },
        concat: {
            build: {
                src: [
                    "public/javascripts/vendor/prefixfree.js",
                    "public/javascripts/vendor/bootstrap.js",
                    "public/javascripts/vendor/waypoints.js",
                    "public/javascripts/vendor/media.match.js",
                    "public/javascripts/vendor/enquire.js",
                    "public/javascripts/vendor/skrollr.js",
                    "public/javascripts/vendor/jquery.xdomainajax.js",
                    "public/javascripts/vendor/micro-templating.js",
                    "public/javascripts//vendor/console.image.js",
                    "public/javascripts/desktop.js",
                    "public/javascripts/mobile.js",
                    "public/javascripts/slides.js",
                    "public/javascripts/blog.js",
                    "public/javascripts/easteregg.js",
                    "public/javascripts/main.js",
                ],
                dest: "public/javascripts/build.js"
            }
        },
        uglify: {
            files: {
                expand: true, 
                src: "public/javascripts/build.js"
            }
        },
        clean: {
            build: {
                src: [
                    "public/javascripts/vendor",
                    "public/javascripts/desktop.js",
                    "public/javascripts/mobile.js",
                    "public/javascripts/slides.js",
                    "public/javascripts/blog.js",
                    "public/javascripts/easteregg.js",
                    "public/javascripts/main.js",
                    "public/assets/jwplayer"
                ]
            }
        },
        htmlmin: {
            build: {
                options: {                                 
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true
                },
                expand: true,
                src: "public/**/*.html"
            }
        },
        smushit: {
            dev: {
                src: [
                    "source/images/**/*.png", 
                    "source/images/**/*.jpg"
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-useref");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-smushit");


    grunt.registerTask("default", [
        "jshint",
        "useref",
        "concat",
        "uglify",
        "clean",
        "htmlmin"
    ]);

};