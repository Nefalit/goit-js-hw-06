const listItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemEl.length}`);

const titleListEl = document.querySelectorAll('h2')

listItemEl.forEach((el,i) => {
    const listItem = el.querySelectorAll('li')
    console.log(
      `Category: ${titleListEl[i].textContent}\nElements: ${listItem.length}`
    );
});
