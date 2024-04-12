import dotenv from 'dotenv';
import Tour from './models/Tour.js'
import User from './models/User.js';
import tours from './data/tours.js'
import users from './data/users.js'
import colors from 'colors';
import connectDB from './config/db.js';
dotenv.config();

connectDB()

const importData = async () => {
  try {
    // await Order.deleteMany();
    await Tour.deleteMany();
    await User.deleteMany();

    // const createdUsers = await User.insertMany(users);

    // const adminUser = createdUsers[0]._id;

    // const sampleProducts = products.map((product) => {
    //   return { ...product, user: adminUser };
    // });

    await Tour.insertMany(tours);
    await User.insertMany(users);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await Order.deleteMany();
    // await Product.deleteMany();
    await Tour.deleteMany();
    await users.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}