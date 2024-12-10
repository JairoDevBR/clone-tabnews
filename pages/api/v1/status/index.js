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

  const databaseOpenedConnectionsResult = await database.query(
    "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';",
  );
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: uptadeAt,
    dependencies: {
      database: {
        version: databaseVersionVlue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}

export default status;
