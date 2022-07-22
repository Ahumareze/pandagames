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
        price: 4.99
    },
    {
        title: 'Genshin Impact',
        image: genshin,
        price: 39.99
    },
    {
        title: 'Froza 5',
        image: froza,
        price: 54.99
    },
    {
        title: 'Red Dead Redemption IV',
        image: reddead,
        price: 19.99
    }
];

export default games