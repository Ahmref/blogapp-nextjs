const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb: "my-site",
    },
  };
};
