import { EngineIcon } from '@/shared/assets/EngineIcon';
import { TransmissionIcon } from '@/shared/assets/TransmissionIcon';
import { SuspensionIcon } from '@/shared/assets/SuspensionIcon';
import { WheelsIcon } from '@/shared/assets/WheelsIcon';
import { BodyPartsIcon } from '@/shared/assets/BodyPartsIcon';
import { InteriorIcon } from '@/shared/assets/InteriorIcon';

export const partCategories = [
    {
        title: 'Engine',
        description: 'Find essential parts to keep your BMW\'s engine running smoothly',
        icon: <EngineIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522engine%2522%257D'
    },
    {
        title: 'Transmission',
        description: 'Repair or upgrade your BMW\'s transmission with quality parts',
        icon: <TransmissionIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522transmission%2522%257D'
    },
    {
        title: 'Suspension',
        description: 'Choose durable and stylish wheels to enhance performance and look',
        icon: <SuspensionIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522suspension%2522%257D'
    },
    {
        title: 'Wheels',
        description: 'Choose durable and stylish wheels to enhance performance and look',
        icon: <WheelsIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522wheels%2522%257D'
    },
    {
        title: 'Body Parts',
        description: 'Find essential parts to keep your BMW\'s engine running smoothly',
        icon: <BodyPartsIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522body-parts%2522%257D'
    },
    {
        title: 'Interior',
        description: 'Repair or upgrade your BMW\'s exterior with quality body parts',
        icon: <InteriorIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522interior%2522%257D'
    }
];

export const categoriesDict = {
    engine: {
        title: 'Engine',
        description: 'Find essential parts to keep your BMW\'s engine running smoothly',
        icon: <EngineIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522engine%2522%257D'
    },
    transmission: {
        title: 'Transmission',
        description: 'Repair or upgrade your BMW\'s transmission with quality parts',
        icon: <TransmissionIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522transmission%2522%257D'
    },
    suspension: {
        title: 'Suspension',
        description: 'Choose durable and stylish wheels to enhance performance and look',
        icon: <SuspensionIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522suspension%2522%257D'
    },
    wheels: {
        title: 'Wheels',
        description: 'Choose durable and stylish wheels to enhance performance and look',
        icon: <WheelsIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522wheels%2522%257D'
    },
    'body-parts': {
        title: 'Body Parts',
        description: 'Find essential parts to keep your BMW\'s engine running smoothly',
        icon: <BodyPartsIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522body-parts%2522%257D'
    },
    interior: {
        title: 'Interior',
        description: 'Repair or upgrade your BMW\'s exterior with quality body parts',
        icon: <InteriorIcon />,
        href: '/catalog?filters=%257B%2522category%2522%253A%2522interior%2522%257D'
    }
}