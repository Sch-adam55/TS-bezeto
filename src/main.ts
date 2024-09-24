import './style.css'
type Grade = 1 | 2 | 3 | 4 | 5;


const grades: Grade[] = [];


const gradeInput = document.getElementById("gradeInput") as HTMLInputElement;
const addGradeButton = document.getElementById("addGradeButton") as HTMLButtonElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const gradesList = document.getElementById("gradesList") as HTMLUListElement;


const addGrade = () => {
    const gradeValue = parseInt(gradeInput.value);

    if (gradeValue >= 1 && gradeValue <= 5) {
        grades.push(gradeValue as Grade);
        gradeInput.value = ""; 
        renderGrades(); 
    } else {
        alert("Csak 1 és 5 közötti számot adj meg!");
    }
};


const renderGrades = () => {
    const searchTerm = searchInput.value;
    gradesList.innerHTML = ""; 

    
    const filteredGrades = grades.filter((grade) =>
        grade.toString().includes(searchTerm)
    );

    
    filteredGrades.forEach((grade) => {
        const li = document.createElement("li");
        li.textContent = grade.toString();
        gradesList.appendChild(li);
    });
};


addGradeButton.addEventListener("click", addGrade);
searchInput.addEventListener("input", renderGrades);