import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { ReduxMainData } from '../redux-data';
import { parseFlagStatsv4 } from '../../helpers';
import { LoadingModal } from '..';
import './FlagStats.scss';

const v4FlagStats = (props) => {
  return (
    <ReduxMainData>
      {(reduxData) => {
        // const data = parseFlagStatsv4(reduxData.botData ? reduxData.botData.items : null);
        const data = parseFlagStatsv4(reduxData.botData ? reduxData.botData.items : null);
        const loading = reduxData.loading;
        const characters = ['Cecil', 'Kain', 'Rydia', 'Tellah', 'Edward', 'Rosa', 'Yang', 'Palom', 'Porom', 'Cid', 'Edge', 'FuSoYa'];
        const sparse = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        
        return (
          <div>
            {loading && <LoadingModal />}
            {data && !loading &&  (
              <div className="flag-stats-container open-sans">
                <div className="flag-stats-body p-5">
                  <h1 className="text-center">Flag stats</h1>
                  <p className="text-center mb-5">Races recorded: {data.total}</p>
                  <Container>
                    <Row>
                      <Col md="4" className="mb-4">
                        <div className="text-center mb-4">
                          <h2>O Flag (Objectives)</h2>
                          <p>Classic Forge: {data.O.classicForge} ({(data.O.classicForge / data.total * 100).toFixed(1)}%)</p>
                          <p>Classic Giant: {data.O.classicGiant} ({(data.O.classicGiant / data.total * 100).toFixed(1)}%)</p>
                          <p>Fiends%: {data.O.fiends} ({(data.O.fiends / data.total * 100).toFixed(1)}%)</p>
                          <p className="mb-3">Dark Matter Hunt: {data.O.dkMatter} ({(data.O.dkMatter / data.total * 100).toFixed(1)}%)</p>
                          <h3>Custom Objectives</h3>
                          <p>Times a custom objective was added: {data.O.custom.total} ({(data.O.custom.total / data.total * 100).toFixed(1)}%)</p>
                          <p>Of those races, the following was selected as an objective:</p>
                          <p>Character: {data.O.custom.character} ({(data.O.custom.character / data.O.custom.total * 100).toFixed(1)}%)</p>
                          <p>Boss Hunt: {data.O.custom.boss} ({(data.O.custom.boss / data.O.custom.total * 100).toFixed(1)}%)</p>
                          <p className="mb-3">Quest: {data.O.custom.quest} ({(data.O.custom.quest / data.O.custom.total * 100).toFixed(1)}%)</p>
                          <h3>Random Objectives</h3>
                          <p># of Objectives added:</p>
                          <p>1: {data.O.random[1]} ({(data.O.random[1] / data.total * 100).toFixed(1)}%)</p>
                          <p>1: {data.O.random[2]} ({(data.O.random[2] / data.total * 100).toFixed(1)}%)</p>
                          <p>1: {data.O.random[3]} ({(data.O.random[3] / data.total * 100).toFixed(1)}%)</p>
                          <p>1: {data.O.random[4]} ({(data.O.random[4] / data.total * 100).toFixed(1)}%)</p>
                          <p>1: {data.O.random[5]} ({(data.O.random[5] / data.total * 100).toFixed(1)}%)</p>
                        </div>
                        <div className="text-center mb-4">
                          <h2>P Flag (Pass)</h2>
                          <p>Shop: {data.P.shop} ({(data.P.shop / data.total * 100).toFixed(1)}%)</p>
                          <p>Key Item: {data.P.key} ({(data.P.key / data.total * 100).toFixed(1)}%)</p>
                          <p>Chest: {data.P.chests} ({(data.P.chests / data.total * 100).toFixed(1)}%)</p>
                          <p>None: {data.P.none} ({(data.P.none / data.total * 100).toFixed(1)}%)</p>
                        </div>
                        <div className="text-center mb-4">
                          <h2>N Flag (No Free Lunch)</h2>
                          <p>Character: {data.N.chars} ({(data.N.chars / data.total * 100).toFixed(1)}%)</p>
                          <p>Key Item: {data.N.key} ({(data.N.key / data.total * 100).toFixed(1)}%)</p>
                          <p>Bosses: {data.N.bosses} ({(data.N.bosses / data.total * 100).toFixed(1)}%)</p>
                        </div>
                        <div className="text-center mb-4">
                          <h2>B Flag (Bosses)</h2>
                          <p>Vanilla: {data.B.vanilla} ({(data.B.vanilla / data.total * 100).toFixed(1)}%)</p>
                          <p>Standard: {data.B.standard} ({(data.B.standard / data.total * 100).toFixed(1)}%)</p>
                          <p>Alt-Gauntlet: {data.B.altGauntlet} ({(data.B.altGauntlet / data.total * 100).toFixed(1)}%)</p>
                          <p>Unsafe: {data.B.unsafe} ({(data.B.unsafe / data.total * 100).toFixed(1)}%)</p>
                          <p>Why Burn?: {data.B.wyvern.eliminate} ({(data.B.wyvern.eliminate / data.total * 100).toFixed(1)}%)</p>
                          <p>Which Burn?: {data.B.wyvern.change} ({(data.B.wyvern.change / data.total * 100).toFixed(1)}%)</p>
                          <p>Always Burn!: {data.B.wyvern.leave} ({(data.B.wyvern.leave / data.total * 100).toFixed(1)}%)</p>
                        </div>
                      </Col>
                      <Col md="8">
                        <Row className="mb-5">
                          <Col md="6">
                            <div className="text-center">
                              <h2>C-Flag (Characters)</h2>
                              <p>Vanilla: {data.C.vanilla} ({(data.C.vanilla / data.total * 100).toFixed(1)}%)</p>
                              <p>Standard: {data.C.standard} ({(data.C.standard / data.total * 100).toFixed(1)}%)</p>
                              <p>Relaxed: {data.C.relaxed} ({(data.C.relaxed / data.total * 100).toFixed(1)}%)</p>
                              <p>Not Guaranteed: {data.C.maybe} ({(data.C.maybe / data.total * 100).toFixed(1)}%)</p>
                              <p>No rejoin: {data.C.bye} ({(data.C.bye / data.total * 100).toFixed(1)}%)</p>
                              <p>J-Spells: {data.C.jSpells} ({(data.C.jSpells / data.total * 100).toFixed(1)}%)</p>
                              <p>J-Abilities: {data.C.jAbilities} ({(data.C.jAbilities / data.total * 100).toFixed(1)}%)</p>
                              <p>No dupes: {data.C.noDupes} ({(data.C.noDupes / data.total * 100).toFixed(1)}%)</p>
                              <p>Permajoin: {data.C.permajoin} ({(data.C.permajoin / data.total * 100).toFixed(1)}%)</p>
                              <p>Permadeath: {data.C.permaDeath} ({(data.C.permaDeath / data.total * 100).toFixed(1)}%)</p>
                              <p>Permadeader: {data.C.permaDeader} ({(data.C.permaDeader / data.total * 100).toFixed(1)}%)</p>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="text-center mb-4">
                              <h2>K Flag (Key Items)</h2>
                              <p>Vanilla: {data.K.vanilla} ({(data.K.vanilla / data.total * 100).toFixed(1)}%)</p>
                              <p>Main: {data.K.main} ({(data.K.main / data.total * 100).toFixed(1)}%)</p>
                              <p>Summon: {data.K.summon} ({(data.K.summon / data.total * 100).toFixed(1)}%)</p>
                              <p>Moon: {data.K.moon} ({(data.K.moon / data.total * 100).toFixed(1)}%)</p>
                              <p>Trapped Chests: {data.K.trap} ({(data.K.trap / data.total * 100).toFixed(1)}%)</p>
                              <p>Safetys Off: {data.K.unsafe} ({(data.K.unsafe / data.total * 100).toFixed(1)}%)</p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <h2>Character Restrictions</h2>
                            <Table>
                              <thead>
                                <tr>
                                  <th>Char</th>
                                  <th>Start</th>
                                  <th>Include</th>
                                  <th>Exclude</th>
                                </tr>
                              </thead>
                              <tbody>
                                {characters.map(char => {
                                  return (
                                    <tr key={char}>
                                      <th>{char}</th>
                                      <td>{data.C.start[char.toLowerCase()]}</td>
                                      <td>{data.C.include[char.toLowerCase()]}</td>
                                      <td>{data.C.exclude[char.toLowerCase()]}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="text-center">
                          <h2>T FLAG (Treasures)</h2>
                          <p>Vanilla: {data.T.vanilla} ({(data.T.vanilla / data.total * 100).toFixed(1)}%)</p>
                          <p>Shuffle: {data.T.shuffle} ({(data.T.shuffle / data.total * 100).toFixed(1)}%)</p>
                          <p>Standard: {data.T.standard} ({(data.T.standard / data.total * 100).toFixed(1)}%)</p>
                          <p>Pro: {data.T.pro} ({(data.T.pro / data.total * 100).toFixed(1)}%)</p>
                          <p>Wild: {data.T.wild} ({(data.T.wild / data.total * 100).toFixed(1)}%)</p>
                          <p>Wildish: {data.T.wildish} ({(data.T.wildish / data.total * 100).toFixed(1)}%)</p>
                          <p>Empty: {data.T.empty} ({(data.T.empty / data.total * 100).toFixed(1)}%)</p>
                          <p>Junk: {data.T.junk} ({(data.T.junk / data.total * 100).toFixed(1)}%)</p>
                          <p className="mb-3">no J-Items: {data.T.noJ} ({(data.T.noJ / data.total * 100).toFixed(1)}%)</p>
                          <h3>Sparse Settings</h3>
                            {sparse.map(num => (
                              <p key={num}>{num}%: {data.T.sparse[num]} ({(data.T.sparse[num] / data.total * 100).toFixed(1)}%)</p>
                            ))}
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="text-center">
                          <h2>S Flag (Shops)</h2>
                          <p>Vanilla: {data.S.vanilla} ({(data.S.vanilla / data.total * 100).toFixed(1)}%)</p>
                          <p>Shuffle: {data.S.shuffle} ({(data.S.shuffle / data.total * 100).toFixed(1)}%)</p>
                          <p>Standard: {data.S.standard} ({(data.S.standard / data.total * 100).toFixed(1)}%)</p>
                          <p>Pro: {data.S.pro} ({(data.S.pro / data.total * 100).toFixed(1)}%)</p>
                          <p>Wild: {data.S.wild} ({(data.S.wild / data.total * 100).toFixed(1)}%)</p>
                          <p>Cabins only: {data.S.cabins} ({(data.S.cabins / data.total * 100).toFixed(1)}%)</p>
                          <p>Empty: {data.S.empty} ({(data.S.empty / data.total * 100).toFixed(1)}%)</p>
                          <p>Free: {data.S.free} ({(data.S.free / data.total * 100).toFixed(1)}%)</p>
                          <p>1/4 sell price: {data.S.quarter} ({(data.S.quarter / data.total * 100).toFixed(1)}%)</p>
                          <p>No J-Items: {data.S.noJ} ({(data.S.noJ / data.total * 100).toFixed(1)}%)</p>
                          <p>No Apples: {data.S.noApples} ({(data.S.noApples / data.total * 100).toFixed(1)}%)</p>
                          <p>No Sirens: {data.S.noSirens} ({(data.S.noSirens / data.total * 100).toFixed(1)}%)</p>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col md="4">
                        <div className="text-center">
                          <h2>E Flag (Encounters)</h2>
                          <p>Vanilla: {data.E.vanilla} ({(data.E.vanilla / data.total * 100).toFixed(1)}%)</p>
                          <p>Toggle: {data.E.toggle} ({(data.E.toggle / data.total * 100).toFixed(1)}%)</p>
                          <p>Reduce: {data.E.reduce} ({(data.E.reduce / data.total * 100).toFixed(1)}%)</p>
                          <p>None: {data.E.none} ({(data.E.none / data.total * 100).toFixed(1)}%)</p>
                          <p>No J-drops: {data.E.drop.noJDrops} ({(data.E.drop.noJDrops / data.total * 100).toFixed(1)}%)</p>
                          <p>No sirens (drop/steal): {data.E.drop.noSirens} ({(data.E.drop.noSirens / data.total * 100).toFixed(1)}%)</p>
                          <p>Keep Trap Doors: {data.E.keep.doors} ({(data.E.keep.doors / data.total * 100).toFixed(1)}%)</p>
                          <p>Keep Behemoths: {data.E.keep.behemoths} ({(data.E.keep.behemoths / data.total * 100).toFixed(1)}%)</p>
                          <p>Can't Run: {data.E.noEscape} ({(data.E.noEscape / data.total * 100).toFixed(1)}%)</p>
                          <p>No XP: {data.E.noExp} ({(data.E.noExp / data.total * 100).toFixed(1)}%)</p>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="text-center">
                          <h2>G Flag (Glitches)</h2>
                          <p>Life: {data.G.life} ({(data.G.life / data.total * 100).toFixed(1)}%)</p>
                          <p>Item Duplication: {data.G.dupe} ({(data.G.dupe / data.total * 100).toFixed(1)}%)</p>
                          <p>MP Underflow: {data.G.mp} ({(data.G.mp / data.total * 100).toFixed(1)}%)</p>
                          <p>Dwarf Castle Warp: {data.G.warp} ({(data.G.warp / data.total * 100).toFixed(1)}%)</p>
                          <p>64-Door: {data.G[64]} ({(data.G[64] / data.total * 100).toFixed(1)}%)</p>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="text-center">
                          <h2>Other Settings</h2>
                          <h3>Starter Kit</h3>
                          <p>None: {data.other.kit.none} ({(data.other.kit.none / data.total * 100).toFixed(1)}%)</p>
                          <p>Basic: {data.other.kit.basic} ({(data.other.kit.basic / data.total * 100).toFixed(1)}%)</p>
                          <p>Better: {data.other.kit.better} ({(data.other.kit.better / data.total * 100).toFixed(1)}%)</p>
                          <p>Loaded: {data.other.kit.loaded} ({(data.other.kit.loaded / data.total * 100).toFixed(1)}%)</p>
                          <p className="mb-3">Spitball: {data.other.kit.spitball} ({(data.other.kit.spitball / data.total * 100).toFixed(1)}%)</p>
                          <p>No Adamant Armors: {data.other.noAdamants} ({(data.other.noAdamants / data.total * 100).toFixed(1)}%)</p>
                          <p>Vintage: {data.other.vintage} ({(data.other.vintage / data.total * 100).toFixed(1)}%)</p>
                          <p>Spoon equippable: {data.other.spoon} ({(data.other.spoon / data.total * 100).toFixed(1)}%)</p>
                          <p className="mb-3">Spoiler Log: {data.other.spoiler} ({(data.other.spoiler / data.total * 100).toFixed(1)}%)</p>
                          <h3>Vanilla</h3>
                          <p>FuSoYa: {data.other.vanilla.fusoya} ({(data.other.vanilla.fusoya / data.total * 100).toFixed(1)}%)</p>
                          <p>Agility: {data.other.vanilla.agility} ({(data.other.vanilla.agility / data.total * 100).toFixed(1)}%)</p>
                          <p>Mt. Hobs: {data.other.vanilla.hobs} ({(data.other.vanilla.hobs / data.total * 100).toFixed(1)}%)</p>
                          <p>Experience: {data.other.vanilla.exp} ({(data.other.vanilla.exp / data.total * 100).toFixed(1)}%)</p>
                          <p>Fashion: {data.other.vanilla.fashion} ({(data.other.vanilla.fashion / data.total * 100).toFixed(1)}%)</p>
                          <p>Trapped Chests: {data.other.vanilla.traps} ({(data.other.vanilla.traps / data.total * 100).toFixed(1)}%)</p>
                          <p>Z-Sprite: {data.other.vanilla.z} ({(data.other.vanilla.z / data.total * 100).toFixed(1)}%)</p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
              </div>
            </div>
            )}
            
          </div>
        );
      }}
    </ReduxMainData>
  );
}

export default v4FlagStats;
