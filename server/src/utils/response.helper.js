const messages = require("./messages.json");

class ResponseHelper {
  error(res, msg, data) {
    let response = {
      success: false,
      status: "FAIL",
      message: messages[msg],
      data: {},
    };
    let status_code = 200;
    res.status(status_code).json(response);
  }

  success(res, msg, data) {
    let response = {
      success: true,
      status: "SUCCESS",
      message: messages[msg],
      data: data,
    };

    res.status(200).json(response);
  }
}

module.exports = new ResponseHelper();
