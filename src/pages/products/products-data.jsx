import IMAGES from './products.images'

const PRODUCTS_DATA = [
    {
        id: 1,
        title: 'Jazz',
        routename: 'jazz',
        items: [
            {
                id: 1,
                name: 'BIG JAZZ Archtop',
                imageUrl: IMAGES.big.jazz.jazzImage1,
                img2: IMAGES.big.jazz.jazzImage2,
                img3: IMAGES.tall.jazz.jazzImage1,
                img4: IMAGES.big.jazz.jazzImage3
            },
            {
                id: 2,
                name: 'BIG LITTLE JAZ Archtop',
                imageUrl: IMAGES.big.jazz.jazzImage4,
                img2: IMAGES.big.jazz.jazzImage5,
                img3: IMAGES.tall.jazz.jazzImage2,
                img4: IMAGES.big.jazz.jazzImage6
            },
            {
                id: 3,
                name: 'LITTLE JAZZ',
                imageUrl: IMAGES.big.jazz.jazzImage2,
                img2: IMAGES.big.jazz.jazzImage6,
                img3: IMAGES.tall.jazz.jazzImage3,
                img4: IMAGES.big.jazz.jazzImage5
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
                imageUrl: IMAGES.big.bossa.bossaImage1,
                img2: IMAGES.big.bossa.bossaImage4,
                img3: IMAGES.tall.bossa.bossaImage1,
                img4: IMAGES.big.bossa.bossaImage3
            },
            {
                id: 2,
                name: 'Bass2',
                imageUrl: IMAGES.big.bossa.bossaImage2,
                img2: IMAGES.big.bossa.bossaImage3,
                img3: IMAGES.tall.bossa.bossaImage2,
                img4: IMAGES.big.bossa.bossaImage2
            },
            {
                id: 3,
                name: 'Bass3',
                imageUrl: IMAGES.big.bossa.bossaImage3,
                img2: IMAGES.big.bossa.bossaImage2,
                img3: IMAGES.tall.bossa.bossaImage3,
                img4: IMAGES.big.bossa.bossaImage1
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
                imageUrl: IMAGES.big.jazz.jazzImage7,
                img2: IMAGES.big.jazz.jazzImage4,
                img3: IMAGES.tall.jazz.jazzImage4,
                img4: IMAGES.big.bossa.bossaImage4
            },
            {
                id: 2,
                name: 'Nylon string 2',
                imageUrl: IMAGES.big.jazz.jazzImage2,
                img2: IMAGES.big.jazz.jazzImage3,
                img3: IMAGES.tall.bossa.bossaImage9,
                img4: IMAGES.big.jazz.jazzImage1
            },
            {
                id: 3,
                name: 'Nylon string 3',
                imageUrl: IMAGES.big.bossa.bossaImage1,
                img2: IMAGES.big.jazz.jazzImage2,
                img3: IMAGES.tall.jazz.jazzImage7,
                img4: IMAGES.big.bossa.bossaImage4
            }
        ]
    }
]

export default PRODUCTS_DATA;