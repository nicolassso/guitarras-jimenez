import IMAGES from './products.images'

const PRODUCTS_DATA = [
    {
        id: 1,
        title: 'Jazz',
        routename: 'jazz',
        items: [
            {
                id: 1,
                classe: 'jazz',
                name: 'BIG JAZZ Archtop',
                imageUrl: IMAGES.big.jazz.jazzImage1,
                img2: IMAGES.big.jazz.jazzImage2,
                img3: IMAGES.tall.jazz.jazzImage1,
                img4: IMAGES.big.jazz.jazzImage3,
                description: 'Handcrafted in Málaga by th local designer Marcos Jiménez with a polished finish and a perfect sound.'
            },
            {
                id: 2,
                classe: 'jazz',
                name: 'BIG LITTLE JAZZ Archtop',
                imageUrl: IMAGES.big.jazz.jazzImage4,
                img2: IMAGES.big.jazz.jazzImage5,
                img3: IMAGES.tall.jazz.jazzImage2,
                img4: IMAGES.big.jazz.jazzImage6,
                description: 'Some description'
            },
            {
                id: 3,
                classe: 'jazz',
                name: 'LITTLE JAZZ',
                imageUrl: IMAGES.big.jazz.jazzImage2,
                img2: IMAGES.big.jazz.jazzImage6,
                img3: IMAGES.tall.jazz.jazzImage3,
                img4: IMAGES.big.jazz.jazzImage5,
                description: 'Some description'
            }
        ]
    },
    {
        id: 2,
        title: 'Bass',
        routename: 'bass',
        items: [
            {
                id: 4,
                classe: 'bossa',
                name: 'Bass1',
                imageUrl: IMAGES.big.bossa.bossaImage1,
                img2: IMAGES.big.bossa.bossaImage4,
                img3: IMAGES.tall.bossa.bossaImage1,
                img4: IMAGES.big.bossa.bossaImage3,
                description: 'Some description'
            },
            {
                id: 5,
                classe: 'bossa',
                name: 'Bass2',
                imageUrl: IMAGES.big.bossa.bossaImage2,
                img2: IMAGES.big.bossa.bossaImage3,
                img3: IMAGES.tall.bossa.bossaImage2,
                img4: IMAGES.big.bossa.bossaImage2,
                description: 'Some description'
            },
            {
                id: 6,
                classe: 'bossa',
                name: 'Bass3',
                imageUrl: IMAGES.big.bossa.bossaImage3,
                img2: IMAGES.big.bossa.bossaImage2,
                img3: IMAGES.tall.bossa.bossaImage3,
                img4: IMAGES.big.bossa.bossaImage1,
                description: 'Some description'
            }
        ]
    },
    {
        id: 3,
        title: 'Nylon Strings',
        routename: 'nylon strings',
        items: [
            {
                id: 7,
                classe: 'bossa',
                name: 'Nylon string 1',
                imageUrl: IMAGES.big.jazz.jazzImage7,
                img2: IMAGES.big.jazz.jazzImage4,
                img3: IMAGES.tall.jazz.jazzImage4,
                img4: IMAGES.big.bossa.bossaImage4,
                description: 'Some description'
            },
            {
                id: 8,
                classe: 'bossa',
                name: 'Nylon string 2',
                imageUrl: IMAGES.big.jazz.jazzImage2,
                img2: IMAGES.big.jazz.jazzImage3,
                img3: IMAGES.tall.bossa.bossaImage4,
                img4: IMAGES.big.jazz.jazzImage1,
                description: 'Some description'
            },
            {
                id: 9,
                classe: 'bossa',
                name: 'Nylon string 3',
                imageUrl: IMAGES.big.bossa.bossaImage1,
                img2: IMAGES.big.jazz.jazzImage2,
                img3: IMAGES.tall.jazz.jazzImage7,
                img4: IMAGES.big.bossa.bossaImage4,
                description: 'Some description'
            }
        ]
    }
]

export default PRODUCTS_DATA;