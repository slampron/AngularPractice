export interface IEquipment {
    _id: string;
    index: number;
    name: string;
    equipment_category: string;
    gear_category: string;
    cost: {
        quantity: number;
        unit: string;
    },
    weight: number;
    desc: string[];
    url: string;
}
