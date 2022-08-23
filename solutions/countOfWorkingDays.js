// 2. Írj egy függvényt `countOfWorkingDays` néven, ami két paramétert kap.
//  Mind a két paraméter egy-egy dátum. Az első a  korábbi időpont, a második
//   a későbbi időpont.  A visszatérési értéke a két dátum közötti munkanapok
//   (hétfő-péntek) száma! A különböző ünnepekkel nem kell számolnod! Ha az első
//    dátum korábbi, mint a második akkor dobj egy hibát az alábbi üzenettel:
//    `The first parameter is earlier date, than second!`!
// Hibát dobni a következő módon tudsz:

// ```javascript
//   throw new Error(message)
// ```
// A aktuális napot is bele kell számolni a munkanapokba, ha az munkanap!
// Sehol ne használj kerekítést!

const countOfWorkingDays = (
  earlierDate = new Date(),
  laterDate = new Date()
) => {
  if (earlierDate > laterDate) {
    throw new Error(`The first parameter is earlier date, than second!`);
  }
  let workDays = 0;
  laterDate.getDay() == 0 || laterDate.getDay() == 6 ? {} : (workDays = 1);
  while (laterDate > earlierDate) {
    earlierDate.getDay() == 0 || earlierDate.getDay() == 6 ? {} : workDays++;
    earlierDate.setDate(earlierDate.getDate() + 1);
  }
  return workDays;
};

export default countOfWorkingDays;
