const { con } = require('../connect.js');
const { Active, Passive, Attention, Detection, Debuffs, Extraction, Health, Skillchecks, Speed, Stamina, Stealth, Light, Rank, Images, Mastery, Requirements, Trinkets, Builds, ToonStats, TwistedStats } = require('../models/stats.js');

const db = con.db("dand-e");
const active = db.collection("active");
const passive = db.collection("passive");
const attention = db.collection("attention");
const detection = db.collection("detection");
const debuffs = db.collection("debuffs");
const extraction = db.collection("extraction");
const health = db.collection("health");
const skillchecks = db.collection("skillchecks");
const speed = db.collection("speed");
const stamina = db.collection("stamina");
const stealth = db.collection("stealth");
const light = db.collection("light");
const rank = db.collection("rank");
const images = db.collection("images");
const mastery = db.collection("mastery");
const requirements = db.collection("requirements");
const trinkets = db.collection("trinkets");
const builds = db.collection("builds");
const toonstats = db.collection("toonstats");
const twistedstats = db.collection("twistedstats");

// CREATE

async function createActiveAbility(data) {
    try {
        await active.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createPassiveAbility(data) {
    try {
        await passive.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createDebuffAbility(data) {
    try {
        await debuffs.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createAttention(data) {
    try {
        await attention.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createDetection(data) {
    try {
        await detection.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createExtraction(data) {
    try {
        await extraction.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createHealth(data) {
    try {
        await health.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createSkillcheck(data) {
    try {
        await skillchecks.insertOne(data);
        return true;
    } catch (e) {
        console.error
    }

}

async function createSpeed(data) {
    try {
        await speed.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createStamina(data) {
    try {
        await stamina.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createStealth(data) {
    try {
        await stealth.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createLight(data) {
    try {
        await light.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createRank(data) {
    try {
        await rank.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createImages(data) {
    try {
        await images.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createMastery(data) {
    try {
        await mastery.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createRequirements(data) {
    try {
        await requirements.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createTrinkets(data) {
    try {
        await trinkets.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createBuilds(data) {
    try {
        await builds.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createToonStats(data) {
    try {
        await toonstats.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

async function createTwistedStats(data) {
    try {
        await twistedstats.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }

}

// READ

async function readActive(data) {
    try {
        const doc = await active.findOne(data);

        return new Active(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readPassive(data) {
    try {
        const doc = await passive.findOne(data);

        return new Passive(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readDebuffs(data) {
    try {
        const doc = await debuffs.findOne(data);

        return new Debuffs(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readAttention(data) {
    try {
        const doc = await attention.findOne(data);

        return new Attention(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readDetection(data) {
    try {
        const doc = await detection.findOne(data);

        return new Detection(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readExtraction(data) {
    try {
        const doc = await extraction.findOne(data);

        return new Extraction(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readHealth(data) {
    try {
        const doc = await health.findOne(data);

        return new Health(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readSkillcheck(data) {
    try {
        const doc = await skillchecks.findOne(data);

        return new Skillchecks(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readSpeed(data) {
    try {
        const doc = await speed.findOne(data);

        return new Speed(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readStamina(data) {
    try {
        const doc = await stamina.findOne(data);

        return new Stamina(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readStealth(data) {
    try {
        const doc = await stealth.findOne(data);

        return new Stealth(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readLight(data) {
    try {
        const doc = await light.findOne(data);

        return new Light(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readRank(data) {
    try {
        const doc = await rank.findOne(data);

        return new Rank(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readImages(data) {
    try {
        const doc = await images.findOne(data);

        return new Images(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readMastery(data) {
    try {
        const doc = await mastery.findOne(data);

        return new Mastery(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readRequirements(data) {
    try {
        const doc = await requirements.findOne(data);

        return new Requirements(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readTrinkets(data) {
    try {
        const doc = await trinkets.findOne(data);

        return new Trinkets(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readBuilds(data) {
    try {
        const doc = await builds.findOne(data);

        return new Builds(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readToonStats(data) {
    try {
        const doc = await toonstats.findOne(data);

        return new ToonStats(doc);
    }
    catch (e) {
        console.error(e);
    }

}

async function readTwistedStats(data) {
    try {
        const doc = await twistedstats.findOne(data);

        return new TwistedStats(doc);
    }
    catch (e) {
        console.error(e);
    }

}

// UPDATE

async function updateActive(data, newData) {
    try {
        await active.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updatePassive(data, newData) {
    try {
        await passive.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateDebuffs(data, newData) {
    try {
        await debuffs.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateAttention(data, newData) {
    try {
        await attention.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateDetection(data, newData) {
    try {
        await detection.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateExtraction(data, newData) {
    try {
        await extraction.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateHealth(data, newData) {
    try {
        await health.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateSkillcheck(data, newData) {
    try {
        await skillchecks.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function updateSpeed(data, newData) {
    try {
        await speed.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(0);
    }
}

async function updateStamina(data, newData) {
    try {
        await stamina.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateStealth(data, newData) {
    try {
        await stealth.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateLight(data, newData) {
    try {
        await light.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateRank(data, newData) {
    try {
        await rank.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateImages(data, newData) {
    try {
        await images.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateMastery(data, newData) {
    try {
        await mastery.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateRequirements(data, newData) {
    try {
        await requirements.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateTrinkets(data, newData) {
    try {
        await trinkets.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateBuilds(data, newData) {
    try {
        await builds.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateToonStats(data, newData) {
    try {
        await toonstats.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function updateTwistedStats(data, newData) {
    try {
        await twistedstats.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

// DELETE

async function deleteActive(data) {
    try {
        await active.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deletePassive(data) {
    try {
        await passive.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteDebuffs(data) {
    try {
        await debuffs.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteAttention(data) {
    try {
        await attention.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteDetection(data) {
    try {
        await detection.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteExtraction(data) {
    try {
        await extraction.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteHealth(data) {
    try {
        await health.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteSkillcheck(data) {
    try {
        await skillchecks.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteSpeed(data) {
    try {
        await speed.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }

}

async function deleteStamina(data) {
    try {
        await stamina.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteStealth(data) {
    try {
        await stealth.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteLight(data) {
    try {
        await light.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteRank(data) {
    try {
        await rank.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteImages(data) {
    try {
        await images.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteMastery(data) {
    try {
        await mastery.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteRequirements(data) {
    try {
        await requirements.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteTrinkets(data) {
    try {
        await trinkets.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteBuilds(data) {
    try {
        await builds.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteToonStats(data) {
    try {
        await toonstats.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteTwistedStats(data) {
    try {
        await twistedstats.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

module.exports = { createActiveAbility, createPassiveAbility, createDebuffAbility, createAttention, createDetection, createExtraction, createHealth, createSkillcheck, createSpeed, createStamina, createStealth, createLight, createRank, createImages, createMastery, createRequirements, createTrinkets, createBuilds, createToonStats, createTwistedStats, readActive, readPassive, readDebuffs, readAttention, readDetection, readExtraction, readHealth, readSkillcheck, readSpeed, readStamina, readStealth, readLight, readRank, readImages, readMastery, readRequirements, readTrinkets, readBuilds, readToonStats, readTwistedStats, updateActive, updatePassive, updateDebuffs, updateAttention, updateDetection, updateExtraction, updateHealth, updateSkillcheck, updateSpeed, updateStamina, updateStealth, updateLight, updateRank, updateImages, updateMastery, updateRequirements, updateTrinkets, updateBuilds, updateToonStats, updateTwistedStats, deleteActive, deletePassive, deleteDebuffs, deleteAttention, deleteDetection, deleteExtraction, deleteHealth, deleteSkillcheck, deleteSpeed, deleteStamina, deleteStealth, deleteLight, deleteRank, deleteImages, deleteMastery, deleteRequirements, deleteTrinkets, deleteBuilds, deleteToonStats, deleteTwistedStats };