// The purpose of this file is to get more aqainted with git commands.

let cats = [
    {name: "Tabby", likes: "catnip"},
    {name: "Holly", likes: "fishes"}
];

function whatTheCatsLike(obj) {
    for(element in obj) console.log(obj[element]);

    for(let i = 0; i < cats.length; i++) {
        console.log(`${cats[i].name} likes ${cats[i].likes}.`)
    }
    return null;
}

console.log(whatTheCatsLike(cats));
