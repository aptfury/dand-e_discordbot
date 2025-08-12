/**
 *  ABILITIES
 */
class Active {
    constructor(data) {
        this.id = data.id,
        this.toon = data.toon,
        this.name = data.name,
        this.cooldown = data.cooldown,
        this.cost = data.cost,
        this.info = data.info
    }
}

class Passive {
    constructor(data) {
        this.id = data.id,
        this.toon = data.toon,
        this.name = data.name,
        this.info = data.info
    }
}

class Debuffs {
    constructor(data) {
        this.id = data.id,
        this.twisted = data.twisted,
        this.effect = data.effect,
        this.info = data.info
    }
}

class Attention {
    constructor(data) {
        this.id = data.id,
        this.rating = data.rating,
        this.value = data.value
    }
}

class Detection {
    constructor(data) {
        this.id = data.id,
        this.rating = data.rating,
        this.direct = data.direct,
        this.peripheral = data.peripheral
    }
}

class Extraction {
    constructor(data) {
        this.id = data.id,
        this.rating = data.rating,
        this.value = data.value
    }
}

class Health {
    constructor(data) {
        this.id = data.id,
        this.rating = data.rating,
        this.value = data.value
    }
}

class Skillchecks {
    constructor(data) {
        this.id = data.id,
        this.rating = data.rating,
        this.chance = data.chance,
        this.size = data.size,
        this.value = data.value,
        this.subTime = data.subTime,
        this.addProgress = data.addProgress
    }
}

class Speed {
    constructor(data) {
        this.id = data.id,
        this.rating = data.rating,
        this.walk = data.walk,
        this.sprint = data.sprint,
        this.panicWalk = data.panicWalk,
        this.panicSprint = data.panicSprint,
        this.suppressWalk = data.suppressWalk,
        this.suppressSprint = data.suppressSprint
    }
}

class Stamina {
    constructor(data) {
        this.id = data.id,
        this.rating = data.rating,
        this.value = data.value
    }
}

class Stealth {
    constructor(data) {
        this.id = data.id,
        this.rating = data.rating,
        this.value = data.value
    }
}

class Light {
    constructor(data) {
        this.id = data.id,
        this.rating = data.rating,
        this.value = data.value
    }
}

class Rank {
    constructor(data) {
        this.id = data.id,
        this.type = data.type
    }
}

class Images {
    constructor(data) {
        this.id = data.id,
        this.item = data.item,
        this.blob = data.blob,
        this.bitarray = data.bitarray,
        this.url = data.url
    }
}

class Mastery {
    constructor(data) {
        this.id = data.id,
        this.toon = data.toon,
        this.task = data.task,
        this.amount = data.amount
    }
}

class Requirements {
    constructor(data) {
        this.id = data.id,
        this.item = data.item,
        this.requirement = data.requirement,
        this.amount = data.amount
    }
}

class Trinkets {
    constructor(data) {
        this.id = data.id,
        this.name = data.name,
        this.type = data.type,
        this.image = data.image,
        this.from = data.from,
        this.effect = data.effect,
        this.holiday = data.holiday,
        this.other = data.other,
        this.cost = data.cost
    }
}

class Builds {
    constructor(data) {
        this.id = data.id,
        this.name = data.name,
        this.toon = data.toon,
        this.trinketOne = data.trinketOne,
        this.trinketTwo = data.trinketTwo,
        this.notes = data.notes
    }
}

class ToonStats {
    constructor(data) {
        this.id = data.id,
        this.toon = data.toon,
        this.rank = data.rank,
        this.health = data.health,
        this.skillcheck = data.skillcheck,
        this.speed = data.speed,
        this.stamina = data.stamina,
        this.stealth = data.stealth,
        this.extraction = data.extraction,
        this.light = data.light || null,
        this.active = data.active ||null,
        this.passive = data.passive ||null,
        this.mastery = data.mastery,
        this.requirements = data.requirements,
        this.builds = data.builds,
        this.image = data.image
    }
}

class TwistedStats {
    constructor(data) {
        this.id = data.id,
        this.twisted = data.twisted,
        this.rank = data.rank,
        this.attention = data.attention,
        this.detection = data.detection,
        this.debuffs = data.debuffs,
        this.speed = data.speed,
        this.light = data.light,
        this.trinket = data.trinket,
        this.image = data.image
    }
}

module.exports = { Active, Passive, Debuffs, Attention, Detection, Extraction, Health, Skillchecks, Speed, Stamina, Stealth, Light, Rank, Images, Mastery, Requirements, Trinkets, Builds, ToonStats, TwistedStats }