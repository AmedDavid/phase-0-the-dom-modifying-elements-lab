// Write your code here!

const main = document.getElementById('main');
main.remove();

const element = document.createElement('div');
document.body.appendChild(element);
const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

const element2 = document.querySelector('ul');
element2.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "David Amedi is the champion";
document.body.appendChild(newHeader);

