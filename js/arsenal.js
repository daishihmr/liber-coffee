var testarsenal = {};

angular.module('arsenal', ['hash64'])
.factory('arsenal', function(hash64) {
  var arsenal = {};
  arsenal.hash = hash64;
  arsenal.perks = [
    {//a
      name: "レーザーモジュール Aim Module",
      img: "Laser_Aim_Module",
      weights: {
        hell: 0.5
      }
    },
    {//b
      name: "MD-99 アドレナリン注射",
      img: "MD-99",
      weights: {
        hell: 0.5
      }
    },
    {//c
      name: "心肺機能加速装置",
      img: "Cardio_Accelerator"
    },
    {//d
      name: "ヘビーアーマー",
      img: "Heavy_Armor"
    },
    {//e
      name: "ファイアグレネード",
      img: "Incendiary_Grenades",
      weights: {
        hell: 3
      }
    },
    {//f
      name: "スタングレネード",
      img: "Stun_Grenades",
      weights: {
        hell: 3
      }
    },
    {//g
      name: "スモークグレネード",
      img: "Smoke_Grenades",
      weights: {
        hell: 3
      }
    },
    {//h
      name: "戦略支援優先権",
      img: "Stratagem_Priority",
      weights: {
        nice: 5,
        hell: 0.5
      }
    },
    {//i
      name: "テレポートフィールド",
      img: "Displacement_Field",
      weights: {
        nice: 5,
        hell: 0.5
      }
    },
    {//j
      name: "腕力強化",
      img: "Strong_Arm",
      weights: {
        hell: 2
      }
    },
    {//k
      name: "P-6 ガンスリンガー",
      img: "P-6",
      weights: {
        hell: 3
      }
    },
    {//l
      name: "FLAM-24 パイロ",
      img: "FLAM-24",
      weights: {
        hell: 3
      }
    },
    {//m
      name: "PLAS-3 シンジ",
      img: "PLAS-3",
      weights: {
        hell: 3
      }
    },
    {//n
      name: "全地形対応ブーツ",
      img: "All_Terrain_Boots"
    },
    {//o
      name: "降下速度上昇",
      img: "Precision_Call-In"
    }
  ];

  arsenal.primaries = [
    {//a
      name: "AR-19 リベレイター",
      img: "AR-19"
    },
    {//b
      name: "AR-20L ジャスティス",
      img: "AR-20L",
      weights: {
        nice: 5
      }
    },
    {//c
      name: "AR-22C パトリオット",
      img: "AR-22C"
    },
    {//d
      name: "SG-225 ブレイカー",
      img: "SG-225",
      weights: {
        nice: 5
      }
    },
    {//e
      name: "SG-8 パニッシャー",
      img: "SG-8",
      weights: {
        nice: 0.5,
        hell: 8
      }
    },
    {//f
      name: "DBS-2 ダブルフリーダム",
      img: "DBS-2",
      weights: {
        nice: 5
      }
    },
    {//g
      name: "SMG-45 ディフェンダー",
      img: "SMG-45"
    },
    {//h
      name: "MP-98 サブマシンガンナイト",
      img: "MP-98"
    },
    {//i
      name: "RX-1 レールガン",
      img: "RX-1",
      weights: {
        nice: 0.5
      }
    },
    {//j
      name: "LAS-5 サイス",
      img: "LAS-5"
    },
    {//k
      name: "LAS-13 トライデント",
      img: "LAS-13",
      weights: {
        nice: 5
      }
    },
    {//l
      name: "AC-3 ライトニング放射器",
      img: "AC-3",
      weights: {
        nice: 0.5,
        hell: 5
      }
    },
    {//m
      name: "MG-105 スタルワート",
      img: "MG-105"
    },
    {//n
      name: "SMG-34 忍者",
      img: "SMG-34"
    },
    {//o
      name: "LHO-63 キャンパー",
      img: "LHO-63",
      weights: {
        nice: 0.5
      }
    },
    {//p
      name: "AR-14D パラゴン",
      img: "AR-14D"
    },
    {//q
      name: "CR-9 サプレッサー",
      img: "CR-9"
    },
    {//r
      name: "PLAS-1 スコーチャー",
      img: "PLAS-1"
    },
    {//s
      name: "LAS-16 シクル",
      img: "LAS-16",
      weights: {
        nice: 5
      }
    },
    {//t
      name: "LAS-12 タント",
      img: "LAS-12"
    },
    {//u
      name: "AC-5 アークショットガン",
      img: "AC-5",
      weights: {
        nice: 0.5,
        hell: 4
      }
    },
    {//v
      name: "M2016 コンスティチューション",
      img: "M2016",
      weights: {
        nice: 0.5,
        hell: 4
      }
    }
  ];

  arsenal.BGCOLOR_SUPPLY = "76, 116, 161";
  arsenal.BGCOLOR_DEFENSIVE = "125, 159, 99";
  arsenal.BGCOLOR_OFFENSIVE = "139, 91, 81";

  arsenal.stratagems = [
    {//a
      name: "補給",
      img: "Resupply",
      color: arsenal.BGCOLOR_SUPPLY,
      weights: {
        nice: 10,
        normal: 10,
      }
    },
    {//b
      name: "MG-94 マシンガン",
      img: "MG-94",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//c
      name: "LAS-98 レーザーキャノン",
      img: "LAS-98",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//d
      name: "AC-22 オートキャノン ダムダム",
      img: "AC-22",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//e
      name: "抹殺グレネードランチャー",
      img: "Obliterator",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//f
      name: "M-25 ランブラー",
      img: "M-25",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//g
      name: "FLAM-40 火炎放射器",
      img: "FLAM-40",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//h
      name: "TOX-13 アベンジャー",
      img: "TOX-13",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//i
      name: "RL-112 無反動ライフル",
      img: "RL-112",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//j
      name: "EAT-17",
      img: "EAT-17",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//k
      name: "MLS-4X コマンドー",
      img: "MLS-4X",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//l
      name: "AD-334 ガードドッグ",
      img: "AD-334",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//m
      name: "AD-289 エンジェル",
      img: "AD-289",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//n
      name: "補給パック",
      img: "Resupply_Pack",
      color: arsenal.BGCOLOR_SUPPLY,
      weights: {
        nice: 5
      }
    },
    {//o
      name: "LIFT-850 ジャンプパック",
      img: "LIFT-850",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//p
      name: "SH-32 指向性減速シールド",
      img: "SH-32",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//q
      name: "SH-20 シールドパック",
      img: "SH-20",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//r
      name: "REP-80",
      img: "REP-80",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//s
      name: "REC-6 デモリッシャー",
      img: "REC-6",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//t
      name: "EXO-44 エクソスーツ ストンパー",
      img: "EXO-44",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//u
      name: "EXO-48 オブシディアン",
      img: "EXO-48",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//v
      name: "EXO-51 ランブラー",
      img: "EXO-51",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//w
      name: "MC-109 軍用オートバイ ハンマー",
      img: "MC-109",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//x
      name: "TD-110 バスティオン",
      img: "TD-110",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//y
      name: "M5 兵員輸送装甲車",
      img: "M5",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//z
      name: "M5-32 強襲戦闘車",
      img: "M5-32",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//A
      name: "無人飛行型ドローン バンブルビー",
      img: "UAV",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//B
      name: "かく乱ビーコン",
      img: "Distractor_Beacon",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//C
      name: "AT-47 対戦車用固定砲台",
      img: "AT-47",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//D
      name: "A/MG-II ミニガン砲塔",
      img: "MG-II",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//E
      name: "A/RX-34 レールキャノン砲塔",
      img: "RX-34",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//F
      name: "A/AC-6 テスラタワー",
      img: "AC-6",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//G
      name: "空中投下対戦車地雷",
      img: "Airdropped_Mines",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//H
      name: "対人バリアー",
      img: "Anti-Personnel_Barrier",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//I
      name: "空中投下スタン地雷",
      img: "Airdropped_Stun_Mines",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//J
      name: "電磁フィールド",
      img: "Static_Field_Conductors",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 5
      }
    },
    {//K
      name: "ヘビーエアストライク",
      img: "Airstrike",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 2
      }
    },
    {//L
      name: "急降下ボム ヴィンディケーター バンカーバスター",
      img: "Vindicator",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 5
      }
    },
    {//M
      name: "機銃掃射",
      img: "Strafing_Run",
      color: arsenal.BGCOLOR_OFFENSIVE
    },
    {//N
      name: "低空エアサポート",
      img: "Close_Air_Support",
      color: arsenal.BGCOLOR_OFFENSIVE
    },
    {//O
      name: "ファイアボム ヘルファイア",
      img: "Incendiary_Bombs",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 3
      }
    },
    {//P
      name: "ミサイル弾幕",
      img: "Missile_Barrage",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 0.5
      }
    },
    {//Q
      name: "トリプル集中砲火",
      img: "Thunderer_Barrage",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 0.5
      }
    },
    {//R
      name: "軌道レーザー",
      img: "Orbital_Laser_Strike",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 0.5
      }
    },
    {//S
      name: "ミサイルストライク",
      img: "Shredder",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 0.5
      }
    },
    {//T
      name: "レールキャノン",
      img: "Railcannon_Strike",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 5
      }
    },
    {//U
      name: "自動追尾式集中砲火",
      img: "Sledge_Precision_Artillery",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 5
      }
    },
    {//V
      name: "A/GL-8 砲塔型グレネードランチャー",
      img: "Launcher_Turret",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//W
      name: "機関砲掃射",
      img: "Heavy_Strafing_Run",
      color: arsenal.BGCOLOR_OFFENSIVE
    },
    {//X
      name: "スモーク弾集中砲火",
      img: "Thunderer_Smoke_Round",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
  ];

  arsenal.loadouts = {
    favourites: [
      {
        name: "Bug and Borg basher",
        author: "Vanemiera",
        description: "My go-to loadout for Bugs and Cyborgs.",
        hash: "icnfJJ",
        id: "vanf1"
      },
      {
        name: "Squid basher",
        author: "Vanemiera",
        description: "My go-to loadout for Illuminates.",
        hash: "ifaeoO",
        id: "vanf2"
      },
      {
        name: "Throw n' blow",
        author: "Vanemiera",
        description: "Fun with explosives.",
        hash: "jtssLL",
        id: "vanf3"
      },
      {
        name: "Stun & Run",
        author: "wilier",
        description: "A humane approach to spreading democracy",
        hash: "fglaIL",
        id: "redw1"
      },
      {
        name: "Pyro Maniacs",
        author: "wilier",
        description: "Fire, fire and more fire!!! A burning desire to spread democracy",
        hash: "efgOau",
        id: "redw2"
      },
      {
        name: "Shock & Awe",
        author: "wilier",
        description: "Arc weapons and a lot of electricity!",
        hash: "iupJFF",
        id: "redw3"
      },
      {
        name: "Toxic Pest Control",
        author: "wilier",
        description: "Chemical warfare!",
        hash: "ipPhfa",
        id: "redw4"
      },///////////////////////
      {
        name: "Smoke on the Slaughter",
        author: "TheLethalDiva",
        description: "For those that don't know a smoke grenade gives you just"+
                     " enough time for a safe reload of your prone reload"+
                     " weapon, in this case the commando. Plus you can use"+
                     " smokes to keep tanks out of the fight, escape much like"+
                     " throwing a static field behind you, to complete"+
                     " objectives, and relax in safety while your next ammo"+
                     " drop is coming down. Ammo drops can also be dropped on"+
                     " tanks if need be. So many uses for smoke grenades so"+
                     " this loadout focuses on throwing as many as possible"+
                     " while going nuts with commando....which is ideal for"+
                     " using with smoke grenades, since you don't really need"+
                     " to see or even have a clear line of fire to be able to"+
                     " see to hit the enemies. So many uses for smoke grenades"+
                     " and so this loadout focuses on taking advantage of"+
                     " that, while going trigger happy with Paragon and Commando.",
        hash: "gpkaaa",
        id: "Diva1"
      },
      {
        name: "Muzzle Tov Machine Gun Fun No Refund Loadout",
        author: "TheLethalDiva",
        description: "Works for me....\n\n"+
                     "Running Stalwart with the Machine gun secondary might"+
                     " seem redundant, but that allows you the ability to"+
                     " switch weapons without having to reload during long"+
                     " skirmishes and control the enemy from across the screen."+
                     " Eats give you plenty of anti-tank at each stop and also"+
                     " the ability to pass the machine gun back and forth to"+
                     " other team members if neccesary.",
        hash: "bmapbj",
        id: "Diva2"
      },
      {
        name: "Firefly",
        author: "TheLethalDiva",
        description: "Stun and Burn is the gateway to Serenity.",
        hash: "bialgK",
        id: "Diva3"
      },
      {
        name: "Hidden Hokugage",
        author: "TheLethalDiva",
        description: "Ninja is one of the coolest primaries in the game and"+
                     " the sledge complements it well. Its all about mobility,"+
                     " which the Ninja (like all the SMGs) excels at. Believe It!",
        hash: "hnaUUU",
        id: "Diva4"
      },
      {
        name: "Punisher War Journal",
        author: "TheLethalDiva",
        description: "Angel really complements Heavy Armor. Flamethrower"+
                     " complements the Punisher as you can sweep the field"+
                     " with flames and then pick off enemies with sniper"+
                     " shots. Strafing Run is here because its an Illuminate"+
                     " loadout, but even against bugs and cyborgs, strafing"+
                     " run really comes in handy for handling Brood Commanders"+
                     " and Butcher Packs.",
        hash: "deamgM",
        id: "Diva5"
      },
      {
        name: "The Gandhi Way",
        author: "Pelia",
        description: "Greetings from Super Earth! Our Managed"+
                     " Democracy is backed... with NUCLEAR WEAPONS!!!",
        hash: "hkSSSS",
        id: "nuke4"
      },
      {
        name: "Guns, Guns, Guns!",
        author: "Pelia",
        description: "Bring the rain. Ride the lightning. Hear the thunder.",
        hash: "hmaQTM",
        id: "21gun"
      },
      {
        name: "The Independence",
        author: "Pelia",
        description: "Let us make the galaxy independent of its sovereignty and parade all over it.",
        hash: "hvMKMK",
        id: "4july"
      },
      {
        name: "Go Loud",
        author: "Pelia",
        description: "Simon Viklund's soundtrack is not included, but we do have some super-modern tools of"+
                     " eardrum destruction for you, and some suits of armour to look badass using them."+
                     " We also got this awkward situation where we only got lots of bags for ammo, but no ammo."+
                     " We only managed to scrape up enough to fill you one or two.",
        hash: "dodKQn",
        id: "noise"
      },
      {
        name: "Helldozer",
        author: "Pelia",
        description: "There was once a law enforcement officer outfitted with such raw strength and firepower"+
                     " it matched heavy machinery. This concept has been now modernized and reintroduced,"+
                     " marking the coming of Helldozers. Steamrolling over the undemocratic species of the Milky Way,"+
                     " Helldozers are the true powerhouse of Liberty and Freedom.",
        hash: "debqaj",
        id: "Okill"
      },
      {
        name: "Empyrean Deliverance",
        author: "Pelia",
        description: "The sky brings Democracy through your guidance.",
        hash: "hjRTRT",
        id: "smite"
      },
      {
        name: "When Engineer Is The Turret",
        author: "Pelia",
        description: "Now here boons, what the burps, the seal will hurt,"+
                     " say and rat my fur, and hurt the meme... Get sparks,"+
                     " send a gamawah! Snurf snurf. It's all about the pose, God.",
        hash: "oerCxa",
        id: "bcwrd"
      },
      {
        name: "We're Gonna Have a Blast",
        author: "Pelia",
        description: "Yes, I said it. Get blasting!",
        hash: "jqjsGa",
        id: "blast"
      },
      {
        name: "Lumie Loadout",
        author: "Pelia",
        description: "What I frequent against Illuminates when I actually need to tryhard."+
                     " Feel free to replace Laser Cannon with MG or Walker with Obsidian, works as well.",
        hash: "icacMt",
        id: "Lumie"
      },
      {
        name: "Bug Loadout",
        author: "Pelia",
        description: "What I frequent against Bugs when I actually need to tryhard."+
                     " You can get more EATs, Rumbler, works as well.",
        hash: "hhajKT",
        id: "buggy"
      },
      {
        name: "Cyborg Loadout",
        author: "Pelia",
        description: "What I frequent against Cyborgs when I actually need to tryhard."+
                     " Many, many options here, I might make two of these. Stalwart works as well.",
        hash: "hoajjS",
        id: "borgs"
      },
      {
        name: "Cyborg Loadout 2",
        author: "Pelia",
        description: "What I frequent against Cyborgs when I actually need to tryhard."+
                     " So many options, I made two loadouts! This is the second.",
        hash: "dmafTT",
        id: "Borgs"
      },
      {
        name: "Demolition Man",
        author: "Pelia",
        description: "Splosives. Yes.",
        hash: "ciassj",
        id: "kboom"
      },
      {
        name: "Your Shields Are Adorable",
        author: "jophur",
        description: "Best vs. Illuminate.  Clear scouts and monks with Punisher."+
                     " Everybody else gets bullets from heaven.",
        hash: "jeoMMM",
        id: "skeet"
      },
      {
        name: "Plan B",
        author: "jophur",
        description: "For Impalers on the far side of Mars, there's Sledge. For"+
                     " everything else... there's MasterCard.",
        hash: "hblfaU",
        id: "planB"
      },
      {
        name: "Grotesque Pit-Fighter",
        author: "jophur",
        description: "Everybody gather in, now. That's right, get close, pretend"+
                     " you like each other.  Okay, say 'Cheese'!",
        hash: "buprTT",
        id: "pitfi"
      }
    ],
    punishments: [
      {
        name: "Element of Supplies",
        author: "Vanemiera",
        description: "Presents! :3",
        hash: "hiaaaa",
        id: "vanp1"
      },
      {
        name: "Be Quiet",
        author: "Pelia",
        description: "Shhhhh. It's okay. You can do it.",
        hash: "anaaBI",
        id: "shhhh"
      },
      {
        name: "Sons of Managed Democracy",
        author: "Pelia",
        description: "Y'all thought biker gangs gon' die out on Supr' Earth? Heeeell no!",
        hash: "jfrwwa",
        id: "biker"
      },
      {
        name: "Back to the Past",
        author: "Pelia",
        description: "I'm sorry sir, our armoury is empty and we only got this stuff from couple centuries back."+
                     " You get this M1903 Springfield rifle, all the hand nades we've got are the training smokes,"+
                     " but at least we found crates on crates of AT4s. Oh and, uh, we found this A10-C in the back"+
                     " of the ship's hangar. We'll drop it into the atmosphere and hope it doesn't burn down."+
                     " Good news though; we got enough vintage cartridges to last you the whole war.",
        hash: "gvaLMj",
        id: "pasta"
      },
      {
        name: "Back to Basics",
        author: "Pelia",
        description: "Our armoury authentication system went down. You're only getting standard issue for this mission.",
        hash: "caabDL",
        id: "basic"
      },
      {
        name: "Ambient light",
        author: "Vanemiera",
        description: "Fix: Screen too dark",
        hash: "hlSSSS",
        id: "vanp2"
      },
      {
        name: "Smoke 'n Mirrors'",
        author: "BRODIN'S SWOLDIER",
        description: "",
        hash: "hjXXXX",
        id: "smoke"
      }
    ]
  };

  arsenal.weightingSumsPerks = {};
  arsenal.weightingSumsPrimaries = {};
  arsenal.weightingSumsStratagems = {};

  var calcweightingSums = function(weightingSumsList, itemList) {
    for (var i=0; i<itemList.length; i++) {
      var currentItem = itemList[i];
      //add item weight to respective total
      for(var k in weightingSumsList) {
        if (currentItem.weights && currentItem.weights[k]) {
          weightingSumsList[k] += currentItem.weights[k];
        } else {
          weightingSumsList[k] += 1;
        }
      }
      //add weighting to list of first encountered
      if(!currentItem.weights) {continue;}
      for(var k in currentItem.weights) {
        if (!weightingSumsList[k]) {
          weightingSumsList[k] =  i + currentItem.weights[k];
        }
      }
    }
  };

  calcweightingSums(arsenal.weightingSumsPerks, arsenal.perks);
  calcweightingSums(arsenal.weightingSumsPrimaries, arsenal.primaries);
  calcweightingSums(arsenal.weightingSumsStratagems, arsenal.stratagems);

  var getRandomWeighted = function(weighting, weightingSumsList, itemList) {
    var result = {};
    if (weightingSumsList[weighting]) {
      var targetWeight = Math.random()*weightingSumsList[weighting];
      var iteratedWeight = 0;
      for (var i=0; i<itemList.length; i++) {
        var currentWeight = (itemList[i].weights && itemList[i].weights[weighting]) || 1;
        if (targetWeight<=iteratedWeight+currentWeight) {
          result.id = i;
          result.item = itemList[i];
          return result;
        } else {
          iteratedWeight += currentWeight;
        }
      }
    } else {
      result.id = Math.floor(Math.random()*itemList.length);
      result.item = itemList[result.id];
    }
    return result;
  };

  arsenal.getRandomPerk = function(weighting) {
    var rndPerk = getRandomWeighted(weighting, arsenal.weightingSumsPerks, arsenal.perks);
    var newPerk = {name:rndPerk.item.name, img:rndPerk.item.img, id:rndPerk.id};
    return newPerk;
  };

  arsenal.getPerk = function(id) {
    var rndPerk = this.perks[id];
    if (rndPerk) {
      var newPerk = {name:rndPerk.name, img:rndPerk.img, id:id};
      return newPerk;
    } else {
      return this.getRandomPerk();
    }
  };

  arsenal.getRandomPrimary = function(weighting) {
    var rndPrimary = getRandomWeighted(weighting, arsenal.weightingSumsPrimaries, arsenal.primaries);
    var newPrimary = {name:rndPrimary.item.name, img:rndPrimary.item.img, id:rndPrimary.id};
    return newPrimary;
  };

  arsenal.getPrimary = function(id) {
    var rndPrimary = this.primaries[id];
    if (rndPrimary) {
      var newPrimary = {name:rndPrimary.name, img:rndPrimary.img, id:id};
      return newPrimary;
    } else {
      return this.getRandomPrimary();
    }
  };

  arsenal.getRandomStratagem = function(slot, weighting) {
    var rndStrat = getRandomWeighted(weighting, arsenal.weightingSumsStratagems, arsenal.stratagems);
    var newStrat = {slot:slot, name:rndStrat.item.name, img:rndStrat.item.img, color:rndStrat.item.color, id:rndStrat.id};
    return newStrat;
  };

  arsenal.getStratagem = function(id, slot) {
    var rndStrat =  this.stratagems[id];
    if (rndStrat) {
      var newStrat = {slot:slot, name:rndStrat.name, img:rndStrat.img, color:rndStrat.color, id:id};
      return newStrat;
    } else {
      return this.getRandomStratagem(slot);
    }
  };

  arsenal.getLoadout = function(hash) {
    var newLoadout = {stratagems: []};
    if (hash[0] == '~') {
      for (var k in this.loadouts) {
        for (var i=0; i<this.loadouts[k].length; i++) {
          if (this.loadouts[k][i].id === hash.substring(1)) {
            newLoadout = this.getLoadout(this.loadouts[k][i].hash);
            newLoadout.id = this.loadouts[k][i].id;
            return newLoadout;
          }
        }
      }
    } else {
      var ids = this.hash.b64UrlToInts(hash);
      newLoadout.perk = arsenal.getPerk(ids[0]);
      newLoadout.primary = arsenal.getPrimary(ids[1]);
      newLoadout.stratagems = [
        arsenal.getStratagem(ids[2], 0),
        arsenal.getStratagem(ids[3], 1),
        arsenal.getStratagem(ids[4], 2),
        arsenal.getStratagem(ids[5], 3)
      ];
    }
    return newLoadout;
  };

  arsenal.getRandomLoadout = function(pool) {
    var id = Math.floor(Math.random()* this.loadouts[pool].length);
    var rndLoadout = this.getLoadout(this.loadouts[pool][id].hash);
    rndLoadout.id = this.loadouts[pool][id].id;
    return rndLoadout;
  };

  testarsenal = arsenal;
  return arsenal;
});
