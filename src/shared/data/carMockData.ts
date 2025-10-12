import { ICarData } from '@/shared/types/Car';

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
                        },
                        {
                            id: 'touring',
                            name: 'Touring',
                            engines: [
                                { id: '320i', name: '320i' },
                                { id: '330i', name: '330i' },
                                { id: '320d', name: '320d' },
                                { id: '330d', name: '330d' }
                            ]
                        },
                        {
                            id: 'gran-turismo',
                            name: 'Gran Turismo',
                            engines: [
                                { id: '320i', name: '320i' },
                                { id: '330i', name: '330i' },
                                { id: '340i', name: '340i' }
                            ]
                        }
                    ]
                },
                {
                    id: '5-series',
                    name: '5 Series',
                    bodies: [
                        {
                            id: 'sedan',
                            name: 'Sedan',
                            engines: [
                                { id: '520i', name: '520i' },
                                { id: '530i', name: '530i' },
                                { id: '540i', name: '540i' },
                                { id: '520d', name: '520d' },
                                { id: '530d', name: '530d' }
                            ]
                        },
                        {
                            id: 'touring',
                            name: 'Touring',
                            engines: [
                                { id: '520i', name: '520i' },
                                { id: '530i', name: '530i' },
                                { id: '520d', name: '520d' },
                                { id: '530d', name: '530d' }
                            ]
                        },
                        {
                            id: 'gran-turismo',
                            name: 'Gran Turismo',
                            engines: [
                                { id: '530i', name: '530i' },
                                { id: '540i', name: '540i' }
                            ]
                        }
                    ]
                },
                {
                    id: '7-series',
                    name: '7 Series',
                    bodies: [
                        {
                            id: 'sedan',
                            name: 'Sedan',
                            engines: [
                                { id: '730i', name: '730i' },
                                { id: '740i', name: '740i' },
                                { id: '750i', name: '750i' },
                                { id: '730d', name: '730d' },
                                { id: '740d', name: '740d' }
                            ]
                        }
                    ]
                },
                {
                    id: 'x1',
                    name: 'X1',
                    bodies: [
                        {
                            id: 'sav',
                            name: 'SAV',
                            engines: [
                                { id: 'sdrive18i', name: 'sDrive18i' },
                                { id: 'sdrive20i', name: 'sDrive20i' },
                                { id: 'xdrive20i', name: 'xDrive20i' },
                                { id: 'sdrive18d', name: 'sDrive18d' }
                            ]
                        }
                    ]
                },
                {
                    id: 'x3',
                    name: 'X3',
                    bodies: [
                        {
                            id: 'sav',
                            name: 'SAV',
                            engines: [
                                { id: 'xdrive20i', name: 'xDrive20i' },
                                { id: 'xdrive30i', name: 'xDrive30i' },
                                { id: 'xdrive20d', name: 'xDrive20d' },
                                { id: 'xdrive30d', name: 'xDrive30d' }
                            ]
                        }
                    ]
                },
                {
                    id: 'x5',
                    name: 'X5',
                    bodies: [
                        {
                            id: 'sav',
                            name: 'SAV',
                            engines: [
                                { id: 'xdrive30i', name: 'xDrive30i' },
                                { id: 'xdrive40i', name: 'xDrive40i' },
                                { id: 'xdrive30d', name: 'xDrive30d' },
                                { id: 'xdrive40d', name: 'xDrive40d' }
                            ]
                        }
                    ]
                },
                {
                    id: 'x7',
                    name: 'X7',
                    bodies: [
                        {
                            id: 'sav',
                            name: 'SAV',
                            engines: [
                                { id: 'xdrive30i', name: 'xDrive30i' },
                                { id: 'xdrive40i', name: 'xDrive40i' },
                                { id: 'xdrive30d', name: 'xDrive30d' },
                                { id: 'xdrive40d', name: 'xDrive40d' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// Mock OEM search results
export const mockOEMResults = [
    '11427512345',
    '11427512346',
    '11427512347',
    '11427512348',
    '11427512349'
];
