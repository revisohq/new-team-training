// ForrestJS Shared Services
const forrestjs = require('@forrestjs/hooks');
const serviceFastify = require('@forrestjs/service-fastify');
const serviceFastifyHealthz = require('@forrestjs/service-fastify-healthz');

forrestjs.run({
  trace: 'compact',
  services: [serviceFastify, serviceFastifyHealthz],
});
