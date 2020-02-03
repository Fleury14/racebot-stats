// expects an array of races
const parseFlagStatsv4 = (raceArr) => {
  const FlagResults = {
    O: {
      classicForge: 0,
      classicGiant: 0,
      fiends: 0,
      dkMatter: 0,
      custom: {
        character: 0,
        boss: 0,
        quest: 0,
        total: 0,
      },
      random: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      win: {
        game: 0,
        crystal: 0,
      }
    },
    K: {
      main: 0,
      vanilla: 0,
      summon: 0,
      moon: 0,
      trap: 0,
      unsafe: 0,
    },
    P: {
      shop: 0,
      key: 0,
      chests: 0,
      none: 0,
    },
    C: {
      vanilla: 0,
      standard: 0,
      relaxed: 0,
      maybe: 0,
      bye: 0,
      jSpells: 0,
      jAbilities: 0,
      noDupes: 0,
      permajoin: 0,
      permaDeath: 0,
      permaDeader: 0,
      distinct: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
      },
      include: {
        cecil: 0,
        kain: 0,
        rydia: 0,
        tellah: 0,
        edward: 0,
        rosa: 0,
        yang: 0,
        palom: 0,
        porom: 0,
        cid: 0,
        edge: 0,
        fusoya: 0,
      },
      exclude: {
        cecil: 0,
        kain: 0,
        rydia: 0,
        tellah: 0,
        edward: 0,
        rosa: 0,
        yang: 0,
        palom: 0,
        porom: 0,
        cid: 0,
        edge: 0,
        fusoya: 0,
      },
      start: {
        cecil: 0,
        kain: 0,
        rydia: 0,
        tellah: 0,
        edward: 0,
        rosa: 0,
        yang: 0,
        palom: 0,
        porom: 0,
        cid: 0,
        edge: 0,
        fusoya: 0,
      }
    },
    T: {
      vanilla: 0,
      shuffle: 0,
      standard: 0,
      pro: 0,
      wild: 0,
      wildish: 0,
      empty: 0,
      junk: 0,
      noJ: 0,
      sparse: {
        10: 0,
        20: 0,
        30: 0,
        40: 0,
        50: 0,
        60: 0,
        70: 0,
        80: 0,
        90: 0,
      }
    },
    S: {
      vanilla: 0,
      shuffle: 0,
      standard: 0,
      pro: 0,
      wild: 0,
      cabins: 0,
      empty: 0,
      free: 0,
      quarter: 0,
      noJ: 0,
      noApples: 0,
      noSirens: 0,
    },
    B: {
      vanilla: 0,
      standard: 0,
      altGauntlet: 0,
      unsafe: 0,
      wyvern: {
        change: 0,
        eliminate: 0,
        leave: 0,
      }
    },
    N: {
      chars: 0,
      key: 0,
      bosses: 0,
    },
    E: {
      toggle: 0,
      vanilla: 0,
      reduce: 0,
      none: 0,
      drop: {
        noSirens: 0,
        noJDrops: 0,
      },
      keep: {
        doors: 0,
        behemoths: 0,
      },
      noEscape: 0,
      noExp: 0,
    },
    G: {
      dupe: 0,
      mp: 0,
      warp: 0,
      life: 0,
      64: 0
    },
    other: {
      kit: {
        none: 0,
        basic: 0,
        better: 0,
        loaded: 0,
        spitball: 0,
      },
      noAdamants: 0,
      vintage: 0,
      spoon: 0,
      vanilla: {
        fusoya: 0,
        agility: 0,
        hobs: 0,
        exp: 0,
        fashion: 0,
        traps: 0,
        z: 0
      },
      spoiler: 0,
    },
  };

  // remove all non fe-races
  const FERaces = raceArr.filter(race => race.details && race.details.game === 'ff4fe');
  // remove all races with no flag data
  const metadataRace = FERaces.filter(race => {
    if (!race.details.metadata) {
      return null;
    }
    if (race.details.metadata.Flags) {
      return race;
    }
    return null;
  });
  FlagResults.total = 0;

  for (let race of metadataRace) {
    const flags = race.details.metadata.Flags;
    
    // skip non v4 races
    if (!race.details.metadata.Version || race.details.metadata.Version.indexOf('v4') < 0) continue;
    FlagResults.total++;

    // O Flag
    const oString = getPropertySection(flags, 'O');
    if (oString.indexOf('classicforge') >= 0) {
      FlagResults.O.classicForge++;
    }
    if (oString.indexOf('classicgiant') >= 0) {
      FlagResults.O.classicGiant++;
    }
    if (oString.indexOf('fiends') >= 0) {
      FlagResults.O.fiends++;
    }
    if (oString.indexOf('dkmatter') >= 0) {
      FlagResults.O.dkMatter++;
    }
    if (oString.indexOf('boss') >= 0) {
      FlagResults.O.custom.boss++;
    }
    if (oString.indexOf('char') >= 0) {
      FlagResults.O.custom.character++;
    }
    if (oString.indexOf('quest') >= 0) {
      FlagResults.O.custom.quest++;
    }
    if (oString.indexOf('boss') >= 0 || oString.indexOf('char') >= 0 || oString.indexOf('quest') >= 0) {
      FlagResults.O.custom.total++;
    }
    if (oString.indexOf('random') >= 0) {
      const numOfRandoms = parseInt(oString.charAt(oString.indexOf('random') + 7));
      FlagResults.O.random[numOfRandoms]++;
    }
    if (oString.indexOf('game') >= 0) {
      FlagResults.O.win.game++;
    }
    if (oString.indexOf('crystal') >= 0) {
      FlagResults.O.win.crystal++;
    }

    // K Flag
    const kString = getPropertySection(flags, 'K');
    if (kString.indexOf('vanilla') >= 0) {
      FlagResults.K.vanilla++;
    }
    if (kString.indexOf('main') >= 0) {
      FlagResults.K.main++;
    }
    if (kString.indexOf('summon') >= 0) {
      FlagResults.K.summon++;
    }
    if (kString.indexOf('moon') >= 0) {
      FlagResults.K.moon++;
    }
    if (kString.indexOf('trap') >= 0) {
      FlagResults.K.trap++;
    }
    if (kString.indexOf('unsafe') >= 0) {
      FlagResults.K.unsafe++;
    }

    // P FLAG
    const pString = getPropertySection(flags, 'P');
    if (pString.indexOf('shop') >= 0) {
      FlagResults.P.shop++;
    }
    if (pString.indexOf('key') >= 0) {
      FlagResults.P.key++;
    }
    if (pString.indexOf('chests') >= 0) {
      FlagResults.P.chests++;
    }
    if (pString.indexOf('none') >= 0) {
      FlagResults.P.none++;
    }

    // C FLAG
    const cString = getPropertySection(flags, 'C');
    if (cString.indexOf('vanilla') >= 0) {
      FlagResults.C.vanilla++;
    }
    if (cString.indexOf('standard') >= 0) {
      FlagResults.C.standard++;
    }
    if (cString.indexOf('relaxed') >= 0) {
      FlagResults.C.relaxed++;
    }
    if (cString.indexOf('bye') >= 0) {
      FlagResults.C.bye++;
    }
    if (cString.indexOf('spells') >= 0) {
      FlagResults.C.jSpells++;
    }
    if (cString.indexOf('abilities') >= 0) {
      FlagResults.C.jAbilities++;
    }
    if (cString.indexOf('nodupes') >= 0) {
      FlagResults.C.noDupes++;
    }
    if (cString.indexOf('permajoin') >= 0) {
      FlagResults.C.permajoin++;
    }
    if (cString.indexOf('permadeath') >= 0) {
      FlagResults.C.permaDeath++;
    }
    if (cString.indexOf('permadeader') >= 0) {
      FlagResults.C.permaDeader++;
    }
    if (cString.indexOf('distinct') >= 0) {
      const numOfChars = parseInt(cString.charAt(cString.indexOf('distinct') + 9));
      if (numOfChars !== 1) {
        FlagResults.C.distinct[numOfChars]++;
      } else {
        switch (cString.charAt(cString.indexOf('distinct') + 10)) {
          case '0':
            FlagResults.C.distinct[10]++;
            break;
          case '1':
            FlagResults.C.distinct[11]++;
            break;
          default:
            FlagResults.C.distinct[1]++;
            break;
        }
      }
    }
    if (cString.indexOf('only') >= 0) {
      let end = null;
      for (let i = cString.indexOf('only'); i <= cString.length; i++) {
        if (i === cString.length || cString.charAt(i) === '/' || cString.charAt(i) === ' ') {
          end = i;
        }
      }
      const onlyString = cString.slice(cString.indexOf('only'), end);
      if (onlyString.indexOf('cecil') >= 0) {
        FlagResults.C.include.cecil++;
      }
      if (onlyString.indexOf('kain') >= 0) {
        FlagResults.C.include.kain++;
      }
      if (onlyString.indexOf('rydia') >= 0) {
        FlagResults.C.include.rydia++;
      }
      if (onlyString.indexOf('tellah') >= 0) {
        FlagResults.C.include.tellah++;
      }
      if (onlyString.indexOf('edward') >= 0) {
        FlagResults.C.include.edward++;
      }
      if (onlyString.indexOf('rosa') >= 0) {
        FlagResults.C.include.rosa++;
      }
      if (onlyString.indexOf('yang') >= 0) {
        FlagResults.C.include.yang++;
      }
      if (onlyString.indexOf('palom') >= 0) {
        FlagResults.C.include.palom++;
      }
      if (onlyString.indexOf('porom') >= 0) {
        FlagResults.C.include.porom++;
      }
      if (onlyString.indexOf('cid') >= 0) {
        FlagResults.C.include.cid++;
      }
      if (onlyString.indexOf('edge') >= 0) {
        FlagResults.C.include.edge++;
      }
      if (onlyString.indexOf('fusoya') >= 0) {
        FlagResults.C.include.fusoya++;
      }
    }
    if (cString.indexOf('no:') >= 0) {
      let end = null;
      for (let i = cString.indexOf('no:'); i <= cString.length; i++) {
        if (i === cString.length || cString.charAt(i) === '/' || cString.charAt(i) === ' ') {
          end = i;
        }
      }
      const excludeString = cString.slice(cString.indexOf('no:'), end);
      if (excludeString.indexOf('cecil') >= 0) {
        FlagResults.C.exclude.cecil++;
      }
      if (excludeString.indexOf('kain') >= 0) {
        FlagResults.C.exclude.kain++;
      }
      if (excludeString.indexOf('rydia') >= 0) {
        FlagResults.C.exclude.rydia++;
      }
      if (excludeString.indexOf('tellah') >= 0) {
        FlagResults.C.exclude.tellah++;
      }
      if (excludeString.indexOf('edward') >= 0) {
        FlagResults.C.exclude.edward++;
      }
      if (excludeString.indexOf('rosa') >= 0) {
        FlagResults.C.exclude.rosa++;
      }
      if (excludeString.indexOf('yang') >= 0) {
        FlagResults.C.exclude.yang++;
      }
      if (excludeString.indexOf('palom') >= 0) {
        FlagResults.C.exclude.palom++;
      }
      if (excludeString.indexOf('porom') >= 0) {
        FlagResults.C.exclude.porom++;
      }
      if (excludeString.indexOf('cid') >= 0) {
        FlagResults.C.exclude.cid++;
      }
      if (excludeString.indexOf('edge') >= 0) {
        FlagResults.C.exclude.edge++;
      }
      if (excludeString.indexOf('fusoya') >= 0) {
        FlagResults.C.exclude.fusoya++;
      }
    }
    if (cString.indexOf('start:') >= 0) {
      let end = null;
      for (let i = cString.indexOf('start:'); i <= cString.length; i++) {
        if (i === cString.length || cString.charAt(i) === '/' || cString.charAt(i) === ' ') {
          end = i;
        }
      }
      const startString = cString.slice(cString.indexOf('no:'), end);
      if (startString.indexOf('cecil') >= 0) {
        FlagResults.C.start.cecil++;
      }
      if (startString.indexOf('kain') >= 0) {
        FlagResults.C.start.kain++;
      }
      if (startString.indexOf('rydia') >= 0) {
        FlagResults.C.start.rydia++;
      }
      if (startString.indexOf('tellah') >= 0) {
        FlagResults.C.start.tellah++;
      }
      if (startString.indexOf('edward') >= 0) {
        FlagResults.C.start.edward++;
      }
      if (startString.indexOf('rosa') >= 0) {
        FlagResults.C.start.rosa++;
      }
      if (startString.indexOf('yang') >= 0) {
        FlagResults.C.start.yang++;
      }
      if (startString.indexOf('palom') >= 0) {
        FlagResults.C.start.palom++;
      }
      if (startString.indexOf('porom') >= 0) {
        FlagResults.C.start.porom++;
      }
      if (startString.indexOf('cid') >= 0) {
        FlagResults.C.start.cid++;
      }
      if (startString.indexOf('edge') >= 0) {
        FlagResults.C.start.edge++;
      }
      if (startString.indexOf('fusoya') >= 0) {
        FlagResults.C.start.fusoya++;
      }
    }

    // T FLAG
    const tString = getPropertySection(flags, 'T');
    if (tString.indexOf('vanilla') >= 0) {
      FlagResults.T.vanilla++;
    }
    if (tString.indexOf('shuffle') >= 0) {
      FlagResults.T.shuffle++;
    }
    if (tString.indexOf('standard') >= 0) {
      FlagResults.T.standard++;
    }
    if (tString.indexOf('pro') >= 0) {
      FlagResults.T.pro++;
    }
    if (tString.indexOf('wildish') >= 0) {
      FlagResults.T.wildish++;
    }
    if (tString.indexOf('wild') >= 0 && tString.indexOf('wildish') < 0) {
      FlagResults.T.wild++;
    }
    if (tString.indexOf('empty') >= 0) {
      FlagResults.T.empty++;
    }
    if (tString.indexOf('sparse') >= 0) {
      const pctOfChests = parseInt(tString.slice(tString.indexOf('sparse') + 7, tString.indexOf('sparse') + 9));
      FlagResults.T.sparse[pctOfChests]++;
    }
    if (tString.indexOf('no:j') >= 0) {
      FlagResults.T.noJ++;
    }
    if (tString.indexOf('junk') >= 0) {
      FlagResults.T.junk++;
    }

    // S FLAG
    const sString = getPropertySection(flags, 'S');
    if (sString.indexOf('vanilla') >= 0) {
      FlagResults.S.vanilla++;
    }
    if (sString.indexOf('shuffle') >= 0) {
      FlagResults.S.shuffle++;
    }
    if (sString.indexOf('standard') >= 0) {
      FlagResults.S.standard++;
    }if (sString.indexOf('pro') >= 0) {
      FlagResults.S.pro++;
    }
    if (sString.indexOf('wild') >= 0) {
      FlagResults.S.wild++;
    }
    if (sString.indexOf('cabins') >= 0) {
      FlagResults.S.cabins++;
    }
    if (sString.indexOf('empty') >= 0) {
      FlagResults.S.empty++;
    }
    if (sString.indexOf('free') >= 0) {
      FlagResults.S.free++;
    }
    if (sString.indexOf('quarter') >= 0) {
      FlagResults.S.quarter++;
    }
    if (sString.indexOf('no:j') >= 0) {
      FlagResults.S.noJ++;
    }
    if (sString.indexOf('apples') >= 0) {
      FlagResults.S.noApples++;
    }
    if (sString.indexOf('sirens') >= 0) {
      FlagResults.S.noSirens++;
    }

    // B FLAG
    const bString = getPropertySection(flags, 'B');
    if (bString.indexOf('vanilla') >= 0) {
      FlagResults.B.vanilla++;
    }
    if (bString.indexOf('standard') >= 0) {
      FlagResults.B.standard++;
    }
    if (bString.indexOf('unsafe') >= 0) {
      FlagResults.B.unsafe++;
    }
    if (bString.indexOf('alt:gauntlet') >= 0) {
      FlagResults.B.altGauntlet++;
    }
    if (bString.indexOf('whyburn') >= 0) {
      FlagResults.B.wyvern.eliminate++;
    } else if (bString.indexOf('whichburn') >= 0) {
      FlagResults.B.wyvern.change++;
    } else {
      FlagResults.B.wyvern.leave++;
    }

    // N FLAG
    const nString = getPropertySection(flags, 'N');
    if (nString.indexOf('chars') >= 0) {
      FlagResults.N.chars++;
    }
    if (nString.indexOf('key') >= 0) {
      FlagResults.N.key++;
    }
    if (nString.indexOf('bosses') >= 0) {
      FlagResults.N.bosses++;
    }

    // E FLAG
    const eString = getPropertySection(flags, 'E');
    if (eString.indexOf('vanilla') >= 0) {
      FlagResults.E.vanilla++;
    }
    if (eString.indexOf('toggle') >= 0) {
      FlagResults.E.toggle++;
    }
    if (eString.indexOf('reduce') >= 0) {
      FlagResults.E.reduce++;
    }
    if (eString.indexOf('noencounters') >= 0) {
      FlagResults.E.none++;
    }
    if (eString.indexOf('sirens') >= 0) {
      FlagResults.E.drop.noSirens++;
    }
    if (eString.indexOf('jdrops') >= 0) {
      FlagResults.E.drop.noJDrops++;
    }
    if (eString.indexOf('doors') >= 0) {
      FlagResults.E.keep.doors++;
    }
    if (eString.indexOf('behemoths') >= 0) {
      FlagResults.E.keep.behemoths++;
    }
    if (eString.indexOf('cantrun') >= 0) {
      FlagResults.E.noEscape++;
    }
    if (eString.indexOf('noexp') >= 0) {
      FlagResults.E.noExp++;
    }

    // G FLAG
    const gString = getPropertySection(flags, 'G');
    if (gString.indexOf('dupe') >= 0) {
      FlagResults.G.dupe++;
    }
    if (gString.indexOf('warp') >= 0) {
      FlagResults.G.warp++;
    }
    if (gString.indexOf('mp') >= 0) {
      FlagResults.G.mp++;
    }
    if (gString.indexOf('life') >= 0) {
      FlagResults.G.life++;
    }
    if (gString.indexOf('64') >= 0) {
      FlagResults.G[64]++;
    }

    // OTHER

    const kitString = getPropertySection(flags, '-kit');
    if (kitString.indexOf('basic') >= 0) {
      FlagResults.other.kit.basic++;
    } else if (kitString.indexOf('better') >= 0) {
      FlagResults.other.kit.better++;
    } else if (kitString.indexOf('loaded') >= 0) {
      FlagResults.other.kit.loaded++;
    } else if (kitString.indexOf('spitball') >= 0) {
      FlagResults.other.kit.spitball++;
    } else {
      FlagResults.other.kit.none++;
    }

    if(flags.indexOf('-noadamants') >= 0) {
      FlagResults.other.noAdamants++;
    }
    if(flags.indexOf('-vintage') >= 0) {
      FlagResults.other.vintage++;
    }
    if(flags.indexOf('-spoon') >= 0) {
      FlagResults.other.spoon++;
    }
    if(flags.indexOf('-spoiler') >= 0) {
      FlagResults.other.spoiler++;
    }

    const vanillaString = getPropertySection(flags, '-vanilla');
    if (vanillaString.indexOf('fusoya') >= 0) {
      FlagResults.other.vanilla.fusoya++;
    }
    if (vanillaString.indexOf('agility') >= 0) {
      FlagResults.other.vanilla.agility++;
    }
    if (vanillaString.indexOf('hobs') >= 0) {
      FlagResults.other.vanilla.hobs++;
    }
    if (vanillaString.indexOf('exp') >= 0) {
      FlagResults.other.vanilla.exp++;
    }
    if (vanillaString.indexOf('fashion') >= 0) {
      FlagResults.other.vanilla.fashion++;
    }
    if (vanillaString.indexOf('traps') >= 0) {
      FlagResults.other.vanilla.traps++;
    }
    if (vanillaString.indexOf('z') >= 0) {
      FlagResults.other.vanilla.z++;
    }
  }

  // post-loop additions
  // FlagResults.O.custom.total = FlagResults.O.custom.boss + FlagResults.O.custom.quest + FlagResults.O.custom.character;
  
  console.log('v4', FlagResults)
  return FlagResults;
}

const getPropertySection = (flags, criteria) => {
  // get shop section of flag string
  const begin = flags.indexOf(criteria);
  let end = flags.length;
  for (let i = begin; i < flags.length; i++) {
      const charTest = flags.charAt(i);
      if(charTest === ' ') {
          end = i;
          break;
      }
  }

  let results = flags.slice(begin, end);
  return results;
}

export default parseFlagStatsv4;