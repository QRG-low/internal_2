let show_rest = false;

showDivs(show_rest);

<!-- ===================== show divs ======================== -->
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
    document.location.href = "htmlMain.html", true;
}

<!-- ===================== re-direction ======================== -->
function showAdminStudents() {
    document.location.href = "htmlStudents.html", true;
}

function showAdminStaff() {
    document.location.href = "htmlAdminStaff.html", true;
}

<!-- ===================== not yet implemented ======================== -->
function addStudent() {
    show_rest = true;
    showDivs(show_rest);
}

function updateStudent() {

}

function deleteStudent() {

}
