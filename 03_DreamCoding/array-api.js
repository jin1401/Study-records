// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',');
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); 
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(array); // 배열 자체도 변경시킨다! 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(0, 2); // splice 는 배열 자체를 수정하고 slice 는 원하는 값만 빼서 새로 만들 수 있다. 
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
} // map은 배열 안에 들어있는 모든 요소들을 우리가 전달해 준 이 콜백 함수를 호출하면서 콜백함수에서 가공되어진 리턴되어진 값들로 교체하는 것. 

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50 ); 
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.sscore, 0); // 총합
    console.log(result / students.length); // 평균
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map(student => student.score)
    .join();
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
    .sort((a, b )=> a - b)
    .join();
}
