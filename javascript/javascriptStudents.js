const startSummerSemester = 4;
const endSummerSemester = 9;

//+ 1 because with DOB 5th December of 1960 one turns 61 only on 5th December 2021
const maxAge = 61;
const minAge = 17;

const joiningDate = new Date();
joiningDate.setFullYear(2015, 0, 1);

let date = new Date();

let show_rest = false;

//showDivs(show_rest);

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

function loadStudentTable(data) {
    let studentTable = document.querySelector('#studentsTable');
    studentTable.innerHTML = "";

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    let headers = ['Student_ID', 'First_Name', 'Last_Name', 'DOB', 'Department', 'Gender', 'Email_ID', 'Joining_Date']

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    filterData(data)
        .forEach(element => {
            let row = document.createElement('tr');
            Object.values(element)
                .forEach(text => {
                    let cell = document.createElement('td');
                    let textNode = document.createTextNode(text);
                    cell.appendChild(textNode);
                    row.appendChild(cell);
                })
            table.appendChild(row);
        });
    studentTable.appendChild(table);

}

function filterData(data) {
    let departmentFilter = document.getElementById("departmentDropDown").value;
    let semesterFilter = document.getElementById("semesterDropDown").value;
    let temp = data.slice();
    if (departmentFilter !== 'All') temp = filterDepartment(temp, departmentFilter);
    if (semesterFilter !== 'All') temp = filterSemester(temp, semesterFilter);
    return temp;
}

function filterDepartment(students, department) {
    return students.filter(student => student.Department === department);
}

function filterSemester(students, semester) {
    if (semester === "Summer") return students.filter(
        student => student.Joining_Date
            .split("-")[1] >= 4 && student.Joining_Date.split("-")[1] <= 9
    );
    if (semester === "Winter") return students.filter(
        student => student.Joining_Date
            .split("-")[1] >= 10 || student.Joining_Date.split("-")[1] <= 3
    );
}

<!-- ===================== not yet implemented ======================== -->
function updateStudent() {

}

function deleteStudent() {

}
