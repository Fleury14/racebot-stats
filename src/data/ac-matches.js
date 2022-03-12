const matches = [
  {
    group: 'Defense Sword',
    racer1: 'Dragus',
    racer2: 'Gambit017',
    time1: '1:43:27',
    time2: '1:55:15',
    winner: 1
  },
  {
    group: 'Karate Gi',
    racer1: 'FirebirdLover',
    racer2: 'Teknolink',
    time1: '1:53:57',
    time2: '2:07:08',
    winner: 1
  },
  {
    group: 'Heroine Robe',
    racer1: 'Rhybon',
    racer2: 'simbu',
    time1: '1:17:25',
    time2: '1:26:46',
    winner: 1
  },
  {
    group: 'Full Moon',
    racer1: 'Possumorpheus',
    racer2: 'Funnelcakes',
    time1: '1:26:20',
    time2: '1:31:21',
    winner: 1
  },
  {
    group: 'Lilith Rod',
    racer1: 'Pyre',
    racer2: 'BadKarma',
    time1: 'Forfeit',
    time2: '1:09:03',
    winner: 2
  },
  {
    group: 'Ninja Shirt',
    racer1: 'moonblazewolf',
    racer2: 'ScytheMarshall',
    time1: '1:48:04',
    time2: '1:38:19',
    winner: 2
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'LUF',
    racer2: 'stoppableforce',
    time1: '2:01:49',
    time2: '2:18:01',
    winner: 1
  },
  {
    group: 'Spear Spear',
    racer1: 'Flyeaglesfly72',
    racer2: 'EngiDave',
    time1: '2:18:24',
    time2: '1:42:52',
    winner: 2
  },
  {
    group: 'Dragoon Helm',
    racer1: 'leggystarscream',
    racer2: 'Rexbanner',
    time1: 'Forfeit',
    time2: '1:42:19',
    winner: 2
  },
  {
    group: 'Defense Sword',
    racer1: 'Zeke Highwind',
    racer2: 'McBain',
    time1: '2:14:48',
    time2: '2:15:05',
    winner: 1
  },
  {
    group: 'Aegis Shield',
    racer1: 'Nightdew',
    racer2: 'tallgrant',
    time1: '1:35:37',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Artemis Bow',
    racer1: 'Blue Cat Loach',
    racer2: 'frankiebones',
    time1: '1:54:50',
    time2: '1:38:52',
    winner: 2
  },
  {
    group: 'Heroine Robe',
    racer1: 'simbu',
    racer2: 'ZoeVermilion',
    time1: '1:15:13',
    time2: '1:36:47',
    winner: 1
  },
  {
    group: 'Aegis Shield',
    racer1: 'Nightdew',
    racer2: 'elvensorrow',
    time1: '1:39:56',
    time2: '1:57:57',
    winner: 1
  },
  {
    group: 'Karate Gi',
    racer1: 'A Stone Dingley',
    racer2: 'FirebirdLover',
    time1: '1:41:58',
    time2: '2:13:03',
    winner: 1
  },
  {
    group: 'Ninja Shirt',
    racer1: 'DShmoo619',
    racer2: 'moonblazewolf',
    time1: '2:10:51',
    time2: '1:54:45',
    winner: 2
  },
  {
    group: 'Defense Sword',
    racer1: 'McBain',
    racer2: 'TheBardicPanda',
    time1: '2:10:53',
    time2: '2:23:51',
    winner: 1
  },
  {
    group: 'Artemis Bow',
    racer1: 'Blue Cat Loach',
    racer2: 'David B',
    time1: '1:44:21',
    time2: '1:57:28',
    winner: 1
  },
  {
    group: 'Cat Claw',
    racer1: 'Poidrac',
    racer2: 'JudgeJoe',
    time1: '1:36:28',
    time2: '1:43:49',
    winner: 1
  },
  {
    group: 'Defense Sword',
    racer1: 'Dragus',
    racer2: 'Nitzy',
    time1: '1:52:53',
    time2: '2:06:20',
    winner: 1
  },
  {
    group: 'Lilith Rod',
    racer1: 'Eykir',
    racer2: 'Lenophis',
    time1: '2:07:00',
    time2: '2:03:39',
    winner: 2
  },
  {
    group: 'Crystal Ring',
    racer1: 'Tybalt',
    racer2: 'sylverfyre',
    time1: '1:39:50',
    time2: '1:39:05',
    winner: 2
  },
  {
    group: 'Gaea Hat',
    racer1: 'xPankraz',
    racer2: 'CSRadical',
    time1: '1:25:11',
    time2: '2:01:54',
    winner: 1
  },
  {
    group: 'Artemis Bow',
    racer1: 'PlumeriaKnight',
    racer2: 'JBrunTR',
    time1: '1:54:04',
    time2: '2:12:32',
    winner: 1
  },
  {
    group: 'Ogre Axe',
    racer1: 'Marten Broadcloak',
    racer2: 'Slippery',
    time1: '1:45:55',
    time2: '1:43:51',
    winner: 2
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'BoneyC',
    racer2: 'beernerd',
    time1: '1:49:19',
    time2: '1:33:36',
    winner: 2
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'Poorlydrawnbees',
    racer2: 'beernerd',
    time1: '1:29:50',
    time2: '1:39:01',
    winner: 1
  },
  {
    group: 'Heroine Robe',
    racer1: 'bgrich419',
    racer2: 'LadyId19',
    time1: '2:23:32',
    time2: '1:54:25',
    winner: 2
  },
  {
    group: 'Blitz Whip',
    racer1: 'Cubsrule21',
    racer2: 'Y2Sky',
    time1: '1:25:42',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Ogre Axe',
    racer1: 'GeminiHero',
    racer2: 'Soleras',
    time1: '2:29:40',
    time2: '1:44:11',
    winner: 2
  },
  {
    group: 'Crystal Ring',
    racer1: 'Xenocat',
    racer2: 'Rexx Raul',
    time1: '1:34:52',
    time2: '1:55:17',
    winner: 1
  },{
    group: 'Ninja Shirt',
    racer1: 'Kyrios',
    racer2: 'arusta',
    time1: '2:28:58',
    time2: '2:50:00',
    winner: 1
  },
  {
    group: 'Ninja Shirt',
    racer1: 'moonblazewolf',
    racer2: 'drcossack',
    time1: '1:38:47',
    time2: '1:47:08',
    winner: 1
  },
  {
    group: 'Defense Sword',
    racer1: 'nitzy',
    racer2: 'Zeke Highwind',
    time1: '2:42:48',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Lilith Rod',
    racer1: 'Pyre',
    racer2: 'Friedghoughphtheightteau',
    time1: '1:39:55',
    time2: '1:45:52',
    winner: 1
  },
  {
    group: 'Artemis Bow',
    racer1: 'John Brickhead',
    racer2: 'frankiebones',
    time1: '1:42:35',
    time2: '1:51:41',
    winner: 1
  },
  {
    group: 'Karate Gi',
    racer1: 'Galeswift',
    racer2: 'FirebirdLover',
    time1: '1:37:45',
    time2: '2:07:31',
    winner: 1
  },
  {
    group: 'Ninja Shirt',
    racer1: 'ScytheMarshall',
    racer2: 'Sheep Launcher',
    time1: '2:02:32',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Blitz Whip',
    racer1: 'dnarii',
    racer2: 'soapboxgamer',
    time1: '1:45:35',
    time2: '2:20:15',
    winner: 1
  },
  {
    group: 'Crystal Ring',
    racer1: 'Xenocat',
    racer2: 'Alchemie',
    time1: '1:39:03',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'Just Kinda',
    racer2: 'BoneyC',
    time1: 'Forfeit',
    time2: '1:29:06',
    winner: 2
  },
  {
    group: 'Karate Gi',
    racer1: 'A Stone Dingley',
    racer2: 'Teknolink',
    time1: '1:49:05',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Gaea Hat',
    racer1: 'neongrey',
    racer2: 'Klopfer',
    time1: '1:47:44',
    time2: '1:44:29',
    winner: 2
  },
  {
    group: 'Heroine Robe',
    racer1: 'simbu',
    racer2: 'bgrich419',
    time1: '1:17:37',
    time2: '1:28:34',
    winner: 1
  },
  {
    group: 'Aegis Shield',
    racer1: 'BeautyInDiscovery',
    racer2: 'elvensorrow',
    time1: '2:18:50',
    time2: '1:52:47',
    winner: 2
  },
  {
    group: 'Crystal Ring',
    racer1: 'Saradin',
    racer2: 'Rexx Raul',
    time1: '1:38:14',
    time2: '1:39:20',
    winner: 1
  },
  {
    group: 'Full Moon',
    racer1: 'Possumorpheus',
    racer2: 'Fleury14',
    time1: '1:44:42',
    time2: '1:50:27',
    winner: 1
  },
  {
    group: 'Lilith Rod',
    racer1: 'BadKarma',
    racer2: 'Infinious',
    time1: '1:50:07',
    time2: '1:52:45',
    winner: 1
  },
  {
    group: 'Cat Claw',
    racer1: 'Poidrac',
    racer2: 'keddril',
    time1: '1:29:43',
    time2: '1:28:23',
    winner: 2
  },
  {
    group: 'Lilith Rod',
    racer1: 'Pyre',
    racer2: 'Lenophis',
    time1: '1:42:26',
    time2: '2:10:14',
    winner: 1
  },
  {
    group: 'Blitz Whip',
    racer1: 'Sorbius',
    racer2: 'recklesscharlie',
    time1: '1:51:10',
    time2: '1:57:15',
    winner: 1
  },
  {
    group: 'Cat Claw',
    racer1: 'Lord Bob Bree',
    racer2: 'scratchdragon',
    time1: '1:40:59',
    time2: '1:56:14',
    winner: 1
  },
  {
    group: 'Defense Sword',
    racer1: 'Gambit017',
    racer2: 'Zeke Highwind',
    time1: 'Forfeit',
    time2: '1:58:56',
    winner: 2
  },
  {
    group: 'Gaea Hat',
    racer1: 'SteppeLively',
    racer2: 'mikemike34',
    time1: '2:02:42',
    time2: '2:01:22',
    winner: 2
  },
]

export default matches;