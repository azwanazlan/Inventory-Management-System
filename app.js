const express = require("express");
const {testDatabaseConnection} = require('./Services/db');
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended:true,
    })
);

app.get("/" , (req, res) => {
    res.json({
        message : "OK"
    });
});

testDatabaseConnection()
  .then(() => {
    // Start the server after successful database connection
    const port = 3000; // Choose a suitable port number
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error starting the server:', error);
  });