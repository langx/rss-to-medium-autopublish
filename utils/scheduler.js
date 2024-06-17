const schedule = require("node-schedule");

const scheduleJob = (cronExpression, jobFunction) => {
  schedule.scheduleJob(cronExpression, jobFunction);
};

module.exports = { scheduleJob };
