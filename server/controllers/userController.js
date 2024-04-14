const bcrypt = require("bcrypt");
const userQuery = require("../querries/userQuery");

module.exports = {
    //Function for creating Document in Database
  async createUser(req, res) {
    let password = req.body.password;
    password = await bcrypt.hash(password, 10);

    const body = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: password,
    };
    try {
      const user = await userQuery.createInstance(body);
      return res.status(200).send({
        code: 200,
        status: "Success",
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ code: 500, status: "failed", message: error.message });
    }
  },
//   Function for finding all Documents in Database
  async getAllDocuments(req, res) {
    try {
      const users = await userQuery.findAllDocs();
      return res.status(200).send({
        code: 200,
        status: "Success",
        data: users,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ code: 500, status: "failed", massage: error.massage });
    }
  },
  async getDocumentByName(req, res){
    let name = req.body.name;
    try {
        const user = await userQuery.findDocByName(name);
        return res.status(200).send({
            code: 200,
            status: "Success",
            data: user,
          });
    } catch (error) {
        console.log(error);
        return res
          .status(500)
          .send({ code: 500, status: "failed", massage: error.massage });
    }
  },
  async getDocumentById(req, res){
    let id = req.body.id;
    try {
        const user = await userQuery.findDocById(id);
        return res.status(200).send({
            code: 200,
            status: "Success",
            data: user,
          });
    } catch (error) {
        console.log(error);
        return res
          .status(500)
          .send({ code: 500, status: "failed", massage: error.massage });
    }
  },
  async updateDocument(req, res){
    const id = req.body.id;
    const body = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    }
    try {
      const user = await userQuery.updateDoc(body, id);
        return  res.status(200).send({
          code: 200,
          status: "Success",
          data: user,
        });
    } catch (error) {
        console.log(error);
        return res
          .status(500)
          .send({ code: 500, status: "failed", massage: error.massage });
    }
  },
  async deleteDocument(req, res){
    const id = req.body.id;
    try {
      const count = await userQuery.deleteDoc(id);
      return res.status(200).send({
        code: 200,
        status: "Success",
        data: user,
      });
    } catch (error) {
      console.log(error);
        return res
          .status(500)
          .send({ code: 500, status: "failed", massage: error.massage });
    }
  }
};
