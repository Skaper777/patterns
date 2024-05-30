«Цепочка обязанностей» позволяет исключить жёсткую привязку между отправителем запроса и его получателем. Обработчики запроса создают цепочку, по которой перемещается запрос.

Паттерн используют для отправки объектам запросов, когда неизвестно, выполнение какой операции запрошено и кто является получателем.

Паттерн позволяет передавать запросы поочерёдно по цепочке, от одного обработчика к другому. Каждый обработчик самостоятельно принимает решение, нужно ли ему самому обработать запрос или передать следующему.

Паттерн помогает программе, когда обработчик не может справиться с поставленной задачей — передать запрос следующему обработчику вместо возврата неудачно отработанного запроса. Таким образом, повышается стабильность работы системы в целом.