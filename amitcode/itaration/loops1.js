const score = [0, 1, 3, 4, 5, 6, 7, 8]
for (const nums of score) {
    // console.log(`your score is ${nums}`);
    
}

const firstMessage = "hello world !"

for (const message of firstMessage) {
    if (message === " ") {
    
     continue 
    }
    // console.log(`chrector is spreded ${message}`);
    
}

const maps = new Map()
maps.set ("IN", "India")
maps.set ("PAK", "Pakistan")
maps.set ("NR", "Niderland")
maps.set ("NZ", "Newzland")

for (const [key, value] of maps) {
    // console.log(key, ":-" ,value)
    
}

// forin loop

const newsChannel = {
    bad: "RepublicBharat",
    good: "BBC",
    avarage: "ndtv"
}

for (const key in newsChannel) {
    // console.log(`${key} New Channel ${newsChannel[key]}`);
        
    }


const newsChannel1 = ["good", "bad", "avarage"]

for (const key in newsChannel1) {
    console.log(`Channel ${newsChannel1[key]}`);
        
    }