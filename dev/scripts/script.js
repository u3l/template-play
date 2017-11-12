// Insert JavaScript here...

const username = 'Michael';

console.log(sayName(username) );

const $paragraph = $('section:nth-of-type(1) p:nth-of-type(2)');

$paragraph.text(`${sayName(username)}! This text was changed by jQuery.`);


function sayName(name){
    return `Hello ${name}`;
}