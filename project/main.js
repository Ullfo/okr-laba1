
// TASK 1 функція Діалог

const dialog = () => {

   let userName = prompt('Як тебе звати?')
    if (userName) {
        alert(`Привіт, ${userName}`);
   } else {
        alert('Зроз... ну ок....');
   }
   

   let haveMoney = confirm('У вас є гроші?')
   if (haveMoney){
      let howMuchMoney = prompt('Скільки грошей готові витратити на наш чай?' ,100)

      if (howMuchMoney >= 100) {
         alert('Ласкаво просимо до магазину!')
      }
      else {
         alert('Знайдіть роботу')
         window.location.href = 'https://www.google.com/search?sca_esv=de41ff9df9a77b07&sxsrf=ADLYWIIcC09-WR-2uy11bsZkxtLncaXcdA:1715528333643&q=find+a+job&uds=ADvngMgKVz4OuRiO7Kg25S0RvBkI-CAlHHglqbUsSYQo9DmANzqQOFve6XFKOq212fmYX_wQSEOdxtSVSDJtcUYBJODLrUYXXYyXsHOWex37ySmevE1W56MlcUyNKQ-5NmGzhWs4wXKSmCdZJCRWQakoNXyfQQbIAD-T3VunXO7F6A4dUQm9tXct8KktJ7TKjn40ROtHmbph820s0w2WaPaSHEkz0lgzxQv9UFTQ9qBumlnCyzh1LfM5qwmxOK6zA1Aj8UVS378Oh4sM4BNmMpcOk7X7tt66k0qbC9MAeuNwRxxYFCLYLmwbnsk82wmJXjEI1I2capUkdE2lF9EgO-nOMZ6yjzm618RlVIB1cRRgZ-zp8fdvy9c&udm=2&prmd=ivsnbmtz&sa=X&ved=2ahUKEwji9LaHuYiGAxWrHhAIHfpLAPIQtKgLegQIEBAB&biw=2048&bih=926&dpr=0.94'
      }
   }
   else {
      alert('Знайдіть роботу')
      window.location.href = 'https://www.google.com/search?sca_esv=de41ff9df9a77b07&sxsrf=ADLYWIIcC09-WR-2uy11bsZkxtLncaXcdA:1715528333643&q=find+a+job&uds=ADvngMgKVz4OuRiO7Kg25S0RvBkI-CAlHHglqbUsSYQo9DmANzqQOFve6XFKOq212fmYX_wQSEOdxtSVSDJtcUYBJODLrUYXXYyXsHOWex37ySmevE1W56MlcUyNKQ-5NmGzhWs4wXKSmCdZJCRWQakoNXyfQQbIAD-T3VunXO7F6A4dUQm9tXct8KktJ7TKjn40ROtHmbph820s0w2WaPaSHEkz0lgzxQv9UFTQ9qBumlnCyzh1LfM5qwmxOK6zA1Aj8UVS378Oh4sM4BNmMpcOk7X7tt66k0qbC9MAeuNwRxxYFCLYLmwbnsk82wmJXjEI1I2capUkdE2lF9EgO-nOMZ6yjzm618RlVIB1cRRgZ-zp8fdvy9c&udm=2&prmd=ivsnbmtz&sa=X&ved=2ahUKEwji9LaHuYiGAxWrHhAIHfpLAPIQtKgLegQIEBAB&biw=2048&bih=926&dpr=0.94'
   }
   

   let howMuchYouWant = prompt('Скільки хочеш пакетиків чаю? (Максимум 5)')

   if (isNaN(howMuchYouWant) || howMuchYouWant < 1 || howMuchYouWant > 5) {
       alert('Ні так не піде друже')
   } else {
      for (let i = 1 ; i <= howMuchYouWant; i++){
          alert(`Ось тобі ${i}-й пакетик чаю..`)
      }
   }

}

//dialog()

// TASK 2 функція Посада


function Posada(ownerName, ownerSurname ,ownerPosition = 'Зваравювач чаю') {
   alert(`
   Імя: ${ownerName}\n
   Фамілія: ${ownerSurname}\n
   Посада: ${ownerPosition}`)
   
}

Posada('Maxim', 'Lemish')


// TASK 3 Порівняння рядків


const functionTask3 = (text1, text2) => {
   if (text1.length == text2.length) {
      alert(`вони рівні по довжині браток: ${text1.length} символів`)
   }
   else if (text1.length > text2.length) {
      alert(text1)
   } else
      alert(text2)
}

//functionTask3('Шала лу лу лі лі лу лі ла лі лам', 'Ла ла ла лу лу лу')


// PART 2 зміна фону на 30 сек

const backChange = document.getElementById('backChange')
backChange.addEventListener('click', () => {
   
   document.body.style.backgroundColor = '#283043'

   setTimeout(() => document.body.style.background = '#fff' , 30000)
})

//PART 2 перенаправлення завдяки location

const greanTeaHref = document.querySelector('.titi').addEventListener('click', () => {
    location.href = 'black-tea.html'; 
});


//PART 2 використати innerHTML, outerHTML, nodeValue/data, textContent

const forInner = document.querySelector('.for-inner')
const forOuter = document.querySelector('.for-outer')
const forTextContent = document.querySelector('.for-textContent')
const forData = document.querySelector('.for-data')
let text = forData.firstChild

forInner.innerHTML = '<h1>Чорний чай</h1>'
forOuter.outerHTML = '<div class="for-outer">Зелений чай в пакетику div з класом for-outer</div>'
forTextContent.textContent = '<p>Білий чай текстом</p>'

alert(text.data)


//PART 2 використати document.write, document.createElement(tag), document.createTextNode(text) та методи вставки node.append (... nodes or strings), node.prepend (... nodes or strings), node.after (... nodes or strings), node.replaceWith (... nodes or strings), метод видалення вузлів node.remove ()

document.write('<h1>чай що надає крила</h1>')

let createDiv = document.createElement('div')
let createText = document.createTextNode('Шалулам лулулу зі смаком append')

//append
createDiv.append(createText)
document.body.append(createDiv)

//prepend
let createDiv2 = document.createElement('div')
createDiv2.textContent = 'знижка є, коли є prepend'
document.body.prepend(createDiv2)

//after
let createDiv3 = document.createElement("div")
createDiv3.textContent = "Деревяні нотки завдяки after"
createDiv2.after(createDiv3) 

//replace
let createDiv4 = document.createElement("div")
createDiv4.textContent = "знижок більше немає, бо тепер в нас replaceWith"
createDiv2.replaceWith(createDiv4) 


createDiv3.remove()







