# sample-callback-server-node
This is a simple callback server for [Scale API](https://scaleapi.com), written in Node.js and backed by MongoDB.

You can deploy a callback server to Heroku in seconds and save all your tasks and responses to MongoDB.
## Deploy to Heroku
1. If you haven't already, [sign up](https://dashboard.scaleapi.com/signup) for a free Scale API account. Note your Scale `Callback Auth Key`, which you will use during deployment.
2. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Using the Callback Server

Once your server is deployed, you can start using it as your `callback_url` for your [Scale tasks](https://docs.scaleapi.com/#task-object). 

You should specify the `callback_url` as `https://[YOUR_APP_NAME].herokuapp.com/`, where `[YOUR_APP_NAME]` is replaced with your Heroku app name.

## Accessing the Responses

Your tasks will be saved to the `tasks` collection of the provided MongoDB database. The schema will be identical to the schema specified [in our docs](https://docs.scaleapi.com/#task-object). By default, it will provision a new mLab instance, which you can access through your Heroku dashboard.

## Contact

Chat with us on Scale's Slack channel :)

[<img src="https://chat.scaleapi.com/badge.svg">](https://chat.scaleapi.com)
