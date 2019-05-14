// expects array of races
const FlagStats = (raceArr) => {
  if (!raceArr) return null;
  const FlagResults = {
    V: {
      0: 0,
      1: 0,
      2: 0,
    },
    J: {
      0: 0,
      i: 0,
      a: 0,
      s: 0,
    },
    K: {
      0: 0,
      1: 0,
      q: 0,
      m: 0,
      t: 0,
      noSafety: 0,
    },
    C: {
      0: 0,
      1: 0,
      n: 0,
      x: 0,
      5: 0,
    },
    charStart: {
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
    charRestrict: {
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
    other: {
      noDupes: 0,
      rescue: 0,
      hobs: 0,
      noApples: 0,
      noSirens: 0,
      aa: 0,
      noAdamants: 0,
      spoon: 0,
      fab: 0,
      huh: 0,
      vintage: 0,
      z: 0,
    },
    version: {
      oh36: 0,
      oh35: 0,
      oh34: 0,
      oh33: 0,
      oh32: 0,
      oh31: 0,
      oh30: 0,
      other: 0,
    },
    T: {
      0: 0,
      1: 0,
      2: 0, 
      3: 0,
      4: 0,
      x: 0,
      g: 0,
      r: 0,
    },
    S: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      c: 0,
      x: 0,
      noSafety: 0,
      f: 0,
      q: 0,
    },
    B: {
      0: 0,
      1: 0,
      noSafety: 0,
    },
    W: {
      alwaysBurn: 0,
      whyBurn: 0,
      whichBurn: 0,
    },
    total: 0,

  };
  console.log('flag stats!', raceArr);
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
  FlagResults.total = metadataRace.length;
  for (let race of metadataRace) {
    const flags = race.details.metadata.Flags;

    // V FLAG
    if (flags.indexOf('V') < 0) {
      FlagResults.V[0]++;
    }
    if (flags.indexOf('V1') >= 0) {
      FlagResults.V[1]++;
    }
    if (flags.indexOf('V2') >= 0) {
      FlagResults.V[2]++;
    }

    // J Flag
    if (flags.indexOf('J') < 0) {
      FlagResults.J[0]++;
    } else {
      const index = flags.indexOf('J');
      let nextLetter = null;
      let currentIndex = index;
      while (nextLetter !== ' ') {
        currentIndex++;
        if (currentIndex === flags.length) {
          break;
        }
        nextLetter = flags.charAt(currentIndex);
        switch(nextLetter) {
          case 'i':
            FlagResults.J.i++;
            break;
          case 's':
            FlagResults.J.s++;
            break;
          case 'a':
            FlagResults.J.a++;
            break;
          default:
        }
      }
    }
    
    // K Flag
    if (flags.indexOf('K') < 0) {
      FlagResults.K[0]++;
    } else {
      const index = flags.indexOf('K');
      if (flags.charAt(index + 1) === ' ') {
        FlagResults.K[1]++;
      } else {
        let nextLetter = null;
        let currentIndex = index;
        while (nextLetter !== ' ') {
          currentIndex++;
          if (currentIndex === flags.length) {
            break;
          }
          nextLetter = flags.charAt(currentIndex);
          switch(nextLetter) {
            case 'q':
              FlagResults.K.q++;
              break;
            case 'm':
              FlagResults.K.m++;
              break;
            case 't':
              FlagResults.K.t++;
              break;
            case '!':
              FlagResults.K.noSafety++;
              break;
            default:
          }
        }
      }
    }

    // C Flag
    if (flags.indexOf('C') < 0) {
      FlagResults.C[0]++;
    } else {
      const index = flags.indexOf('C');
      if (flags.charAt(index + 1) === ' ') {
        FlagResults.C[1]++;
      } else {
        let nextLetter = null;
        let currentIndex = index;
        while (nextLetter !== ' ') {
          currentIndex++;
          if (currentIndex === flags.length) {
            break;
          }
          nextLetter = flags.charAt(currentIndex);
          switch(nextLetter) {
            case 'n':
              FlagResults.C.n++;
              break;
            case 'x':
              FlagResults.C.x++;
              break;
            case '5':
              FlagResults.C[5]++;
              break;
            default:
          }
        }
      }
    }

    // character start
    if (flags.indexOf('-startfusoya') >= 0) {
      FlagResults.charStart.fusoya++;
    }
    if (flags.indexOf('-startcecil') >= 0) {
      FlagResults.charStart.cecil++;
    }
    if (flags.indexOf('-startkain') >= 0) {
      FlagResults.charStart.kain++;
    }
    if (flags.indexOf('-startrydia') >= 0) {
      FlagResults.charStart.rydia++;
    }
    if (flags.indexOf('-startedward') >= 0) {
      FlagResults.charStart.edward++;
    }
    if (flags.indexOf('-startrosa') >= 0) {
      FlagResults.charStart.rosa++;
    }
    if (flags.indexOf('-startyang') >= 0) {
      FlagResults.charStart.yang++;
    }
    if (flags.indexOf('-startpalom') >= 0) {
      FlagResults.charStart.palom++;
    }
    if (flags.indexOf('-startporom') >= 0) {
      FlagResults.charStart.porom++;
    }
    if (flags.indexOf('-startcid') >= 0) {
      FlagResults.charStart.cid++;
    }
    if (flags.indexOf('-startedge') >= 0) {
      FlagResults.charStart.edge++;
    }
    if (flags.indexOf('-starttellah') >= 0) {
      FlagResults.charStart.tellah++;
    }

    // character restrict
    if (flags.indexOf('-nofusoya') >= 0) {
      FlagResults.charRestrict.fusoya++;
    }
    if (flags.indexOf('-nocecil') >= 0) {
      FlagResults.charRestrict.cecil++;
    }
    if (flags.indexOf('-nokain') >= 0) {
      FlagResults.charRestrict.kain++;
    }
    if (flags.indexOf('-norydia') >= 0) {
      FlagResults.charRestrict.rydia++;
    }
    if (flags.indexOf('-noedward') >= 0) {
      FlagResults.charRestrict.edward++;
    }
    if (flags.indexOf('-norosa') >= 0) {
      FlagResults.charRestrict.rosa++;
    }
    if (flags.indexOf('-noyang') >= 0) {
      FlagResults.charRestrict.yang++;
    }
    if (flags.indexOf('-nopalom') >= 0) {
      FlagResults.charRestrict.palom++;
    }
    if (flags.indexOf('-noporom') >= 0) {
      FlagResults.charRestrict.porom++;
    }
    if (flags.indexOf('-nocid') >= 0) {
      FlagResults.charRestrict.cid++;
    }
    if (flags.indexOf('-noedge') >= 0) {
      FlagResults.charRestrict.edge++;
    }
    if (flags.indexOf('-notellah') >= 0) {
      FlagResults.charRestrict.tellah++;
    }

    // Loose Flags
    if (flags.indexOf('-nodupes') >= 0) {
      FlagResults.other.noDupes++;
    }
    if (flags.indexOf('-rescue') >= 0) {
      FlagResults.other.rescue++;
    }
    if (flags.indexOf('-hobs') >= 0) {
      FlagResults.other.hobs++;
    }
    if (flags.indexOf('-noapples') >= 0) {
      FlagResults.other.noApples++;
    }
    if (flags.indexOf('-nosirens') >= 0) {
      FlagResults.other.noSirens++;
    }
    if (flags.indexOf('-noadamants') >= 0) {
      FlagResults.other.noAdamants++;
    }
    if (flags.indexOf('-aa') >= 0) {
      FlagResults.other.aa++;
    }
    if (flags.indexOf('-spoon') >= 0) {
      FlagResults.other.spoon++;
    }
    if (flags.indexOf('-fab') >= 0) {
      FlagResults.other.fab++;
    }
    if (flags.indexOf('-huh') >= 0) {
      FlagResults.other.huh++;
    }
    if (flags.indexOf('-vintage') >= 0) {
      FlagResults.other.vintage++;
    }
    if (flags.indexOf('-z') >= 0) {
      FlagResults.other.z++;
    }

    // version
    if (race.details.metadata.Version) {
      const ver = race.details.metadata.Version;
      switch (ver) {
        case '0.3.6':
          FlagResults.version.oh36++;
          break;
        case '0.3.5':
          FlagResults.version.oh35++;
          break;
        case '0.3.4':
          FlagResults.version.oh34++;
          break;
        case '0.3.3':
          FlagResults.version.oh33++;
          break;
        case '0.3.2':
          FlagResults.version.oh32++;
          break;
        case '0.3.1':
          FlagResults.version.oh31++;
          break;
        case '0.3.0':
          FlagResults.version.oh30++;
          break;
        default:
          FlagResults.version.other++;
          break;
      }
    }

    // T Flag
    if (flags.indexOf('T1') >= 0) {
      FlagResults.T[1]++;
    }
    if (flags.indexOf('T2') >= 0) {
      FlagResults.T[2]++;
    }
    if (flags.indexOf('T3') >= 0) {
      FlagResults.T[3]++;
    }
    if (flags.indexOf('T4') >= 0) {
      FlagResults.T[4]++;
    }
    if (flags.indexOf('Tx') >= 0) {
      FlagResults.T[2]++;
    }
    if (flags.indexOf('T') < 0) {
      FlagResults.T[0]++;
    } else {
      // ehh?
      const index = flags.indexOf('T');
      let nextLetter = null;
      let currentIndex = index;
      while (nextLetter !== ' ') {
        currentIndex++;
        if (currentIndex === flags.length) {
          break;
        }
        nextLetter = flags.charAt(currentIndex);
        switch(nextLetter) {
          case 'g':
            FlagResults.T.g++;
            break;
          case 'r':
            FlagResults.T.r++;
            break;
          default:
        }
      }
    }

    // S Flag
    if (flags.indexOf('S1') >= 0) {
      FlagResults.S[1]++;
    }
    if (flags.indexOf('S2') >= 0) {
      FlagResults.S[2]++;
    }
    if (flags.indexOf('S3') >= 0) {
      FlagResults.S[3]++;
    }
    if (flags.indexOf('S4') >= 0) {
      FlagResults.S[4]++;
    }
    if (flags.indexOf('Sx') >= 0) {
      FlagResults.S.x++;
    }
    if (flags.indexOf('Sc') >= 0) {
      FlagResults.S.c++;
    }
    if (flags.indexOf('S') < 0) {
      FlagResults.S[0]++;
    } else {
      const index = flags.indexOf('S');
      let nextLetter = null;
      let currentIndex = index;
      while (nextLetter !== ' ') {
        currentIndex++;
        if (currentIndex === flags.length) {
          break;
        }
        nextLetter = flags.charAt(currentIndex);
        switch(nextLetter) {
          case '!':
            FlagResults.S.noSafety++;
            break;
          case 'f':
            FlagResults.S.f++;
            break;
          case 'q':
            FlagResults.S.q++;
            break;
          default:
        }
      }
    }

    // B Flag
    if (flags.indexOf('B!') >= 0) {
      FlagResults.B.noSafety++;
    }
    if (flags.indexOf('B') >= 0 && flags.indexOf('B!') < 0) {
      FlagResults.B[1]++;
    }
    if (flags.indexOf('B') < 0) {
      FlagResults.B[0]++;
    }

    // Wyvern
    if (flags.indexOf('-whyburn') >= 0) {
      FlagResults.W.whyBurn++;
    }
    if (flags.indexOf('-whichburn') >= 0) {
      FlagResults.W.whichBurn++;
    }
    if (flags.indexOf('-whyburn') < 0 && flags.indexOf('-whichburn') < 0) {
      FlagResults.W.alwaysBurn++;
    }
  }
  console.log('end result', FlagResults);
}

export default FlagStats;
