
1. Dependencies
  + mongoose
  + express
  + body-parser
  + ejs

2. Server setup
 + Routing
    + GET /ninjas => Render index page
    + GET /ninjas/new => Render new ninja form
    + GET /ninjas/:id/edit
    + POST /ninjas => Creates a ninja
    + POST /ninjas/:id/update => Updates a ninja
    + POST /ninjas/:id/delete => Deletes a ninja
 + Views
    + index
    + edit
    + new

3. Database/schema/model setup
  + NinjaSchema
  + name
  + description
