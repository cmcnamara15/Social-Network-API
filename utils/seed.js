const mongoose = require('mongoose');
const { User, Thought } = require('../models');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SocialNetworkAPI', { useNewUrlParser: true, useUnifiedTopology: true });


const userData = [
    {"username":"choncho1","email":"concho100@monson.com"},
    {"username":"choncho2","email":"ripleybelieveit@cranklin.net"},
    {"username":"choncho3","email":"tommybahamma@austinsubaru.org"},
    {"username":"choncho4","email":"perry-yip@gmail.com"},
    {"username":"choncho5","email":"fipfip@aol.com"},
    {"username":"Randlejackson","email":"pip-pip@hotmail.com"},
    {"username":"filipazzo2002","email":"lorryjansen@gmail.com"},
];

const thoughtData = [
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
    try {
        await User.deleteMany({}); // clear Users collection
        await Thought.deleteMany({}); // clear Thoughts collection

        await seedUsers();
        console.log('Users seeded');
        console.log(userData);

        await seedThoughts();
        console.log('Thoughts seeded');

        console.log('all done!');
        console.log(thoughtData)
        process.exit(0); // this line is used to exit the process after seeding 
    } catch (error) {
        console.error('Error seeding data: ', error);
        process.exit(1); // exit with a "failure" code
    }
};

seedAll();