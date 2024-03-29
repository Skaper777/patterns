«Объектный пул» — это набор объектов, которые хранятся в состоянии полной готовности к использованию. Когда в коде нужен новый подобный объект, используется один из хранящихся в пуле. При этом новый объект, использующий динамическую память системы, не создаётся.

Паттерн «Пул» при его вызове создаёт объект. Дальше объект записывается в пул и используется повторно, при этом не тратится ресурс на создание нового. Пользователь выполняет операции с готовым объектом. Если пользователь завершает работу с объектом, тот возвращается в пул, а не уничтожается.

Паттерн помогает снизить расход ресурсов приложения. В результате программа работает без зависания и некорректных завершений приложения.