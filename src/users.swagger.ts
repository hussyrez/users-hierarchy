export const getUsers = {
    tags: ['Users'],
    description: "Returns all users from the system that the user has access to",
    operationId: 'getAllUsers',
    responses: {
        "200": {          
            description: "A list of users.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            Id: {
                                type: 'integer',
                                description: 'Employee Id'
                            },
                            Name: {
                                type: 'string',
                                description: 'Employee Name'
                            },
                            Role: {
                                type: 'integer',
                                description: 'Employee Role Id'
                            }
                        }
                    }
                }
            }
        },
        "400": {
            "description": "Bad Request",
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        status: {
                            type: "string",
                            requires: true
                        },
                        message: {
                            type: "string",
                            requires: true
                        }
                    }
                }
            }
        }
    }
} 

export const addUsers = {
    tags: ['Users'],
    description: "Add all users. ",
    operationId: 'addAllUsers',
    requestBody: {
        "description": "List of user objects to be added",
        "content": {
            "application/json": {
                schema: {
                    type: "array",
                    required: true,
                    items: {
                        "Id": {
                            type: 'integer',
                            description: 'Employee Id',
                            required: true
                        },
                        "Name": {
                            type: 'string',
                            description: 'Employee Name',
                            required: true
                        },
                        "Role": {
                            type: 'integer',
                            description: 'Employee Role Id',
                            required: true
                        }
                    }
                },
                example: [
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
                ]
            }
        }
    },
    responses: {
        "200": {          
            description: "Returns a list of all the users added.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        required: true
,                        items: {
                            Id: {
                                type: 'integer',
                                description: 'Employee Id',
                                required: true
                            },
                            Name: {
                                type: 'string',
                                description: 'Employee Name',
                                required: true
                            },
                            Role: {
                                type: 'integer',
                                description: 'Employee Role Id',
                                required: true
                            }
                        }
                    },
                    example: [
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
                    ]
                }
            }
        },
        "400": {
            "description": "Bad Request",
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        status: {
                            type: "string",
                            requires: true
                        },
                        message: {
                            type: "string",
                            requires: true
                        }
                    }
                }
            }
        }
    }
} 

export const getSubordinates = {
    tags: ['Users'],
    description: "Get subordinates of a given user id. ",
    operationId: 'getAllSubordinates',
    "parameters": [
        {
            "in": "path",
            "name": "id",
            type: "integer",
            required: true,
            "description": "User id to fetch the subordinates",
            "schema": {
                type: "integer",
                required: true
            }
        }
    ],
    responses: {
        "200": {          
            description: "Returns a list of all the subordinated of a given user.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        required: true
,                        items: {
                            Id: {
                                type: 'integer',
                                description: 'Employee Id',
                                required: true
                            },
                            Name: {
                                type: 'string',
                                description: 'Employee Name',
                                required: true
                            },
                            Role: {
                                type: 'integer',
                                description: 'Employee Role Id',
                                required: true
                            }
                        }
                    },
                    example: [
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
                    ]
                }
            }
        },
        "400": {
            "description": "Bad Request",
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        status: {
                            type: "string",
                            requires: true
                        },
                        message: {
                            type: "string",
                            requires: true
                        }
                    }
                }
            }
        }
    }
} 