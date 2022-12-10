import './common/stringExpansion';
import './common/arrayExpansion';
import Inputs from './common/inputs';

const inputs = new Inputs();
//Day 1
(function day1(): void {
  const input = inputs.get(1);
  const arr: Array<string> = input.splitToArray('\n');
  const arr2: Array<Array<string>> = arr.toSubArrays('');
  let sums: Array<number> = new Array<number>();
  let topThree: number = 0;

  arr2.forEach((sub) => {
    sums.push(sub.toIntArray().sum());
  });
  for (let i = 0; i < 3; i++) {
    const max = Math.max(...sums);
    topThree += max;
    sums = sums.filter((el) => el !== max);
  }

  console.log(`Day 1/2: ${topThree}\n`);
})();

//Day 2
(function day2(): void {
  const input = inputs.get(2);
  const scoresMap = new Map<string, number>([
    ['X', 1],
    ['Y', 2],
    ['Z', 3],
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['W', 6],
    ['D', 3],
    ['L', 0],
  ]);

  function part1() {
    const signMap = new Map<string, string>([
      ['A', 'X'],
      ['B', 'Y'],
      ['C', 'Z'],
    ]);

    let score: number = 0;
    const arr: Array<string> = input.splitToArray('\n');
    let mySigns: Array<string> = new Array<string>();
    let theirSigns: Array<string> = new Array<string>();

    arr.forEach((el) => {
      const arr2: Array<string> = el.splitToArray(' ');
      theirSigns.push(signMap.get(arr2[0])!);
      mySigns.push(arr2[1]);
    });

    mySigns.forEach((mySign, index) => {
      if (mySign === theirSigns[index]) {
        score += scoresMap.get(mySign)! + scoresMap.get('D')!;
      } else {
        switch (mySign) {
          case 'Y':
            switch (theirSigns[index]) {
              case 'X':
                score += scoresMap.get('Y')! + scoresMap.get('W')!;
                break;
              case 'Z':
                score += scoresMap.get('Y')! + scoresMap.get('L')!;
                break;
            }
            break;
          case 'X':
            switch (theirSigns[index]) {
              case 'Y':
                score += scoresMap.get('X')! + scoresMap.get('L')!;
                break;
              case 'Z':
                score += scoresMap.get('X')! + scoresMap.get('W')!;
                break;
            }
            break;
          case 'Z':
            switch (theirSigns[index]) {
              case 'Y':
                score += scoresMap.get('Z')! + scoresMap.get('W')!;
                break;
              case 'X':
                score += scoresMap.get('Z')! + scoresMap.get('L')!;
                break;
            }
            break;
        }
      }
    });
    console.log(`Day 2/1: ${score}`);
  }

  function part2() {
    const signMap = new Map<string, string>([
      ['X', 'L'],
      ['Y', 'D'],
      ['Z', 'W'],
    ]);

    let score: number = 0;
    const arr: Array<string> = input.splitToArray('\n');
    let theirSigns: Array<string> = new Array<string>();
    let outcomes: Array<string> = new Array<string>();

    arr.forEach((el) => {
      const arr2: Array<string> = el.splitToArray(' ');
      outcomes.push(signMap.get(arr2[1])!);
      theirSigns.push(arr2[0]);
    });

    outcomes.forEach((outcome, index) => {
      switch (outcome) {
        case 'L':
          switch (theirSigns[index]) {
            case 'A':
              score += scoresMap.get('C')! + scoresMap.get('L')!;
              break;
            case 'B':
              score += scoresMap.get('A')! + scoresMap.get('L')!;
              break;
            default:
              score += scoresMap.get('B')! + scoresMap.get('L')!;
              break;
          }
          break;
        case 'D':
          switch (theirSigns[index]) {
            case 'A':
              score += scoresMap.get('A')! + scoresMap.get('D')!;
              break;
            case 'B':
              score += scoresMap.get('B')! + scoresMap.get('D')!;
              break;
            default:
              score += scoresMap.get('C')! + scoresMap.get('D')!;
              break;
          }
          break;
        case 'W':
          switch (theirSigns[index]) {
            case 'A':
              score += scoresMap.get('B')! + scoresMap.get('W')!;
              break;
            case 'B':
              score += scoresMap.get('C')! + scoresMap.get('W')!;
              break;
            default:
              score += scoresMap.get('A')! + scoresMap.get('W')!;
              break;
          }
          break;
      }
    });
    console.log(`Day 2/2: ${score}\n`);
  }

  part1();
  part2();
})();

(function day3(): void {
  const input: string = inputs.get(3);
  const priorityValues = new Map<string, number>([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26],
    ['A', 27],
    ['B', 28],
    ['C', 29],
    ['D', 30],
    ['E', 31],
    ['F', 32],
    ['G', 33],
    ['H', 34],
    ['I', 35],
    ['J', 36],
    ['K', 37],
    ['L', 38],
    ['M', 39],
    ['N', 40],
    ['O', 41],
    ['P', 42],
    ['Q', 43],
    ['R', 44],
    ['S', 45],
    ['T', 46],
    ['U', 47],
    ['V', 48],
    ['W', 49],
    ['X', 50],
    ['Y', 51],
    ['Z', 52],
  ]);
  let prioritySum: number = 0;
  const rucksacks: Array<string> = input.splitToArray('\n');
  let comp1: Array<string> = new Array<string>();
  let comp2: Array<string> = new Array<string>();
  let comp1Sets = new Array<Set<string>>();
  let comp2Sets = new Array<Set<string>>();

  rucksacks.forEach((rucksack) => {
    const arr: Array<string> = rucksack.halve();
    comp1.push(arr[0]);
    comp2.push(arr[1]);
    let set1 = new Set<string>();
    let set2 = new Set<string>();

    for (const char of [...arr[0]]) {
      set1.add(char);
    }
    comp1Sets.push(set1);

    for (const char of [...arr[1]]) {
      set2.add(char);
    }
    comp2Sets.push(set2);
  });

  function part1(): void {
    comp1Sets.forEach((items, index) => {
      items.forEach((item) => {
        if (comp2Sets[index].has(item)) {
          prioritySum += priorityValues.get(item)!;
        }
      });
    });
    console.log(`Day 3/1: ${prioritySum}`);
  }

  part1();
})();
