// função binarySearch recebe dois argumentos: 
//array, que é a lista ordenada em que a pesquisa será realizada
//target, que é o número que você deseja procurar.

function binarySearch(list, target) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (list[middle] === target) {
      return middle;
    } else if (list[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;

let result = binarySearch(list, target);

if (result === -1) {
  console.log("O número não foi encontrado na lista.");
} else {
  console.log("O número foi encontrado na posição " + result + " da lista.");
}
