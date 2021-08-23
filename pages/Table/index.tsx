import classes from "./index.module.css";
import TableDate from "../../models/tableDate";
import StudentModel from "../../models/student";
import Student from "../components/Student/Student";

const Table: React.FC<{ data: TableDate; students: StudentModel[] }> = (
  props
) => {
  const data = props.data;

  return (
    <table className={classes.table_main}>
      <thead>
        <tr>
          <th colSpan={11}>PERFORMANCE STUDIO</th>
        </tr>
        <tr>
          <th>{`${data.year} ${data.month}`}</th>
          <th colSpan={8}>Lessons</th>
          <th>Additional Lessons</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((student) => {
          return <Student key={student.name} student={student} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
