const elements = document.querySelectorAll('#categories .item');
console.log('Number of categories:', elements.length);
elements.forEach(element => {
    const title = element.querySelector('h2').textContent;
    const name = element.querySelectorAll('li');
    console.log('Category:', title);
    console.log('Elements:', name.length)
});