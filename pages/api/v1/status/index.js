import database from "infra/database.js";

async function status(request, response) {
  const uptadeAt = new Date().toISOString();

  const databaseVersionREsult = await database.query("SHOW server_version;");
  const databaseVersionVlue = databaseVersionREsult.rows[0].server_version;

  response.status(200).json({
    updated_at: uptadeAt,
    dependencies: {
      database: {
        version: databaseVersionVlue,
      },
    },
  });
}

export default status;
