// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()


// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
	// res.render генерує нам HTML сторінку

	// ↙️ cюди вводимо назву файлу з сontainer
	res.render('index', {
		// вказуємо назву контейнера
		name: 'index',
		// вказуємо назву компонентів
		component: [''],

		// вказуємо назву сторінки
		title: 'Назва сторінки',
		// ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

		// вказуємо дані,
		data: {},
	})
	// ↑↑ сюди вводимо JSON дані
})
const auth = require('./auth')
router.use('/', auth)

// Експортуємо глобальний роутер

module.exports = router
