/*Game List Generate */
$(document).ready(function(){
    console.log("test")
        var template=$("#template").html();
        Mustache.parse(template);
        
        var data = {
        games:[
                {
                    link: "Abyss-Review.html",
                    name: "Abyss",
                    pCount: "2-4 players (5 with expansion)",
                    age: "Ages 14+"
                },
                {
                    link: "Ashes-Review.html",
                    name: "Ashes: Rise of the Phoenixborn",
                    pCount: "2-4 players",
                    age: "Ages 14+"
                },
                {
                    link: "Betrayal.html",
                    name: "Betrayal at House on Hill",
                    pCount: "3-6 players",
                    age: "Ages 12+"
                },
                {
                    link: "Direwild.html",
                    name: "Direwild",
                    pCount: "2-4 players",
                    age: "Ages 13+"
                },
                {
                    link: "Disney_Villainous.html",
                    name: "Disney Villainous",
                    pCount: "2-6 players",
                    age: "Ages 10+"
                },
                {
                    link: "RollG.html",
                    name: "Roll for the Galaxy",
                    pCount: "1-5 players",
                    age: "Ages 13+"
                },
                {
                    link: "Sorcerer_City.html",
                    name: "Sorcerer City",
                    pCount: "1-6 players",
                    age: "Ages 14+"
                },
                {
                    link: "TrialBy.html",
                    name: "Trial by Trolley",
                    pCount: "3-13 players",
                    age: "Ages 14+"
                },
                {
                    link: "UU.html",
                    name: "Unstable Unicorns",
                    pCount: "2-8 players",
                    age: "Ages 14+"
                }
            ],
            upcoming: [
                {
                    link: "JurassicW.html",
                    name:"Jurassic World Miniatures Game",
                    pCount: "2-X players",
                    age: "Ages 14+"
                },
                {
                    link: "Oathsworn.html",
                    name: "Oathsworn",
                    pCount: "1-4 players",
                    age: "Ages 14+"
                },
                {
                    link: "DinoWorld.html",
                    name: "Dinosaur World",
                    pCount: "1-4 players",
                    age: "Ages 10+"
                },
                {
                    link: "Transformers.html",
                    name: "Transformers Deck Building Game",
                    pCount: "1-5 players",
                    age: "Ages 13+"
                },
                {
                    link: "AscenCurse.html",
                    name: "Ascension: Curse of the Golden Isles",
                    pCount: "2-4 players (2-6 with Ascension: Skulls and Sails",
                    age: "Ages 13+"
                },
                {
                    link: "Everdell.html",
                    name: "Everdell",
                    pCount: "1-4 players",
                    age: "Ages 13+"
                }
            ]
        }

        var rendered= Mustache.render(template, data)
        $("#target").html(rendered);
    });