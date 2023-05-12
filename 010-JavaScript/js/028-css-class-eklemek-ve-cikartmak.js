// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

const titleElement = document.querySelector('#title')

console.log(titleElement.classList)
titleElement.classList.remove("text-primary", "title") // ister bir class ister birden fazla class silebilirsiniz..

titleElement.classList.add("text-info", "display-1") // ister bir class ister birden fazla class ekleyebilirsiniz..

titleElement.classList.toggle('bg-primary') // ekle veya cikar..