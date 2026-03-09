
// switch forms
addNav('auth')
addFoot()
editeHeartCart()


function showRegister(){
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin(){
    document.getElementById("registerBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");
}

// REGISTER
document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();

    let name = regName.value.trim();
    let email = regEmail.value.trim();
    let password = regPassword.value.trim();
    let phone = regPhone.value.trim();

    regNameError.textContent="";
    regEmailError.textContent="";
    regPassError.textContent="";

    let valid=true;

    if(name===""){
        regNameError.textContent="Name required";
        valid=false;
    }

    if(email===""){
        regEmailError.textContent="Email required";
        valid=false;
    }

    if(password.length<6){
        regPassError.textContent="Min 6 characters";
        valid=false;
    }
    if(phone.length!=11){
        regPhoneError.textContent="Phone must contine 11 number";
        valid=false;
    }

    if(valid){
        let user={
            id: crypto.randomUUID(),
            name:name,
            email:email,
            password:password,
            phne:phone,
            hearts:[],
            carts:[],
            orders:[],
        };
        let users = JSON.parse(localStorage.getItem('users')) || []
        let emails=users.map((u)=>u.email)
        if (!emails.includes(email)) {
            users.push(user)
            localStorage.setItem("users",JSON.stringify(users));
            addAlert('Account Created ✅')
            localStorage.setItem("userId",JSON.stringify(user.id));
            setTimeout(() => {
                let home=document.querySelector("[href='index.html']")
                home.click()
            }, 1000);
        }
        else{
            regEmailError.textContent=" This Email is already registered ";
        }
        
    }
});

// LOGIN
document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault();

    let email = loginEmail.value.trim();
    let password = loginPassword.value.trim();

    loginEmailError.textContent="";
    loginPassError.textContent="";

    let users=JSON.parse(localStorage.getItem("users")) || []


    // users.find((u)=>u.email===email)
    // console.log();
    if (users.length < 1) {
        loginPassError.textContent="Wrong Email or Password";
    }
    users.forEach(u => {
         if(email===u.email && password===u.password){
            // alert("Login Success ✅");
            loginPassError.textContent="";
            addAlert('Login Success ✅')
            localStorage.setItem("userId",JSON.stringify(u.id));
            setTimeout(() => {
                let home=document.querySelector("[href='index.html']")
                home.click()
            }, 1000);            
            return
        }else{
            console.log('error');
            
            loginPassError.textContent="Wrong Email or Password";
    }
    });
});
