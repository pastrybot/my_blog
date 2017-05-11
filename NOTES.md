##Phase One
Build an express app using the express App using the express app generator [Express Generator](npm install express-generator -g)
1)`sudo npm install express-generator -g`
  -only need to do this ONCE
  -to use -> `express (name of app)`
2) `express my_blog`
ignore `node_modules` with the command `echo 'node_modules' >> .gitignore`
Delete any unnecessary things the generator created
  -i.e. views folder and any view engine middleware
  -public directory

Take the app for a spin
Throw a test in beneath the first app.use's in app.js(basically a server.js)
`app.get('/test', function (){
  res.json({message: " App is barely functioning"})
});`

update server in bin/www to use port3001

test endpoint using PostMan

If it is functional, commit your code

###Configure MongoDB
  -install any dependencies(mongo, mongoose)  via `npm install --save mongoose`
  -add configuration to DB line via:
    -make a new folder named 'config', new file called 'database-connect.js'
      ```var mongoose = require('mongoose');

      module.exports = () => {
        mongoose.connect('mongodb://localhost/my_blog');
        console.log('Database running')
      }
      ```
      -then require that file into 'app.js' with `require('./config/database-connection')();`
  -commit code

### begin API Phase
  -checkout to a safe branch `git checkout -b articles`
  -create article model
  -create routes folder, and 'routes/articles.js' file
  -create endpoints in 'routes/articles' ONE AT A TIME and continually test using postman

  ****** DON'T FORGET! to MOUNT things in your app.js
  `app.use('/api/articles', articleRoutes);`
  *********

  -Once they ALL work!
    -`git add -A`
    -`git commit -m "message"`
    -`git push origin articles` -> pushes it to new branch
    -`git checkout master`
    -`git merge articles` -> brings new code into articles
    -`git push origin master` -> syncs master branhc with new code
