console.log('Litr żołądkowej to obowiąkowe! Ten kod jest już w repozytorium Git.')

let hacked = document.querySelector('.button')
let action = document.querySelector('.js-action')
let actionName = document.querySelector('.js-actionName')

hacked.addEventListener('click', () => {
	action.classList.toggle('hide')
	actionName.innerText = action.classList.contains('hide') ? 'Przywróć' : 'Hackuj'
})
