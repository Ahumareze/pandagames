//types
import { MainCollections } from '../../types';

//games
import action from '../devImages/collections/action.jpg';
import adventure from '../devImages/collections/adventure.jpg';
import multiplayer from '../devImages/collections/multiplayer.jpg';
import racing from '../devImages/collections/racing.jpg';
import role_playing from '../devImages/collections/role-playing.jpg';
import sports from '../devImages/collections/sports.jpg';
import strategy from '../devImages/collections/strategy.jpg';
import simulation from '../devImages/collections/stimulation.jpg';

const mainCollections:Array<MainCollections> = [
    {
        name: 'Action',
        image: action,
        link: '/action'
    },
    {
        name: 'Adventure',
        image: adventure,
        link: '/adventure'
    },
    {
        name: 'Multiplayer',
        image: multiplayer,
        link: '/multiplayer'
    },
    {
        name: 'Sport',
        image: sports,
        link: '/sport'
    },
    {
        name: 'Role-playing',
        image: role_playing,
        link: '/role-playing'
    },
    {
        name: 'Strategy',
        image: strategy,
        link: '/strategy'
    },
    {
        name: 'Racing',
        image: racing,
        link: '/racing'
    },
    {
        name: 'Simulation',
        image: simulation,
        link: '/simulation'
    }
];

export default mainCollections;