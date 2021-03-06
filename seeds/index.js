const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');


const sequelize = require('../config/connection');
const seedtodos = require('./todo-seeds');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    console.log('--------------');
    await seedPosts();
    console.log('--------------');
    await seedComments();
    console.log('--------------');
    await seedtodos();
    console.log('--------------');
    process.exit(0);
};

seedAll();