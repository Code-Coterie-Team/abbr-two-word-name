function abbrevName(name){
   // let fullName = document.getElementById("abbreviateName").value;
    //let showResult = document.querySelector("span");
    const arrName = name.split(" ");
    const abbrevName ="";
    const abbrevFirstName = arrName[0][0].toUpperCase();
    const abbrevLastName = arrName[1][0].toUpperCase();
     return abbrevFirstName.concat(".",abbrevLastName);

   }
   const abbreviateName = abbrevName("Faeze Amini");
   console.log(abbreviateName);