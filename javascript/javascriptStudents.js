const startSummerSemester = 4;
const endSummerSemester = 9;

//+ 1 because with DOB 5th December of 1960 one turns 61 only on 5th December 2021
const maxAge = 61;
const minAge = 17;

const joiningDate = new Date();
joiningDate.setFullYear(2015, 0, 1);

let date = new Date();

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
    fetchJSON();
}

function showAdminStaff() {
    document.location.href = "htmlAdminStaff.html", true;
}

function addStudent() {
    show_rest = true;
    showDivs(show_rest);
}

function validateDOB() {
    let selectedDate = new Date(document.getElementById("Student-DOB").value);
    let oldest = new Date(date);
    oldest.setFullYear(date.getFullYear() - maxAge);
    let youngest = new Date(date);
    youngest.setFullYear(date.getFullYear() - minAge);

    if (selectedDate <= oldest || youngest <= selectedDate) {
        alert("Invalid DOB!");
        document.getElementById("Student-DOB").value = null;
    }
}

function validateJoiningDate() {
    let selectedDate = new Date(document.getElementById("Student-Joining-Date").value);
    let oldest = joiningDate;
    let youngest = new Date(date);

    if (selectedDate <= oldest || youngest < selectedDate) {
        alert("Invalid Joining Date!");
        document.getElementById("Student-Joining-Date").value = null;
    }
}


<!-- ===================== not yet implemented ======================== -->
function updateStudent() {

}

function deleteStudent() {

}

function fetchJSON() {
    fetch("students.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}
