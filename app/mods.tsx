'use client'

interface ModVersion {
    version: string;
    downloadLink: string;
    altDownload?: string;
    changelog?: string;
}

interface Mod {
    name: string;
    shortDescription: string;
    description?: string;
    tags: string[];
    versions: ModVersion[];
    id: string;
}

export const mods: Mod[] = [
    {
        name: "Nulls Brawl",
        description: `
## Unlimited resources

You have unlimited gems, gold and boxes. If you don't want to spend your time there are some free magic boxes waiting you in the shop.

## All Brawlers and Skins

You can choose any brawler and skin to make some screenshots to share with your friends. Let them envy you.
## Multiplayer

Bots are... boring. Luckily, we have great multiplayer support so you can play with you friends without any lags.

## Fast Updates
We are trying to add new brawlers and features as fast as possible. Sometimes it takes only few days!`,
        shortDescription: "Null's Brawl is a Brawl Stars private server with unlimited gems, gold and boxes. Play with friends on any brawler you want.",
        tags: ["Private server", "Supports iOS"],
        id: "nulls",
        versions: [
            {
                version: "V57 for Android",
                downloadLink: "https://dnull.xyz/latest_bs"
            },
            {
                version: "V57 for iOS",
                downloadLink: "https://dnull.xyz/latest_bs_i"
            },
            {
                version: "V56 for Android",
                downloadLink: "https://drive.google.com/uc?export=download&id=11866WS3Q1HzVcNfD3dJYSS4yRlXJ6wEO"
            },
            {
                version: "V56 for iOS",
                downloadLink: "https://drive.google.com/uc?export=download&id=1qDaEwLtDQLpsIRh8ejg7F5_ysMyfPTA9"
            }
        ]
    },
    {
        name: "Magic Brawl",
        shortDescription: "Magic Brawl is the rebirth of Brawl Stars and its best times! All content is available on the server: online battles, all the characters and everything. By downloading this server, you can get great pleasure from the updates, because we update the server every month!",
        tags: ["Private server"],
        id: "magic",
        versions: [
            {
                version: "V43",
                downloadLink: "https://files.magic-servers.xyz/mb.apk",
                altDownload: "https://drive.google.com/uc?export=download&id=1Ze3Nt3fU212WbCk8M7n9XKwDm910WVTg"
            }
        ]
    },
    {
        name: "All Brawl",
        shortDescription: "A combination of a multiple Brawl Stars mods.",
        description: `A combination of a multiple Brawl Stars mods.
    Credits: LvL Stars, Oscar Brawl and Emz Brawl Offline.`,
        tags: ["Offline"],
        id: "magic",
        versions: [
            {
                version: "First beta",
                downloadLink: "https://download.natesworks.com/brawlmods/allbrawl/allbrawl-beta1.apk",
                altDownload: "https://www.mediafire.com/file/lud65c2wfits0pz/allbrawl-beta1.apk/file"
            }
        ]
    },
    {
        name: "Retro Brawl",
        shortDescription: "Retro Brawl is the old version of Brawl Stars (2018). Online battles, 21 characters and star powers for them, clans, etc. are available on the server. Feel better times, from the old menu to the atmosphere!",
        tags: ["Private server", "Supports iOS"],
        id: "retro",
        versions: [
            {
                version: "V12 for Android",
                downloadLink: "https://files.magic-servers.xyz/retrobrawl.apk",
                altDownload: "https://drive.google.com/uc?export=download&id=1cTyA1pg-5UxAcdN4-WEPIiStSQM5Ogsx"
            },
            {
                version: "V12 for iOS",
                downloadLink: "https://files.magic-servers.xyz/retrobrawl.ipa",
                altDownload: "https://drive.google.com/uc?export=download&id=1FYAubtY9OSQJXDNYxfyh5i9MFeQo0gBz"
            }
        ]
    },
    {
        name: "BSD Brawl",
        shortDescription: "Allows changing server region, viewing enemies ammo and more!",
        tags: ["Official server"],
        id: "bsd",
        versions: [
            {
                version: "V57",
                downloadLink: "https://www.mediafire.com/file/sp0d2qpuoojdcjo/bsd_brawl_v57.325_(26).apk/file"
            },
            {
                version: "V56",
                downloadLink: "https://drive.google.com/uc?export=download&id=17LsS_wizr9CZ2Yo0oqWFU5PWpMDltjib"
            }
        ]
    },
    {
        name: "Gene Brawl",
        shortDescription: "Adds a debug menu allowing you to visually unlock all brawlers and more!",
        tags: ["Official server"],
        id: "gene",
        versions: [
            {
                version: "V57",
                downloadLink: "https://www.mediafire.com/file/isjq1j7j30xpjey/GeneBrawl_v57325_release.apk/file"
            },
            {
                version: "V56",
                downloadLink: "https://drive.google.com/uc?export=download&id=1IStoE_bUPRq1rkZ9OWE0SF_-oXWYu_8y"
            }
        ]
    },
    {
        name: "Supercell Jailbreak",
        shortDescription: "Official ipas, but without the annoying crash of the jailbreak detection.",
        tags: ["Official server", "Supports iOS"],
        id: "jailbreak",
        versions: [
            {
                version: "V57",
                downloadLink: "https://drive.google.com/uc?export=download&id=1eQUsIbt2alGLtzxmy0Zh48QpRNz9qjZe",
                altDownload: "https://www.mediafire.com/file/dtev6981ol4j7du/Brawl_Stars57.325NoJb.ipa/file"
            }
        ]
    },
    {
        name: "Brawl Stars",
        shortDescription: "Unmodified official game. Must be installed using SAI (Split Apk Installer)!",
        tags: ["Official server"],
        id: "bs",
        description: `
3v3 and Battle Royale

Fast-paced 3v3 multiplayer and battle royale made for mobile! Play with friends or solo across a variety of game modes in under three minutes.

Unlock and upgrade dozens of Brawlers with powerful Super abilities, Star Powers and Gadgets! Collect unique skins to stand out and show off. Battle in a variety of mysterious locations within the Brawliverse!

BATTLE IN MULTIPLE GAME MODES
- Gem Grab (3v3): Team up and out-strategize the opposing team. Collect and hold 10 gems to win, but get fragged and lose your gems.
- Showdown (Solo/Duo): A battle royale style fight for survival. Collect power ups for your Brawler. Grab a friend or play solo - be the last Brawler standing in the rowdiest battle royale yet. Winner take all!
- Brawl Ball (3v3): It's a whole new Brawl game! Show off your soccer/football skills and score two goals before the other team. There are no red cards here.
- Bounty (3v3): Take out opponents to earn stars, but don’t let them pick you off. The squad with the most stars wins the match!
- Heist (3v3): Protect your team’s safe and try to crack open your opponents’. Navigate the map to sneak, blast and blow your way clear to the enemies treasure.
- Special Events: Limited time special PvE and PvP game modes.
- Championship Challenge: Join Brawl Stars' esports scene with in-game qualifiers!

UNLOCK AND UPGRADE BRAWLERS
Collect and upgrade a variety of Brawlers with powerful Super abilities, Star Powers and Gadgets! Level them up and collect unique skins.

BRAWL PASS
Complete quests, open Brawl Boxes, earn Gems, pins and an exclusive Brawl Pass skin! Fresh content every season.

BECOME THE STAR PLAYER
Climb the local and regional leaderboards to prove you’re the greatest Brawler of them all!

CONSTANTLY EVOLVING
Look out for new Brawlers, skins, maps, special events and games modes in the future.

PLEASE NOTE! Brawl Stars is free to download and play, however, some game items can also be purchased for real money. If you don't want to use this feature, please disable in-app purchases in your device's settings. Also, under our Terms of Service and Privacy Policy, you must be at least 9 years of age to play or download Brawl Stars.

Features:
- Team up for real-time 3v3 battles against players from across the world
- A fast-paced multiplayer battle royale mode made for mobile
- Unlock and collect new, powerful Brawlers - each with a signature attack and Super ability
- New events and game modes daily
- Battle solo or with friends
- Climb to the top of the leaderboards in global and local rankings 
- Join or start your own Club with fellow players to share tips and battle together
- Customize Brawlers with unlockable skins
- Player-designed maps offer challenging new terrain to master

From the makers of Clash of Clans, Clash Royale and Boom Beach!`,
        versions: [
            {
                version: "V57",
                downloadLink: "https://drive.google.com/file/d/1pAX1XcRuR7dgCJSxwPHFREp0cHHJ-np3/view?usp=sharing",
                changelog: `
### UPDATE 57: SPONGEBOB AND MORE!
August 2024 - October 2024

- New Event: SPONGEBOB Event
- New Brawlers: Moe (Mythic) and Kenji (Legendary)
- Hypercharges: Poco, Mortis, Squeak, Tara, Nani, Edgar
- Brawl Pass Season 30: SpongeBob! (September)
- Brawl Pass Season 31: Dark Once Upon (October)
- New Seasonal Game Modes and permanent Duels!
- …and much, much more!!!`,
            }
        ]
    },
    {
        name: "Surge Offline",
        shortDescription: "An offline version of brawl stars! Allows you to open boxes to unlock brawlers, gain trophies and play any mode. It also adds new skins and 3rd star powers for some brawlers",
        tags: ["Offline"],
        id: "sb",
        versions: [
            {
                version: "V28",
                downloadLink: "https://drive.google.com/uc?export=download&id=1fxULYszSieEy3JkTW10E-ArK5LEmMBEK"
            }
        ]
    },
    {
        name: "Didyro's Brawl Mods",
        shortDescription: "BSD with custom gradient name and mastery titles for Mortis, Crow, Angelo, Ruffs, Edgar and Kenji.",
        tags: ["Official Server"],
        id: "didyro",
        versions: [
            {
                version: "First Alpha",
                downloadLink: "https://www.mediafire.com/file/oyrtoio2ibl4kj6/BSD+Brawl_signed.apk/file"
            }
        ]
    },
    {
        name: "Brawler Maker",
        shortDescription: "A tool that can automatically create a brawler from start to finish without any modding knowledge required.",
        tags: ["Utilities"],
        id: "brawler-maker",
        description: "Brawler Maker is a python tool that allows even begginers to create their own brawler. To do that, it presents a UI where the user just have to enter information about the brawler, and a playable apk will be automatically generated, with other customisation settings, such as it can be useful for begginers that don't know how to mod, or for more advanced users that just want to make a base brawler.",
        versions: [
            {
                version: "Any",
                downloadLink: "https://github.com/AngelFireLA/AngelFire-Brawlermaker/releases"
            }
        ]
    },
    {
        name: "BSL",
        shortDescription: "BSDS ripoff ported to new versions and without battles working.",
        tags: ["Selfhosted"],
        id: "bslsucks",
        versions: [
            {
                version: "V53 Server",
                downloadLink: "https://drive.google.com/uc?export=download&id=1Uwjb8nJgT73KFns71R2-4YLnyCyWD8iO",
                altDownload: "https://github.com/LkPrtctrd/BSL-V53/archive/refs/heads/master.zip"
            },
            {
                version: "V53 Client",
                downloadLink: "https://drive.google.com/uc?export=download&id=1wE1V2cN1msRYbTSKT3tZfVv9r-TqyPAK",
                altDownload: "https://www.mediafire.com/file/n7gptweb86ncf5a/com.bsl.v53-rev1.apk/file"
            },
            {
                version: "V55 Server",
                downloadLink: "https://drive.google.com/uc?export=download&id=1KGPzvCRW_Hdq6JP9KzqDa6WsM1bk0ig5",
                altDownload: "https://github.com/LkPrtctrd/BSL-V55/archive/refs/heads/master.zip"
            },
            {
                version: "V55 Client",
                downloadLink: "https://drive.google.com/uc?export=download&id=1jtEw9lOfs1YEBh9JipP7nR0h1JY6XAM_",
                altDownload: "https://www.mediafire.com/file/v7zgn71r0gw1nqi/com.bsl.v55.apk/file"
            }
        ]
    },
    {
        name: "BSDS",
        shortDescription: "Selfhost your own private server with working battles.",
        tags: ["Selfhosted"],
        id: "bsds",
        versions: [
            {
                version: "V41 Server",
                downloadLink: "https://drive.google.com/uc?export=download&id=15bD-aZFFVfGmJ1zpOd3O61IrJ-I_pCmY"
            },
            {
                version: "V41 Client",
                downloadLink: "https://drive.google.com/uc?export=download&id=1zUZw9Sq0Z2uRIDKi35cKmRIqqoA6S8Z8"
            }
        ]
    },
    {
        name: "Infinity Reverse Brawl",
        shortDescription: "All characters unlocked and third star powers added for some brawlers and new skins.",
        tags: ["Offline"],
        id: "infinity-reverse",
        versions: [
            {
                version: "V15",
                downloadLink: "https://drive.google.com/uc?export=download&id=1dP-EnCmu-yAGSCb27bcTRRXisxFjJxXX"
            }
        ]
    },
    {
        name: "Buster's Brawl",
        shortDescription: "All brawlers unlocked and maxed out. Attempts to recreate brawlers from newer versions of the game.",
        tags: ["Offline"],
        id: "buster",
        versions: [
            {
                version: "V12",
                downloadLink: "https://drive.google.com/uc?export=download&id=1UWmaBt635O0TaS6H4oNB-wnVFefBimAs"
            }
        ]
    },
    {
        name: "TomatoBrawlOG",
        shortDescription: "Adds 4 new brawlers - Melee bot, mouse bot, ranged bot and boss bot! Based on Beta Brawl.",
        tags: ["Offline"],
        id: "tomato",
        versions: [
            {
                version: "V11",
                downloadLink: "https://drive.google.com/uc?export=download&id=1as-qDZ7pcCJryay58eE67DvvP3sWGP04"
            }
        ]
    },
    {
        name: "Mechaoffline",
        shortDescription: "An offline version of V19.",
        tags: ["Offline"],
        id: "mechaoffline",
        versions: [
            {
                version: "V19",
                downloadLink: "https://drive.google.com/uc?export=download&id=1Ilz1Ob71x9EOi7k9Yub8NqllNQ5_6P0E"
            }
        ]
    },
    {
        name: "Multi Brawl",
        shortDescription: "A modified version of V29 that replaces ALL the brawlers will new ones.",
        tags: ["Offline"],
        id: "multi",
        versions: [
            {
                version: "V47 (BS V29)",
                downloadLink: "https://multibrawl.com/download"
            }
        ]
    },
    {
        name: "Brawl Mod Beta",
        shortDescription: "Offline version of V11",
        tags: ["Offline"],
        id: "beta-offline",
        versions: [
            {
                version: "V11",
                downloadLink: "https://drive.google.com/uc?export=download&id=1DH6SOJbjTUAuBAENPhY8Xhuu1tvCqspO"
            }
        ]
    },
    {
        name: "GioBrawl",
        shortDescription: "Offline version of V29 with new skins and... interesting brawler names.",
        tags: ["Offline"],
        id: "gio",
        versions: [
            {
                version: "V29",
                downloadLink: "http://server.natesworks.com/GioBrawl_V2.5.apk"
            }
        ]
    },
    {
        name: "Crasher's Brawl",
        shortDescription: "Brawl Stars V29 with brand new brawlers, crashcharges(hypercharges remake) and skins!",
        tags: ["Offline"],
        id: "crasher",
        versions: [
            {
                version: "1.0",
                changelog: `**New Brawlers:**

PERL
PHOENIX
ROSIE
WADE

**New Crashcharges:**

HELEN
TECHNO

**New Skins:**

DIGIVERSE KING PERL
ELECTRO-HELPER POCKET
DARK VIRUS TECHNO
LIGHT VIRUS TECHNO

**Pins:**

- 10 Hagi Pins
- 1 Helen Pins
- 7 Pocket Pins
- 7 Perl Pins

**New Features:**

- Now brawlers have their own portraits.
- Crashcharges
- Pins

**Changed/Reworked/Fixed Stuff:**

- Blaze now have his own super effect + now it can break walls.
- Loading Screen is fixed.
- Helen's win animation is changed.
                `,
                downloadLink: "https://www.mediafire.com/file/4zoy89kjy0xvu1w/Crasher%27s+Brawl_v1.apk/file"
            },
            {
                version: "0.5",
                downloadLink: "https://drive.google.com/uc?export=download&id=1sMNJzJG61x1swTpiYJfISix-fFwx20uP",
                altDownload: "https://www.mediafire.com/file/ry7k1x0eckdgcr1/Crasher's+Brawl_v0.5.apk/file"
            }
        ]
    },
    {
        name: "Dimensional Brawl",
        shortDescription: "Dimensional Brawl is a small mod made on v29 mainly about custom brawlers.",
        tags: ["Offline"],
        id: "dimensional",
        versions: [
            {
                version: "V29",
                downloadLink: "https://drive.google.com/uc?export=download&id=1_90LQFje1W8qDryqBkwxD4GHWuiOBpLC",
                altDownload: "https://www.mediafire.com/file/abe65bxfc6wtcxh/Dimensional_Brawl_V4.apk/file"
            }
        ]
    },
    {
        name: "Mandy's Candy",
        shortDescription: "Ports many brawlers from newer versions of the game.",
        tags: ["Offline"],
        id: "mandy",
        versions: [
            {
                version: "Bizarre circus",
                downloadLink: "https://drive.google.com/uc?export=download&id=1493BbXhEHbgheOb9Ddh0Q3Ybs2Qb8rQR",
            }
        ]
    },
    {
        name: "X-coder",
        shortDescription: "A tool for decoding (sc to png) and encoding (png to sc) sc files used in Supercell games.",
        tags: ["Utilities"],
        id: "x-coder",
        versions: [
            {
                version: "V2.2 for Android",
                downloadLink: "https://github.com/lilmuff2/X-coder/releases/download/v2.2/X-coder.apk",
            },
            {
                version: "V2.2 for Windows",
                downloadLink: "https://github.com/lilmuff2/X-coder/releases/download/v2.2/X-coder_setup.exe",
            }
        ]
    },
    {
        name: "Cool Brawl",
        shortDescription: "Adds mod menu, new skins, a new brawler and more.",
        tags: ["Offline"],
        id: "cool",
        versions: [
            {
                version: "V29",
                downloadLink: "https://drive.google.com/uc?export=download&id=1HFbzPGFMn92GPdENLKG_lfy6yXOU3ME-",
                altDownload: "https://www.mediafire.com/file/whywimld9t3dnqf/Cool+Brawl_v1.0.1.apk/file"
            }
        ]
    },
    {
        name: "True V53 Offline",
        shortDescription: "Brawl Stars V53 Offline. Doesn't work on Android 14 and Brawl Ball and Showdown don't work.",
        tags: ["Offline"],
        id: "fuck-you-drive-this-isnt-malware",
        versions: [
            {
                version: "V53",
                downloadLink: "https://drive.google.com/uc?export=download&id=13fvm0sBnV4KFICeBB8EnxlAgPn4vbO1J",
            }
        ]
    },
    {
        name: "Darryl Stars",
        shortDescription: "Adds 30 new brawlers.",
        tags: ["Offline"],
        id: "darryl",
        versions: [
            {
                version: "V9 (BS V29)",
                downloadLink: "https://www.mediafire.com/file/toku4rrnefxbr8c/Darryl_Stars_V9.apk/file",
            }
        ]
    },
    {
        name: "GTX Brawl",
        shortDescription: "Adds skins from Chinese Brawl Stars, adds new skins, maps and modifiers.",
        tags: ["Offline"],
        id: "gtx",
        versions: [
            {
                version: "V29",
                downloadLink: "https://www.mediafire.com/file/pxeeiqcq60260n1/GTXBRAWL_Axusterra.apk/file",
            }
        ]
    },
    {
        name: "Nais Brawl",
        shortDescription: "Replaces all brawlers with new ones!",
        tags: ["Offline"],
        id: "nais",
        versions: [
            {
                version: "V17",
                downloadLink: "https://www.mediafire.com/file/2w2en451dm7haj5/Nais+Brawl+v17.apk/file",
            }
        ]
    },
    {
        name: "Boomerang Brawl",
        shortDescription: "All brawlers attacks return like Carls.",
        tags: ["Offline"],
        id: "boomerang",
        versions: [
            {
                version: "V46",
                downloadLink: "https://www.mediafire.com/file/ex3yb4x3tmffd3i/boomerang+brawl_signed_clone.apk/file",
            }
        ]
    },
    {
        name: "Mt Brawl",
        shortDescription: "All brawlers are cursed.",
        tags: ["Offline"],
        id: "mt",
        versions: [
            {
                version: "Finished",
                downloadLink: "https://www.mediafire.com/file/x88p4q6g6an96pk/Mt+Brawl+finish.apk/file",
            }
        ]
    },
    {
        name: "Aimbot Brawl",
        shortDescription: "Enables aimbot.",
        tags: ["Offline"],
        id: "aimbot",
        versions: [
            {
                version: "V46",
                downloadLink: "https://www.mediafire.com/file/7gskpz9kijgbpgy/aimbot+brawl.apk/file",
            }
        ]
    },
    {
        name: "TTB Stars",
        shortDescription: "Adds more brawlers.",
        tags: ["Offline"],
        id: "ttb",
        versions: [
            {
                version: "V15",
                downloadLink: "https://www.mediafire.com/file/7gskpz9kijgbpgy/aimbot+brawl.apk/file",
            }
        ]
    },
    {
        name: "GDX Brawl",
        shortDescription: "Offline brawl stars.",
        tags: ["Offline"],
        id: "gdx",
        versions: [
            {
                version: "V19",
                downloadLink: "https://drive.google.com/uc?export=download&id=1EBlqGH_dnIlA5gZ-VeJIrhlpw5bDTHby",
            }
        ]
    },
    {
        name: "Hamster Brawl",
        shortDescription: "A fully functional private server.",
        tags: ["Private server"],
        id: "hamster",
        description: `
Hamster Brawl is a V28 private server!
What works?

- Road of Glory
- Club
- Shop
- Bot fights
- Ratings
and much more!`,
        versions: [
            {
                version: "V28",
                downloadLink: "https://drive.google.com/uc?export=download&id=1WNlX6jEjw2oJUjmzfTjVA9oTHsYBV74j",
            }
        ]
    },
    {
        name: "Pirate Offline",
        shortDescription: "A fully functional V24 offline mod.",
        tags: ["Offline"],
        id: "pirate",
        versions: [
            {
                version: "V3.2 (BS V24)",
                downloadLink: "https://drive.google.com/file/d/19JBTXFFhq05QnU7LWSXrH4rN1PjkU-RM/view?usp=drivesdk",
            }
        ]
    },
    {
        name: "Rebrawl",
        shortDescription: "The original rebrawl apk. The servers are down so you won't be able to connect.",
        tags: ["Private server", "Hidden"],
        id: "rebrawl",
        versions: [
            {
                version: "V30",
                downloadLink: "https://drive.google.com/uc?export=download&id=1YQkABsNxr9ppMqDyuJWtxulnA_tIdsRX",
            }
        ]
    },
    {
        name: "Hyper Brawl",
        shortDescription: "Brawl Stars V28 private server.",
        tags: ["Private server"],
        id: "hyper",
        versions: [
            {
                version: "V28",
                downloadLink: "http://server.natesworks.com/HyperBrawl.apk"
            }
        ]
    },
    {
        name: "Sigma Brawl",
        shortDescription: "Old movement and OG brawlers!",
        tags: ["Private server"],
        id: "brainrot",
        versions: [
            {
                version: "V28",
                downloadLink: "https://drive.google.com/uc?export=download&id=15Dj2Uhaukvd8L_gZ73uP-N3fCTVOjtYM"
            }
        ]
    },
    {
        name: "RUID",
        shortDescription: "Based on surge offline v28 has half of all bs skins new brawlers some skills changed and new loading, menu and training ground.",
        tags: ["Private Server"],
        id: "ruid",
        versions: [
            {
                version: "V20",
                downloadLink: "https://drive.google.com/uc?export=download&id=19nnBlUXV_CHWiXR9VX1lxIxa_JH3Oy1i"
            }
        ]
    },
    {
        name: "BM Brawl",
        shortDescription: "Cursed brawlers and attacks.",
        tags: ["Offline"],
        id: "bm",
        versions: [
            {
                version: "V0.5",
                downloadLink: "https://www.mediafire.com/file/vkiogtiua35v11u/BM+Brawl_29.258+(1).apk/file"
            }
        ]
    },
    {
        name: "Cool Brawl",
        shortDescription: "Collbrawl pour",
        tags: ["Offline"],
        id: "collbrawl",
        versions: [
            {
                version: "V1",
                downloadLink: "https://download.natesworks.com/brawlmods/Cool%20Brawl_v1.0.1.apk"
            }
        ]
    },
];
