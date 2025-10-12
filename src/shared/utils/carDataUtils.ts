import { ICarData, IMake, IModel, IBody, IEngine } from '@/shared/types/Car';

/**
 * Получить марку автомобиля по ID
 */
export const getMakeById = (data: ICarData, makeId: string): IMake | undefined => {
    return data.makes.find(make => make.id === makeId);
};

/**
 * Получить модель автомобиля по ID марки и модели
 */
export const getModelById = (data: ICarData, makeId: string, modelId: string): IModel | undefined => {
    const make = getMakeById(data, makeId);
    return make?.models.find(model => model.id === modelId);
};

/**
 * Получить кузов автомобиля по ID марки, модели и кузова
 */
export const getBodyById = (data: ICarData, makeId: string, modelId: string, bodyId: string): IBody | undefined => {
    const model = getModelById(data, makeId, modelId);
    return model?.bodies.find(body => body.id === bodyId);
};

/**
 * Получить двигатель автомобиля по всем ID
 */
export const getEngineById = (data: ICarData, makeId: string, modelId: string, bodyId: string, engineId: string): IEngine | undefined => {
    const body = getBodyById(data, makeId, modelId, bodyId);
    return body?.engines.find(engine => engine.id === engineId);
};

/**
 * Получить все модели для выбранной марки
 */
export const getModelsByMake = (data: ICarData, makeId: string): IModel[] => {
    const make = getMakeById(data, makeId);
    return make?.models || [];
};

/**
 * Получить все кузова для выбранной марки и модели
 */
export const getBodiesByModel = (data: ICarData, makeId: string, modelId: string): IBody[] => {
    const model = getModelById(data, makeId, modelId);
    return model?.bodies || [];
};

/**
 * Получить все двигатели для выбранной марки, модели и кузова
 */
export const getEnginesByBody = (data: ICarData, makeId: string, modelId: string, bodyId: string): IEngine[] => {
    const body = getBodyById(data, makeId, modelId, bodyId);
    return body?.engines || [];
};

/**
 * Проверить, существует ли комбинация марка-модель-кузов-двигатель
 */
export const isValidCarConfiguration = (
    data: ICarData,
    makeId: string,
    modelId: string,
    bodyId: string,
    engineId: string
): boolean => {
    return !!getEngineById(data, makeId, modelId, bodyId, engineId);
};

/**
 * Получить полное название автомобиля
 */
export const getFullCarName = (
    data: ICarData,
    makeId: string,
    modelId: string,
    bodyId: string,
    engineId: string
): string => {
    const make = getMakeById(data, makeId);
    const model = getModelById(data, makeId, modelId);
    const body = getBodyById(data, makeId, modelId, bodyId);
    const engine = getEngineById(data, makeId, modelId, bodyId, engineId);

    if (!make || !model || !body || !engine) {
        return '';
    }

    return `${make.name} ${model.name} ${body.name} ${engine.name}`;
};

/**
 * Mock функция поиска по OEM номеру
 */
export const mockSearchOEM = async (oemNumber: string, mockResults: string[]): Promise<string[]> => {
    // Имитация задержки API
    await new Promise(resolve => setTimeout(resolve, 300));

    return mockResults.filter(result =>
        result.toLowerCase().includes(oemNumber.toLowerCase())
    );
};
