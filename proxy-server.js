const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

const API_SERVICE_URL = "http://31.97.135.138:3000"; // Tu backend real

app.use(
  "/api",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // elimina "/api" al redirigir
    },
  })
);

const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
  console.log("Proxy corriendo en puerto 8080");
});
