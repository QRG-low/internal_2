let show_rest = false;

let adminIsLoggedIn = false;

showDivs(show_rest);

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

function loadStaffTable(data) {
    let staffTable = document.querySelector('#staffTable');
    staffTable.innerHTML = "";

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    let headers = ['Staff_ID', 'First_Name', 'Last_Name', 'DOB', 'Department', 'Gender', 'Email_ID']

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
    staffTable.appendChild(table);

}

function filterData(data) {
    let departmentFilter = document.getElementById("departmentDropDown").value;
    let temp = data.slice();
    if (departmentFilter !== 'All') temp = filterDepartment(temp, departmentFilter);
    return temp;
}

function filterDepartment(staffs, department) {
    return staffs.filter(staff => staff.Department === department);
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
function addStaff() {
    show_rest = true;
    showDivs(show_rest);
}

function updateStaff() {

}

function deleteStaff() {

}
