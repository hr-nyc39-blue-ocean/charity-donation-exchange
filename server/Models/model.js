class Model {
  // get(options) {
  //   let parsedOptions = parseData(options);
  //   let queryString = `SELECT * FROM ${
  //     this.tablename
  //   } WHERE ${parsedOptions.string.join(" AND ")} LIMIT 1`;
  //   return executeQuery(queryString, parsedOptions.values).then(
  //     (results) => results[0]
  //   );
  // }
  // create(options) {
  //   let queryString = `INSERT INTO ${this.tablename} SET ?`;
  //   return executeQuery(queryString, options);
  // }
}

module.exports = Model;
