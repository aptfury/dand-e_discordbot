const { con } = require('../connect.js');
const { Items, Cards, Floors, LoreRooms, AfkSpot, Lore, Conversation, Character } = require('../models/game.js');

const db = con.db("dand-e");
const items = db.collection("items");
const cards = db.collection("cards");
const floors = db.collection("floors");
const lorerooms = db.collection("lorerooms");
const afkspot = db.collection("afkspot");
const lore = db.collection("lore");
const conversation = db.collection("conversation");
const character = db.collection("character");

// CREATE

async function createItem(data) {
    try {
        await items.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

async function createCard(data) {
    try {
        await cards.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

async function createFloor(data) {
    try {
        await floors.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

async function createLoreRoom(data) {
    try {
        await lorerooms.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

async function createAfkSpot(data) {
    try {
        await afkspot.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

async function createLore(data) {
    try {
        await lore.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

async function createConversation(data) {
    try {
        await conversation.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

async function createCharacter(data) {
    try {
        await character.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

//READ

async function readItem(data) {
    try {
        const doc = await items.findOne(data);

        return new Items(doc);
    }
    catch (e) {
        console.error(e);
    }
}

async function readCard(data) {
    try {
        const doc = await cards.findOne(data);

        return new Cards(doc);
    }
    catch (e) {
        console.error(e);
    }
}

async function readFloor(data) {
    try {
        const doc = await floors.findOne(data);

        return new Floors(doc);
    }
    catch (e) {
        console.error(e);
    }
}

async function readLoreRoom(data) {
    try {
        const doc = await lorerooms.findOne(data);

        return new LoreRooms(doc);
    }
    catch (e) {
        console.error(e);
    }
}

async function readAfkSpot(data) {
    try {
        const doc = await afkspot.findOne(data);

        return new AfkSpot(doc);
    }
    catch (e) {
        console.error(e);
    }
}

async function readLore(data) {
    try {
        const doc = await lore.findOne(data);

        return new Lore(doc);
    }
    catch (e) {
        console.error(e);
    }
}

async function readConversation(data) {
    try {
        const doc = await conversation.findOne(data);

        return new Conversation(doc);
    }
    catch (e) {
        console.error(e);
    }
}

async function readCharacter(data) {
    try {
        const doc = await character.findOne(data);

        return new Character(doc);
    }
    catch (e) {
        console.error(e);
    }
}

// UPDATE

async function updateItem(data, newData) {
    try {
        await items.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateCard(data, newData) {
    try {
        await cards.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateFloor(data, newData) {
    try {
        await floors.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateLoreRoom(data, newData) {
    try {
        await lorerooms.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateAfkSpot(data, newData) {
    try {
        await afkspot.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateLore(data, newData) {
    try {
        await lore.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateConversation(data, newData) {
    try {
        await conversation.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateCharacter(data, newData) {
    try {
        await character.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

// DELETE

async function deleteItem(data) {
    try {
        await items.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteCard(data) {
    try {
        await cards.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteFloor(data) {
    try {
        await floors.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteLoreRoom(data) {
    try {
        await lorerooms.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteAfkSpot(data) {
    try {
        await afkspot.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteLore(data) {
    try {
        await lore.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteConversation(data) {
    try {
        await conversation.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteCharacter(data) {
    try {
        await character.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

module.exports = { createItem, createCard, createFloor, createLoreRoom, createAfkSpot, createLore, createConversation, createCharacter, readItem, readCard, readFloor, readLoreRoom, readAfkSpot, readLore, readConversation, readCharacter, updateItem, updateCard, updateFloor, updateLoreRoom, updateAfkSpot, updateLore, updateConversation, updateCharacter, deleteItem, deleteCard, deleteFloor, deleteLoreRoom, deleteAfkSpot, deleteLore, deleteConversation, deleteCharacter };