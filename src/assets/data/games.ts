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
            {xbox: 3000}
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
            {ps4: 2000},
            {ps5: 2000},
            {xbox: 3000}
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
            {ps4: 2000},
            {ps5: 2000},
            {xbox: 3000}
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
            {ps4: 2000},
            {ps5: 2000},
            {xbox: 3000}
        ],
    }
];

export default games