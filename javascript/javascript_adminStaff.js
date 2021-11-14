let show_rest = false;

let adminIsLoggedIn = false;

showDivs(show_rest);

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

<!-- ===================== show divs ======================== -->
function isAdmin(notAdmin) {
    if (notAdmin) {
        document.getElementById('main-screen').style.display = 'none';
        document.getElementById('staff-screen').style.display = 'none';
        document.getElementById('add-staff-screen').style.display = 'block';
        document.getElementById('navbar-staff').style.display = 'none';

    } else {
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('staff-screen').style.display = 'block';
        document.getElementById('add-staff-screen').style.display = 'none';
    }
}

<!-- ===================== show divs ======================== -->
function showDivs(showRest) {
    if (showRest) {
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('staff-screen').style.display = 'none';
        document.getElementById('add-staff-screen').style.display = 'block';

    } else {
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('staff-screen').style.display = 'block';
        document.getElementById('add-staff-screen').style.display = 'none';
    }
}

<!-- ===================== logout ======================== -->
function userLogout() {
    document.location.href = "../html/html_main.html", true;
}

<!-- ===================== re-direction ======================== -->
function showAdminStudents() {
    document.location.href = "../html/html_students.html", true;
}

function showAdminStaff() {
    document.location.href = "../html/html_adminStaff.html", true;
}

<!-- ===================== not yet implemented ======================== -->
function addStaff() {
    show_rest = true;
    showDivs(show_rest);
}

function updateStaff() {

}

function deleteStaff() {

}
