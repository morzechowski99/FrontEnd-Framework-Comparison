let peoples = [];

let protorype = {
   dateOfBirth: new Date(),
   firstName: "John",
   surname: "Smith",
   gender: "male",
};

const people100 = Array(100).fill({ ...protorype });
const people1000 = Array(1000).fill({ ...protorype });
const people10000 = Array(10000).fill({ ...protorype });

function addPerson() {
   const person = { ...protorype };
   peoples.push(person);
   document.getElementById("table-body").appendChild(createRow(person));
}

function clearTable() {
   peoples = [];
   document.getElementById("table-body").innerHTML = "";
}

function renderTable(peopleCount) {
   const tableBody = document.getElementById("table-body");
   let peopleArray = [];
   switch (peopleCount) {
      case 100:
         peopleArray = [...people100];
         break;
      case 1000:
         peopleArray = [...people1000];
         break;
      case 10000:
         peopleArray = [...people10000];
         break;
      default:
         throw new Error("Invalid people count");
   }
   tableBody.innerHTML = "";
   console.log(peopleArray);
   peopleArray.forEach((person) => {
      const row = createRow(person);
      tableBody.appendChild(row);
   });
}

function createRow(person) {
   const tr = document.createElement("tr");
   tr.innerHTML = `<td>${person.firstName}</td>
   <td>${person.surname}</td>
   <td>${person.gender}</td>
   <td>${person.dateOfBirth.toDateString()}</td>`;
   return tr;
}
