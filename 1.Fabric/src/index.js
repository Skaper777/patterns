import "./styles.css";

function Doctor(name) {
  return `
    <div class="card doctor">
      Карточка врача: ${name}
    </div>
  `;
}

function Teacher(name) {
  return `
    <div class="card teacher">
      Карточка преподавателя: ${name}
    </div>
  `;
}

function Student(name) {
  return `
    <div class="card student">
      Карточка студента: ${name}
    </div>
  `;
}

function Fabric(specialist, name) {
  switch (specialist) {
    case "Врач":
      return Doctor(name);
    case "Преподаватель":
      return Teacher(name);
    case "Студент":
      return Student(name);
    default:
      return null;
  }
}

const SPECIALISTS_LIST = ["Врач", "Преподаватель", "Студент"];
const PEOPLE_LIST = [
  {
    name: "Иван",
    specialist: "Врач",
  },
  {
    name: "Владимир",
    specialist: "Преподаватель",
  },
  {
    name: "Виталий",
    specialist: "Студент",
  },
];

const ROOT = document.getElementById("app");

PEOPLE_LIST.forEach((man) => {
  ROOT.innerHTML += Fabric(man.specialist, man.name);
});
