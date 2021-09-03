const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const BlogController = require('./controllers/BlogController')
const CommentController = require('./controllers/CommentController')

module.exports = (app) => {
  /* RESFUL Api for users management */
  // create user
  app.post('/user',
    UserController.create
  )

  // edit user, suspend, active
  app.put('/user/:userId',
    UserController.put
  )

  // delete user
  app.delete('/user/:userId',
    UserController.remove
  )

  // get user by id
  app.get('/user/:userId',
    UserController.show
  )

  // get all user
  app.get('/users',
    isAuthenController,
    UserController.index    
  )

  app.post('/login',
    UserAuthenController.login
  )


  // blog router
    //create blog
  app.post('/blog',
    BlogController.create
  )

  // edit blog, suspend, active
  app.put('/blog/:blogId',
    BlogController.put
  )

  // delete blog
  app.delete('/blog/:blogId',
    BlogController.remove
  )

  // get blog by id
  app.get('/blog/:blogId',
    BlogController.show
  )

  // get all blog
  app.get('/blogs',
    BlogController.index
  )


  // comment router
    //create comment
    app.post('/comment',
    CommentController.create
  )

  // edit comment, suspend, active
  app.put('/comment/:commentId',
    CommentController.put
  )

  // delete comment
  app.delete('/comment/:commentId',
    CommentController.remove
  )

  // get comment by id
  app.get('/comment/:commentId',
    CommentController.show
  )

  // get all comment
  app.get('/comments',
    CommentController.index
  )
}