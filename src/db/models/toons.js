const { UUID } = require('bson');

module.exports = class Toons {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.name = data.name;
        this.gender = data.gender || null;
        this.pronouns = data.pronouns || null;
        this.stats_id = data.stats_id || 0;
        this.notes_id = data.notes_id || 0;
    };
}