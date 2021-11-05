let show_rest = false;

showDivs(show_rest)

function showDivs(showRest) {
    if (showRest) {
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('student-screen').style.display = 'none';
        document.getElementById('add-student-screen').style.display = 'block';

    } else {
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('student-screen').style.display = 'block';
        document.getElementById('add-student-screen').style.display = 'none';
    }
}

<!-- ===================== logout ======================== -->
function userLogout() {
    document.location.href = "../html/html_main.html", true;
}

<!-- ===================== re-direction ======================== -->
function showAdminStaff() {
    document.location.href = "../html/html_staff.html", true;
}
