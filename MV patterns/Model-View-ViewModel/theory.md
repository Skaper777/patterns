Model-View-ViewModel обходит ограничения паттернов MVC и MVP, а также объединяет их некоторые сильные стороны. Этот паттерн был впервые реализован внутри языка Smalltalk. Подробнее об этом можно прочитать в статье «Неизвестный Smalltalk».

MVVM полезен, когда нужно менять форму вслед за состоянием. Например, на сайте есть форма для регистрации и авторизации. Если пользователь нажимает на чекбокс с регистрацией, данные внутри компонента View меняются, и отображается форма с данными для регистрации. А когда пользователь выбирает авторизацию — появляется форма с авторизацией.

Паттерн позволяет легко задавать зависимость между элементами формы с помощью дополнительного объекта ViewModel

MVVM отделяет пользовательский интерфейс от логики, а также добавляет реактивность в приложение при помощи объекта ViewModel. Этот объект подписан на изменение модели и реагирует на это изменением интерфейса, и наоборот.

Паттерн применяется во фреймворке Vue.js при помощи ключевого слова v-model.