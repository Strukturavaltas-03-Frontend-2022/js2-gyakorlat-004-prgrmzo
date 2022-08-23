// 1. Írj egy függvényt `getSecondsOfThisYearUntilNow` néven, aminek a visszatérési értéke az aktuális év 01.01. óta
// eltelt másodperceinek a száma!
//    Csak a Date konstruktor függvényt (akár példányosítva, akár anélkül), a now() és a getFullYear()
//    metódusokat használd!

const getSecondsOfThisYearUntilNow = () => {
  const now = new Date();
  const secondsUntilNow = Date.now() - new Date(now.getFullYear());

  return secondsUntilNow / 1000;
};

export default getSecondsOfThisYearUntilNow;
