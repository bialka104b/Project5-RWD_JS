const values = [
  {
    name: "Banana",
    calories: 50,
    fat: 0.4,
    carbs: 19.2,
  },
  {
    name: "Apple",
    calories: 57,
    fat: 0.01,
    carbs: 19.4,
  },
  {
    name: "Orange",
    calories: 50,
    fat: 0.1,
    carbs: 19.8,
  },
  {
    name: "Blueberries",
    calories: 30,
    fat: 0.2,
    carbs: 19.1,
  },
];

const valuesContainer = document.querySelector(".app__values");

const desktopViev = window.matchMedia("screen and (min-width:500px)");

// funkcja będzie renderować wartości odżywcze w wersji na komputer, postać tablicy
const draw_Desktop_Values = () => {
  valuesContainer.innerHTML = ""; //czyszczenie elementu
  let table = document.createElement("table");

  let thead = document.createElement("thead");
  thead.innerHTML = " <tr><th>Name</th><th>Calories</th><th>Fat</th><th>Carbs</th></tr> ";
  table.appendChild(thead); //wkładamy thead do table

  let tbody = document.createElement("tbody");
  values.forEach((spr) => {
    //dla każdej z wartości w tablicy sprs tworzymy wiersz i komórki
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${spr.name}</td><td>${spr.calories}</td><td>${spr.fat}</td><td>${spr.carbs}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  valuesContainer.appendChild(table); //wkładamy table do .app__values
};

draw_Desktop_Values();
