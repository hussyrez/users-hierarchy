export const getRoles = {
    tags: ['Roles'],
    description: "Returns all roles from the system that the user has access to",
    operationId: 'getAllRoles',
    responses: {
        "200": {          
            description: "A list of the roles",
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
                            Parent: {
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

export const addRoles = {
    tags: ['Roles'],
    description: "Add all users. ",
    operationId: 'addAllRoles',
    requestBody: {
        "description": "List of roles objects to be added",
        "content": {
            "application/json": {
                schema: {
                    type: "array",
                    required: true,
                    items: {
                        "Id": {
                            type: 'integer',
                            description: 'Role Id',
                            required: true
                        },
                        "Name": {
                            type: 'string',
                            description: 'Role Name',
                            required: true
                        },
                        "Parent": {
                            type: 'integer',
                            description: 'Role parent id',
                            required: true
                        }
                    }
                },
                example: [
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
                                description: 'Role Id',
                                required: true
                            },
                            Name: {
                                type: 'string',
                                description: 'Role Name',
                                required: true
                            },
                            Parent: {
                                type: 'integer',
                                description: 'Role parent Id',
                                required: true
                            }
                        }
                    },
                    example: [
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