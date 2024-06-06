const MyApplicationTable = ({ idx, application }) => {
  const { university_name, subject, degree_name, service_charge ,status} = application;
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{university_name}</td>
      <td></td>
      <td>{subject}</td>
      <td>{degree_name}</td>
      <td></td>
      <td>{service_charge}</td>
      <td>{status}</td>
      <td></td>
      <td>Add review</td>
    </tr>
  );
};

export default MyApplicationTable;
