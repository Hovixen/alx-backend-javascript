/*
 * AppController
 */

class AppController {
  static getHomepage(request, response) {
    response.statuscode = 200;
    response.send('Hello Holberton School!');
  }
}

module.exports = AppController;
