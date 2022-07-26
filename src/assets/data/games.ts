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
        price: 4.99,
        id: 0,
        rating: 3,
        collection: {
            name: 'Action',
            link: '/action'
        }
    },
    {
        title: 'Genshin Impact',
        image: genshin,
        price: 39.,
        id: 1,
        rating: 4,
        collection: {
            name: 'Role-playing',
            link: '/role-playing'
        }
    },
    {
        title: 'Froza horizon 5',
        image: froza,
        price: 54.99,
        id: 2,
        rating: 2,
        collection: {
            name: 'Sport',
            link: '/sport'
        }
    },
    {
        title: 'Red Dead Redemption IV',
        image: reddead,
        price: 19.99,
        id: 3,
        rating: 5,
        collection: {
            name: 'Adventure',
            link: '/adventure'
        }
    }
];

export default games