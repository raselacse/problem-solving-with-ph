//name = tom hanks;
function welComeGuest(name, greetHandler){
    greetHandler(name); //greetHandler('tom hanks')
}
const actorName = 'Tom Hanks';
function greetMorning(name){ //name = tom hanks
    console.log('Good Morning', name);
}
welComeGuest(actorName, greetMorning); //greetMorning('tom hanks')



