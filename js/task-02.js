const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingridList = document.querySelector("#ingredients");

const ingridItems = ingredients.map(el => {
  const ingridItem = document.createElement("li");
  ingridItem.classList.add("ingrid-item");
  ingridItem.textContent = el;
  return ingridItem;
});
console.log(ingridItems);

ingridList.append(...ingridItems);