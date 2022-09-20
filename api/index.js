const axios = require("axios");

const request = axios.create({
  baseURL: `${process.env.DEVELOPMENT}/api/`,
});

const home = async (req, res) => {
  let { data } = await request.get("users");
  res.render("index", { data });
};

const updateUser = async (req, res) => {
  
  try{
    let {data} = await request
    .get("api/users", {
      params: { id: req.query.id },
    })
    res.render("update", { user: data });
  }catch(err){
    res.send(err) 
  }

};

const addUser = (req, res) => {
  res.render("add");
};

module.exports = { home, addUser, updateUser };
