const ReviewCard = ({ review }) => {
  console.log(review);
  const { university_name, subject, applicant_name,post_date,review_point,review_comment } = review;
  return (
    <div className="card w-80 bg-[#EEFAFC] shadow-xl">
      <div className="flex flex-col p-4">
        <div>
          <h2 className="text-xl font-bold text-[#1E62D5]">University Name: {university_name}</h2>
          <p className="text-sm font-bold text-[#1E62D5]">Subject: {subject}</p>
          <hr className="border-[#247CFF] my-3" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#1E62D5]">Reviewer Name: {applicant_name}</h2>
          <p className="text-sm font-bold text-[#1E62D5]">{new Date(post_date).toLocaleDateString()}</p>
          <p className="text-base text-[#1E62D5]">Rating Point: {review_point}</p>
          <p className="text-base text-[#1E62D5]">{review_comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
