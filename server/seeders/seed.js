const db = require('../config/connection');
const { User, Events } = require('../models');
const userSeeds = require('./userSeeds.json');
const eventSeeds = require('./eventSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
    
        await User.create(userSeeds);
        await Events.create(eventSeeds);
    
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    
      console.log('all done!');
      process.exit(0);
    });
    