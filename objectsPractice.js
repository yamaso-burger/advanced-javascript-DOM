// Create Object
var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    age: 38,
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

// Construnctor Function

function houseKeeper (name, age, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    // Method
    this.clean = function(target){
        var canClean = false;
        this.cleaningRepertoire.forEach((cleanSite)=>{
            if(target === cleanSite){
                canClean = true;
            }
        });

        if(canClean){
            alert("Yes sir, I will clean as soon as possible.");
            alert(target + " is completely cleaned.");
        } else {
            alert("Sorry sir, I'm afraid but I can't clean " + target);
        }
        
    }
}

function BellBoy (name, age, hasWorkPermit, language) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.language = language;
}

// Create Object from Construnctor

var houseKeeper2 = new houseKeeper("Aimy", 27, 5, ["bathroom", "diningroom"]);

var BellBoy2 = new BellBoy("Tom", 23, true, ["English"]);