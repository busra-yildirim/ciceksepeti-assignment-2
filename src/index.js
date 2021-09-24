import Dog from './dog';
import Duck from './duck';

const cardWrapper = document.querySelector('.card-wrapper');

const createdAnimals = (animals) => {
    // create card element
    const card = document.createElement('div');
    const image = document.createElement('img');
    const animalName = document.createElement('div');
    const cardInfo = document.createElement('div');
    // create classes
    card.className = 'card';
    image.className = 'image';
    cardInfo.className = 'card-info';
    animalName.className = 'card-info';
    // append child
    cardWrapper.appendChild(card);
    card.appendChild(image);
    card.appendChild(animalName);
    card.appendChild(cardInfo);
    image.src = animals.image;
    animalName.innerHTML = `I'm ${animals.name}`;
    cardInfo.innerHTML = `${animals.age} Years old, I've ${animals.numberOfLegs} legs`;
};
const dog1 = new Dog('Kırpık', Dog.image, 4, 5);
dog1.image = 'https://picsum.photos/id/1025/200/200';

const dog2 = new Dog('Tarçın', Dog.image, 4, 7);
dog2.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_920udEWBUI0P00buBgCC9M8mKl2szaVcg&usqp=CAU';

const dog3 = new Dog('Boncuk', Dog.image, 4, 8);
dog3.image = 'https://i.pinimg.com/736x/0a/e8/d1/0ae8d196a6c8e450657df9fd5baa3791.jpg';

const duck1 = new Dog('Tiftik', Duck.image, 2, 6);
duck1.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWz3n3XFJveswNgvcLYZSw86KCV4kaWEgsg&usqp=CAU';

const duck2 = new Dog('Sarı', Duck.image, 2, 0);
duck2.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpHZErWl93sobXy-btcyZ1QbRq_YwZYvfWw&usqp=CAU';

const duck3 = new Dog('Doks', Duck.image, 2, 1);
duck3.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigK15piIcRsfQthhtG19OSJt7rnktjcVUmA&usqp=CAU';

createdAnimals(dog1);
createdAnimals(dog2);
createdAnimals(dog3);
createdAnimals(duck1);
createdAnimals(duck2);
createdAnimals(duck3);
console.log(duck3.numberOfLegs);
