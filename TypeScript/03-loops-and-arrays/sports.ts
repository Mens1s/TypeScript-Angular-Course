let sportsOne : string[]=["Golf","Cricket","Tennis","Swimming"];

for(let i=0; i< sportsOne.length;i++)
    console.log(sportsOne[i]);

for(let temp of sportsOne) {
    if(temp == sportsOne[1]) console.log(`That is my fav sport ${temp}`);
    else console.log(temp);
}