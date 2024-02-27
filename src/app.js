async function routes(fastify, options) {
  // Simulated database for demonstration purposes
  let orders = {};

  // GET endpoint to get the current order
  fastify.get("/order", async (request, reply) => {
    const token = request.headers["x-auth-token"];
    if (!token) {
      return reply.status(400).send({ error: "No token provided" });
    }

    const order = orders[token] || null;
    return { order };
  });

  // POST endpoint to create or update the order
  fastify.post("/order", async (request, reply) => {
    const token = request.headers["x-auth-token"];
    if (!token) {
      return reply.status(400).send({ error: "No token provided" });
    }

    const { order } = request.body;
    orders[token] = order;
    return { message: "Order updated successfully", order };
  });

  // DELETE endpoint to clear the order
  fastify.delete("/order", async (request, reply) => {
    const token = request.headers["x-auth-token"];
    if (!token) {
      return reply.status(400).send({ error: "No token provided" });
    }

    if (orders[token]) {
      delete orders[token];
      return { message: "Order cleared successfully" };
    }

    return reply.status(404).send({ error: "Order not found" });
  });
}

module.exports = routes;
