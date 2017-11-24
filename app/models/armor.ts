export interface IArmor {
    _id: string;
    index: number;
    name: string;
    type: string; // Armor
    subtype: string;
    armor_class: {
        base: number;
        dex_bonus: boolean;
        max_bonus: number;
    };
    strength: number;
    stealth: string;
    weight: number;
    cost: {
        quantity: number;
        unit: string;
    };
    url: string;
    saved: boolean;
}
