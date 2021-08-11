const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "node",
  port: 5432,
});

(async () => {
  // try {
  //    const res = await pool.query('SELECT NOW()')
  //    console.log(res.rows[0].now);
  // } catch (error) {
  //     console.log(error.message);
  // } finally {
  //     pool.end()
  // }

//   try {
//     await pool.query(`
//             CREATE TABLE IF NOT EXISTS funcionarios (
//                 id SERIAL PRIMARY KEY,
//                 nome text NOT NULL,
//                 email text NOT NULL UNIQUE,
//                 telefone text NOT NULL UNIQUE
//             );
            
//             CREATE TABLE IF NOT EXISTS enderecos (
//                 id SERIAL PRIMARY KEY,
//                 rua text NOT NULL,
//                 numero integer NOT NULL,
//                 cidade text NOT NULL,
//                 estado text NOT NULL,
//                 id_funcionario integer NOT NULL REFERENCES funcionarios
//             );`);
//     console.log("o ceus");
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     pool.end();
//   }
// })();

try {
    const res = await pool.query(`
        INSERT INTO funcionarios (nome, email, telefone) 
            VALUES
        ($1, $2, $3) 
            RETURNING *;`, 
        ["pedro", "pedro@gmail.com", "(47) 9 9999-9999"]);
    console.log(res.rows[0]);
} catch (error) {
    console.log(error.message);
} finally {
    pool.end()
}
})();