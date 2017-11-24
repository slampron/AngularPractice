export interface ISpell {
    _id: number;
    index: number,
    length: string;
    name: string;
    desc: string[];
    page: string;
    range: string;
    components: string[];
    ritual: string;
    duration: string;
    concentration: string;
    casting_time: string;
    level: number;
    school: {
        url: string;
        name: string;
    };
    classes: [
        {
            name: string;
            url: string;
        }
    ];
    subclasses: [
        {
            url: string;
            name: string;
        }
    ];
    url: string;
saved: boolean;
}

export interface ISpellLevel {
    index: number;
    name: string;
    level: number;

}
