import database from "infra/database.js";

async function status(request, response) {
  const uptadeAt = new Date().toISOString();

  const databaseVersionREsult = await database.query("SHOW server_version;");
  const databaseVersionVlue = databaseVersionREsult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections",
  );
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;

  response.status(200).json({
    updated_at: uptadeAt,
    dependencies: {
      database: {
        version: databaseVersionVlue,
        max_connections: parseInt(databaseMaxConnectionsValue),
      },
    },
  });
}

export default status;
