const UpdateDataModal = ({item}) => {
    const {
        _id,
        scholarship_name,
        university_name,
        subject,
        application_fees,
        tuition_fees,
      } = item;
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <h3 className="font-bold text-lg">{scholarship_name}</h3>
      <p className="py-4">Click the button below to close</p>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDataModal;
