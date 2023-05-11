# Blender modellek
Az elkészült Blender modellek a "Blender modellek" mappában találhatóak meg. Ezeket a modelleket meg lehet tekinteni a Blender program letöltése után. A textúrázott modellek a Rendered módban láthatóak, amit a Blender jobb felső sarkában található 4. gömbre kattintva lehet elérni.

# Webalkalmazás kódjai (Angular, Three.js)
Az alkalmazásom fájljai, amiben a kódok találhatóak, az src/app mappában találhatóak.
A gyökérmodul itt található, App néven, ahonnan az alkalmazás indul, itt valósítottam meg az alkalmazás navigációját . 
Az src/app/pages-ben a többi modul található: info, map, nav, not-found, splash, trains. A Nav-ban a navigációs sáv található, a többi modulban egy-egy oldal kódjai.

### Info 
Az info mappában az Útmutató oldal kódjai találhatóak. Ezen az oldalon információt lehet találni a Térkép és a Vonatok oldal funkcióinak használatáról. 

### Map 
A map mappában a Térkép oldal kódjai találhatóak. A terkep komponens a Three.js-szel beolvasott Blender-ben elkészített terepasztalt és a megállókat jeleníti meg az oldalon.
Az info és a list komponensek a terepasztalon lévő megállók dialógusablainak a megjelenítéséért felelnek. Az info-ban található a dialógusablak tartalma.

### Nav
A nav mappában a navigációs sáv kódjai találhatóak. 

### Not-Found
A not-found mappában egy olyan oldal készült el ami akkor jelenik meg ha nem jó az elérési útvonala egy oldalnak és kiírja az oldalra hogy Page not found.

### Splash
A splash mappában a kezdőoldal található, ahol a routing van megvalósítva a html fájlban.

### Trains
A trains mappában a Vonatok oldal kódjai találhatóak. A trains komponens a szülő és a list, viewer és image pedig a gyerek komponensek. A trains komponens fogja össze az egész oldalt. 

A list komponensben egy lenyíló lista van, aminek segítségével ki lehet választani hogy melyik vonatról jelenjenek meg információk. 
Itt az adatátvitelt valósítottam meg Input, Output direktívákkal hogy a gyerek és a szülő komponensek át tudják az adatokat adni egymásnak.

Az image komponens a kiválasztott vonat képét jeleníti meg, itt a szülőből érkező adatokat használtam. 

A viewer komponens a kiválasztott vonatról jeleníti meg az információkat, szintén a szülőből érkező adatok segítségével.

A többi mappában pedig a vonatok dialógusablakai szerepelnek. Ezekben Three.js segítségével olvastam be a korábban elkészített Blender modelleket. 
Ezeket a dialógusablakokat egy gomb segítségével jelenítettem meg, ami szintén kívülről kapta meg az információt mikor melyik ablakot kell megjeleníteni.

### Map komponens adatai
Az src/app/shared/constants mappában tároltam el egy tömbben a Vonatok oldal adatait. Innen olvastam be az adatokat a trains modulba.

### Kiexportált Blender modellek
Az src/assets/blender mappában vannak lementve a Blender-ben elkészített modellek kiexportált fájljai. Minden modellhez két fájl van, egy obj és egy mtl. A Blender .blend formátumát nem lehet betölteni webalkalmazásba,ezért volt szükség kiexportálni a modelleket.

### Felhasznált képek
Az src/assets/images mappában a blender modellek textúrázásához használt képek találhatóak.


# Parancsok

Az alkalmazást az `ng serve` paranccsal lehet elindítani. Az alkalmazás a localhost 4200-on jelenik meg ezután.

Új komponenst az  `ng g c komponens-neve` paranccsal lehetett létrehozni. 

Új modult pedig az `ng g m komponens-neve` paranccsal lehetett létrehozni.
