'use client'

interface ModVersion {
    version: string;
    downloadLink: string;
    altDownload?: string;
}

interface Mod {
    name: string;
    description: string;
    tags: string[];
    versions: ModVersion[];
}

export const mods: Mod[] = [
    {
        name: "Nulls Brawl",
        description: "Null's Brawl is a Brawl Stars private server with unlimited gems, gold and boxes. Play with friends on any brawler you want.",
        tags: ["Private server", "Supports iOS"],
        versions: [
            {
                version: "V56 for Android",
                downloadLink: "https://dnull.xyz/latest_bs",
                altDownload: "https://drive.google.com/uc?export=download&id=11866WS3Q1HzVcNfD3dJYSS4yRlXJ6wEO"
            },
            {
                version: "V56 for iOS",
                downloadLink: "https://dnull.xyz/latest_bs_i",
                altDownload: "https://drive.google.com/uc?export=download&id=1qDaEwLtDQLpsIRh8ejg7F5_ysMyfPTA9"
            }
        ]
    },
    {
        name: "Magic Brawl",
        description: "Magic Brawl is the rebirth of Brawl Stars and its best times! All content is available on the server: online battles, all the characters and everything. By downloading this server, you can get great pleasure from the updates, because we update the server every month!",
        tags: ["Private server"],
        versions: [
            {
                version: "V43",
                downloadLink: "https://files.magic-servers.xyz/mb.apk",
                altDownload: "https://drive.google.com/uc?export=download&id=1Ze3Nt3fU212WbCk8M7n9XKwDm910WVTg"
            }
        ]
    },
    {
        name: "Retro Brawl",
        description: "Retro Brawl is the old version of Brawl Stars (2018). Online battles, 21 characters and star powers for them, clans, etc. are available on the server. Feel better times, from the old menu to the atmosphere!",
        tags: ["Private server", "Supports iOS"],
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
        description: "Allows changing server region, viewing enemies ammo and more!",
        tags: ["Official server"],
        versions: [
            {
                version: "V56",
                downloadLink: "https://drive.google.com/uc?export=download&id=17LsS_wizr9CZ2Yo0oqWFU5PWpMDltjib"
            }
        ]
    },
    {
        name: "Gene Brawl",
        description: "Adds a debug menu allowing you to visually unlock all brawlers and more!",
        tags: ["Official server"],
        versions: [
            {
                version: "V56",
                downloadLink: "https://drive.google.com/uc?export=download&id=1IStoE_bUPRq1rkZ9OWE0SF_-oXWYu_8y"
            }
        ]
    },
    {
        name: "Supercell Jailbreak",
        description: "Official ipas, but without the annoying crash of the jailbreak detection.",
        tags: ["Official server", "Supports iOS"],
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
        description: "Unmodified official game. Must be installed using SAI (Split Apk Installer)!",
        tags: ["Official server"],
        versions: [
            {
                version: "V57",
                downloadLink: "https://drive.google.com/file/d/1pAX1XcRuR7dgCJSxwPHFREp0cHHJ-np3/view?usp=sharing"
            }
        ]
    },
    {
        name: "Surge Offline",
        description: "An offline version of brawl stars! Allows you to open boxes to unlock brawlers, gain trophies and play any mode. It also adds new skins and 3rd star powers for some brawlers",
        tags: ["Offline"],
        versions: [
            {
                version: "V28",
                downloadLink: "https://drive.google.com/uc?export=download&id=1fxULYszSieEy3JkTW10E-ArK5LEmMBEK"
            }
        ]
    },
    {
        name: "BSL",
        description: "BSDS ripoff ported to new versions and without battles working.",
        tags: ["Selfhosted"],
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
        name: "BSDS Client",
        description: "Selfhost your own private server with working battles.",
        tags: ["Selfhosted"],
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
        description: "All characters unlocked and third star powers added for some brawlers and new skins.",
        tags: ["Offline"],
        versions: [
            {
                version: "V15",
                downloadLink: "https://drive.google.com/uc?export=download&id=1dP-EnCmu-yAGSCb27bcTRRXisxFjJxXX"
            }
        ]
    },
    {
        name: "Buster's Brawl",
        description: "All brawlers unlocked and maxed out. Attempts to recreate brawlers from newer versions of the game.",
        tags: ["Offline"],
        versions: [
            {
                version: "V12",
                downloadLink: "https://drive.google.com/uc?export=download&id=1UWmaBt635O0TaS6H4oNB-wnVFefBimAs"
            }
        ]
    },
    {
        name: "TomatoBrawlOG",
        description: "Adds 4 new brawlers - Melee bot, mouse bot, ranged bot and boss bot! Based on Beta Brawl.",
        tags: ["Offline"],
        versions: [
            {
                version: "V11",
                downloadLink: "https://drive.google.com/uc?export=download&id=1as-qDZ7pcCJryay58eE67DvvP3sWGP04"
            }
        ]
    },
    {
        name: "Mechaoffline",
        description: "An offline version of V19.",
        tags: ["Offline"],
        versions: [
            {
                version: "V19",
                downloadLink: "https://drive.google.com/uc?export=download&id=1Ilz1Ob71x9EOi7k9Yub8NqllNQ5_6P0E"
            }
        ]
    },
    {
        name: "Multi Brawl",
        description: "A modified version of V47 that replaces ALL the brawlers will new ones.",
        tags: ["Offline"],
        versions: [
            {
                version: "V47",
                downloadLink: "https://drive.google.com/uc?export=download&id=1LGlIygczbCzEhx-M6JCP6BCtE_Oq8h_1"
            }
        ]
    },
    {
        name: "Brawl Mod Beta",
        description: "Offline version of V11",
        tags: ["Offline"],
        versions: [
            {
                version: "V11",
                downloadLink: "https://drive.google.com/uc?export=download&id=1DH6SOJbjTUAuBAENPhY8Xhuu1tvCqspO"
            }
        ]
    },
    {
        name: "Rowsor Brawl",
        description: "Brawl Stars V28 private server.",
        tags: ["Private server"],
        versions: [
            {
                version: "V28",
                downloadLink: "https://drive.google.com/uc?export=download&id=1s_hO8iL991U3sdyKthqkx7goOtVwxTFJ"
            }
        ]
    },
    {
        name: "GioBrawl",
        description: "Offline version of V29 with new skins and... interesting brawler names.",
        tags: ["Offline"],
        versions: [
            {
                version: "V29",
                downloadLink: "https://drive.google.com/uc?export=download&id=1DH6SOJbjTUAuBAENPhY8Xhuu1tvCqspO"
            }
        ]
    },
    {
        name: "Crasher's Brawl",
        description: "Brawl Stars V29 with 11 brand new brawlers!",
        tags: ["Offline"],
        versions: [
            {
                version: "0.5 (BS V29)",
                downloadLink: "https://drive.google.com/uc?export=download&id=1sMNJzJG61x1swTpiYJfISix-fFwx20uP",
                altDownload: "https://www.mediafire.com/file/ry7k1x0eckdgcr1/Crasher's+Brawl_v0.5.apk/file"
            }
        ]
    },
    {
        name: "Dimensional Brawl",
        description: "Dimensional Brawl is a small mod made on v29 mainly about custom brawlers",
        tags: ["Offline"],
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
        description: "Ports many brawlers from newer versions of the game.",
        tags: ["Offline"],
        versions: [
            {
                version: "Bizarre circus",
                downloadLink: "https://drive.google.com/uc?export=download&id=1493BbXhEHbgheOb9Ddh0Q3Ybs2Qb8rQR",
            }
        ]
    },
    {
        name: "X-coder",
        description: "A tool for decoding (sc to png) and encoding (png to sc) sc files used in Supercell games.",
        tags: ["Utilities"],
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
        description: "Adds mod menu, new skins, a new brawler and more.",
        tags: ["Offline"],
        versions: [
            {
                version: "V29",
                downloadLink: "https://drive.google.com/uc?export=download&id=1HFbzPGFMn92GPdENLKG_lfy6yXOU3ME-",
                altDownload: "https://www.mediafire.com/file/whywimld9t3dnqf/Cool+Brawl_v1.0.1.apk/file"
            }
        ]
    }
];
