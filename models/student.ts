class Student {
  name: string;
  family?: string;
  lessons: number[];
  additionalLessons: number;
  sumOfLessons: number;
  phone?: number;
  age?: number;
  email?: string;

  constructor(
    name: string,
    lessons: number[],
    additionalLessons: number,
    sumOfLessons: number
  ) {
    this.name = name;
    this.lessons = lessons;
    this.additionalLessons = additionalLessons;
    this.sumOfLessons = sumOfLessons;
  }

  //   constructor(
  //     name: string,
  //     family: string,
  //     phone: number,
  //     age: number,
  //     email: string
  //   ) {
  //     this.name = name;
  //     this.family = family;
  //     this.phone = phone;
  //     this.age = age;
  //     this.email = email;
  //   }
}

export default Student;
