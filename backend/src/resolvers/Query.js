const Query = {
  hello: (parent, args, context) => {
    console.log(context)
    return 'Helllooooooo'
  }
};

module.exports = {
  Query
}
