# users-hierarchy

## Steps for running it locally

1 - Download the repository from git@github.com:hussyrez/users-hierarchy.git

2 - Download and install NodeJS from https://nodejs.org/en/download/

3 - Extract the repository or unzip

4 - Remove the node_modules and package.lock.json from the project folder

5 - navigate to `users-hierarchy` and install `node_modules` with the following command `npm install` 

6 - Run `npm run dev` to start the project locally

6 - once the project has started, enter the following URL into the browser: http://localhost:3000/api/docs/

7 - there are a total of 5 routes in the Swagger Doc: 

![image](https://user-images.githubusercontent.com/12454898/133962578-002601c0-a554-43ac-80d9-4fda7d44226b.png)
![image](https://user-images.githubusercontent.com/12454898/133962585-e48d8581-0b35-4ff8-84d7-e04d4d28fe37.png)

8 - In order to store the employees list of objects: click on ![image](https://user-images.githubusercontent.com/12454898/133962641-9950bf74-03e7-45df-ab25-ee1789dc73bc.png)

9 - After the row expands, navigate to and click `Try It Out`  for /users/addUsers

![image](https://user-images.githubusercontent.com/12454898/133962682-e9c16a16-7d31-4cbe-a1e8-90d5bcdc7418.png)

10 - paste your custom users list or the below into the request body:
```[
    {
    "Id": 1,
    "Name": "Adam Admin",
    "Role": 1
    },
    {
    "Id": 2,
    "Name": "Emily Employee",
    "Role": 4
    },
    {
    "Id": 3,
    "Name": "Sam Supervisor",
    "Role": 3
    },
    {
    "Id": 4,
    "Name": "Mary Manager",
    "Role": 2
    },
    {
    
    "Id": 5,
    "Name": "Steve Trainer",
    "Role": 5
    }
]```

11 - Try out the first end point under `Users` to check if the list of users has been stored in the cache or not :

![image](https://user-images.githubusercontent.com/12454898/133962816-966b02f1-3f59-4a01-ae2a-4587c19ab9fc.png)

12 - Next step is to make a `post` request for storing the list of roles. You can use the below list of roles or your customized list:

[
    {
    "Id": 1,
    "Name": "System Administrator",
    "Parent": 0
    },
    {
    "Id": 2,
    "Name": "Location Manager",
    "Parent": 1,
    },
    {
    "Id": 3,
    "Name": "Supervisor",
    "Parent": 2,
    },
    {
    "Id": 4,
    "Name": "Employee",
    "Parent": 3,
    },
    {
    "Id": 5,
    "Name": "Trainer",
    "Parent": 3,
    }
]

![image](https://user-images.githubusercontent.com/12454898/133962919-2507baf0-83db-4d96-9428-2b90d14fe0ad.png)

14 - Next, make sure that the list of all the roles has been stored successfully by trying out the `get` end point under `Roles` category. 
![image](https://user-images.githubusercontent.com/12454898/133963024-97caf129-a8b0-4666-8885-e060af01ab7c.png)


15: once you can see the list of users and roles after trying out the `Get` methods. Feel free to try out the route `getSubOrdinates` under `User` section. 

Improvement:
1: Make the code DRY
2: Add further comments
3: Use unit testing apart from validation 
