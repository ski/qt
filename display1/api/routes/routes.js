'use strict';
module.exports = function(app) {
  var navigate = require('../controllers/controller');

  app.route('/sync')
    .get(navigate.sync);



//   app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
};