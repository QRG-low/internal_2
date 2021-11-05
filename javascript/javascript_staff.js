var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

<!-- ===================== logout ======================== -->
function userLogout() {
    document.location.href = "../html/html_main.html", true;
}

<!-- ===================== re-direction ======================== -->
function showAdminStudents() {
    document.location.href = "../html/html_students.html", true;
}

<!-- ===================== not yet implemented ======================== -->
function addStaff() {

}

function updateStaff() {

}

function deleteStaff() {

}
