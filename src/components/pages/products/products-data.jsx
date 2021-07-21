import jazzImage1 from '../../../images/big-jazz/IMG_8520.jpg';
import jazzImage2 from '../../../images/big-jazz/IMG_8521.jpg';
import jazzImage3 from '../../../images/big-jazz/IMG_8537.jpg';
import jazzImage4 from '../../../images/big-jazz/IMG_8539.jpg';

const PRODUCTS_DATA = [
    {
        id: 1,
        title: 'Jazz',
        routename: 'jazz',
        items: [
            {
                id: 1,
                name: 'Big Jazz',
                imageUrl: jazzImage1,
                img2: jazzImage2,
                img3: jazzImage3,
                img4: jazzImage4
            },
            {
                id: 2,
                name: 'Bossa Classic',
                imageUrl: jazzImage2,
                img2: jazzImage2,
                img3: jazzImage3,
                img4: jazzImage4
            }

        ]
    },
    {
        id: 2,
        title: 'Bass',
        routename: 'bass',
        items: [
            {
                id: 1,
                name: 'Bass1',
                imageUrl: jazzImage3,
                img2: jazzImage2,
                img3: jazzImage3,
                img4: jazzImage4
            },
            {
                id: 2,
                name: 'Bass2',
                imageUrl: jazzImage4,
                img2: jazzImage2,
                img3: jazzImage3,
                img4: jazzImage4
            }
        ]
    },
    {
        id: 3,
        title: 'Nylon Strings',
        routename: 'nylon strings',
        items: [
            {
                id: 1,
                name: 'Nylon string 1',
                imageUrl: jazzImage1,
                img2: jazzImage2,
                img3: jazzImage3,
                img4: jazzImage4
            },
            {
                id: 2,
                name: 'Nylon string 2',
                imageUrl: jazzImage2,
                img2: jazzImage2,
                img3: jazzImage3,
                img4: jazzImage4
            }
        ]
    }
]

export default PRODUCTS_DATA;