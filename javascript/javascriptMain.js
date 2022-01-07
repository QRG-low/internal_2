/* login form variables */
let login_user_name = document.getElementById('login_user_name');
let login_user_password = document.getElementById('login_user_password');
const login_form = document.getElementById('login_form');
const login_error_element = document.getElementById('login_error_element');

const welcome_message = document.getElementById('welcome-message');

const max_tries = 3;
let actual_tries = 1;

let choseNothing = true;
let choseAdmin = false;
let choseStaff = false;
let user_logged_in = false;

chooseAdminOrStaff();

let administrator;

let current_user;

class User {
    constructor(user_name, user_password, is_admin) {
        this.user_name = user_name;
        this.user_password = user_password;
        this.is_admin = is_admin;
    }
}

const user_admin = new User('Admin', 'Admin', true);
let user_array = [];

user_array.push(user_admin);

<!-- ===================== login screen - user check ======================== -->
login_form.addEventListener('submit', (e) => {
    e.preventDefault();

    let error_messages = [];

    if (actual_tries < max_tries) {
        for (let i = 0; i < user_array.length; i++) {
            if (login_user_name.value === user_array[i].user_name && login_user_password.value === user_array[i].user_password) {
                user_logged_in = true;
                isLoggedInScreen(user_logged_in);
                welcome_message.innerText = `Welcome ${login_user_name.value}`;
                current_user = user_array[i];
                if (current_user.is_admin) {
                    administrator = true;
                }
            } else if (i === user_array.length - 1) {
                actual_tries = actual_tries + 1;
                error_messages.push("Login Credentials Incorrect.")
                document.querySelector('#login_user_name').style.borderColor = "red";
                document.querySelector('#login_user_password').style.borderColor = "red";
            }
        }
    } else {
        disableLogin();
        alert("Log In disabled now!");
    }

    if (error_messages.length > 0) {
        e.preventDefault();
        login_error_element.classList.add('error');
        login_error_element.innerText = error_messages.join(', ');
    }
});

function showPassword() {
    var x = document.getElementById("login_user_password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

<!-- ===================== login screen - default mode ======================== -->
function chooseAdminOrStaff() {
    if (choseNothing) {
        document.getElementById('main-screen').style.display = 'none';
        document.getElementById('login-screen').style.display = 'none';
    } else if (choseAdmin) {
        isLoggedInScreen();
    } else if (choseStaff) {
        showAdminStaff();
    }
}

function chooseAdmin() {
    choseNothing = false;
    choseAdmin = true;
    chooseAdminOrStaff();
}

<!-- ===================== login screen - div check ======================== -->
function isLoggedInScreen(isLoggedIn) {
    if (isLoggedIn) {
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('login-screen').style.display = 'none';
    } else {
        document.getElementById('login-screen').style.display = 'block';
        document.getElementById('main-screen').style.display = 'none';
        document.getElementById('checkAdminOrstaff').style.display = 'none';
    }
}

<!-- ===================== login screen - wrong login ======================== -->
function disableLogin() {
    document.getElementById('login_user_name').disabled = true;
    document.getElementById('login_user_password').disabled = true;
    document.getElementById('signUp').disabled = true;
}

<!-- ===================== logout ======================== -->
function userLogout() {
    login_user_name.value = '';
    login_user_password.value = '';
    location.reload();
}

<!-- ===================== re-direction ======================== -->
function showAdminStudents() {
    document.location.href = "htmlStudents.html", true;
}

function showAdminStaff() {
    document.location.href = "htmlAdminStaff.html", true;
}

function showStaff() {
    document.location.href = "htmlNoAdminStaff.html", true;
}
