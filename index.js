const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const app = express();
const port = 3000;

// Load the OpenAPI specification
const openapiSpec = YAML.load(path.join(__dirname, "openapi.yaml"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpec));

app.get("/", (req, res) => {
	res.json({ message: "Welcome to the API" });
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
	console.log(`API Docs available at http://localhost:${port}/api-docs`);
});
