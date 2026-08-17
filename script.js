function searchResult() {

    const hallTicketInput =
        document.getElementById("hallTicket").value.trim();

    const yearInput =
        document.getElementById("year").value;

    const resultSection =
        document.getElementById("resultSection");

    const notFound =
        document.getElementById("notFound");


    resultSection.classList.add("hidden");
    notFound.classList.add("hidden");


    if (hallTicketInput === "" || yearInput === "") {

        alert("Please enter Hall Ticket Number and select Year.");

        return;
    }


    const student = students.find(function (student) {

        return (
            student.hallTicket.toLowerCase() ===
            hallTicketInput.toLowerCase()
            &&
            student.year === yearInput
        );

    });


    if (!student) {

        notFound.classList.remove("hidden");

        return;
    }


    document.getElementById("studentName").textContent =
        student.name;

    document.getElementById("studentHallTicket").textContent =
        student.hallTicket;

    document.getElementById("studentCourse").textContent =
        student.course;

    document.getElementById("studentYear").textContent =
        getYearName(student.year);

    document.getElementById("studentSGPA").textContent =
        student.sgpa;

    document.getElementById("studentCGPA").textContent =
        student.cgpa;

    document.getElementById("studentResult").textContent =
        student.result;

    document.getElementById("resultStatus").textContent =
        student.result;


    const subjectsTable =
        document.getElementById("subjectsTable");


    subjectsTable.innerHTML = "";


    student.subjects.forEach(function (subject, index) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${subject.name}</td>
            <td>${subject.marks}</td>
            <td>${subject.grade}</td>
        `;

        subjectsTable.appendChild(row);

    });


    resultSection.classList.remove("hidden");


    resultSection.scrollIntoView({
        behavior: "smooth"
    });

}


function getYearName(year) {

    const years = {

        "1": "1st Year",
        "2": "2nd Year",
        "3": "3rd Year",
        "4": "4th Year"

    };

    return years[year] || year;
}0

