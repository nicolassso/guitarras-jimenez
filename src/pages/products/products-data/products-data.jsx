import IMAGES from './products.images'

const PRODUCTS_DATA = [
    {
        id: 1,
        title: 'Jazz',
        routename: 'jazz',
        items: [
            {
                id: 1,
                classe: 'bigJazz',
                name: 'BIG JAZZ',
                imageUrl: IMAGES.big.bigJazz.bigJazzImage2,
                img2: IMAGES.tall.bigJazz.bigJazzImage2,
                img3: IMAGES.tall.bigJazz.bigJazzImage1,
                img4: IMAGES.big.bigJazz.bigJazzImage1,
                description: 'Handcrafted in Málaga by the local designer Marcos Jiménez with a polished finish and a perfect sound.'
            },
            {
                id: 2,
                classe: 'littleJazzArchtop',
                name: 'BIG LITTLE JAZZ Archtop',
                imageUrl: IMAGES.big.littleJazzArchtop.littleJazzArchtopImage1,
                img2: IMAGES.tall.littleJazzArchtop.littleJazzArchtopImage2,
                img3: IMAGES.tall.littleJazzArchtop.littleJazzArchtopImage1,
                img4: IMAGES.tall.littleJazzArchtop.littleJazzArchtopImage6,
                description: 'Some description'
            },
            {
                id: 3,
                classe: 'littleJazzDropTop',
                name: 'BIG LITTLE JAZZ Drop Top',
                imageUrl: IMAGES.tall.littleJazzDropTop.littleJazzDropTopImage3,
                img2: IMAGES.tall.littleJazzDropTop.littleJazzDropTopImage2,
                img3: IMAGES.tall.littleJazzDropTop.littleJazzDropTopImage5,
                img4: IMAGES.tall.littleJazzDropTop.littleJazzDropTopImage4,
                description: 'Some description'
            },
            {
                id: 4,
                classe: 'littleJazz',
                name: 'LITTLE JAZZ',
                imageUrl: IMAGES.big.littleJazz.littleJazzImage1,
                img2: IMAGES.tall.littleJazz.littleJazzImage2,
                img3: IMAGES.tall.littleJazz.littleJazzImage1,
                img4: IMAGES.tall.littleJazz.littleJazzImage3,
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
                id: 5,
                classe: 'bossaClassic',
                name: 'BOSSA CLASSIC',
                imageUrl: IMAGES.big.bossaClassic.bossaClassicImage1,
                img2: IMAGES.tall.bossaClassic.bossaClassicImage5,
                img3: IMAGES.tall.bossaClassic.bossaClassicImage3,
                img4: IMAGES.tall.bossaClassic.bossaClassicImage7,
                description: 'Some description'
            },
            {
                id: 6,
                classe: 'gypsyBossaNova',
                name: 'GYPSY BOSSA NOVA',
                imageUrl: IMAGES.tall.gypsyBossaNova.gypsyBossaNovaImage5,
                img2: IMAGES.tall.gypsyBossaNova.gypsyBossaNovaImage2,
                img3: IMAGES.tall.gypsyBossaNova.gypsyBossaNovaImage3,
                img4: IMAGES.tall.gypsyBossaNova.gypsyBossaNovaImage8,
                description: 'Some description'
            },
            {
                id: 7,
                classe: 'assymetricGypsyBossaNova',
                name: 'Assymetric GYPSY BOSSA NOVA',
                imageUrl: IMAGES.big.assymetricGypsyBossaNova.assymetricGypsyBossaNovaImage3,
                img2: IMAGES.big.assymetricGypsyBossaNova.assymetricGypsyBossaNovaImage2,
                img3: IMAGES.tall.assymetricGypsyBossaNova.assymetricGypsyBossaNovaImage1,
                img4: IMAGES.tall.assymetricGypsyBossaNova.assymetricGypsyBossaNovaImage3,
                description: 'Some description'
            }
        ]
    },
    {
        id: 3,
        title: 'Jazzycaster',
        routename: 'jazzycaster',
        items: [
            {
                id: 8,
                classe: 'jazzycaster',
                name: 'JAZZYCASTER',
                imageUrl: IMAGES.tall.jazzycaster.jazzycasterImage1,
                img2: IMAGES.small.jazzycaster.jazzycasterImage1,
                img3: IMAGES.tall.jazzycaster.jazzycasterImage4,
                img4: IMAGES.tall.jazzycaster.jazzycasterImage3,
                description: 'Some description'
            }
        ]
    }
]

export default PRODUCTS_DATA;