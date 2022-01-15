// import { createConnection } from "mysql";

// console.log("test")
// var con = createConnection({
//     host: "mgh-frankfurt-do-user-10576482-0.b.db.ondigitalocean.com",
//     user: "doadmin",
//     password: "UlI7z3f7XfE4PQvS"
// });

// const sql = "SELECT * FROM defaultdb.tokens;"

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//     });
// });


import { createConnection } from "mysql2/promise";
// import {readFileSync} from "fs"
// var connection = createConnection({
//     host: "mgh-frankfurt-do-user-10576482-0.b.db.ondigitalocean.com",
//     user: "doadmin",
//     password: "UlI7z3f7XfE4PQvS",
//     database: 'defaultdb',
//     port: "25060"
// });

// // var connection = createConnection("mysql://doadmin:UlI7z3f7XfE4PQvS@mgh-frankfurt-do-user-10576482-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED");

// connection.connect();

// const sql = "SELECT * FROM defaultdb.tokens;"

// connection.query(sql, function (error, results) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//     connection.end();
// });



// export default async function handler(req, res) {
//     try {
        // const connection = await createConnection({
        //     host: "mgh-frankfurt-do-user-10576482-0.b.db.ondigitalocean.com",
        //     user: "doadmin",
        //     password: "UlI7z3f7XfE4PQvS",
        //     database: 'defaultdb',
        //     port: "25060"
        // });
        // connection.connect();

        // const sql = "SELECT * FROM defaultdb.tokens;"
        // const result = await connection.query(sql)
        // console.log(result[0])
        // connection.end()

        // connection.query(sql, function (error, results) {
        //     if (error) throw error;
        //     console.log('The solution is: ', results);
        //     connection.end();
        //     res.json(results)
        // });

//     } catch (err) {
//         res.status(400).json(err)
//     }
// }

