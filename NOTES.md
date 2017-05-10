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

If it is functional, commit your code

before creating API, checkout to a new branch
