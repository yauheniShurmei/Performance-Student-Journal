import classes from "./Student.module.css";
import StudentModel from "../../../models/student";

const Student: React.FC<{
  student: StudentModel;
}> = (props) => {
  // for (let i = 0; i < 8; i++) {
  //   if (props.student.lessons) {
  //       lessons.push(props.student.lessons[i]);
  //   }
  // }

  return (
    <tr>
      <td>{props.student.name}</td>
      {props.student.lessons.map((lesson) => {
        return <td key={lesson}>{lesson}</td>;
      })}
      <td>{props.student.additionalLessons}</td>
      <td>{props.student.sumOfLessons}</td>
    </tr>
  );
};

export default Student;
