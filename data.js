import { SIZE } from './constants'

export const imgs = [
    {
        id: 1,
        picture: require('./assets/jpg/1.jpg'),
        color: 'red',
        translate: {
            x: 0,
            y: 0,
        }
    },
    {
        id: 2,
        picture: require('./assets/jpg/2.jpeg'),
        color: 'blue',
        translate: {
            x: SIZE / 2,
            y: 0,
        }
    },
    {
        id: 3,
        picture: require('./assets/jpg/3.jpg'),
        color: 'orange',
        translate: {
            x: -SIZE / 2,
            y: 0,
        }
    },
    {
        id: 4,
        picture: require('./assets/jpg/4.jpeg'),
        color: 'green',
        translate: {
            x: 0,
            y: -SIZE / 2,
        }
    },
    {
        id: 5,
        picture: require('./assets/jpg/5.jpeg'),
        color: 'yellow',
        translate: {
            x: -SIZE / 2,
            y: SIZE / 2,
        }
    },
    {
        id: 6,
        picture: require('./assets/jpg/6.jpeg'),
        color: 'pink',
        translate: {
            x: 0,
            y: SIZE / 2,
        }
    },
    {
        id: 7,
        picture: require('./assets/jpg/7.jpg'),
        color: 'tomato',
        translate: {
            x: SIZE / 2,
            y: SIZE / 2,
        }
    },
    {
        id: 8,
        picture: require('./assets/jpg/8.png'),
        color: 'cyan',
        translate: {
            x: -SIZE / 2,
            y: -SIZE / 2,
        }
    },
]