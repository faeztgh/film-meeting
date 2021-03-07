const proxy = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        proxy("/v1/", {
            target: "https://movie-quote-api.herokuapp.com",
            changeOrigin: true,
        })
    );
};
