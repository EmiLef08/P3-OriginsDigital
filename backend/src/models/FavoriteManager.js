const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(video) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      video.title,
    ]);
  }

  update(video) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [video.title, video.id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT v.category_id, v.title, v.url, v.thumbnail, v.free, f.video_id, c.name AS category_name FROM favorite AS f
    JOIN video AS v ON f.video_id = v.id
    JOIN category AS c ON v.category_id = c.id`
    );
  }

  findAllByUser(favoriteId, userId) {
    return this.database.query(
      `SELECT * FROM favorite WHERE favorite.user_id = ? req.userId`,
      [favoriteId, userId]
    );
  }

  findAllByCategory() {
    return this.database.query(
      `select ${this.table}.*, c.name AS category_name from ${this.table} JOIN category AS c ON ${this.table}.category_id = c.id`
    );
  }

  findById(id) {
    return this.database.query(
      `select ${this.table}.*, c.name AS category_name from ${this.table} JOIN category AS c ON ${this.table}.category_id = c.id where favorite.id = ?`,
      [id]
    );
  }

  delete(id, userId) {
    return this.database.query(
      `delete from ${this.table} where favorite.user_id = ? and favorite.video_id = ?`,
      [id, userId]
    );
  }
}

module.exports = FavoriteManager;
