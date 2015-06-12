module.exports = function(grunt) {
	grunt.initConfig({
		compass: {                  // Task
			grid: {
				options: {
					httpPath: '/',
					sassDir: 'sass/',
					cssDir: 'css/',
					noLineComments: true,
					outputStyle: 'nested',
					force: true,
					watch: false
				}
			}
		},

		watch: {
			grid: {
				files: '/sass/*.scss',
				tasks: ['compass:grid']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask('grid', ['compass:grid','watch:grid']);
}