var userHelper = require("../helpers/userHelper");
const responseHelper = require("../utils/response.helper");

class Users {

  async addRecord(req, res) {
    try {
    
      let alreadyExistItem = await userHelper.findByEmail(req.body.email);

      if (alreadyExistItem && alreadyExistItem.length) {
        throw "EMAIL_ALREADY_EXISTS";
      } else {
        let item = await userHelper.addRecord(req.body);
        responseHelper.success(res, "SUCCESS", item);
      }
    } catch (error) {
      console.log("ERROR: ", error);
      responseHelper.error(res, error, {});
    }
  }


  async getRecords(req, res) {
    try {
      let items = await userHelper.getRecords();
      responseHelper.success(res, "SUCCESS", items);
    } catch (error) {
      console.log("ERROR: ", error);
      responseHelper.error(res, error, {});
    }
  }
}

module.exports = new Users();
