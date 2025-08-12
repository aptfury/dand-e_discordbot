module.exports = class Toons {
    constructor(data) {
        this.id = data.id || null;
        this.name = data.name || null;
        this.gender = data.gender || null;
        this.pronouns = data.pronouns || null;
        this.stats = data.stats || null;
        this.abilities = data.abilities || null;
        this.mastery = data.mastery || null;
        this.requirements = data.requirements || null;
        this.builds = data.builds || null;
    };
}