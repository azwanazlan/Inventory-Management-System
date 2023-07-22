const { sequelize } = require('./Services/db');
const Item = require('./Models/Item');
const Employee = require('./Models/Employee');
const Agent = require('./Models/Agent');
const { faker } = require('@faker-js/faker');
const readline = require('readline');

// Replace 'your_database_name', 'your_username', 'your_password', and 'your_host' with your actual database credentials
sequelize.sync()
  .then(async () => {
    console.log('Database connection has been established successfully.');
    const r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    r1.question('Enter how much row of data you want to add into DB: ', (count) => {
      const rowCount = parseInt(count, 10);
      console.log(`${rowCount} row(s) of data will be generated...`);
      r1.close();
      generateSampleDataIntoDB(rowCount)
        .then(() => {
          console.log('Sample data has been added to the table.');
          process.exit(0); // Exit the script after adding data
        })
        .catch((err) => {
          console.error('Error seeding the database:', err);
          process.exit(1); // Exit with an error code in case of an error
        });
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit with an error code in case of a database connection error
  });


const generateSampleDataIntoDB = async (count) => {
  try {
    for (let i = 0; i < count; i++) {
      // Generate sample data and add it to the 'Item' table
      await Item.create({
        name: faker.lorem.word(),
        price: faker.finance.amount({
          min: 10,
          max: 1000
        }),
        quantity: faker.number.bigInt({
          min: 1,
          max: 1000
        }),
        description: faker.lorem.words(4),
        category: faker.lorem.word(),
      });

      // Generate sample data and add it to the 'Employee' table
      await Employee.create({
        firstName: faker.lorem.word(),
        lastName: faker.lorem.word(),
      });

      // Generate sample data and add it to the 'Agent' table
      await Agent.create({
        firstName: faker.lorem.word(),
        lastName: faker.lorem.word(),
      });
    }
  } catch (error) {
    console.error('Error generating and adding sample data:', error);
  }
};
  

  
