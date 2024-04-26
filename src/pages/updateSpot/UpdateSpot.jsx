import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UpdateSpot = () => {
  const spot = useLoaderData();
  const newSpot = { ...spot };
  delete newSpot._id;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      ...newSpot,
    },
  });

  const handleFormSubmit = handleSubmit((data) => {
    fetch(`http://localhost:5000/spot/${spot._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Update successfully!",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  });
  return (
    <div className="m-4 p-6 lg:mx-0 rounded-lg lg:pb-10 border bg-gradient-to-br from-green-50 via-pink-50 to-sky-50">
      <h2 className="text-2xl lg:mt-8 lg:mb-12  lg:text-5xl font-semibold text-center mb-6">
        Add Tourists Spot
      </h2>
      <div className="w-full lg:px-12 mx-auto">
        <form className="" onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            <label className="input input-bordered flex items-center gap-2">
              Image
              <input
                type="url"
                className="grow"
                placeholder="Enter Image Url"
                required
                {...register("image")}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Title
              <input
                type="text"
                className="grow"
                placeholder="Enter tourists spot name"
                {...register("title")}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Country
              <select
                required
                {...register("country")}
                className="grow border-0 outline-0 bg-transparent"
              >
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Location
              <input
                type="text"
                className="grow"
                placeholder="Enter spot location"
                {...register("location")}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Cost
              <input
                type="number"
                className="grow"
                placeholder="Enter average cost"
                {...register("cost")}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Seasonality
              <select
                required
                {...register("season")}
                className="grow border-0 outline-0 bg-transparent"
              >
                <option value="Summer">Summer</option>
                <option value="Monsoon">Monsoon</option>
                <option value="Autumn">Autumn</option>
                <option value="Pre-Winter">Pre-Winter</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Time
              <input
                type="number"
                className="grow"
                placeholder="Enter travel time in days"
                {...register("time")}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Visitors
              <input
                type="number"
                className="grow"
                placeholder="Enter total visitors per year"
                {...register("visitors")}
                required
              />
            </label>
            <label className="input bg-gray-50 input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow cursor-not-allowed"
                placeholder="Enter tourists spot name"
                {...register("email")}
                disabled
              />
            </label>
            <label className="input bg-gray-50 input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow cursor-not-allowed"
                placeholder="Enter user name"
                {...register("name")}
                disabled
              />
            </label>
          </div>
          <textarea
            required
            {...register("description")}
            className="textarea textarea-bordered w-full h-40 my-4"
            placeholder="Enter short description"
          ></textarea>
          <button className="btn btn-primary w-full" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot;
