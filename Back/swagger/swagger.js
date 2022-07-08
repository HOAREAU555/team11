const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GreenTech",
      version: "0.1.0",
      description:
        "GreenTech",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "TP-VOLTRON",
        url: "http://localhost:8084/",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:8084/",
      },
    ],
  },
  apis: ["/routes/users.js"],
};

module.exports = { options }