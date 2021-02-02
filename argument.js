function getfullName (firstName, lastName){

    // first way

    // let fullName = firstName + ' ' + lastName + ' ' + arguments[2];

    //Second way

    // let fullName = '';
    // for (let i = 0; i < arguments.length; i++) {
    //     fullName = fullName + ' ' + arguments[i];
    // }
    // return fullName;

    //Third way

    let name = [...arguments];           //argument ke array te store kora hoyese. name hocche array variable
    let fullName = '';
    for (let i = 0; i < name.length; i++) {
        fullName = fullName + ' ' + name[i];
    }
    return fullName;
}
let name = getfullName('omuk','Shongket','Bin','Hanif','Shongket','Poribohon');
console.log(name);