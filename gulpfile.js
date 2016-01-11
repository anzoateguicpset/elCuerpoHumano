var gulp = require('gulp');
var connect = require('gulp-connect');

/* array con los archivos que seran modificados*/
var files = ['paginas/', 'presentacion/', 'actividades/', 'script/'];

gulp.task( 'files', function(){
	gulp.src(files).pipe(connect.reload());
});


/* ver archivos y hacer algo cuando de modifique */
gulp.task('watch', function(){
	gulp.watch(files, ['files']);
});

gulp.task('connect', function(){
	connect.server({livereload: true});
});

/* Tarea default */
gulp.task('default', ['connect','watch']);