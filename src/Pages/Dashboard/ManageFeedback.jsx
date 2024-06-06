import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageFeedback = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async ({ id, feedback }) => {
      const { data } = await axiosSecure.patch(`/send-feedback/${id}`, { feedback });
    //   console.log('res inside tan',data)
      return data;
    },
    onSuccess: (data) => {
      if (data.modifiedCount > 0) {
        Swal.fire("send feedback successfully");
      }
    //   TODO:add muted func
    
    },
  });
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    console.log("feedback", feedback);
    mutateAsync({ id, feedback });
  };
  return (
    <div className="modal-box md:max-w-2xl">
      <div className="flex justify-end">
        <form method="dialog">
          <button className="btn">Close</button>
        </form>
      </div>
      <div className="mt-5">
        <h2 className="font-bold text-3xl text-center text-[#247CFF]">
          Submit feedback for this application
        </h2>
      </div>
      <div className="mt-4">
        <form
          onSubmit={handleSubmitFeedback}
          className="flex flex-col items-center justify-center"
        >
          <div>
            <textarea
              name="feedback"
              placeholder="submit a feed back"
              className="input input-bordered"
              rows={10}
              cols={30}
              id=""
            ></textarea>
          </div>
          <button className="text-center bg-[#247CFF] text-white px-2 py-1 text-base rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageFeedback;
