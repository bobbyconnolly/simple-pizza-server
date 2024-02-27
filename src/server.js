const Fastify = require("fastify");
const appRoutes = require("./app");

async function startServer() {
  const fastify = Fastify({
    logger: true,
  });

  // Register the routes
  fastify.register(appRoutes);

  const host = process.env.HOST || "localhost";
  const port = Number(process.env.PORT || 3333);

  try {
    await fastify.listen({ host, port });
    console.log(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

startServer();
