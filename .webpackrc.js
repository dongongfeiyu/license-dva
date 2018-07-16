const path = require("path")
export default {
  "proxy": {
    "/api": {
      "target": "http://10.20.4.81:8080",
      "changeOrigin": true,
      "pathRewrite": {
        "^/api": ""
      }
    }
  },
  "alias": {
    "@": path.resolve(__dirname, "src"),
    "utils": path.resolve(__dirname, "src/utils"),
    "components": path.resolve(__dirname, "src/components"),
    "services": path.resolve(__dirname, "src/services"),
    "models": path.resolve(__dirname, "src/models"),
  },
  sass: {}
}
