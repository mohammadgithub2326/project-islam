function home_page() {
    // alert("this is project-islam");
    if (window.location === "index.html") {
        console.log(window.location);
    } else {
        window.location.href = "index.html";
    }

}
function login() {
    alert("are you crazy")
    window.location.href = "login_form.html";

}
function submit_login() {
    // declaring the variables for the logic 
    //string if login sucessfull.
    var login_sucess = "your loged in sucessfully";
    //string if login failed.
    var login_failed = "login failed"
    //declaring the html element to var-"note".
    var note = document.getElementById("login_note");

    //checking the if condition for login.
    if (document.getElementById("value-fname").value && 
    document.getElementById("value-lname").value &&
     document.getElementById("value-age").value &&
      document.getElementById("value-email").value != null) 
      {
        //creating the array named users.
        users = JSON.parse(localStorage.getItem("users")) || [];
        //creating the dictionary named user.
        user = {
            //asaining the input value to variables.
            fname: document.getElementById("value-fname").value,
            lname: document.getElementById("value-lname").value,
            age: document.getElementById("value-age").value,
            email: document.getElementById("value-email").value,
        };
        //adding the user element to users array.
        users.push(user);
        //storing the users array in the localStorage.
        localStorage.setItem("users", JSON.stringify(users));
        //note for sucessfull login
        // note = document.getElementById("login-note");
        note.innerHTML = login_sucess;
    }
    else {
        // note = document.getElementById("login-note");
        note.innerHTML = login_failed;
    }
    
}
//page-2.
//creating button's[home,creat-user,create-admin,user-login,admin-login] in login-form.html
//creating nav-bar.
var p2_nav_bar = document.getElementsByClassName("p2_nav_bar");
//declaring nav-bar classname & id.
p2_nav_bar.id="p2_nav_bar_id";
//adding style's to p2-nav-bar.
p2_nav_bar.style.width="60%";
p2_nav_bar.style.height="150px";
p2_nav_bar.style.backgroundColor="";
p2_nav_bar.style.color="white";
p2_nav_bar.style.borderTopRightRadius="100px";
p2_nav_bar.style.borderBottomRightRadius="100px";
//adding innerhtml to the nav-bar.
p2_nav_bar.innerHTML="thsi is alogin-form-page";
//appending nav-bar to login-form.html.
console.log(p2_nav_bar);


