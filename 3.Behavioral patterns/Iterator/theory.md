«Итератор» представляет собой объект, который может получить поочерёдный доступ ко всем дочерним объектам, не используя описания для них.

Паттерн используют, когда нужно реализовать общий подход для обработки нескольких массивов информации.

«Итератор» инкапсулирует внутри себя алгоритм обхода данных с единым интерфейсом для перечисления. Алгоритм перебора скрыт внутри «Итератора» и это позволяет объекту данных иметь много «Итераторов», которые реализуют разные алгоритмические подходы. Проще говоря, «Итератор» предоставляет метод next() в коде, который возвращает последующий элемент из массива.

Паттерн «Итератор» позволяет перебирать объекты с применением установленных правил.