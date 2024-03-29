Паттерн «Одиночка» — один из самых популярных шаблонов для разработки программных систем. Его суть проста: класс должен гарантированно иметь только один объект в глобальной области видимости. На практике нередки случаи, когда нужно для определённой задачи реализовать единственный объект, который хранит в себе общие данные.

«Одиночка» нужен для гарантированного создания исключительно одного объекта класса.

«Одиночка» выполняет соединение, если оно не было установлено, или возвращает ссылку уже установленного соединения. Программе нужно только вызвать его, не заботясь о том, было ли установлено соединение с базой данных или нет. Это экономит ресурсы системы и снижает риск неаварийного завершения программы.

Правительство — наглядный пример паттерна «Одиночка». В государстве может существовать лишь одно официальное правительство. И любое обращение к нему попадает к одному определённому органу власти.

Паттерн гарантирует лишь один проинициализированный объект класса. Поэтому при использовании паттерна исключается ситуация, при которой создаётся множество независимых друг от друга объектов класса.

-------------------------------------------------------

Подключение к базе данных в Node.js. Если соединение с базой данных уже установлено, то созданный на основе паттерна «Одиночка» объект (назовём его объект-одиночка), будет возвращать готовое соединение вместо того, чтобы подключаться заново. Множественные запросы к базе данных, в том числе и запросы на подключение, могут спровоцировать деактивацию базы и нарушение работы приложения.

Объект-дебаггер для отладки React-приложения. Объект хранит в себе данные о состоянии приложения при вызове определённых методов. Например, список асинхронных запросов, которые вызываются при переходе пользователя на страницу новостного блога. Для вывода новостей происходит запрос к аналитическим сервисам, которые формируют отчёты о действиях пользователя на странице. Объект-одиночка будет содержать каждый запрос и предоставлять разработчику полную и достоверную информацию обо всех шагах работы приложения.

Объект-конфигурация приложения. Объект хранит в себе данные о конфигурации приложения. Например, адреса для запросов к серверу присутствуют в программе в единственном экземпляре, поэтому во всей программе конфигурация будет единой. Если в разных модулях программы объект конфигурации будет различаться, в приложении может выводиться некорректная информация. В конфигурации, к примеру, может содержаться код текущего года, отвечающий за вывод информационных блоков.