module.exports = {
  "GET /get/roles": {
    id: 1,
    username: "ybrelax",
    sex: '1',
    role: 'admin'
  },
  "POST /users/login": (req, res) =>  {
    const { password, username } = req.body;
    if (password === '123456' && username == 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        data: {
          id: 1,
          username: 'ybrelax',
          roles: 'admin'
        }
      })
    } else {
      res.json({
        status: 'ok',
        code: -1,
        data: {
          message: '用户名密码错误'
        }
      })
    }
   
  }
};
