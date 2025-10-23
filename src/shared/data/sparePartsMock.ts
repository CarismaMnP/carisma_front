import { ICarData } from "../types/Car";
import { ISparePart } from "../types/SparePart";

export const carMockData: ICarData = {
    makes: [
        {
            id: 'bmw',
            name: 'BMW',
            models: [
                {
                    id: '3-series',
                    name: '3 Series',
                    bodies: [
                        {
                            id: 'sedan',
                            name: 'Sedan',
                            engines: [
                                { id: '320i', name: '320i' },
                                { id: '330i', name: '330i' },
                                { id: '340i', name: '340i' },
                                { id: '320d', name: '320d' },
                                { id: '330d', name: '330d' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export const mockSpareParts = {
    engine: [
        {
            id: 'eng-001',
            name: 'Turbocharger N20',
            category: 'engine',
            oemNumber: '11427512345',
            alternativeName: 'BMW N20 Turbo',
            replaces: ['11427512344', '11427512343'],
            description: 'Turbocharger for N20 series engines, 2.0L gasoline',
            tags: ['turbocharger', 'turbo', 'n20', '2.0l'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        },
        {
            id: 'eng-002',
            name: 'High Pressure Fuel Pump',
            category: 'engine',
            oemNumber: '11427512346',
            alternativeName: 'BMW N47 HPFP',
            replaces: ['11427512347'],
            description: 'High pressure fuel pump for N47 diesel engines',
            tags: ['hpfp', 'pump', 'diesel', 'n47'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        }
    ] as ISparePart[],

    transmission: [
        {
            id: 'trans-001',
            name: 'Clutch Kit',
            category: 'transmission',
            oemNumber: '21517512345',
            alternativeName: 'BMW Clutch Kit',
            replaces: ['21517512344'],
            description: 'Complete clutch kit for manual transmission',
            tags: ['clutch', 'kit'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        },
        {
            id: 'trans-002',
            name: 'Automatic Transmission Oil Cooler',
            category: 'transmission',
            oemNumber: '17217512345',
            alternativeName: 'AT Cooling Radiator',
            replaces: ['17217512346'],
            description: 'Cooling radiator for automatic transmission',
            tags: ['automatic', 'transmission', 'cooler', 'radiator'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        }
    ] as ISparePart[],

    suspension: [
        {
            id: 'susp-001',
            name: 'Front Shock Absorber',
            category: 'suspension',
            oemNumber: '31317512345',
            alternativeName: 'Strut Assembly',
            replaces: ['31317512346', '31317512347'],
            description: 'Front shock absorber with spring assembly',
            tags: ['shock', 'absorber', 'strut', 'suspension'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        },
        {
            id: 'susp-002',
            name: 'Lower Control Arm',
            category: 'suspension',
            oemNumber: '31127512345',
            alternativeName: 'Front Lower Arm',
            replaces: ['31127512346'],
            description: 'Front lower control arm with bushings',
            tags: ['control', 'arm', 'suspension', 'bushings'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        }
    ] as ISparePart[],

    wheels: [
        {
            id: 'wheel-001',
            name: 'Front Wheel Hub',
            category: 'wheels',
            oemNumber: '31227512345',
            alternativeName: 'Front Wheel Bearing Hub',
            replaces: ['31227512346'],
            description: 'Front wheel hub with bearing',
            tags: ['hub', 'bearing', 'wheel'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        }
    ] as ISparePart[],

    'body-parts': [
        {
            id: 'body-001',
            name: 'Left Headlight',
            category: 'body-parts',
            oemNumber: '63127312345',
            alternativeName: 'Headlight Assembly',
            replaces: ['63127312346'],
            description: 'Left front headlight with xenon',
            tags: ['headlight', 'xenon', 'lighting'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        },
        {
            id: 'body-002',
            name: 'Front Bumper',
            category: 'body-parts',
            oemNumber: '51117312345',
            alternativeName: 'Front Bumper with Grille',
            replaces: ['51117312346'],
            description: 'Front bumper assembly with radiator grille',
            tags: ['bumper', 'front', 'body'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        }
    ] as ISparePart[],

    interior: [
        {
            id: 'int-001',
            name: 'Interior Temperature Sensor',
            category: 'interior',
            oemNumber: '64116912345',
            alternativeName: 'Climate Control Sensor',
            replaces: ['64116912346'],
            description: 'Interior air temperature sensor for climate control system',
            tags: ['sensor', 'temperature', 'climate'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        },
        {
            id: 'int-002',
            name: 'Engine Start Button',
            category: 'interior',
            oemNumber: '61326912345',
            alternativeName: 'Start-Stop Button',
            replaces: ['61326912346'],
            description: 'Engine start/stop button with illumination',
            tags: ['button', 'start', 'ignition'],
            car: carMockData,
            priceDollars: 125,
            priceCents: 45,
            images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }],
        }
    ] as ISparePart[]
};