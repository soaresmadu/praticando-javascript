const musicText = document.getElementById('music');
const musicBtn = document.getElementById('musicBtn');
const typeMusic = document.getElementById('type-music');

const musicPop = [
    "SÃO PAULO - The Weeknd, Anitta",
    "NONSENSE - Sabrina Carpenter",
    "BOYFRIEND - Dove Cameron",
    "NIGHTS LIKE THIS - The Kid LAROI",
    "WE CAN'T BE FRIENDS (wait for your love) - Ariana Grande",
    "MANTRA - Jennie",
    "EXES - Tate McRae",
    "FEATHER - Sabrina Carpenter",
    "CANDY - Doja Cat",
    "UNWRITTEN - Natasha Bedingfield",
    "GOLDEN HOUR - JVKE",
    "KILL BILL - SZA",
    "LOCKED OUT OF HEAVEN - Bruno Mars",
    "THE BOY IS MINE - Ariana Grande",
    "RUN FOR THE HILLS - Tate McRae",
    "PLEASE, PLEASE, PLEASE - Sabrina Carpenter",
    "AGAIN - Noah Cyrus, XXXTENTACION",
    "THAT'S SO TRUE - Gracie Abrams",
    "ONE OF THE GIRLS - The Weeknd, JENNIE, Lily-Rose Depp",
    "LOOK WHAT YOU MADE ME DO - Taylor Swift",
    "BIRDS OF A FEATHER - Billie Eilish"
];

const musicMPB = [
    "SE - Djavan",
    "ANDAR COM FÉ - Gilberto Gil",
    "BABY - Gal Costa, Caetano Veloso",
    "GENTE ABERTA - Erasmo Carlos",
    "SAMBA DO GRANDE AMOR - Chico Buarque",
    "AMORES - Fafá de Belém",
    "FORÇA ESTRANHA - Gal Costa",
    "MEU BEM-QUERER - Djavan",
    "COMO NOSSOS PAIS - Elis Regina",
    "O LEÃOZINHO - Caetano Veloso, Moreno Veloso",
    "BARATO TOTAL - Gilberto Gil",
    "DE NOITE NA CAMA - Erasmo Carlos",
    "ANGÉLICA - MPB4, Chico Buarque",
    "DEUS ME PROTEJA - Chico César",
    "FLOR DE LIS - Djavan",
    "RECONVEXO - Maria Bethânia",
    "EU TAMBÉM QUERO BEIJAR/A LUA E O MAR - Zabelê, Pepeu Gomes",
    "SÁBADO EM COPACABANA - Maria Bethânia",
    "DIA BRANCO - Geraldo Azevedo",
    "DEVOLVA-ME - Adriana Calcanhotto",
    "RELICÁRIO - Cássia Eller, Nando Reis",
    "NU COM A MINHA MÚSICA - Ney Matogrosso",
    "CHUVA DE PRATA - Gal Costa",
    "ÁGUAS DE MARÇO - Elis Regina, Tom Jobim",
    "CHÃO DE GIZ - Zé Ramalho"
];

const musicTRAP = [
    "VAMPIRO - Matuê, WIU, Teto",
    "BALLENA - Vulgo FK, MC PH, Veigh, Pedro Lotto, Fepache",
    "M4 - Teto, Matuê",
    "QUAL É SEU DESEJO? - Tz da Coronel, The Runner, Nagalli, Cúpula",
    "LUXÚRIA - Xamã, Matuê, Bagua Records, Neo Beats",
    "ENGANA DIZENDO QUE AMA - Veigh, Tz da Coronel, Toledo, Nagalli, Bvga Beatz, Supernova Ent",
    "MÁQUINA DO TEMPO - Matuê",
    "SEGREDO - KayBlack, Marquinho no Beat, Walll Hein",
    "PERSONNALITE - Kant, Sobs, Sueth, UCLÃ",
    "FOTO DA UNHA - L7NNON, Veigh, Ngalli",
    "VIDA CHIQUE - Veigh, Nick Nash, Wylo, Nagalli, Supernova Ent, Kaash Paige",
    "FIM DE SEMANA NO RIO - Teto",
    "A MORTE DO AUTOTUNE - Matuê",
    "GOOD VIBE - Filipe Ret, Caio Luccas, Dallass",
    "777-666 - Matuê",
    "Nois é Nois - Veigh, Supernova Ent",
    "LENDA - Borges, Filipe Ret, TkN, Mindu",
    "RAINHA DA FINESSE - Wiu",
    "IMAGINA ESSE CENÁRIO - Matuê, Veigh",
    "NÃO TEMOS MEDO - Tz da Coronel",
    "O SOM - Matuê"
];

const musicRAP = [
    "ONE DANCE - Drake, Wizkid, Kyla",
    "THE BOX - Roddy Ricch",
    "NONSTOP - Drake",
    "CIRCLES - Post Malone",
    "HEARTLESS - Kanye West",
    "CAN'T SAY - Travis Scott",
    "FE!N - Travis Scott, Playboi Carti",
    "TRUST ISSUES - Drake",
    "HUMBLE. - Kendrick Lamar",
    "SICKO MODE - Travis Scott",
    "ROCKSTAR - Post Malone, 21 Savage",
    "I KNOW ? - Travis Scott",
    "CONGRATULATIONS - Post Malone, Quavo",
    "HOPE - XXXTENTATION",
    "VIOLENT CRIMES - Kanye West",
    "FLASHING LIGHTS - Kanye West",
    "GOOSEBUMPS - Travis Scott",
    "PRAISE GOD - Kanye West",
    "UNFORGETTABLE - French Montana, Swan Lee",
    "WOW. - Post Malone",
    "YOU BROKE MY HEART - Drake"
];

const musicTOPBR = [
    "LOOKING FOR LOVE - Alok, Anitta",
    "ESCADA DO PRÉDIO - Pedro Sampaio, Marina Sena",
    "MTG NA IMAGINAÇÃO - DJTOPO, Mc Livinho",
    "SUA PREFERIDA - Ludmilla, WIU, MC Kevin o Chris",
    "AI QUE CALOR - Pabllo Vittar, DUDA BEAT",
    "AFRODITE - Delacruz, IZA, JOK3R",
    "NÃO FOSSE TÃO TARDE - MTG REMIX - Lou Garcia, Dj Luan Gomes",
    "CAJU - Liniker",
    "LOW PROFILE - Carol Biazin",
    "NOSSO PRIMEIRO BEIJO - Gloria Groove",
    "MTG QUERO VER SE VOCÊ TEM ATITUDE - Dj Luan Gomes",
    "ALIBI - Sevdaliza, Pabllo Vittar, Yseult",
    "CRACK COM MUSSILON - Matuê",
    "CLACK BUM - Mc J Mito, Kaio Viana, DJ Borest",
    "SÓ FÉ - Grelo",
    "MTG QUEM NÃO QUER SOU EU - DJ TOPO, Seu Jorge, Mc Leozin, MC G15",
    "SAGRADO PROFANO - Luísa Sonza, KayBlack",
    "RECADIN NO ESPELHO - Luísa Sonza, MC Kevin o Chris",
    "POCPOC - Pedro Sampaio",
    "JOGA PRA LUA - Anitta, DENNIS, Pedro Sampaio",
    "SOU MUSA DO VERÃO - Marshmello, Luísa Sonza",
    "BELLAKEO - Peso Pluma, Anitta"
]

const musicINDIE = [
    "EVENTUALLY - Tame Impala",
    "TO BUILD A HOME - The Cinematic Orchestra, Patrick Watson",
    "ATLANTIS - Seafret",
    "EASY - Troye Sivan",
    "END OF BEGINNING - Djo",
    "CIGARETTE DAYDREAMS - Cage The Elephant",
    "LET ME KNOW - Winona Oak",
    "DARK PARADISE - Lana Del Rey",
    "COOL - Germano",
    "RIPTIDE - Vance Joy",
    "SEX, DRUGS, ETC - Beach Weather",
    "BORN TO DIE - Lana Del Rey",
    "I LOVE YOU SO - THE WALTERS",
    "WAY DOWN WE GO - KALEO",
    "K. - Cigarettes After Sex",
    "REFLECTIONS - The Neighbourhood",
    "YOU GET ME SO HIGH - The Neighbourhood",
    "ELETRIC LOVE - BORNS",
    "OPHELIA - The Lumineers",
    "WILDFIRE - Seafret",
    "MESS IS MINE - Vance Joy",
    "BEANIE - CHEZILE",
    "LEFT HAND FREE - alt-J",
    "BREEZEBLOCKS - alt-J"
]

function generateMusic(){
    if (typeMusic.value == 1){
        const randomNumber = Math.floor(Math.random()*musicPop.length);
        music.textContent = musicPop[randomNumber];
    } else if (typeMusic.value == 2) {
        const randomNumber = Math.floor(Math.random()*musicMPB.length);
        music.textContent = musicMPB[randomNumber];
    } else if (typeMusic.value == 3) {
        const randomNumber = Math.floor(Math.random()*musicTRAP.length);
        music.textContent = musicTRAP[randomNumber];
    } else if (typeMusic.value == 4) {
        const randomNumber = Math.floor(Math.random()*musicRAP.length);
        music.textContent = musicRAP[randomNumber];
    } else if (typeMusic.value == 5) {
        const randomNumber = Math.floor(Math.random()*musicTOPBR.length);
        music.textContent = musicTOPBR[randomNumber];
    } else if (typeMusic.value == 6) {
        const randomNumber = Math.floor(Math.random()*musicINDIE.length);
        music.textContent = musicINDIE[randomNumber];
    }
}

musicBtn.addEventListener('click', generateMusic);

