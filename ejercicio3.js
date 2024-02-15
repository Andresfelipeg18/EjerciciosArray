let moom = ["burro",2,true,"cali",4,false,5,"kilo",9,"vaca"]
let moom1= moom.filter(x=>x== "burro");
console.log(moom1);


let indexOf = moom.indexOf("burro");
if (indexOf !== -1) {
    console.log(`" se encuentra en la posición ${indexOf}.`);
} else {
    console.log(" no se encuentra.");
}
