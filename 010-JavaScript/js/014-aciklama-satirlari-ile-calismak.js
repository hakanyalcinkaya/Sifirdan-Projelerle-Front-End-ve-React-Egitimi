// https://javascript.info/comments
// https://code.visualstudio.com/docs/languages/javascript#_jsdoc-support
// https://jsdoc.app/

console.log("Info")  // console.log'a aktarilan bilgi

/*
birden fazla satirli aciklama
ikinci satirda farkli bir aciklama daha var :)
*/

// JSDoc Ornegi
/**
 * Fonksiyonun Aciklama Bilgisi..
 * @param {number} num1  // parametreler..
 * @param {number} num2 
 * @returns 
 */
function sum(num1, num2) {
  return num1 + num2
}

/**
 * Add String to List
 * @param {Array} users
 * @param {string} user
 * @returns
 */
function addToList(users, user) {
  console.log(users.length) // console log a ilk gelen users icinde kac oge oldugunu bildirir..
  users.push(user)
  return users
}