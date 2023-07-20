const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  constructor() {
    super({ table: "player" });
  }

  findAllPlayers() {
    return this.database.query(`select * from  ${this.table}`);
  }

  findPlayerById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  async insert(player) {
    await this.database.query(
      `INSERT INTO PLAYER (last_name, first_name, nationality, age, position, team_id) VALUES (?,?,?,?,?,?)`,
      [
        player.last_name,
        player.first_name,
        player.nationality,
        player.age,
        player.position,
        player.team_id,
      ]
    );
  }

  update(player) {
    return this.database.query(
      `
      UPDATE ${this.table}
      SET last_name = ?, first_name = ?, nationality = ?, age = ?, position = ?, team_id = ?
      WHERE id = ?`,
      [
        player.last_name,
        player.first_name,
        player.nationality,
        player.age,
        player.position,
        player.team_id,
        player.id,
      ]
    );
  }

  handleDelete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = PlayerManager;
