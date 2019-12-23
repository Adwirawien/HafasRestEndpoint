const createHafas = require("hafas-client");
const bvgProfile = require("hafas-client/p/bvg");

const createApi = require("hafas-rest-api");

const config = {
  hostname: "api.transportflow.online",
  port: 3000,
  name: "hafas-rest-endpoint",
  homepage: "https://github.com/Adwirawien/HafasRestEndpoint",
  version: "1.0.0",
  description: "Transportflow hosted hafas-rest-api",
  docsLink: "-"
};

const hafas = createHafas(bvgProfile, "hafas-rest-endpoint");
const api = createApi(hafas, config, () => {});

api.listen(config.port, err => {
  if (err) console.error(err);
});
