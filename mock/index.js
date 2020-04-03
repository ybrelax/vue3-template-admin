module.exports = {
  "POST /get/userInfo": (req, res) => {

    return res.json({
      status: 'ok',
      code: 0,
      data: {
        id: 1,
        username: "ybrelax",
        sex: '1',
        roles: ['admin']
      }
    })
  },

  "POST /users/login": (req, res) => {
    const { password, username } = req.body;
    if (password === '123456' && username == 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        data: {
          id: 1,
          token: '123456'
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
