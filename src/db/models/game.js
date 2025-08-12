const { UUID } = require('bson');

class Items {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.name = data.name || null;
        this.rarity = data.rarity || null;
        this.count = data.count || null;
        this.effect = data.effect || null;
    }
}

class Cards {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.name = data.name || null;
        this.effect = data.effect || null;
    }
}

class Floors {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.name = data.name || null;
        this.rarity = data.rarity || null;
        this.variants = data.variants || null;
        this.info = data.info || null;
    }
}

class LoreRooms {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.name = data.name || null;
        this.floor = data.floor || null;
        this.location = data.location || null;
        this.toons_id = data.toons_id || 0;
        this.info = data.info || null;
    }
}

class AfkSpot {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.floor = data.floor || null;
        this.location = data.location || null;
        this.info = data.info || null;
    }
}

class Lore {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.toons_id = data.toons_id || 0;
        this.info = data.info || null;
    }
}

class Conversation {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.toons_id = data.toons_id || 0;
        this.dialogue = data.dialogue || null;
    }
}

class Character {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.frequency = data.frequency || null;
        this.toons_id = data.toons_id || 0;
        this.twisteds_id = data.twisteds_id || 0;
        this.conversations_id = data.conversations_id || 0;
        this.lore_id = data.lore_id || 0;
    }
}

module.exports = { Items, Cards, Floors, LoreRooms, AfkSpot, Lore, Conversation, Character };