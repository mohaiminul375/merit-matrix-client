import React from "react";
import UpdateReviewModal from "./UpdateReviewModal";

const MyReviewTable = ({ idx, review }) => {
  console.log(review);
  const {_id,scholarship_name,university_name,review_point,review_comment,post_date}=review;
  return (
    <tr>
      <th>{idx+1}</th>
      <td>{scholarship_name}</td>
      <td>{university_name}</td>
      <td>{review_point}</td>
      <td>{review_comment}</td>
      <td>{new Date(post_date).toLocaleDateString()}</td>
      <td className="flex flex-col items-center gap-2">
        <button
        onClick={()=>document.getElementById(`edit_${_id}`).showModal()}
        className="bg-[#247CFF] text-white rounded-md px-2">Edit</button>
        <button className="bg-red-600 text-white rounded-md px-2">Delete</button>
      </td>
      <dialog id={`edit_${_id}`} className="modal">
        <UpdateReviewModal id={_id} review_point={review_point} review_comment={review_comment}></UpdateReviewModal>
      </dialog>
    </tr>
  );
};

export default MyReviewTable;
