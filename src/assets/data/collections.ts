//types
import { Collections } from '../../types';

//images

//banners
import b1 from '../devImages/banners/b1.jpg';
import b2 from '../devImages/banners/b2.jpg';
import b3 from '../devImages/banners/b3.jpg';
import b4 from '../devImages/banners/b4.jpg';

//miniImages
import m1 from '../devImages/miniImages/m1.jpg';
import m2 from '../devImages/miniImages/m2.jpg';
import m3 from '../devImages/miniImages/m3.jpg';
import m4 from '../devImages/miniImages/m4.jpg';

const collections:Array<Collections> = [
    {
        title: 'Adrenaline Racing',
        name: 'Racing games',
        image: b1,
        miniImage: m1,
        details: `Get only the best racing games for lesser than
        what you would find on the outside market 
        on a regular basic. We provide you the most 
        heart stopping games`
    },
    {
        title: 'Guns Blazing',
        name: 'First person shooter games',
        image: b2,
        miniImage: m2,
        details: `Get only the best racing games for lesser than
        what you would find on the outside market 
        on a regular basic. We provide you the most 
        heart stopping games`
    },
    {
        title: 'Adventure Time',
        name: 'Role playing games',
        image: b3,
        miniImage: m3,
        details: `Get only the best racing games for lesser than
        what you would find on the outside market 
        on a regular basic. We provide you the most 
        heart stopping games`
    },
    {
        title: 'Epic Battles',
        name: 'Tournament games',
        image: b4,
        miniImage: m4,
        details: `Get only the best racing games for lesser than
        what you would find on the outside market 
        on a regular basic. We provide you the most 
        heart stopping games`
    }
];

export default collections