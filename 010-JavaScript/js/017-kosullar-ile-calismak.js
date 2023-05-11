// Kosullar ile Calismak
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// [eger] kullanicinin verdigi yaş bilgisi 18e esit veya buyukse sisteme girdin bilgisi alsin..

/*
eger (kosul) {
  yapilacak islem
} degilse //kosul yok {

}
*/

const userAge = prompt("Lutfen Yasinizi Giriniz:")

if (userAge >= 18) {
  // suslu parantezler blok anlamina gelir ve bircok yerde karsilasacagiz..
  console.log("sisteme girdin..")
} else {
  // burasi tehlikeli ;) lutfen unutma!
  // window.location.replace("http://stackoverflow.com");
  console.log('acimasizca seni baska bir siteye yonlendiriyorum ;)')
}