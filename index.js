// const pickone = document.getElementById('pickone')
// const quote = document.getElementById('quote')

// const API_KEY = `Sj6aIM7Hqi7yHL5HoxT4WQ==Mx2Z2Js9gPiWpprm`

// const api_url = 'https://api.api-ninjas.com/v1/quotes'

// async function getQuote() {
//     const res = await fetch('https://api.api-ninjas.com/v1/quotes',

//     );
//     const data = await res.json();
//   console.log(data);
// }
     



var category = 'happiness'
function getQuote(){

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key':  `Sj6aIM7Hqi7yHL5HoxT4WQ==Mx2Z2Js9gPiWpprm`},

    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    const quote = result[0].quote    

    const h2 = document.getElementById('quote')
    h2.innerHTML = `"${quote}"`

    const author =  result[0].author
    const h3 = document.getElementById('author')
    h3.innerHTML =`-${author}`



    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
}