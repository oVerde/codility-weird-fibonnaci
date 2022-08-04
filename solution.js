/**
 * Consider the 0, 1, 1, 2,3, 5, 8, 13, 12, 7, 10, 8, 9, ... sequence of numbers, the 0th element is 0 and the 1st is 1.
 * The successive elements are defined recursively. Each of them is the sum of the separate digits of the two previous elements.
 * Write a function that given integer N, return the Nth number in the sequence.
 * Given N = 2, the function should return 1
 * Given N = 6, the function should return 8
 * Given N = 10, the function should return 10
 * @param N
 */

function solution( N ) {
  // Generate codility's weird almost fibonnaci sequence
  let notFibonacci = ( N ) => {
    let sequence = [];
    for ( let i = 0; i <= N; i++ ) {
      sequence.length < 2
          ? sequence.push(0, 1)
          : sequence.push((
              parseInt(sequence[sequence.length - 2].toString().
                  split('').reduce( ( a, b ) => parseInt(a) + parseInt(b) )))
              + parseInt( sequence[sequence.length - 1].toString().
                  split('').reduce( ( a, b ) => parseInt(a) + parseInt(b))
          ) );
      //console.log(sequence); // for debugging purpose
    }
    return sequence;
  };
  console.log(`Given N = ${N}: position has ${notFibonacci(N)[N]}`);
}

solution(1000);
solution(90);
solution(60);
solution(40);
solution(30);
solution(20);
solution(10);
solution(8);
solution(6);
solution(2);
solution(1);
solution(0);
