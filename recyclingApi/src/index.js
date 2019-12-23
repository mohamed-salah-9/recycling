const express = require('express');
require('./db/mongoose');
const cors = require('cors');


const UsersRouter = require('./routers/users');
const ServicesRouter = require('./routers/services');
const AdminRouter = require('./routers/admin')
const app = express();
const port = process.env.PORT || 3000


app.use(cors());
app.use(express.json());


app.use(UsersRouter)
app.use(ServicesRouter)
app.use(AdminRouter)






app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
