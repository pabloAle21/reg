const meses = [`enero , febrero ,marzo , abril ,mayo , junio , julio ,agosto , septiembre ,octubre , noviembre ,diciembre`]
document.write(meses)
document.write(`meses del año`)
document.write(`<h2>meses de añoñ</h2>`)
document.write(`<ul>`)
for(let i = 0;i<meses.length;i++){
document.write(`<li>${meses[i]}</li>`)
}
document.write(`</ul>`)