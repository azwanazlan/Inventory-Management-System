const express = require("express");
const app = express();
const {testDatabaseConnection} = require('./Services/db');
const port = 3000;
const router = require('./Routes/Routes');

app.use(express.json());
app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use('/', router);

testDatabaseConnection()
  .then(() => {
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error starting the server:', error);
  });