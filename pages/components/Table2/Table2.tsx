import classes from "./Table2.module.css";

const Table2 = () => {
  return (
    <table className={classes.table_main}>
      <thead>
        <tr>
          <th colSpan={11}>PERFORMANCE STUDIO</th>
        </tr>
        <tr>
          <th>August 2021</th>
          <th colSpan={8}>Lessons</th>
          <th>Additional Lessons</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NAME OF STUDENT</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>2</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table2;
