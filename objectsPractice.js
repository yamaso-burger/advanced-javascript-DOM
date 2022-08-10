// Create Object
var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    age: 38,
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

// Construnctor Function

function HouseKeeper (name, age, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
}

function BellBoy (name, age, hasWorkPermit, language) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.language = language;
}

// Create Object from Construnctor

var houseKeeper2 = new HouseKeeper("Aimy", 27, 5, ["bathroom", "diningroom"]);

var bellBoy2 = new BellBoy("Tom", 23, true, ["English"]);