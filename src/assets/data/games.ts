//types
import { Games } from "../../types";

//images
import genshin from '../devImages/games/genshin.jpg';
import froza from '../devImages/games/froza.jpg';
import freefire from '../devImages/games/freefire.jpeg';
import reddead from '../devImages/games/reddead.jpg';

const games:Array<Games> = [
    {
        title: 'Free Fire',
        image: freefire,
        prices: [
            {name: 'xbox', price: 3000}
        ],
        id: 0,
        rating: 3,
        age: 12,
        collection: 'Action',
        collectionLink: '/action'
    },
    {
        title: 'Genshin Impact',
        image: genshin,
        id: 1,
        rating: 4,
        age: 7,
        collection: 'Role-playing',
        collectionLink: '/role-playing',
        prices: [
            {name: 'ps4', price: 4000},
            {name: 'ps5', price: 5500},
            {name: 'xbox', price: 4700}
        ]
    },
    {
        title: 'Forza horizon 5',
        image: froza,
        id: 2,
        rating: 2,
        age: 7,
        collection: 'Sport',
        collectionLink: '/sport',
        prices: [
            {name: 'ps4', price: 2700},
            {name: 'xbox', price: 3400}
        ],
    },
    {
        title: 'Red Dead Redemption IV',
        image: reddead,
        id: 3,
        rating: 5,
        age: 12,
        collection: 'Adventure',
        collectionLink: '/adventure',
        prices: [
            {name: 'ps4', price: 2000},
            {name: 'ps5', price: 3500},
            {name: 'xbox', price: 4000}
        ],
    }
];

export default games