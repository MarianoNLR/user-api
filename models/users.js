import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'userdb'
}

const connection = await mysql.createConnection(config)

export class UserModel {
  static async getAll () {
    const [result] = await connection.query(
      `SELECT *
      FROM user
      `
    )

    return result
  }

  static async getById ({ id }) {
    const [user] = await connection.query(`
      SELECT * 
      FROM user
      WHERE id_user = ?`, [id])

    return user
  }

  static async create ({ body }) {

  }

  static async update ({ body }) {

  }

  static async delete ({ id }) {

  }
}
