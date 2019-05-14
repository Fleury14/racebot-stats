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
    }
  };
  // console.log('flag stats!', raceArr);
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
  }
  console.log('end result', FlagResults);
}

export default FlagStats;
