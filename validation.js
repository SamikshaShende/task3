function valid_complete_form(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    document.getElementById('username').classList.add('d-none');

    alert(email);


    if(email && pass){

        if(!email.match(/\S+@\S+\.\S+/)){
            document.getElementById('username').classList.remove('d-none');
            return false;
        }

    }

    return true;
}