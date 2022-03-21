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
    racer1: 'John Birckhead',
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
  {
    group: 'Lilith Rod',
    racer1: 'Eykir',
    racer2: 'Infinious',
    time1: '1:47:03',
    time2: '1:35:17',
    winner: 2
  },
  {
    group: 'Artemis Bow',
    racer1: 'JBrunTR',
    racer2: 'Mechalink',
    time1: '1:45:42',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Blitz Whip',
    racer1: 'recklesscharlie',
    racer2: 'Y2Sky',
    time1: '1:32:46',
    time2: '1:31:21',
    winner: 2
  },
  {
    group: 'Aegis Shield',
    racer1: 'BeautyInDiscovery',
    racer2: 'tallgrant',
    time1: '1:45:19',
    time2: '1:47:20',
    winner: 1
  },
  {
    group: 'Crystal Ring',
    racer1: 'Alchemie',
    racer2: 'Rexx Raul',
    time1: 'Forfeit',
    time2: '1:44:23',
    winner: 2
  },
  {
    group: 'Full Moon',
    racer1: 'Fleury14',
    racer2: 'Funnelcakes',
    time1: '1:47:10',
    time2: '1:51:15',
    winner: 1
  },
  {
    group: 'Dragoon Helm',
    racer1: 'microKorgs',
    racer2: 'ULTROS_PROFESSIONAL',
    time1: '1:38:23',
    time2: '1:51:26',
    winner: 1
  },
  {
    group: 'Spear Spear',
    racer1: 'Allisele',
    racer2: 'Dia',
    time1: 'Forfeit',
    time2: '1:32:54',
    winner: 2
  },
  {
    group: 'Cat Claw',
    racer1: 'Poidrac',
    racer2: 'scratchdragon',
    time1: '1:40:23',
    time2: '1:43:07',
    winner: 1
  },
  {
    group: 'Crystal Ring',
    racer1: 'Tybalt',
    racer2: 'Xenocat',
    time1: '1:55:23',
    time2: '1:52:33',
    winner: 2
  },
  {
    group: 'Defense Sword',
    racer1: 'Gambit017',
    racer2: 'The Bardic Panda',
    time1: '1:41:13',
    time2: '2:02:31',
    winner: 1
  },
  {
    group: 'Artemis Bow',
    racer1: 'JBrunTR',
    racer2: 'John Birckhead',
    time1: 'Forfeit',
    time2: '1:51:42',
    winner: 2
  },
  {
    group: 'Ninja Shirt',
    racer1: 'ScytheMarshall',
    racer2: 'DShmoo619',
    time1: '1:51:37',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Gaea Hat',
    racer1: 'xPankraz',
    racer2: 'neongrey',
    time1: '1:29:25',
    time2: '2:08:57',
    winner: 1
  },
  {
    group: 'Artemis Bow',
    racer1: 'DavidB',
    racer2: 'PlumeriaKnight',
    time1: 'Forfeit',
    time2: '1:43:26',
    winner: 2
  },
  {
    group: 'Heroine Robe',
    racer1: 'LadyId19',
    racer2: 'simbu',
    time1: '1:28:31',
    time2: '1:27:16',
    winner: 2
  },
  {
    group: 'Dragoon Helm',
    racer1: 'CommanderLeonhart',
    racer2: 'Dustygriff',
    time1: '1:22:26',
    time2: '1:31:11',
    winner: 1
  },
  {
    group: 'Aegis Shield',
    racer1: 'tallgrant',
    racer2: 'Vitasia',
    time1: '2:15:27',
    time2: '2:03:20',
    winner: 2
  },{
    group: 'Gaea Hat',
    racer1: 'CSRadical',
    racer2: 'SteppeLively',
    time1: 'Forfeit',
    time2: '1:42:20',
    winner: 2
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'LUF',
    racer2: 'BoneyC',
    time1: '2:03:33',
    time2: '1:52:09',
    winner: 2
  },
  {
    group: 'Crystal Ring',
    racer1: 'Alchemie',
    racer2: 'Saradin',
    time1: '1:59:50',
    time2: '1:52:04',
    winner: 2
  },{
    group: 'Blitz Whip',
    racer1: 'dnarii',
    racer2: 'Y2Sky',
    time1: '1:54:14',
    time2: '1:41:40',
    winner: 2
  },
  {
    group: 'Karate Gi',
    racer1: 'Galeswift',
    racer2: 'A Stone Dingley',
    time1: '1:51:46',
    time2: '1:42:36',
    winner: 2
  },
  {
    group: 'Gaea Hat',
    racer1: 'Klopfer',
    racer2: 'xPankraz',
    time1: '1:34:56',
    time2: '1:26:57',
    winner: 2
  },
  {
    group: 'Defense Sword',
    racer1: 'Dragus',
    racer2: 'McBain',
    time1: '1:53:16',
    time2: '1:54:01',
    winner: 1
  },
  {
    group: 'Full Moon',
    racer1: 'Professor Renderer',
    racer2: 'Possumorpheus',
    time1: '2:10:38',
    time2: '1:22:21',
    winner: 2
  },
  {
    group: 'Ninja Shirt',
    racer1: 'drcossack',
    racer2: 'Sheep Launcher',
    time1: '1:38:11',
    time2: '2:12:19',
    winner: 1
  },
  {
    group: 'Cat Claw',
    racer1: 'Eizan Tayama',
    racer2: 'Lord Bob Bree',
    time1: '1:32:15',
    time2: '1:26:33',
    winner: 2
  },
  {
    group: 'Ogre Axe',
    racer1: 'Marten Broadcloak',
    racer2: 'Zilch',
    time1: '1:43:09',
    time2: '1:48:22',
    winner: 1
  },
  {
    group: 'Spear Spear',
    racer1: 'EscoNitz',
    racer2: 'Rowdy Roddy Sniper',
    time1: '1:37:17',
    time2: '1:39:32',
    winner: 1
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'poorlydrawnbees',
    racer2: 'Just Kinda',
    time1: '1:38:26',
    time2: '2:02:30',
    winner: 1
  },
  {
    group: 'Ninja Shirt',
    racer1: 'moonblazewolf',
    racer2: 'Arusta',
    time1: '1:45:48',
    time2: '2:03:34',
    winner: 1
  },
  {
    group: 'Spear Spear',
    racer1: 'Allisele',
    racer2: 'Flyeaglesfly72',
    time1: '2:17:18',
    time2: '2:35:04',
    winner: 1
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'LUF',
    racer2: 'Just Kinda',
    time1: '1:58:40',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Defense Sword',
    racer1: 'Gambit017',
    racer2: 'nitzy',
    time1: '2:09:55',
    time2: '1:51:45',
    winner: 2
  },
  {
    group: 'Spear Spear',
    racer1: 'EscoNitz',
    racer2: 'Engidave',
    time1: 'Forfeit',
    time2: '1:45:50',
    winner: 2
  },
  {
    group: 'Ninja Shirt',
    racer1: 'Kyrios',
    racer2: 'ScytheMarshall',
    time1: '1:29:04',
    time2: '1:53:32',
    winner: 1
  },
  {
    group: 'Crystal Ring',
    racer1: 'Tybalt',
    racer2: 'Rexx Raul',
    time1: '2:05:55',
    time2: '1:47:18',
    winner: 2
  },
  {
    group: 'Cat Claw',
    racer1: 'JudgeJoe',
    racer2: 'Lord Bob Bree',
    time1: '1:36:55',
    time2: '2:00:39',
    winner: 1
  },
  {
    group: 'Lilith Rod',
    racer1: 'Eykir',
    racer2: 'BadKarma',
    time1: '1:45:48',
    time2: '1:47:38',
    winner: 1
  },
  {
    group: 'Defense Sword',
    racer1: 'The Bardic Panda',
    racer2: 'Zeke Highwind',
    time1: '1:42:22',
    time2: '1:48:12',
    winner: 1
  },
  {
    group: 'Aegis Shield',
    racer1: 'tallgrant',
    racer2: 'elvensorrow',
    time1: '1:55:54',
    time2: '2:00:29',
    winner: 1
  },
  {
    group: 'Artemis Bow',
    racer1: 'JBrunTR',
    racer2: 'Blue Cat Loach',
    time1: '1:44:25',
    time2: '1:38:58',
    winner: 2
  },
  {
    group: 'Gaea Hat',
    racer1: 'neongrey',
    racer2: 'mikemike34',
    time1: '2:22:46',
    time2: '1:53:34',
    winner: 2
  },
  {
    group: 'Gaea Hat',
    racer1: 'neongrey',
    racer2: 'SteppeLively',
    time1: '2:05:57',
    time2: '2:17:07',
    winner: 1
  },
  {
    group: 'Karate Gi',
    racer1: 'Galeswift',
    racer2: 'Teknolink',
    time1: '1:55:31',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Defense Sword',
    racer1: 'Gambit017',
    racer2: 'McBain',
    time1: '1:49:26',
    time2: '1:29:11',
    winner: 2
  },
  {
    group: 'Artemis Bow',
    racer1: 'DavidB',
    racer2: 'Mechalink',
    time1: '2:11:28',
    time2: '1:52:01',
    winner: 2
  },
  {
    group: 'Dragoon Helm',
    racer1: 'microKorgs',
    racer2: 'RexBanner',
    time1: '1:40:57',
    time2: '1:52:43',
    winner: 1
  },
  {
    group: 'Cat Claw',
    racer1: 'EizanTayama',
    racer2: 'scratchdragon',
    time1: '1:53:10',
    time2: '1:51:41',
    winner: 2
  },
  {
    group: 'Aegis Shield',
    racer1: 'elvensorrow',
    racer2: 'Vitasia',
    time1: '1:31:17',
    time2: '1:44:29',
    winner: 1
  },
  {
    group: 'Gaea Hat',
    racer1: 'CSRadical',
    racer2: 'Klopfer',
    time1: 'Forfeit',
    time2: '1:48:19',
    winner: 2
  },
  {
    group: 'Ninja Shirt',
    racer1: 'moonblazewolf',
    racer2: 'Kyrios',
    time1: '1:47:27',
    time2: '1:48:22',
    winner: 1
  },
  {
    group: 'Ogre Axe',
    racer1: 'Marten Broadcloak',
    racer2: 'Wewbear',
    time1: '1:46:29',
    time2: '1:39:36',
    winner: 2
  },
  {
    group: 'Aegis Shield',
    racer1: 'Xyrak',
    racer2: 'Nightdew',
    time1: '1:48:21',
    time2: '1:56:19',
    winner: 1
  },
  {
    group: 'Karate Gi',
    racer1: 'FirebirdLover',
    racer2: 'couch_23',
    time1: '2:14:13',
    time2: '2:10:25',
    winner: 2
  },
  {
    group: 'Artemis Bow',
    racer1: 'Blue Cat Loach',
    racer2: 'John Birckhead',
    time1: '1:35:30',
    time2: '1:43:42',
    winner: 1
  },
  {
    group: 'Defense Sword',
    racer1: 'Dragus',
    racer2: 'Zeke Highwind',
    time1: '1:50:08',
    time2: '2:00:16',
    winner: 1
  },
  {
    group: 'Ninja Shirt',
    racer1: 'DShmoo619',
    racer2: 'Sheep Launcher',
    time1: '2:01:21',
    time2: '2:30:54',
    winner: 1
  },
  {
    group: 'Artemis Bow',
    racer1: 'PlumeriaKnight',
    racer2: 'frankiebones',
    time1: '1:15:46',
    time2: '1:29:24',
    winner: 1
  },
  {
    group: 'Full Moon',
    racer1: 'Starman',
    racer2: 'Fleury14',
    time1: '1:44:42',
    time2: '1:39:02',
    winner: 2
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'poorlydrawnbees',
    racer2: 'Demerine',
    time1: 'Forfeit',
    time2: '1:41:04',
    winner: 2
  },
  {
    group: 'Cat Claw',
    racer1: 'JudgeJoe',
    racer2: 'Keddril',
    time1: '1:50:43',
    time2: '1:51:55',
    winner: 1
  },
  {
    group: 'Lilith Rod',
    racer1: 'Pyre',
    racer2: 'Eykir',
    time1: '1:32:17',
    time2: '1:22:02',
    winner: 2
  },
  {
    group: 'Crystal Ring',
    racer1: 'Xenocat',
    racer2: 'Saradin',
    time1: '1:40:27',
    time2: '1:45:38',
    winner: 1
  },
  {
    group: 'Spear Spear',
    racer1: 'Engidave',
    racer2: 'Rowdy Roddy Sniper',
    time1: '1:45:28',
    time2: '1:49:25',
    winner: 1
  },
  {
    group: 'Heroine Robe',
    racer1: 'LadyId19',
    racer2: 'Rhybon',
    time1: '1:37:21',
    time2: '1:32:14',
    winner: 2
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'beernerd',
    racer2: 'stoppableforce',
    time1: '1:43:25',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Full Moon',
    racer1: 'Funnelcakes',
    racer2: 'AsmadiGames',
    time1: '1:33:13',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Ogre Axe',
    racer1: 'Slippery',
    racer2: 'Wewbear',
    time1: '1:55:24',
    time2: '1:26:12',
    winner: 2
  },
  {
    group: 'Heroine Robe',
    racer1: 'bgrich419',
    racer2: 'Eninja81',
    time1: '1:40:21',
    time2: '2:03:21',
    winner: 1
  },
  {
    group: 'Aegis Shield',
    racer1: 'BeautyInDiscovery',
    racer2: 'Nightdew',
    time1: '2:01:42',
    time2: '1:38:53',
    winner: 2
  },
  {
    group: 'Ninja Shirt',
    racer1: 'drcossack',
    racer2: 'ScytheMarshall',
    time1: '1:59:53',
    time2: '1:52:07',
    winner: 2
  },
  {
    group: 'Lilith Rod',
    racer1: 'BadKarma',
    racer2: 'Friedghoughphtheightteau',
    time1: '1:23:30',
    time2: '1:07:14',
    winner: 2
  },
  {
    group: 'Gaea Hat',
    racer1: 'neongrey',
    racer2: 'CSRadical',
    time1: '1:58:14',
    time2: 'Forfeit',
    winner: 2
  },
  {
    group: 'Ninja Shirt',
    racer1: 'DShmoo619',
    racer2: 'Kyrios',
    time1: 'Forfeit',
    time2: '1:31:02',
    winner: 2
  },
  {
    group: 'Dragoon Helm',
    racer1: 'leggystarscream',
    racer2: 'ULTROS_PROFESSIONAL',
    time1: '1:43:12',
    time2: '1:43:24',
    winner: 1
  },
  {
    group: 'Blitz Whip',
    racer1: 'CubsRule21',
    racer2: 'soapboxgamer',
    time1: '1:54:39',
    time2: '1:52:00',
    winner: 2
  },
  {
    group: 'Lilith Rod',
    racer1: 'BadKarma',
    racer2: 'Lenophis',
    time1: '1:44:40',
    time2: '1:53:14',
    winner: 1
  },
  {
    group: 'Heroine Robe',
    racer1: 'Eninja81',
    racer2: 'simbu',
    time1: '1:59:36',
    time2: '1:27:04',
    winner: 2
  },
  {
    group: 'Aegis Shield',
    racer1: 'Xyrak',
    racer2: 'elvensorrow',
    time1: '2:13:15',
    time2: '2:04:07',
    winner: 2
  },
  {
    group: 'Karate Gi',
    racer1: 'Galeswift',
    racer2: 'couch_23',
    time1: '1:28:47',
    time2: '1:20:48',
    winner: 2
  },
  {
    group: 'Lilith Rod',
    racer1: 'Pyre',
    racer2: 'Infinious',
    time1: '1:45:50',
    time2: '1:56:00',
    winner: 1
  },
  {
    group: 'Spear Spear',
    racer1: 'Dia',
    racer2: 'Engidave',
    time1: 'Forfeit',
    time2: '1:26:34',
    winner: 2
  },
  {
    group: 'Karate Gi',
    racer1: 'Guerin',
    racer2: 'FirebirdLover',
    time1: '2:12:30',
    time2: '2:17:15',
    winner: 1
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'poorlydrawnbees',
    racer2: 'stoppableforce',
    time1: '1:35:55',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Blitz Whip',
    racer1: 'dnarii',
    racer2: 'Sorbius',
    time1: '1:50:32',
    time2: '1:50:18',
    winner: 2
  },
  {
    group: 'Crystal Ring',
    racer1: 'sylverfyre',
    racer2: 'Rexx Raul',
    time1: '1:50:59',
    time2: '1:55:15',
    winner: 1
  },
  {
    group: 'Gaea Hat',
    racer1: 'CSRadical',
    racer2: 'mikemike34',
    time1: '2:09:53',
    time2: '2:05:09',
    winner: 2
  },
  {
    group: 'Defense Sword',
    racer1: 'McBain',
    racer2: 'nitzy',
    time1: '1:51:46',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Karate Gi',
    racer1: 'Teknolink',
    racer2: 'couch_23',
    time1: 'Forfeit',
    time2: '1:43:02',
    winner: 2
  },
  {
    group: 'Artemis Bow',
    racer1: 'PlumeriaKnight',
    racer2: 'John Birckhead',
    time1: '2:07:07',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Heroine Robe',
    racer1: 'bgrich419',
    racer2: 'Rhybon',
    time1: '2:11:49',
    time2: '1:42:59',
    winner: 2
  },
  {
    group: 'Artemis Bow',
    racer1: 'Blue Cat Loach',
    racer2: 'Mechalink',
    time1: '1:29:24',
    time2: '1:33:42',
    winner: 1
  },
  {
    group: 'Blitz Whip',
    racer1: 'CubsRule21',
    racer2: 'recklesscharlie',
    time1: '1:20:58',
    time2: '1:25:35',
    winner: 1
  },
  {
    group: 'Ninja Shirt',
    racer1: 'ScytheMarshall',
    racer2: 'Arusta',
    time1: '1:48:36',
    time2: '1:44:55',
    winner: 2
  },
  {
    group: 'Aegis Shield',
    racer1: 'BeautyInDiscovery',
    racer2: 'Xyrak',
    time1: '1:48:02',
    time2: '1:50:37',
    winner: 1
  },
  {
    group: 'Karate Gi',
    racer1: 'Guerin',
    racer2: 'couch_23',
    time1: '1:52:27',
    time2: '1:38:39',
    winner: 2
  },
  {
    group: 'Cat Claw',
    racer1: 'JudgeJoe',
    racer2: 'EizanTayama',
    time1: '1:46:19',
    time2: '1:57:53',
    winner: 1
  },
  {
    group: 'Ogre Axe',
    racer1: 'Slippery',
    racer2: 'Soleras',
    time1: '1:51:37',
    time2: '1:41:32',
    winner: 2
  },
  {
    group: 'Full Moon',
    racer1: 'Fleury14',
    racer2: 'Professor Renderer',
    time1: '1:44:17',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Dragoon Helm',
    racer1: 'CommanderLeonhart',
    racer2: 'ULTROS_PROFESSIONAL',
    time1: '1:50:34',
    time2: '1:55:54',
    winner: 1
  },
  {
    group: 'Blitz Whip',
    racer1: 'Sorbius',
    racer2: 'soapboxgamer',
    time1: 'Forfeit',
    time2: '1:40:25',
    winner: 2
  },
  {
    group: 'Dragoon Helm',
    racer1: 'leggystarscream',
    racer2: 'Dustygriff',
    time1: 'Forfeit',
    time2: '1:49:09',
    winner: 2
  },
  {
    group: 'Ogre Axe',
    racer1: 'Marten Broadcloak',
    racer2: 'GeminiHero',
    time1: '1:18:17',
    time2: '2:05:43',
    winner: 1
  },
  {
    group: 'Spear Spear',
    racer1: 'Dia',
    racer2: 'EscoNitz',
    time1: '1:24:06',
    time2: '1:50:08',
    winner: 1
  },
  {
    group: 'Crystal Ring',
    racer1: 'sylverfyre',
    racer2: 'Saradin',
    time1: 'Forfeit',
    time2: '1:36:56',
    winner: 2
  },
  {
    group: 'Dragoon Helm',
    racer1: 'microKorgs',
    racer2: 'CommanderLeonhart',
    time1: '1:30:37',
    time2: '2:07:03',
    winner: 1
  },
  {
    group: 'Blitz Whip',
    racer1: 'recklesscharlie',
    racer2: 'soapboxgamer',
    time1: '1:49:30',
    time2: '1:52:03',
    winner: 1
  },
  {
    group: 'Full Moon',
    racer1: 'Funnelcakes',
    racer2: 'Starman',
    time1: '1:44:44',
    time2: '1:40:48',
    winner: 2
  },
  {
    group: 'Aegis Shield',
    racer1: 'BeautyInDiscovery',
    racer2: 'Vitasia',
    time1: '2:04:45',
    time2: '2:13:03',
    winner: 1
  },
  {
    group: 'Full Moon',
    racer1: 'AsmadiGames',
    racer2: 'ProfessorRenderer',
    time1: '1:42:10',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Karate Gi',
    racer1: 'A Stone Dingley',
    racer2: 'couch_23',
    time1: '1:54:30',
    time2: '1:53:23',
    winner: 2
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'BoneyC',
    racer2: 'Demerine',
    time1: '1:51:20',
    time2: 'Forfeit',
    winner: 1
  },
  {
    group: 'Blitz Whip',
    racer1: 'CubsRule21',
    racer2: 'dnarii',
    time1: '1:50:51',
    time2: '1:55:23',
    winner: 1
  },
  {
    group: 'Gaea Hat',
    racer1: 'SteppeLively',
    racer2: 'xPankraz',
    time1: '1:40:45',
    time2: '1:16:47',
    winner: 2
  },
  {
    group: 'Cat Claw',
    racer1: 'Poidrac',
    racer2: 'EizanTayama',
    time1: '1:43:17',
    time2: '1:37:47',
    winner: 2
  },
  {
    group: 'Cat Claw',
    racer1: 'scratchdragon',
    racer2: 'Keddril',
    time1: '1:16:22',
    time2: '1:33:28',
    winner: 1
  },
  {
    group: 'Crystal Ring',
    racer1: 'Xenocat',
    racer2: 'sylverfyre',
    time1: '1:44:31',
    time2: '1:31:39',
    winner: 2
  },
  {
    group: 'Ogre Axe',
    racer1: 'Soleras',
    racer2: 'Zilch',
    time1: '1:37:46',
    time2: '1:37:26',
    winner: 2
  },
  {
    group: 'Gaea Hat',
    racer1: 'Klopfer',
    racer2: 'mikemike34',
    time1: '1:27:15',
    time2: '1:21:12',
    winner: 2
  },
  {
    group: 'Artemis Bow',
    racer1: 'DavidB',
    racer2: 'frankiebones',
    time1: '2:19:12',
    time2: '1:46:34',
    winner: 2
  },
  {
    group: 'Zeus Gauntlet',
    racer1: 'BoneyC',
    racer2: 'poorlydrawnbees',
    time1: '1:46:17',
    time2: '1:50:19',
    winner: 1
  },
]

export default matches;