// Поведенческий шаблон проектирования, предназначенный для определения семейства алгоритмов, инкапсуляции каждого из них и обеспечения их взаимозаменяемости.
// Это позволяет выбирать алгоритм путём определения соответствующего класса.
// Шаблон Strategy позволяет менять выбранный алгоритм независимо от объектов-клиентов, которые его используют.

const bubbleSort = dataset => {
    console.log('Sorting with bubble sort')
    // ...
    // ...
    return dataset
}

const quickSort = dataset => {
    console.log('Sorting with quick sort')
    // ...
    // ...
    return dataset
}


const sorter = dataset => {
    if(dataset.length > 5){
        return quickSort
    } else {
        return bubbleSort
    }
}


const longDataSet = [1, 5, 4, 3, 2, 8]
const shortDataSet = [1, 5, 4]

const sorter1 = sorter(longDataSet)
const sorter2 = sorter(shortDataSet)

sorter1(longDataSet) // Sorting with quick sort
sorter2(shortDataSet) // Sorting with bubble sort