// First gulp tasks.

var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;

//clean the temp dirs
function clean(){
    return del([
        'dist/**',
        'generated/**'
    ]);
}

//run angular's compiler
function precompile(cb){
    exec('./node_modules/.bin/ngc -p components', function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

//run tsc
function compile(cb){
    exec('./node_modules/.bin/tsc', function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

//copy the sources next to the generated
function copy_src(){
    return gulp.src(['components/**/*.ts'])
        .pipe(gulp.dest('generated'));
}

gulp.task('compile', compile);
gulp.task('precompile', ['copy:src'], precompile);
gulp.task('copy:src', ['clean'], copy_src);
gulp.task('clean', clean);