const mongoose = require('mongoose');
const { User, Thought } = require('../models');


const userData = [
    {"username":"Chancho0","email":"johnson200@gmail.com"},
    {"username":"choncho1","email":"concho100@monson.com"},
    {"username":"choncho2","email":"ripleybelieveit@cranklin.net"},
    {"username":"choncho3","email":"tommybahamma@austinsubaru.org"},
    {"username":"choncho4","email":"perry-yip@gmail.com"},
    {"username":"choncho5","email":"fipfip@aol.com"},
    {"username":"Randlejackson","email":"pip-pip@hotmail.com"},
    {"username":"filipazzo2002","email":"lorryjansen@gmail.com"},
]

const thoughtData = [
    {"username":"Chancho0","thoughtText":"I like to code!","createdAt":"2021-08-09T18:25:43.511Z"},
    {"username":"choncho1","thoughtText":"I like to code more","createdAt":"2021-08-09T18:25:43.511Z"},
    {"username":"choncho2","thoughtText":"I love the sun!","createdAt":"2021-08-09T18:25:43.511Z"},
    {"username":"choncho3","thoughtText":"I love the rain!","createdAt":"2021-08-09T18:25:43.511Z"},
    {"username":"choncho4","thoughtText":"I love the snow!","createdAt":"2021-08-09T18:25:43.511Z"},
    {"username":"choncho5","thoughtText":"I love the wind!","createdAt":"2021-08-09T18:25:43.511Z"},
    {"username":"randlejackson","thoughtText":"I love the cold!","createdAt":"2021-08-09T18:25:43.511Z"},
    {"username":"filipazzo2002","thoughtText":"I love the heat!","createdAt":"2021-08-09T18:25:43.511Z"},
]

const seedUsers = () => User.insertMany(userData);

const seedThoughts = () => Thought.insertMany(thoughtData);

const seedAll = async () => {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await seedUsers();
    await seedThoughts();

    console.log('all done!');
    process.exit(0);
}

seedAll();