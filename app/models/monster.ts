export interface IMonster {
    _id: string;
    index: number;
    name: string;
    size: string;
    type: string;
    subtype: string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    hit_dice: string;
    speed: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    dexterity_save: number;
    constitution_save: number;
    wisdom_save: number;
    charisma_save: number;
    perception: number;
    stealth: number;
    damage_vulnerabilities: string;
    damage_resistances: string;
    damage_immunities: string;
    condition_immunities: string;
    senses: string;
    languages: string;
    challenge_rating: number;
    special_abilities: [
        {
            attack_bonus: number;
            desc: string;
            name: string;
        }
    ];
    actions: [
        {
            damage_bonus: number;
            damage_dice: string;
            attack_bonus: number;
            desc: string;
            name: string;
        }
    ];
    url: string;
}

export interface IMonsterCR {
    index: number;
    challenge_rating: number;
}
