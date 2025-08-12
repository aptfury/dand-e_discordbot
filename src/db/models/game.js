class Items {
    constructor(data) {
        this.id = data.id,
        this.name = data.name,
        this.rarity = data.rarity,
        this.count = data.count,
        this.effect = data.effect
    }
}

class Cards {
    constructor(data) {
        this.id = data.id,
        this.name = data.name,
        this.effect = data.effect
    }
}

class Floors {
    constructor(data) {
        this.id = data.id,
        this.name = data.name,
        this.rarity = data.rarity,
        this.variants = data.variants,
        this.info = data.info || null
    }
}

class LoreRooms {
    constructor(data) {
        this.id = data.id,
        this.name = data.name,
        this.floor = data.floor,
        this.location = data.location,
        this.info = data.info || null
    }
}

class AfkSpot {
    constructor(data) {
        this.id = data.id,
        this.floor = data.floor,
        this.location = data.location,
        this.info = data.info || null
    }
}

class Lore {
    constructor(data) {
        this.id = data.id,
        this.character = data.character,
        this.info = data.info
    }
}

class Conversation {
    constructor(data) {
        this.id = data.id,
        this.characterOne = data.characterOne,
        this.characterTwo = data.characterTwo,
        this.dialogue = data.dialogue
    }
}

class Character {
    constructor(data) {
        this.id = data.id,
        this.frequency = data.frequency
        this.toon = data.toon,
        this.twisted = data.twisted,
        this.conversations = data.conversations,
        this.lore = data.lore
    }
}

module.exports = { Items, Cards, Floors, LoreRooms, AfkSpot, Lore, Conversation, Character }