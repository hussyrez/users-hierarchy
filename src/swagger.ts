import { getUsers, addUsers, getSubordinates } from './users.swagger';
import { getRoles, addRoles } from './roles.swagger';


export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'your description here',
        termsOfService: '',
        contact: {
            name: 'Mohammad Idrees Rezai',
            email: 'hussy.rez@gmail.com',
            url: 'https://google.com'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
          url: "http://localhost:3000/api",
        },
      ],
    tags: [

    ],
    paths: {
        "/users/getUsers": {
            "get": getUsers
        },
        "/users/addUsers": {
            "post": addUsers
        },
        "/users/getsubordinates/{id}": {
            "get": getSubordinates
        },
        "/roles/getRoles": {
            "get": getRoles
        },
        "/roles/addRoles":{
            "post": addRoles
        } 
    }
}