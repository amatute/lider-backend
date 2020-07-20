## Lider-Backend
Simple backend web API build with **Node.js** and **Express**.
## How to run it locally

 1. Install Node.js and npm.
 2. You will need to have this database docker container running, download the test database repository from [here](https://github.com/walmartdigital/products-db) and follow the readme instructions, (use the `$ make database-up`).
 3. Download this repository.
 4. In the root folder run `$ npm install`
 5. After download all the dependencies `$ npm start` will start the server.
 6. The app will run in the `localhost` port `5000`.
## Search example
    http://localhost:5000/api/v1/products/search?searchTerm=133&page=1&limit=5
To search for a product use the `/api/v1/products/search`  route and pass the query params `searchTerm` `page` `limit` like in the example above.
## Run it with Docker
1. Download the test database repository [here](https://github.com/walmartdigital/products-db)
2. Edit the Makefile  `database-docker-up:` section of the script with this:
```
database-docker-up:
    docker run -d --rm -e MONGO_INITDB_ROOT_USERNAME=productListUser -e MONGO_INITDB_ROOT_PASSWORD=productListPassword -p 27017:27017 -p 5000:5000 -p 3000:3000 --name mongodb-local -v "$(shell pwd)/database":/database mongo:3.6.8
```
3. From the root folder run `$ database-docker-up` to run the docker mongo db.
4. Now from the root folder of this repo run
`$ docker build -t lider-backend .` 
to build the image.
5.  To run the image 
`$ docker run -d --net container:mongodb-local lider-backend`



## To run tests

    $ npm test
    

