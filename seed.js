Object.keys(require.cache).forEach((key) => {
  delete require.cache[key];
});


const { sequelize } = require('./Services/db');
const Item = require('./Models/Item');
const Employee = require('./Models/Employee');
const Agent = require('./Models/Agent');

// Replace 'your_database_name', 'your_username', 'your_password', and 'your_host' with your actual database credentials
sequelize.sync()
  .then(async () => {
    console.log('Database connection has been established successfully.');
    // Generate sample data and add it to the 'Product' table
    await Item.bulkCreate([
      {
        name: 'Product 1',
        price: 10.99,
        quantity: 50,
        description: 'Sample product 1',
        category: 'Category 1',
      },
      {
        name: 'Product 2',
        price: 19.99,
        quantity: 30,
        description: 'Sample product 2',
        category: 'Category 2',
      },
      // Add more sample data as needed
    ]);

    await Employee.bulkCreate([
      {
        firstName: 'Michael',
        lastName: 'Johnson',
      },
      {
        firstName: 'Emily',
        lastName: 'Brown',
      },
    ]);

    await Agent.bulkCreate([
      {
        firstName: 'John',
        lastName: 'Doe',
        // Add other properties as needed
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        // Add other properties as needed
      },
      // Add more sample data as needed
    ]);
  })
  .then(() => {
    console.log('Sample data has been added to the table.');
    process.exit(0); // Exit the script after adding data
  })
  .catch((err) => {
    console.error('Error seeding the database:', err);
    process.exit(1); // Exit with an error code in case of an error
  });
