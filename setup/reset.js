require('dotenv').config({ path: __dirname + '/../.env' });

if (process.env.DATABASE_USER && process.env.DATABASE_PASS) {
  mongoose.connect(process.env.DATABASE, {
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASS,
  });
} else {
  mongoose.connect(process.env.DATABASE);
}

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

async function deleteData() {
  const Admin = require('../models/coreModels/Admin');
  const Setting = require('../models/coreModels/Setting');
  const Email = require('../models/coreModels/Email');
  await Admin.remove();
  console.log('👍 admin Deleted. To setup demo admin data, run\n\n\t npm run setup\n\n');
  await Setting.remove();
  console.log('👍 Setting Deleted. To setup demo admin data, run\n\n\t npm run setup\n\n');
  await Email.remove();
  console.log('👍 Email Deleted. To setup demo admin data, run\n\n\t npm run setup\n\n');
  process.exit();
}

deleteData();
