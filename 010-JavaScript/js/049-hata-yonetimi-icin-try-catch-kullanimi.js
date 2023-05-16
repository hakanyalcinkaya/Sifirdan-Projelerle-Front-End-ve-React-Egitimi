// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch


try {
  console.log(LOREM)
} catch(err) {
  console.error("ERROR::: ", err)
}

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const jsonData = await response.json();
    console.log(jsonData)
  } catch (err) {
    console.error("ERROR::: ", err)
  }
}

getData('js/047-json-file.json')