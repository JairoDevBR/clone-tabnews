import database from "infra/database.js";

async function status(request, response) {
  const uptadeAt = new Date().toISOString();

  response.status(200).json({
    updated_at: uptadeAt,
  });
}

export default status;
