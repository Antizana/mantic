"use strict";

const HANDLERS_PATH = `${__dirname}/handler`;

const globals = {
  API_KEY: process.env.API_KEY,
  D_DATA_DOWNLOAD_SQS_DEV: process.env.D_DATA_DOWNLOAD_SQS_DEV,
  D_DATA_DOWNLOAD_SQS_PRD: process.env.D_DATA_DOWNLOAD_SQS_PRD,
  psqlConnectionStringDev: process.env.PSQL_JDBC_DEV_URL,
  psqlConnectionStringPrd: process.env.PSQL_JDBC_PRD_URL,
  psqlHostDev: process.env.DB_HOST_DEV,
  psqlHostPrd: process.env.DB_HOST_PRD,
  psqlPortDev: process.env.DB_PORT_DEV,
  psqlPortPrd: process.env.DB_PORT_PRD,
  psqlDatabaseNameDev: process.env.DB_DATABASE_NAME_DEV,
  psqlDatabaseNamePrd: process.env.DB_DATABASE_NAME_PRD,
  psqlUserNameDev: process.env.DB_USER_DEV,
  psqlUserNamePrd: process.env.DB_USER_PRD,
  psqlPasswordDev: process.env.DB_PASSWORD_DEV,
  psqlPasswordPrd: process.env.DB_PASSWORD_PRD,
  ALL_SURVEYS_API_URL:
    "https://xxxxxxxx.xxxxxxxx.com/api/v1/companies/all/surveys",
};

const routes = {
  handler: require(`${HANDLERS_PATH}/Handler`),
};

exports.handler = async function (request, context) {
  const response = {
    headers: {},
    body: [],
    statusCode: 200,
  };

  try {
    console.log(`Function name: ${context.functionName}`);
    const functionName = context.invokedFunctionArn.split(":").pop();
    console.log(`Alias: ${functionName}`);
    request.stageVariables = { lambdaAlias: functionName };
    const handler = new routes.handler(request, globals);
    response.body = await handler.handle();
  } catch (e) {
    console.log(e);
    response.statusCode = 400;
    response.body = {
      status: 400,
      errorMessage: e.message,
    };
  }

  if (response) {
    response.body = JSON.stringify(response.body);
  }

  return response;
};

if (process.env.TEST_REQUEST) {
  const request = JSON.parse(process.env.TEST_REQUEST);
  exports
    .handler(request, { functionName: "test" })
    .then(console.log)
    .catch(console.error);
}
