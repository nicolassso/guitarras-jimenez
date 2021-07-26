import jazzImage1 from '../../../images/big-jazz/IMG_8520.jpg';
import jazzImage2 from '../../../images/big-jazz/IMG_8521.jpg';
import jazzImage3 from '../../../images/big-jazz/IMG_8537.jpg';
import jazzImage4 from '../../../images/big-jazz/IMG_8539.jpg';
import jazzImage5 from '../../../images/big-jazz/IMG_8569.jpg';
import jazzImage6 from '../../../images/big-jazz/IMG_8566.jpg';

import bossaClassic1 from '../../../images/bossa-classic-salud/bossa-classic-salud-facebook/1.jpg';
import bossaClassic2 from '../../../images/bossa-classic-salud/bossa-classic-salud-facebook/2.jpg';
import bossaClassic3 from '../../../images/bossa-classic-salud/bossa-classic-salud-facebook/3.jpg';
import bossaClassic4 from '../../../images/bossa-classic-salud/bossa-classic-salud-facebook/4.jpg';
import bossaClassic5 from '../../../images/bossa-classic-salud/bossa-classic-salud-facebook/5.jpg';
import bossaClassic6 from '../../../images/bossa-classic-salud/bossa-classic-salud-facebook/6.jpg';
import bossaClassic7 from '../../../images/bossa-classic-salud/bossa-classic-salud-facebook/7.jpg';
import bossaClassic8 from '../../../images/bossa-classic-salud/bossa-classic-salud-facebook/8.jpg';
import bossaClassic9 from '../../../images/bossa-classic-salud/bossa-classic-salud-facebook/9.jpg';



const PRODUCTS_DATA = [
    {
        id: 1,
        title: 'Jazz',
        routename: 'jazz',
        items: [
            {
                id: 1,
                name: 'BIG JAZZ Archtop',
                imageUrl: jazzImage1,
                img2: jazzImage2,
                img3: jazzImage5,
                img4: jazzImage4
            },
            {
                id: 2,
                name: 'BIG LITTLE JAZ Archtop',
                imageUrl: jazzImage3,
                img2: jazzImage2,
                img3: jazzImage6,
                img4: jazzImage4
            },
            {
                id: 3,
                name: 'LITTLE JAZZ',
                imageUrl: jazzImage6,
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
                imageUrl: bossaClassic4,
                img2: bossaClassic1,
                img3: bossaClassic2,
                img4: bossaClassic9
            },
            {
                id: 2,
                name: 'Bass2',
                imageUrl: bossaClassic5,
                img2: bossaClassic4,
                img3: bossaClassic3,
                img4: bossaClassic1
            },
            {
                id: 3,
                name: 'Bass3',
                imageUrl: bossaClassic8,
                img2: bossaClassic1,
                img3: bossaClassic2,
                img4: bossaClassic4
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
            },
            {
                id: 3,
                name: 'Nylon string 3',
                imageUrl: jazzImage2,
                img2: jazzImage2,
                img3: jazzImage3,
                img4: jazzImage4
            }
        ]
    }
]

export default PRODUCTS_DATA;