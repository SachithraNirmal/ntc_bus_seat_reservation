const swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "Bus Seat Booking System API",
      version: "1.0.0",
      description: "API documentation for the bus seat booking system."
    },
    servers: [
      {
        url: "http://localhost:80",
        description: "Local server"
      }
    ],
    paths: {
      "/admin": {
        get: {
          summary: "Get all admins",
          responses: {
            200: {
              description: "A list of admins",
            },
          },
        },
        post: {
          summary: "Register a new admin",
          responses: {
            201: {
              description: "Admin created successfully",
            },
          },
        },
      },
      "/admin/login": {
        post: {
          summary: "Admin login",
          responses: {
            200: {
              description: "Admin authenticated",
            },
          },
        },
      },
      "/admin/{id}": {
        get: {
          summary: "Get admin by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Admin ID",
            },
          ],
          responses: {
            200: {
              description: "Admin details",
            },
          },
        },
        put: {
          summary: "Update admin",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Admin ID",
            },
          ],
          responses: {
            200: {
              description: "Admin updated",
            },
          },
        },
        delete: {
          summary: "Delete admin",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Admin ID",
            },
          ],
          responses: {
            200: {
              description: "Admin deleted",
            },
          },
        },
      },
      "/client": {
        get: {
          summary: "Get all clients",
          responses: {
            200: {
              description: "A list of clients",
            },
          },
        },
        post: {
          summary: "Register a new client",
          responses: {
            201: {
              description: "Client created successfully",
            },
          },
        },
      },
      "/client/login": {
        post: {
          summary: "Client login",
          responses: {
            200: {
              description: "Client authenticated",
            },
          },
        },
      },
      "/client/{id}": {
        get: {
          summary: "Get client by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Client ID",
            },
          ],
          responses: {
            200: {
              description: "Client details",
            },
          },
        },
        put: {
          summary: "Update client",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Client ID",
            },
          ],
          responses: {
            200: {
              description: "Client updated",
            },
          },
        },
        delete: {
          summary: "Delete client",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Client ID",
            },
          ],
          responses: {
            200: {
              description: "Client deleted",
            },
          },
        },
      },
      "/bus": {
        get: {
          summary: "Get all buses",
          responses: {
            200: {
              description: "A list of buses",
            },
          },
        },
        post: {
          summary: "Create a new bus",
          responses: {
            201: {
              description: "Bus created successfully",
            },
          },
        },
      },
      "/bus/{id}": {
        get: {
          summary: "Get bus by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Bus ID",
            },
          ],
          responses: {
            200: {
              description: "Bus details",
            },
          },
        },
        put: {
          summary: "Update bus",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Bus ID",
            },
          ],
          responses: {
            200: {
              description: "Bus updated",
            },
          },
        },
        delete: {
          summary: "Delete bus",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Bus ID",
            },
          ],
          responses: {
            200: {
              description: "Bus deleted",
            },
          },
        },
      },
    },
  };
  
  module.exports = swaggerDocument;
  