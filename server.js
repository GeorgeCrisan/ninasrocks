const Hapi = require('@hapi/hapi');
const Mongoose = require("mongoose");
const Hapirouter = require("hapi-router");
const Joi = require("@hapi/joi");

const init = async () => {
    const server = new Hapi.Server({host: "localhost", port: 5000 });

    try {
        await server.register({
          plugin: Hapirouter,
          options: {
            routes: 'serverfiles/routes/*.js' // uses glob to include files
          }
        })
      } catch (err) {
        // Handle err
        throw err
      }
   
    await server.start();

    console.log('Server running on %ss', server.info.uri);
}


init();