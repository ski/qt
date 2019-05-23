'use strict';
module.exports = function(app) {
  var navigate = require('../controllers/controller');

  app.route('/sync')
    .get(navigate.sync);

    app.route('/one')
    .get(navigate.one);
    
    app.route('/two')
    .get(navigate.two);
    
    app.route('/three')
    .get(navigate.three);
    
    app.route('/four')
    .get(navigate.four);
    
    app.route('/five')
    .get(navigate.five);
    
    app.route('/six')
    .get(navigate.six);
	
    app.route('/print')
 	.get(navigate.print);

//   app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
};

