const server = require('./tools/live-server');

module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-war');
    const package = grunt.file.readJSON('package.json');

    grunt.initConfig({
        war: {
            target: {
              options: {
                war_dist_folder: './dist',
                war_name: `${package.name}-${package.version}`,
                war_extras: [
                  {
                    filename: 'WEB-INF/weblogic.xml',
                    data: `<?xml version="1.0" encoding="UTF-8"?>\n<wls:weblogic-web-app xmlns:wls="http://xmlns.oracle.com/weblogic/weblogic-web-app" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd http://xmlns.oracle.com/weblogic/weblogic-web-app http://xmlns.oracle.com/weblogic/weblogic-web-app/1.9/weblogic-web-app.xsd">\n<wls:context-root>${package.name}</wls:context-root>\n</wls:weblogic-web-app>`,
                  },
                ],
              },
              files: [
                {
                  expand: true,
                  cwd: './dist/hands-on-grunt',
                  src: ['**'],
                  dest: '',
                },
              ],
            },
        }
    });
    
    grunt.registerTask('default', ['war']);

}
