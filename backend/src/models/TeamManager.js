const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  constructor() {
    super({ table: "team" });
  }

  findAll() {
    return this.database.query(`
    player.first_name, player.last_name, player.position
      FROM
        ${this.table} 
        INNER JOIN team ON player.team_id = team.id;
    `);
  }

  find(id) {
    return this.database.query(
      `
      SELECT
        
      FROM
        ${this.table} 
        INNER JOIN 
      WHERE ph.id = ?`,
      [id]
    );
  }
}

module.exports = TeamManager;
