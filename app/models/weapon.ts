export interface IWeapon {
    _id: string;
    index: number;
    name: string;
    wequipment_category: string;
    weapon_category: string;
    weapon_range: string;
    category_range: string;
    cost: {
        quantity: number;
        unit: string;
    };
    damage: {
        dice_count: number;
        dice_value: number;
        type: {
            url: string;
            name: string;
        };
    };
    range: {
        normal: number;
        long: number;
    };
    weight: number;
    properties: string[];
    url: string;
    saved: boolean;
}


const weaponMelee = [1, 2, 3, 4,5, 6, 7, 8, 9,10, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

const weaponRange = [11, 12, 13, 14, 33, 34, 35, 36];
