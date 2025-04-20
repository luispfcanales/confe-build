module.exports = {
    apps: [{
        name: "confe",
        script: "serve",
        env: {
        PM2_SERVE_PATH: "./dist",
        PM2_SERVE_PORT: 8001,
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "/index.html",
        PM2_SERVE_HOST: "0.0.0.0"
        }
    }]
}