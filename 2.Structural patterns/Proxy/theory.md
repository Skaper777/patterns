Паттерн «Заместитель» (его ещё называют «Прокси») представляет собой объект, контролирующий доступы другого объекта — происходит перехват всех вызовов.

В первую очередь «Прокси» необходим, когда у разработчика нет доступа к модификации сторонней программы, и в это же время для её работы требуются дополнительные методы. Ещё паттерн пригодится, когда нужно дополнить ответ от сторонних сервисов для корректной работы программы.