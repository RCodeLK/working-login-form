let btn = document.getElementById('btn');


btn.addEventListener("click", ()=>{
    let fieldU = document.getElementById('uname').value;
    let fieldP = document.getElementById('pass').value;

    if(fieldU == "Admin" && fieldP == "Admin@123"){
        window.location.assign("home.html");
    }else{
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML='Wrong Username Or Password';

    }
})