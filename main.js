// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
/*
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}
*/


/**
 * Změna tlačítka na zelenou barvu po stisknutí dtuhého tlačítka
 */
function zmenBarvu () { 
  document.querySelector(".ctverecek").style.backgroundColor = "green";
}


/* delší zápis s proměnnou
function zmenBarvu () { 
  let zmenBarvu = document.querySelector(".ctverecek");
  zmenBarvu.style.backgroundColor = "#00FF00";
}
*/


/**
 * Zobrazení výsledku výpočtu po stisknutí třetího tlačítka
 */
function zobrazVysledek () {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}


/**
 * ?
 */
 function upozorni() {
   let pozor = ("Gratulace, právě jsi spustila tuto funkci!");
   alert(pozor);
   console.log (pozor);
}

//krok 2. jsem bohužel nevymyslela, a když jsem si kontrolovala řešení, tak ho ani moc nechápu...hlavně tu 0