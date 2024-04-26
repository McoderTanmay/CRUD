const userInfo = require("../model/user");

module.exports = {
  async createInstance(body) {
    return await userInfo.create(body);
  },
  async findAllDocs() {
    return await userInfo.find({});
  },
  async findDocByName(data) {
    return await userInfo.find({ name: data });
  },
  async findDocById(userID){
    return await userInfo.findOne({_id:userID});
  },
  async updateDoc(data, id){
    const filter = {_id:id};
    return await userInfo.findOneAndUpdate(filter, data, {new:true});
  },
  async deleteDoc(id){
    return await userInfo.deleteOne({_id:id});
  }
};
