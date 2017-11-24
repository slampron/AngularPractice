import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { ISpell, ISpellLevel } from '../models/spell';

@Injectable()
export class SpellService {
  url: string;
  spell: string;
  weapon: string;
  private baseUrl = 'http://www.dnd5eapi.co/api/';

  constructor(private http: Http) {

  }

  spellList(): any[] {
    return [
      {
        'index': 3,
        'name': 'Aid',
        'level': 2
      },
      {
        'index': 2,
        'name': 'Acid Splash',
        'level': 0
      },
      {
        'index': 1,
        'name': 'Acid Arrow',
        'level': 2
      },
      {
        'index': 4,
        'name': 'Alarm',
        'level': 1
      },
      {
        'index': 5,
        'name': 'Alter Self',
        'level': 2
      },
      {
        'index': 6,
        'name': 'Animal Messenger',
        'level': 2
      },
      {
        'index': 7,
        'name': 'Animal Shapes',
        'level': 8
      },
      {
        'index': 9,
        'name': 'Animate Objects',
        'level': 5
      },
      {
        'index': 8,
        'name': 'Animate Dead',
        'level': 3
      },
      {
        'index': 11,
        'name': 'Antimagic Field',
        'level': 8
      },
      {
        'index': 10,
        'name': 'Antilife Shell',
        'level': 5
      },
      {
        'index': 12,
        'name': 'Antipathy/Sympathy',
        'level': 8
      },
      {
        'index': 13,
        'name': 'Arcane Eye',
        'level': 4
      },
      {
        'index': 14,
        'name': 'Arcane Hand',
        'level': 5
      },
      {
        'index': 15,
        'name': 'Arcane Lock',
        'level': 2
      },
      {
        'index': 16,
        'name': 'Arcane Sword',
        'level': 7
      },
      {
        'index': 17,
        'name': 'Arcanist\'s Magic Aura',
        'level': 2
      },
      {
        'index': 18,
        'name': 'Astral Projection',
        'level': 9
      },
      {
        'index': 19,
        'name': 'Augury',
        'level': 2
      },
      {
        'index': 20,
        'name': 'Awaken',
        'level': 5
      },
      {
        'index': 21,
        'name': 'Bane',
        'level': 1
      },
      {
        'index': 22,
        'name': 'Banishment',
        'level': 4
      },
      {
        'index': 23,
        'name': 'Barkskin',
        'level': 2
      },
      {
        'index': 24,
        'name': 'Beacon of Hope',
        'level': 3
      },
      {
        'index': 25,
        'name': 'Bestow Curse',
        'level': 3
      },
      {
        'index': 26,
        'name': 'Black Tentacles',
        'level': 4
      },
      {
        'index': 27,
        'name': 'Blade Barrier',
        'level': 6
      },
      {
        'index': 28,
        'name': 'Bless',
        'level': 1
      },
      {
        'index': 30,
        'name': 'Blindness/Deafness',
        'level': 2
      },
      {
        'index': 29,
        'name': 'Blight',
        'level': 4
      },
      {
        'index': 31,
        'name': 'Blink',
        'level': 3
      },
      {
        'index': 32,
        'name': 'Blur',
        'level': 2
      },
      {
        'index': 33,
        'name': 'Burning Hands',
        'level': 1
      },
      {
        'index': 34,
        'name': 'Call Lightning',
        'level': 3
      },
      {
        'index': 36,
        'name': 'Chain Lightning',
        'level': 6
      },
      {
        'index': 35,
        'name': 'Calm Emotions',
        'level': 2
      },
      {
        'index': 37,
        'name': 'Charm Person',
        'level': 1
      },
      {
        'index': 38,
        'name': 'Chill Touch',
        'level': 0
      },
      {
        'index': 39,
        'name': 'Circle of Death',
        'level': 6
      },
      {
        'index': 40,
        'name': 'Clairvoyance',
        'level': 3
      },
      {
        'index': 41,
        'name': 'Clone',
        'level': 8
      },
      {
        'index': 42,
        'name': 'Cloudkill',
        'level': 5
      },
      {
        'index': 43,
        'name': 'Color Spray',
        'level': 1
      },
      {
        'index': 44,
        'name': 'Command',
        'level': 1
      },
      {
        'index': 45,
        'name': 'Commune',
        'level': 5
      },
      {
        'index': 46,
        'name': 'Commune with Nature',
        'level': 5
      },
      {
        'index': 47,
        'name': 'Comprehend Languages',
        'level': 1
      },
      {
        'index': 48,
        'name': 'Cone of Cold',
        'level': 5
      },
      {
        'index': 49,
        'name': 'Confusion',
        'level': 4
      },
      {
        'index': 51,
        'name': 'Conjure Celestial',
        'level': 7
      },
      {
        'index': 50,
        'name': 'Conjure Animals',
        'level': 3
      },
      {
        'index': 52,
        'name': 'Conjure Elemental',
        'level': 5
      },
      {
        'index': 53,
        'name': 'Conjure Fey',
        'level': 6
      },
      {
        'index': 54,
        'name': 'Conjure Minor Elementals',
        'level': 4
      },
      {
        'index': 55,
        'name': 'Conjure Woodland Beings',
        'level': 4
      },
      {
        'index': 56,
        'name': 'Contact Other Plane',
        'level': 5
      },
      {
        'index': 57,
        'name': 'Contagion',
        'level': 5
      },
      {
        'index': 58,
        'name': 'Contingency',
        'level': 6
      },
      {
        'index': 59,
        'name': 'Continual Flame',
        'level': 2
      },
      {
        'index': 60,
        'name': 'Control Water',
        'level': 4
      },
      {
        'index': 61,
        'name': 'Control Weather',
        'level': 8
      },
      {
        'index': 62,
        'name': 'Create Food and Water',
        'level': 3
      },
      {
        'index': 63,
        'name': 'Create or Destroy Water',
        'level': 1
      },
      {
        'index': 64,
        'name': 'Create Undead',
        'level': 6
      },
      {
        'index': 65,
        'name': 'Creation',
        'level': 5
      },
      {
        'index': 66,
        'name': 'Cure Wounds',
        'level': 1
      },
      {
        'index': 67,
        'name': 'Dancing Lights',
        'level': 0
      },
      {
        'index': 68,
        'name': 'Darkness',
        'level': 2
      },
      {
        'index': 69,
        'name': 'Darkvision',
        'level': 2
      },
      {
        'index': 70,
        'name': 'Daylight',
        'level': 3
      },
      {
        'index': 71,
        'name': 'Death Ward',
        'level': 4
      },
      {
        'index': 72,
        'name': 'Delayed Blast Fireball',
        'level': 7
      },
      {
        'index': 73,
        'name': 'Demiplane',
        'level': 8
      },
      {
        'index': 74,
        'name': 'Detect Evil and Good',
        'level': 1
      },
      {
        'index': 75,
        'name': 'Detect Magic',
        'level': 1
      },
      {
        'index': 76,
        'name': 'Detect Poison and Disease',
        'level': 1
      },
      {
        'index': 79,
        'name': 'Disguise Self',
        'level': 1
      },
      {
        'index': 78,
        'name': 'Dimension Door',
        'level': 4
      },
      {
        'index': 77,
        'name': 'Detect Thoughts',
        'level': 2
      },
      {
        'index': 80,
        'name': 'Disintegrate',
        'level': 6
      },
      {
        'index': 81,
        'name': 'Dispel Evil and Good',
        'level': 5
      },
      {
        'index': 82,
        'name': 'Dispel Magic',
        'level': 3
      },
      {
        'index': 85,
        'name': 'Divine Word',
        'level': 7
      },
      {
        'index': 83,
        'name': 'Divination',
        'level': 4
      },
      {
        'index': 84,
        'name': 'Divine Favor',
        'level': 1
      },
      {
        'index': 86,
        'name': 'Dominate Beast',
        'level': 4
      },
      {
        'index': 87,
        'name': 'Dominate Monster',
        'level': 8
      },
      {
        'index': 88,
        'name': 'Dominate Person',
        'level': 5
      },
      {
        'index': 89,
        'name': 'Dream',
        'level': 5
      },
      {
        'index': 90,
        'name': 'Earthquake',
        'level': 8
      },
      {
        'index': 91,
        'name': 'Eldritch Blast',
        'level': 0
      },
      {
        'index': 92,
        'name': 'Enhance Ability',
        'level': 2
      },
      {
        'index': 93,
        'name': 'Enlarge/Reduce',
        'level': 2
      },
      {
        'index': 94,
        'name': 'Entangle',
        'level': 1
      },
      {
        'index': 95,
        'name': 'Enthrall',
        'level': 2
      },
      {
        'index': 96,
        'name': 'Etherealness',
        'level': 7
      },
      {
        'index': 97,
        'name': 'Expeditious Retreat',
        'level': 1
      },
      {
        'index': 98,
        'name': 'Eyebite',
        'level': 6
      },
      {
        'index': 99,
        'name': 'Fabricate',
        'level': 4
      },
      {
        'index': 100,
        'name': 'Faerie Fire',
        'level': 1
      },
      {
        'index': 101,
        'name': 'Faithful Hound',
        'level': 4
      },
      {
        'index': 102,
        'name': 'False Life',
        'level': 1
      },
      {
        'index': 103,
        'name': 'Fear',
        'level': 3
      },
      {
        'index': 104,
        'name': 'Feather Fall',
        'level': 1
      },
      {
        'index': 105,
        'name': 'Feeblemind',
        'level': 8
      },
      {
        'index': 106,
        'name': 'Find Steed',
        'level': 2
      },
      {
        'index': 107,
        'name': 'Find the Path',
        'level': 6
      },
      {
        'index': 108,
        'name': 'Find Traps',
        'level': 2
      },
      {
        'index': 110,
        'name': 'Fireball',
        'level': 3
      },
      {
        'index': 109,
        'name': 'Finger of Death',
        'level': 7
      },
      {
        'index': 111,
        'name': 'Fire Shield',
        'level': 4
      },
      {
        'index': 112,
        'name': 'Fire Storm',
        'level': 7
      },
      {
        'index': 113,
        'name': 'Flame Blade',
        'level': 2
      },
      {
        'index': 116,
        'name': 'Flesh to Stone',
        'level': 6
      },
      {
        'index': 115,
        'name': 'Flaming Sphere',
        'level': 2
      },
      {
        'index': 114,
        'name': 'Flame Strike',
        'level': 5
      },
      {
        'index': 117,
        'name': 'Floating Disk',
        'level': 1
      },
      {
        'index': 118,
        'name': 'Fly',
        'level': 3
      },
      {
        'index': 119,
        'name': 'Fog Cloud',
        'level': 1
      },
      {
        'index': 122,
        'name': 'Foresight',
        'level': 9
      },
      {
        'index': 120,
        'name': 'Forbiddance',
        'level': 6
      },
      {
        'index': 121,
        'name': 'Forcecage',
        'level': 7
      },
      {
        'index': 123,
        'name': 'Freedom of Movement',
        'level': 4
      },
      {
        'index': 124,
        'name': 'Freezing Sphere',
        'level': 6
      },
      {
        'index': 125,
        'name': 'Gaseous Form',
        'level': 3
      },
      {
        'index': 126,
        'name': 'Gate',
        'level': 9
      },
      {
        'index': 128,
        'name': 'Gentle Repose',
        'level': 2
      },
      {
        'index': 129,
        'name': 'Giant Insect',
        'level': 4
      },
      {
        'index': 127,
        'name': 'Geas',
        'level': 5
      },
      {
        'index': 130,
        'name': 'Glibness',
        'level': 8
      },
      {
        'index': 131,
        'name': 'Globe of Invulnerability',
        'level': 6
      },
      {
        'index': 132,
        'name': 'Glyph of Warding',
        'level': 3
      },
      {
        'index': 133,
        'name': 'Grease',
        'level': 1
      },
      {
        'index': 134,
        'name': 'Greater Invisibility',
        'level': 4
      },
      {
        'index': 136,
        'name': 'Guards and Wards',
        'level': 6
      },
      {
        'index': 135,
        'name': 'Greater Restoration',
        'level': 5
      },
      {
        'index': 137,
        'name': 'Guidance',
        'level': 0
      },
      {
        'index': 138,
        'name': 'Guiding Bolt',
        'level': 1
      },
      {
        'index': 139,
        'name': 'Gust of Wind',
        'level': 2
      },
      {
        'index': 140,
        'name': 'Hallow',
        'level': 5
      },
      {
        'index': 141,
        'name': 'Hallucinatory Terrain',
        'level': 4
      },
      {
        'index': 142,
        'name': 'Harm',
        'level': 6
      },
      {
        'index': 144,
        'name': 'Heal',
        'level': 6
      },
      {
        'index': 143,
        'name': 'Haste',
        'level': 3
      },
      {
        'index': 145,
        'name': 'Healing Word',
        'level': 1
      },
      {
        'index': 146,
        'name': 'Heat Metal',
        'level': 2
      },
      {
        'index': 147,
        'name': 'Heroes\' Feast',
        'level': 6
      },
      {
        'index': 148,
        'name': 'Heroism',
        'level': 1
      },
      {
        'index': 149,
        'name': 'Hideous Laughter',
        'level': 1
      },
      {
        'index': 150,
        'name': 'Hold Monster',
        'level': 5
      },
      {
        'index': 151,
        'name': 'Hold Person',
        'level': 2
      },
      {
        'index': 152,
        'name': 'Holy Aura',
        'level': 8
      },
      {
        'index': 153,
        'name': 'Hypnotic Pattern',
        'level': 3
      },
      {
        'index': 154,
        'name': 'Ice Storm',
        'level': 4
      },
      {
        'index': 155,
        'name': 'Identify',
        'level': 1
      },
      {
        'index': 156,
        'name': 'Illusory Script',
        'level': 1
      },
      {
        'index': 157,
        'name': 'Imprisonment',
        'level': 9
      },
      {
        'index': 158,
        'name': 'Incendiary Cloud',
        'level': 8
      },
      {
        'index': 159,
        'name': 'Inflict Wounds',
        'level': 1
      },
      {
        'index': 160,
        'name': 'Insect Plague',
        'level': 5
      },
      {
        'index': 161,
        'name': 'Instant Summons',
        'level': 6
      },
      {
        'index': 162,
        'name': 'Invisibility',
        'level': 2
      },
      {
        'index': 164,
        'name': 'Jump',
        'level': 1
      },
      {
        'index': 165,
        'name': 'Knock',
        'level': 2
      },
      {
        'index': 163,
        'name': 'Irresistible Dance',
        'level': 6
      },
      {
        'index': 166,
        'name': 'Legend Lore',
        'level': 5
      },
      {
        'index': 167,
        'name': 'Lesser Restoration',
        'level': 2
      },
      {
        'index': 168,
        'name': 'Levitate',
        'level': 2
      },
      {
        'index': 169,
        'name': 'Light',
        'level': 0
      },
      {
        'index': 170,
        'name': 'Lightning Bolt',
        'level': 3
      },
      {
        'index': 172,
        'name': 'Locate Creature',
        'level': 4
      },
      {
        'index': 171,
        'name': 'Locate Animals or Plants',
        'level': 2
      },
      {
        'index': 173,
        'name': 'Locate Object',
        'level': 2
      },
      {
        'index': 174,
        'name': 'Longstrider',
        'level': 1
      },
      {
        'index': 175,
        'name': 'Mage Armor',
        'level': 1
      },
      {
        'index': 176,
        'name': 'Mage Hand',
        'level': 0
      },
      {
        'index': 177,
        'name': 'Magic Circle',
        'level': 3
      },
      {
        'index': 178,
        'name': 'Magic Jar',
        'level': 6
      },
      {
        'index': 179,
        'name': 'Magic Missile',
        'level': 1
      },
      {
        'index': 180,
        'name': 'Magic Mouth',
        'level': 2
      },
      {
        'index': 181,
        'name': 'Magic Weapon',
        'level': 2
      },
      {
        'index': 182,
        'name': 'Magnificent Mansion',
        'level': 7
      },
      {
        'index': 183,
        'name': 'Major Image',
        'level': 3
      },
      {
        'index': 184,
        'name': 'Mass Cure Wounds',
        'level': 5
      },
      {
        'index': 185,
        'name': 'Mass Heal',
        'level': 9
      },
      {
        'index': 186,
        'name': 'Mass Healing Word',
        'level': 3
      },
      {
        'index': 187,
        'name': 'Mass Suggestion',
        'level': 6
      },
      {
        'index': 188,
        'name': 'Maze',
        'level': 8
      },
      {
        'index': 189,
        'name': 'Meld into Stone',
        'level': 3
      },
      {
        'index': 190,
        'name': 'Mending',
        'level': 0
      },
      {
        'index': 191,
        'name': 'Message',
        'level': 0
      },
      {
        'index': 192,
        'name': 'Meteor Swarm',
        'level': 9
      },
      {
        'index': 193,
        'name': 'Mind Blank',
        'level': 8
      },
      {
        'index': 194,
        'name': 'Minor Illusion',
        'level': 0
      },
      {
        'index': 195,
        'name': 'Mirage Arcane',
        'level': 7
      },
      {
        'index': 197,
        'name': 'Mislead',
        'level': 5
      },
      {
        'index': 196,
        'name': 'Mirror Image',
        'level': 2
      },
      {
        'index': 198,
        'name': 'Misty Step',
        'level': 2
      },
      {
        'index': 199,
        'name': 'Modify Memory',
        'level': 5
      },
      {
        'index': 200,
        'name': 'Moonbeam',
        'level': 2
      },
      {
        'index': 201,
        'name': 'Move Earth',
        'level': 6
      },
      {
        'index': 202,
        'name': 'Nondetection',
        'level': 3
      },
      {
        'index': 203,
        'name': 'Pass without Trace',
        'level': 2
      },
      {
        'index': 204,
        'name': 'Passwall',
        'level': 5
      },
      {
        'index': 205,
        'name': 'Phantasmal Killer',
        'level': 4
      },
      {
        'index': 206,
        'name': 'Phantom Steed',
        'level': 3
      },
      {
        'index': 207,
        'name': 'Planar Ally',
        'level': 6
      },
      {
        'index': 208,
        'name': 'Planar Binding',
        'level': 5
      },
      {
        'index': 209,
        'name': 'Plane Shift',
        'level': 7
      },
      {
        'index': 210,
        'name': 'Plant Growth',
        'level': 3
      },
      {
        'index': 211,
        'name': 'Polymorph',
        'level': 4
      },
      {
        'index': 212,
        'name': 'Power Word Kill',
        'level': 9
      },
      {
        'index': 213,
        'name': 'Power Word Stun',
        'level': 8
      },
      {
        'index': 214,
        'name': 'Prayer of Healing',
        'level': 2
      },
      {
        'index': 215,
        'name': 'Prestidigitation',
        'level': 0
      },
      {
        'index': 216,
        'name': 'Prismatic Spray',
        'level': 7
      },
      {
        'index': 217,
        'name': 'Prismatic Wall',
        'level': 9
      },
      {
        'index': 218,
        'name': 'Private Sanctum',
        'level': 4
      },
      {
        'index': 219,
        'name': 'Produce Flame',
        'level': 0
      },
      {
        'index': 220,
        'name': 'Programmed Illusion',
        'level': 6
      },
      {
        'index': 222,
        'name': 'Protection from Energy',
        'level': 3
      },
      {
        'index': 221,
        'name': 'Project Image',
        'level': 7
      },
      {
        'index': 223,
        'name': 'Protection from Evil and Good',
        'level': 1
      },
      {
        'index': 224,
        'name': 'Protection from Poison',
        'level': 2
      },
      {
        'index': 225,
        'name': 'Purify Food and Drink',
        'level': 1
      },
      {
        'index': 226,
        'name': 'Raise Dead',
        'level': 5
      },
      {
        'index': 228,
        'name': 'Ray of Frost',
        'level': 0
      },
      {
        'index': 227,
        'name': 'Ray of Enfeeblement',
        'level': 2
      },
      {
        'index': 229,
        'name': 'Regenerate',
        'level': 7
      },
      {
        'index': 230,
        'name': 'Reincarnate',
        'level': 5
      },
      {
        'index': 232,
        'name': 'Resilient Sphere',
        'level': 4
      },
      {
        'index': 231,
        'name': 'Remove Curse',
        'level': 3
      },
      {
        'index': 233,
        'name': 'Resistance',
        'level': 0
      },
      {
        'index': 234,
        'name': 'Resurrection',
        'level': 7
      },
      {
        'index': 235,
        'name': 'Reverse Gravity',
        'level': 7
      },
      {
        'index': 236,
        'name': 'Revivify',
        'level': 3
      },
      {
        'index': 237,
        'name': 'Rope Trick',
        'level': 2
      },
      {
        'index': 238,
        'name': 'Sacred Flame',
        'level': 0
      },
      {
        'index': 239,
        'name': 'Sanctuary',
        'level': 1
      },
      {
        'index': 241,
        'name': 'Scrying',
        'level': 5
      },
      {
        'index': 240,
        'name': 'Scorching Ray',
        'level': 2
      },
      {
        'index': 242,
        'name': 'Secret Chest',
        'level': 4
      },
      {
        'index': 243,
        'name': 'See Invisibility',
        'level': 2
      },
      {
        'index': 244,
        'name': 'Seeming',
        'level': 5
      },
      {
        'index': 245,
        'name': 'Sending',
        'level': 3
      },
      {
        'index': 246,
        'name': 'Sequester',
        'level': 7
      },
      {
        'index': 247,
        'name': 'Shapechange',
        'level': 9
      },
      {
        'index': 248,
        'name': 'Shatter',
        'level': 2
      },
      {
        'index': 249,
        'name': 'Shield',
        'level': 1
      },
      {
        'index': 250,
        'name': 'Shield of Faith',
        'level': 1
      },
      {
        'index': 251,
        'name': 'Shillelagh',
        'level': 0
      },
      {
        'index': 252,
        'name': 'Shocking Grasp',
        'level': 0
      },
      {
        'index': 253,
        'name': 'Silence',
        'level': 2
      },
      {
        'index': 254,
        'name': 'Silent Image',
        'level': 1
      },
      {
        'index': 255,
        'name': 'Simulacrum',
        'level': 7
      },
      {
        'index': 256,
        'name': 'Sleep',
        'level': 1
      },
      {
        'index': 257,
        'name': 'Sleet Storm',
        'level': 3
      },
      {
        'index': 258,
        'name': 'Slow',
        'level': 3
      },
      {
        'index': 259,
        'name': 'Speak with Animals',
        'level': 1
      },
      {
        'index': 260,
        'name': 'Speak with Dead',
        'level': 3
      },
      {
        'index': 261,
        'name': 'Speak with Plants',
        'level': 3
      },
      {
        'index': 262,
        'name': 'Spider Climb',
        'level': 2
      },
      {
        'index': 263,
        'name': 'Spike Growth',
        'level': 2
      },
      {
        'index': 264,
        'name': 'Spirit Guardians',
        'level': 3
      },
      {
        'index': 265,
        'name': 'Spiritual Weapon',
        'level': 2
      },
      {
        'index': 266,
        'name': 'Stinking Cloud',
        'level': 3
      },
      {
        'index': 267,
        'name': 'Stone Shape',
        'level': 4
      },
      {
        'index': 268,
        'name': 'Stoneskin',
        'level': 4
      },
      {
        'index': 270,
        'name': 'Suggestion',
        'level': 2
      },
      {
        'index': 269,
        'name': 'Storm of Vengeance',
        'level': 9
      },
      {
        'index': 271,
        'name': 'Sunbeam',
        'level': 6
      },
      {
        'index': 272,
        'name': 'Sunburst',
        'level': 8
      },
      {
        'index': 273,
        'name': 'Symbol',
        'level': 7
      },
      {
        'index': 274,
        'name': 'Telekinesis',
        'level': 5
      },
      {
        'index': 275,
        'name': 'Telepathic Bond',
        'level': 5
      },
      {
        'index': 276,
        'name': 'Teleport',
        'level': 7
      },
      {
        'index': 277,
        'name': 'Teleportation Circle',
        'level': 5
      },
      {
        'index': 278,
        'name': 'Thaumaturgy',
        'level': 0
      },
      {
        'index': 279,
        'name': 'Thunderwave',
        'level': 1
      },
      {
        'index': 280,
        'name': 'Time Stop',
        'level': 9
      },
      {
        'index': 281,
        'name': 'Tiny Hut',
        'level': 3
      },
      {
        'index': 282,
        'name': 'Tongues',
        'level': 3
      },
      {
        'index': 283,
        'name': 'Transport via Plants',
        'level': 6
      },
      {
        'index': 284,
        'name': 'Tree Stride',
        'level': 5
      },
      {
        'index': 285,
        'name': 'True Polymorph',
        'level': 9
      },
      {
        'index': 286,
        'name': 'True Resurrection',
        'level': 9
      },
      {
        'index': 287,
        'name': 'True Seeing',
        'level': 6
      },
      {
        'index': 288,
        'name': 'True Strike',
        'level': 0
      },
      {
        'index': 289,
        'name': 'Unseen Servant',
        'level': 1
      },
      {
        'index': 290,
        'name': 'Vampiric Touch',
        'level': 3
      },
      {
        'index': 291,
        'name': 'Wall of Fire',
        'level': 4
      },
      {
        'index': 292,
        'name': 'Wall of Force',
        'level': 5
      },
      {
        'index': 293,
        'name': 'Wall of Ice',
        'level': 6
      },
      {
        'index': 294,
        'name': 'Wall of Stone',
        'level': 5
      },
      {
        'index': 295,
        'name': 'Wall of Thorns',
        'level': 6
      },
      {
        'index': 296,
        'name': 'Warding Bond',
        'level': 2
      },
      {
        'index': 297,
        'name': 'Water Breathing',
        'level': 3
      },
      {
        'index': 298,
        'name': 'Water Walk',
        'level': 3
      },
      {
        'index': 299,
        'name': 'Web',
        'level': 2
      },
      {
        'index': 300,
        'name': 'Weird',
        'level': 9
      },
      {
        'index': 301,
        'name': 'Wind Walk',
        'level': 6
      },
      {
        'index': 302,
        'name': 'Wind Wall',
        'level': 3
      },
      {
        'index': 303,
        'name': 'Wish',
        'level': 9
      },
      {
        'index': 304,
        'name': 'Word of Recall',
        'level': 6
      },
      {
        'index': 305,
        'name': 'Zone of Truth',
        'level': 2
      }
    ]










  }

  getSpell(spell: number): Observable<ISpell> {
    return this.http.get(`${this.baseUrl}spells/${spell}`)
      .map(res => res.json());
  }

  getSpells(): Observable<Array<ISpell>> {
    return this.http.get(`${this.baseUrl}spells`)
      .map(res => res.json());
  }

  getSpellLevel(spell: string): Observable<ISpellLevel> {
    return this.http.get(`${this.baseUrl}spells/${spell}`)
      .map(res => res.json());
  }

  saveSpell(spell: ISpell): Observable<ISpell[]> {
    let spells: Array<ISpell> = JSON.parse(localStorage.getItem('Spell'));

    if (!spells) {
      spells = [];
    }

    const valueArr = spells.map(function (item) { return item.name });
    const isDuplicate = valueArr.some(function (item, idx) {
      return valueArr.indexOf(item) !== idx
    });

    if (!isDuplicate) {
      spells.push(spell);
    }

    localStorage.setItem('Spell', JSON.stringify(spells))
    return JSON.parse(localStorage.getItem('Spell'));
  }

  dropSpell(spell: ISpell): Observable<ISpell[]> {

    const spells: Array<ISpell> = JSON.parse(localStorage.getItem('Spell'));

    if (!spells) {
      return;
    }

    const spellRemoved = spells.filter(function (droppedSpell) {
      return droppedSpell.name !== spell.name;
    });

    localStorage.setItem('Spell', JSON.stringify(spellRemoved));
    return JSON.parse(localStorage.getItem('Spell'));

    // console.log(retrievedSpell);
  }

}
