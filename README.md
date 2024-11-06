# GraphQL

## 환경설정

### MySQL

```
docker run -d -e MYSQL_ROOT_PASSWORD=qwer1234 -p 3306:3306 --name mysql-container mysql:8
docker exec -it mysql-container /bin/bash
mysql -u root -p
SHOW DATABASES;
CREATE DATABASE ghibli_graphql;
```

### Redis

```
docker run -d --name redis-container -p 6379:6379 redis:6.2
docker network create redis-network
docker network connect redis-network redis-container
docker run -it --network redis-network --rm redis:6.2 redis-cli -h redis-container
set testkey testvalue
get testkey
keys *
```

## Server and Client

### Server

```
cd server
npm install
npm run dev
curl --request POST --header 'content-type: application/json' --url http://localhost:4000/graphql --data '{"query": "query { hello }"}'
```

### Client

```
cd web
npm install
npm run dev
```
