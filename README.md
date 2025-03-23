PHomeWérk

Staring up...
1. Create your local Database 
2. Rename the .env.sample file to .env and update the Database details. 
3. For testing purposes you can keep the JWT secret as it is in the .env file
4. Apply the migrations using:
npx knex migrate:latest **or** npx knex migrate:latest --env development
5. Seed the database using:
npx knex seed:run
6. Run the server using:
npm run dev


And voilá the backend is online!

