const body = document.getElementById('bodyTag');

const div = document.createElement('div');

const headingOne = document.createElement('h1');
headingOne.innerText = 'This is heading One';
div.appendChild(headingOne);

const paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem fugit sint nostrum, voluptate perferendis facere dolor repudiandae non ut fuga nam nesciunt ipsam, a ratione quam omnis, sunt alias natus.';
div.appendChild(paragraph);


body.appendChild(div);



