require('mysql').createConnection(
  {host: 'localhost',user: 'root',password: 'password',database: 'mydb',multipleStatements: true}
).query("SELECT * FROM customers");
