class Database {
    constructor(data) {
        if (Database.exits) {
            return Database.instance;
        }

        this._data = data;
        Database.instance = this;
        Database.exits = true;
        return this;
    }

    getData() {
        return this._data;
    }

    setData() {
        this._data = data;
    }
}

module.exports = Database;
