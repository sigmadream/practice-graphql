# GraphQL

## 필수설치

- docker
- node >= 20

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

### VSCode

- graphql
- dotenv
- eslint

## Server and Client

### Server

```
npm install express graphql
npm install apollo-server-core apollo-server-express reflect-metadata
npm install -D typescript @types/node ts-node nodemon
npm install -D eslint prettier
npm install -D eslint-config-airbnb
curl --request POST --header 'content-type: application/json' --url http://localhost:4000/graphql --data '{"query": "query { hello }"}'
# npm install -D prettier eslint-config-prettier eslint-plugin-prettier
# npx install-peerdeps --dev eslint-config-airbnb
```

### Client

```
npm create vite@latest web -- --template react-ts
npm install @apollo/client @chakra-ui/icons @chakra-ui/react @emotion/react @emotion/styled
npm install apollo-upload-client framer-motion graphql react-hook-form react-icons react-lazyload react-router-dom react-waypoint
npm install -D @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @types/node @types/react @types/react-dom @types/apollo-upload-client @graphql-codegen/add @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
```
