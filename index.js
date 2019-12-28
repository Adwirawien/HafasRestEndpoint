const createHafas = require("hafas-client");
const createApi = require("hafas-rest-api");

const bvgProfile = require("hafas-client/p/bvg");
const dbProfile = require("hafas-client/p/db");

const bvgConfig = {
  hostname: "bvg.api.transportflow.online",
  port: 3000,
  name: "hafas-rest-endpoint",
  homepage: "https://github.com/Adwirawien/HafasRestEndpoint",
  version: "1.0.0",
  description: "Transportflow hosted hafas-rest-api for Berliner Verkehrsbetriebe",
  docsLink: " "
};
const dbConfig = {
  hostname: "db.api.transportflow.online",
  port: 3001,
  name: "hafas-rest-endpoint",
  homepage: "https://github.com/Adwirawien/HafasRestEndpoint",
  version: "1.0.0",
  description: "Transportflow hosted hafas-rest-api for Deutsche Bahn",
  docsLink: " "
};

const bvgApi = createApi(createHafas(bvgProfile, "hafas-rest-endpoint"), bvgConfig, () => {});
const dbApi = createApi(createHafas(dbProfile, "hafas-rest-endpoint"), dbConfig, () => {});

bvgApi.listen(bvgConfig.port, err => {
  if (err) console.error(err);
  console.log("BVG Api listening");
});

dbApi.listen(dbConfig.port, err => {
  if (err) console.error(err);
  console.log("DB Api listening");
});
