const regex =/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
localStorage.setItem('user1@gmail.com','pass1');
localStorage.setItem('user2@outlook.fr','pass2');
localStorage.setItem('user3@gmail.com','pass3');
localStorage.setItem('user4@gmail.com','pass4');

document.getElementById('myButton').onclick = ()=>{
    let Email = document.getElementById('myEmail');
    let Password = document.getElementById('myPassword'); 
    let Verif = document.getElementById('myVerif');
    const Errmsg ="Erreur au niveau d'email"
    const Errmsg1 = "Compte n'existe pas";
    const PassErrMsg = "Password Incorrect";
    const Vmsg = "Authentification valide";
    
    if(Email.value){
        if(regex.test(Email.value)){
            if(localStorage.getItem(Email.value)){
                if(localStorage.getItem(Email.value) === Password.value){
                    ///email existe 
                    Verif.style.color="green";
                    Verif.innerText = Vmsg;
                }else{
                    //Password invalide
                    Verif.style.color="red";
                    Verif.innerText = PassErrMsg;                   
                }
            }else{

                ///email n'existe pas
                Verif.style.color="red";
                Verif.innerText = Errmsg1;
            }
        }else{
            ///erreur au niveau syntax email
            Verif.style.color="red";
            Verif.innerText = Errmsg;
        }

    }

    Email.value="";
    Password.value="";
}
