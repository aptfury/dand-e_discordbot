module.exports = class Twisteds {
    constructor(data) {
        this.id = data.id || null;
        this.name = data.name || null;
        this.image = data.image || null;
        this.trinket = data.trinket || null;
        this.stats = data.stats || null;
        this.notes = data.notes || "No notes available";
    };
}