const { UUID } = require('bson');

/**
 *  ABILITIES
 */
class Active {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.toon_id = data.toon_id || 0;
        this.name = data.name || null;
        this.cooldown = data.cooldown || null;
        this.cost = data.cost || null;
        this.info = data.info || null;
    }
}

class Passive {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.toon_id = data.toon_id || 0;
        this.name = data.name || null;
        this.info = data.info || null;
    }
}

class Debuffs {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.twisted_id = data.twisted_id || 0;
        this.effect = data.effect || null;
        this.info = data.info || null;
    }
}

class Attention {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.rating = data.rating || null;
        this.value = data.value || null;
    }
}

class Detection {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.rating = data.rating || null;
        this.direct = data.direct || null;
        this.peripheral = data.peripheral || null;
    }
}

class Extraction {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.rating = data.rating || null;
        this.value = data.value || null;
    }
}

class Health {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.rating = data.rating || null;
        this.value = data.value || null;
    }
}

class Skillchecks {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.rating = data.rating || null;
        this.chance = data.chance || null;
        this.size = data.size || null;
        this.value = data.value || null;
        this.subTime = data.subTime || null;
        this.addProgress = data.addProgress || null;
    }
}

class Speed {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.rating = data.rating || null;
        this.walk = data.walk || null;
        this.sprint = data.sprint || null;
        this.panicWalk = data.panicWalk || null;
        this.panicSprint = data.panicSprint || null;
        this.suppressWalk = data.suppressWalk || null;
        this.suppressSprint = data.suppressSprint || null;
    }
}

class Stamina {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.rating = data.rating || null;
        this.value = data.value || null;
    }
}

class Stealth {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.rating = data.rating || null;
        this.value = data.value || null;
    }
}

class Light {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.rating = data.rating || null;
        this.value = data.value || null;
    }
}

class Rank {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.type = data.type || null;
    }
}

class Images {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.blob = data.blob || null;
        this.bitarray = data.bitarray || null;
        this.url = data.url || null;
    }
}

class Mastery {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.toons_id = data.toons_id || 0;
        this.task = data.task || null;
        this.amount = data.amount || null
    }
}

class Requirements {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.toons_id = data.toons_id || 0;
        this.items_id = data.items_id || 0;
        this.requirement = data.requirement || null;
        this.amount = data.amount || null;
    }
}

class Trinkets {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.name = data.name;
        this.type = data.type || null;
        this.image_id = data.image_id || 0;
        this.twisteds_id = data.twisteds_id || 0;
        this.effect = data.effect || null;
        this.cost = data.cost || null;
    }
}

class Builds {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.name = data.name || null;
        this.toons_id = data.toons_id || 0;
        this.trinkets_id = data.trinkets_id || 0;
        this.notes_id = data.notes_id || 0;
    }
}

class ToonStats {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.toons_id = data.toons_id || 0;
        this.rank_id = data.rank_id || 0;
        this.health_id = data.health_id || 0;
        this.skillcheck_id = data.skillcheck_id || 0;
        this.speed_id = data.speed_id || 0;
        this.stamina_id = data.stamina_id || 0;
        this.stealth_id = data.stealth_id || 0;
        this.extraction_id = data.extraction_id || 0;
        this.light_id = data.light_id || 0;
        this.active_id = data.active_id || 0;
        this.passive_id = data.passive_id || 0;
        this.mastery_id = data.mastery_id || 0;
        this.requirements_id = data.requirements_id || 0;
        this.builds_id = data.builds_id || 0;
        this.image_id = data.image_id || 0;
    }
}

class TwistedStats {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.twisteds_id = data.twisteds_id || 0;
        this.rank_id = data.rank_id || 0;
        this.attention_id = data.attention_id || 0;
        this.detection_id = data.detection_id || 0;
        this.debuffs_id = data.debuffs_id || 0;
        this.speed_id = data.speed_id || 0;
        this.light_id = data.light_id || 0;
        this.trinket_id = data.trinket_id || 0;
        this.image_id = data.image_id || 0;
    }
}

class Notes {
    constructor(data) {
        this._id = data._id || new UUID().toBinary();
        this.text = data.text || null;
        this.name = data.name || null;
        this.author = data.author || null;
    }
}

module.exports = { Active, Passive, Debuffs, Attention, Detection, Extraction, Health, Skillchecks, Speed, Stamina, Stealth, Light, Rank, Images, Mastery, Requirements, Trinkets, Builds, ToonStats, TwistedStats, Notes }