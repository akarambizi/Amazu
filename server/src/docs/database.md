# Setting Up a Local Database

To set up a local database for development, follow these steps:

1. **Configure Environment Variables**: Open the project's `.env` file and set the `MONGO_URI` variable to `mongodb://localhost:27017/Amazu`. This will ensure that your application connects to the local database.

2. **Install and Start MongoDB**: If you haven't already, install MongoDB on your development machine. Once installed, start the MongoDB service to enable the local database.

3. **Create the Database**: Use a MongoDB client or command-line interface to create a new database named `Amazu`. This will be your development database.

4. **Connect to the Local Database**: Update your application's database connection code to use the `MONGO_URI` environment variable. This will establish a connection to the local database when running in the development environment.
