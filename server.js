const express = require("express");
const AppError = require("./helpers/appError");
const errorHandler = require("./helpers/errorHandler");
const headers = require("./helpers/headers");
const cors = require("cors");
const router = require("./routes");
const bodyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = process.env.PORT || 3000;

// Middleware configurations
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(headers);

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bus Seat Booking API",
      version: "1.0.0",
      description: "API documentation for the bus seat booking system",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Register routes
app.use(router);

// Handle undefined routes
app.all("*", (req, res, next) => {
  next(new AppError(`The URL ${req.originalUrl} does not exist`, 404));
});

// Global error handler
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});

module.exports = app;
