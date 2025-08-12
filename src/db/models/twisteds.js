const { UUID } = require('bson');

module.exports = class Twisteds {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.toon_id = data.toon_id || 0;
        this.image_id = data.image_id || 0;
        this.trinket_id = data.trinket_id || 0;
        this.stats_id = data.stats_id || 0;
        this.notes_id = data.notes_id || 0;
    };
}