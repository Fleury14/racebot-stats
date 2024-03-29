const groups = [
  {
    title: "Artemis Bow",
    image: 'AC22-Artemis-Bow.png',
    players: [
      {
        name: 'David B',
        wins: 2,
        losses: 4,
      },
      {
        name: 'JBrunTR',
        wins: 2,
        losses: 4,
      },
      {
        name: 'Mechalink',
        wins: 3,
        losses: 3,
      },
      {
        name: 'John Birckhead',
        wins: 3,
        losses: 3,
      },
      {
        name: 'frankiebones',
        wins: 2,
        losses: 4,
      },
      {
        name: 'PlumeriaKnight',
        wins: 4,
        losses: 2,
      },
      {
        name: 'Blue Cat Loach',
        wins: 5,
        losses: 1,
      },
    ]
  },
  {
    title: "Blitz Whip",
    image: 'AC22-Blitz-Whip.png',
    players: [
      {
        name: 'Y2Sky',
        wins: 3,
        losses: 2,
      },
      {
        name: 'dnarii',
        wins: 2,
        losses: 3,
      },
      {
        name: 'recklesscharlie',
        wins: 1,
        losses: 4,
      },
      {
        name: 'CubsRule21',
        wins: 4,
        losses: 1,
      },
      {
        name: 'soapboxgamer',
        wins: 2,
        losses: 3,
      },
      {
        name: 'Sorbius',
        wins: 3,
        losses: 2,
      },
    ]
  },
  {
    title: "Cat Claw",
    image: 'AC22-Cat-Claw.png',
    players: [
      {
        name: 'JudgeJoe',
        wins: 4,
        losses: 1,
      },
      {
        name: 'Keddril',
        wins: 1,
        losses: 3,
      },
      {
        name: 'Poidrac',
        wins: 3,
        losses: 2,
      },
      {
        name: 'EizanTayama',
        wins: 1,
        losses: 3,
      },
      {
        name: 'LordBobBree',
        wins: 3,
        losses: 2,
      },
      {
        name: 'scratchdragon',
        wins: 2,
        losses: 3,
      },
    ]
  },
  {
    title: "Defense Sword",
    image: 'AC22-Defense-Sword.png',
    players: [
      {
        name: 'McBain',
        wins: 3,
        losses: 2,
      },
      {
        name: 'Dragus',
        wins: 5,
        losses: 0,
      },
      {
        name: 'nitzy',
        wins: 2,
        losses: 3,
      },
      {
        name: 'Gambit017',
        wins: 1,
        losses: 4,
      },
      {
        name: 'The Bardic Panda',
        wins: 2,
        losses: 3,
      },
      {
        name: 'Zeke Highwind',
        wins: 2,
        losses: 3,
      },
    ]
  },
  {
    title: "Full Moon",
    image: 'AC22-Full-Moon.png',
    players: [
      {
        name: 'Funnelcakes',
        wins: 2,
        losses: 3,
      },
      {
        name: 'Starman',
        wins: 1,
        losses: 4,
        dropped: true,
      },
      {
        name: 'Fleury14',
        wins: 3,
        losses: 2,
      },
      {
        name: 'AsmadiGames',
        wins: 3,
        losses: 2,
      },
      {
        name: 'Professor Renderer',
        wins: 1,
        losses: 4,
      },
      {
        name: 'Possumorpheus',
        wins: 5,
        losses: 0,
      },
    ]
  },
  {
    title: "Lilith Rod",
    image: 'AC22-Lilith-Rod.png',
    players: [
      {
        name: 'Eykir',
        wins: 2,
        losses: 3,
      },
      {
        name: 'Lenophis',
        wins: 2,
        losses: 3,
      },
      {
        name: 'Pyre',
        wins: 3,
        losses: 2,
        tiebreak: 2,
      },
      {
        name: 'Infinious',
        wins: 3,
        losses: 2,
        tiebreak: 1,
      },
      {
        name: 'BadKarma',
        wins: 3,
        losses: 2,
        tiebreak: 3,
      },
      {
        name: 'Friedghoughphtheightteau',
        wins: 2,
        losses: 3,
      },
    ]
  },
  {
    title: "Ogre Axe",
    image: 'AC22-Ogre-Axe.png',
    players: [
      {
        name: 'Zilch',
        wins: 3,
        losses: 2,
      },
      {
        name: 'Marten Broadcloak',
        wins: 3,
        losses: 2,
      },
      {
        name: 'Slippery',
        wins: 1,
        losses: 4,
      },
      {
        name: 'GeminiHero',
        wins: 1,
        losses: 4,
      },
      {
        name: 'Soleras',
        wins: 2,
        losses: 3,
      },
      {
        name: 'wewbear',
        wins: 5,
        losses: 0,
      },
    ]
  },
  {
    title: "Spear Spear",
    image: 'AC22-Spear-Spear.png',
    players: [
      {
        name: 'Dia',
        wins: 3,
        losses: 2,
        dropped: true,
      },
      {
        name: 'Allisele',
        wins: 3,
        losses: 2,
      },
      {
        name: 'Rowdy Roddy Sniper',
        wins: 1,
        losses: 4,
      },
      {
        name: 'Flyeaglesfly72',
        wins: 2,
        losses: 3,
      },
      {
        name: 'Engidave',
        wins: 5,
        losses: 0,
      },
      {
        name: 'EscoNitz',
        wins: 1,
        losses: 4,
        dropped: true,
      },
    ]
  },
  {
    title: "Aegis Shield",
    image: 'AC22-Aegis-Shield.png',
    players: [
      {
        name: 'Xyrak',
        wins: 3,
        losses: 2,
        tiebreak: 2,
      },
      {
        name: 'BeautyInDiscovery',
        wins: 3,
        losses: 2,
        tiebreak: 3,
      },
      {
        name: 'Vitasia',
        wins: 1,
        losses: 4,
      },
      {
        name: 'elvensorrow',
        wins: 3,
        losses: 2,
        tiebreak: 1,
      },
      {
        name: 'tallgrant',
        wins: 1,
        losses: 4,
      },
      {
        name: 'Nightdew',
        wins: 4,
        losses: 1,
      },
    ]
  },
  {
    title: "Crystal Ring",
    image: 'AC22-Crystal-Ring.png',
    players: [
      {
        name: 'Tybalt',
        wins: 1,
        losses: 4,
      },
      {
        name: 'Xenocat',
        wins: 4,
        losses: 1,
      },
      {
        name: 'Saradin',
        wins: 4,
        losses: 1,
      },
      {
        name: 'sylverfyre',
        wins: 4,
        losses: 1,
      },
      {
        name: 'Alchemie',
        wins: 0,
        losses: 5,
      },
      {
        name: 'Rexx Raul',
        wins: 2,
        losses: 3,
      },
    ]
  },
  {
    title: "Dragoon Helm",
    image: 'AC22-Dragoon-Helm.png',
    players: [
      {
        name: 'dustygriff',
        wins: 4,
        losses: 1,
      },
      {
        name: 'leggystarscream',
        wins: 1,
        losses: 4,
      },
      {
        name: 'Rexbanner',
        wins: 3,
        losses: 2,
      },
      {
        name: 'microKorgs',
        wins: 4,
        losses: 1,
      },
      {
        name: 'CommanderLeonhart',
        wins: 3,
        losses: 2,
      },
      {
        name: 'ULTROS_PROFESSIONAL',
        wins: 0,
        losses: 5,
      },
    ]
  },
  {
    title: "Gaea Hat",
    image: 'AC22-Gaea-Hat.png',
    players: [
      {
        name: 'Klopfer',
        wins: 3,
        losses: 2,
      },
      {
        name: 'mikemike34',
        wins: 4,
        losses: 1,
      },
      {
        name: 'neongrey',
        wins: 2,
        losses: 3,
      },
      {
        name: 'SteppeLively',
        wins: 1,
        losses: 4,
      },
      {
        name: 'xPankraz',
        wins: 5,
        losses: 0,
      },
      {
        name: 'CSRadical',
        wins: 0,
        losses: 5,
      },
    ]
  },
  {
    title: "Heroine Robe",
    image: 'AC22-Heroine-Robe.png',
    players: [
      {
        name: 'simbu',
        wins: 4,
        losses: 1,
      },
      {
        name: 'LadyId19',
        wins: 3,
        losses: 2,
      },
      {
        name: 'Rhybon',
        wins: 5,
        losses: 0,
      },
      {
        name: 'bgrich419',
        wins: 2,
        losses: 3,
      },
      {
        name: 'Eninja81',
        wins: 1,
        losses: 4,
      },
      {
        name: 'ZoeVermilion',
        wins: 0,
        losses: 5,
        dropped: true,
      },
    ]
  },
  {
    title: "Karate Gi",
    image: 'AC22-Karate-Gi.png',
    players: [
      {
        name: 'couch_23',
        wins: 5,
        losses: 0,
      },
      {
        name: 'A Stone Dingley',
        wins: 4,
        losses: 1,
      },
      {
        name: 'Teknolink',
        wins: 0,
        losses: 5,
      },
      {
        name: 'FirebirdLover',
        wins: 1,
        losses: 4,
      },
      {
        name: 'Guerin',
        wins: 2,
        losses: 3,
      },
      {
        name: 'Galeswift',
        wins: 3,
        losses: 2,
      },
    ]
  },
  {
    title: "Ninja Shirt",
    image: 'AC22-Ninja-Shirt.png',
    players: [
      {
        name: 'Arusta',
        wins: 4,
        losses: 2,
      },
      {
        name: 'drcossack',
        wins: 1,
        losses: 5,
        dropped: true,
      },
      {
        name: 'Kyrios',
        wins: 5,
        losses: 1,
      },
      {
        name: 'ScytheMarshall',
        wins: 4,
        losses: 2,
      },
      {
        name: 'DShmoo619',
        wins: 2,
        losses: 4,
        dropped: true,
      },
      {
        name: 'Sheep Launcher',
        wins: 0,
        losses: 6,
      },
      {
        name: 'moonblazewolf',
        wins: 5,
        losses: 1,
      },
    ]
  },
  {
    title: "Zeus Gauntlet",
    image: 'AC22-Zeus-Gauntlets.png',
    players: [
      {
        name: 'LUF',
        wins: 5,
        losses: 1,
      },
      {
        name: 'stoppableforce',
        wins: 3,
        losses: 3,
      },
      {
        name: 'Just Kinda',
        wins: 1,
        losses: 5,
        dropped: true,
      },
      {
        name: 'Demerine',
        wins: 1,
        losses: 5,
        dropped: true,
      },
      {
        name: 'BoneyC',
        wins: 4,
        losses: 2,
      },
      {
        name: 'Beernerd',
        wins: 4,
        losses: 2,
      },
      {
        name: 'Poorlydrawnbees',
        wins: 3,
        losses: 3,
        dropped: true,
      },
    ]
  },
];

// Backup array to save me time, anticipating the list of entrants as a whole list with a group property, I could then assign each one into the proper array
// const groups = [
//   {
//     title: "Artemis Bow",
//     players: []
//   },
//   {
//     title: "Blitz Whip",
//     players: []
//   },
//   {
//     title: "Cat Claw",
//     players: []
//   },
//   {
//     title: "Defense Sword",
//     players: []
//   },
//   {
//     title: "Full Moon",
//     players: []
//   },
//   {
//     title: "Lilith Rod",
//     players: []
//   },
//   {
//     title: "Ogre Axe",
//     players: []
//   },
//   {
//     title: "Spear Spear",
//     players: []
//   },
//   {
//     title: "Aegis Shield",
//     players: []
//   },
//   {
//     title: "Crystal Ring",
//     players: []
//   },
//   {
//     title: "Dragoon Helm",
//     players: []
//   },
//   {
//     title: "Gaea Hat",
//     players: []
//   },
//   {
//     title: "Heroine Robe",
//     players: []
//   },
//   {
//     title: "Karate Gi",
//     players: []
//   },
//   {
//     title: "Ninja Shirt",
//     players: []
//   },
//   {
//     title: "Zeus Gauntlet",
//     players: []
//   },
// ]

export default groups;