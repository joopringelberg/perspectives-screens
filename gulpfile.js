const gulp = require("gulp");
const config = require('./.screenUploadConfig');
const screenuploader = require('screenuploader');

function upload() {
	return gulp
		.src( config.output + "/*.js" )
		.pipe( screenuploader.uploadAttachment( config.database + "/" + config.model ) );
}

exports.default = function() {
  gulp.watch( config.output + '/*.js', upload);
};
