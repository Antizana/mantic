const BaseHandler = require(__dirname + "/BaseHandler");
const _ = require("underscore");
const axios = require("axios");
const aws = require("aws-sdk");
const { SqsUtils } = require("xxxxxx-lib");
aws.config.update({ region: "us-east-1" });

class DHandler extends BaseHandler {
  constructor(request, globals) {
    super(request, globals);
    const { API_KEY, D_DATA_DOWNLOAD_SQS_DEV, D_DATA_DOWNLOAD_SQS_PRD } =
      globals;
    this.API_KEY = API_KEY;
    this.SqsUtils = SqsUtils;
    this.D_DATA_DOWNLOAD_SQS_DEV = D_DATA_DOWNLOAD_SQS_DEV;
    this.D_DATA_DOWNLOAD_SQS_PRD = D_DATA_DOWNLOAD_SQS_PRD;
  }

  async _handle(input) {
    if (!this.API_KEY) {
      throw new Error("Missing environment variable: API_KEY");
    }

    let allPattern = await this.getAllSurveyDownPatterns();
    let allSurveys = await this.getAllSurveyData();
    for (const survey of allSurveys) {
      if (survey === null) {
        throw new Error("The survey data not found. Download halted!!!");
      }
      console.log(survey);
      if (this.isSurveyMatch(allPattern, survey.title)) {
        const res = await this.processSurveyDownloads(survey);
      } else {
        console.log(`Survey not processed: ${survey.path}`);
      }
    }
  }

  getInputDto() {
    return {};
  }

  isSurveyMatch(allPattern, surveyTitle) {
    for (const pattern of allPattern.rows) {
      if (surveyTitle.startsWith(pattern.survey_name_pattern)) {
        return true;
      }
    }
    return false;
  }

  async getAllSurveyData() {
    console.log("Download all survey from ");
    const { ALL_SURVEYS_API_URL, API_KEY } = this;
    const params = {
      format: "json",
      cond: "qualified",
    };
    try {
      const response = await axios.get(ALL_SURVEYS_API_URL, {
        params,
        headers: { "x-apikey": API_KEY },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch survey data.");
    }
  }

  async processSurveyDownloads(data) {
    const queueUrl =
      this.env === "DEV"
        ? this.D_DATA_DOWNLOAD_SQS_DEV
        : this.D_DATA_DOWNLOAD_SQS_PRD;
    const auditor_request = {
      body: data,
    };
    console.log(
      "Sending surveys to download request:",
      JSON.stringify(auditor_request)
    );
    console.log(`queue_url: ${queueUrl}`);
    await this.SqsUtils.sendMessage(queueUrl, auditor_request);
  }

  async getConfig() {
    const bucket = `${CONFIG_BUCKET}/${SURVEY_PATH}`;
    const params = {
      Bucket: bucket,
      Key: CONFIG_FILE_KEY,
    };
    try {
      const data = await s3.getObject(params).promise();
      return JSON.parse(data.Body);
    } catch (err) {
      console.error(`Failed to get config from S3: ${err}`);
      throw new Error(`Failed to get config from S3: ${err}`);
    }
  }
}

module.exports = exports.DHandler = DHandler;
