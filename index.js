const createHafas = require("hafas-client");
const createApi = require("hafas-rest-api");

const configs = [
  {
    hostname: "db.transportflow.online",
    port: 3000,
    provider: "DB (Deutsche Bahn)",
    profile: require("hafas-client/p/db")
  },
  {
    hostname: "bvg.transportflow.online",
    port: 3001,
    provider: "BVG (Berliner Verkehrsbetriebe)",
    profile: require("hafas-client/p/bvg")
  },
  {
    hostname: "vbb.transportflow.online",
    port: 3002,
    provider: "VBB (Verkehrsverbund Berlin-Brandenburg)",
    profile: require("hafas-client/p/vbb")
  },
  {
    hostname: "oebb.transportflow.online",
    port: 3003,
    provider: "ÖBB (Österreichische Bundesbahn)",
    profile: require("hafas-client/p/oebb")
  },
  {
    hostname: "insa.transportflow.online",
    port: 3004,
    provider: "NASA/INSA (Sachsen-Anhalt)",
    profile: require("hafas-client/p/insa")
  },
  {
    hostname: "nahsh.transportflow.online",
    port: 3005,
    provider: "NAHSH (Schleswig-Holstein)",
    profile: require("hafas-client/p/nahsh")
  },
  {
    hostname: "rmv.transportflow.online",
    port: 3006,
    provider: "RMV (Rhein-Main-Verkehrsverbund)",
    profile: require("hafas-client/p/rmv")
  },
  {
    hostname: "vgs.transportflow.online",
    port: 3007,
    provider: "Saarfahrplan/VGS",
    profile: require("hafas-client/p/saarfahrplan")
  },
  {
    hostname: "cfl.transportflow.online",
    port: 3008,
    provider: "CFL (Luxembourg National Railway Company)",
    profile: require("hafas-client/p/cfl")
  },
  {
    hostname: "hvv.transportflow.online",
    port: 3009,
    provider: "HVV (Hamburger Verkehrsverbund)",
    profile: require("hafas-client/p/hvv")
  },
  {
    hostname: "nvv.transportflow.online",
    port: 3010,
    provider: "NVV (Nordhessischer Verkehrsverbund)",
    profile: require("hafas-client/p/nvv")
  },
  {
    hostname: "vsn.transportflow.online",
    port: 3011,
    provider: "VSN (Verkehrsverbund Süd-Niedersachsen)",
    profile: require("hafas-client/p/vsn")
  },
  {
    hostname: "invg.transportflow.online",
    port: 3012,
    provider: "INVG (Ingolstädter Verkehrsgesellschaft)",
    profile: require("hafas-client/p/invg")
  },
  {
    hostname: "vbn.transportflow.online",
    port: 3013,
    provider: "VBN (Verkehrsverbund Bremen/Niedersachsen)",
    profile: require("hafas-client/p/vbn")
  },
  {
    hostname: "vmt.transportflow.online",
    port: 3014,
    provider: "VMT (Verkehrsverbund Mittelthüringen)",
    profile: require("hafas-client/p/vmt")
  }
];

configs.forEach(data => {
  const config = {
    ...data,
    name: "hafas-rest-endpoint",
    homepage: "https://github.com/Transportflow/HafasRestEndpoint",
    version: "1.0.0",
    description: "Transportflow hosted api for " + data.provider,
    docsLink: " "
  };

  const api = createApi(
    createHafas(config.profile, config.hostname),
    config,
    () => {}
  );

  listen(api, config);
});

async function listen(api, config) {
  api.listen(config.port, err => {
    if (err) console.error(err);
    console.log(config.hostname + " listening");
  });
}
