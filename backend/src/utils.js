const { verify } = require('jsonwebtoken')

function getUserId(context) {
  const Authorization = context.request.get('authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = verify(token, process.env.APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  getUserId
}
