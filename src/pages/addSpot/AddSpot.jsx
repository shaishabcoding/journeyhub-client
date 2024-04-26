import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/auth/AuthProvider";

const AddSpot = () => {
  const { user } = useContext(AuthContext);
  console.log(name);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.displayName,
      email: user?.email,
    },
  });

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data);
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
                <option value="bangladesh">Bangladesh</option>
                <option value="thailand">Thailand</option>
                <option value="indonesia">Indonesia</option>
                <option value="malaysia">Malaysia</option>
                <option value="vietnam">Vietnam</option>
                <option value="cambodia">Cambodia</option>
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
                <option value="summer">Summer</option>
                <option value="monsoon">Monsoon</option>
                <option value="autumn">Autumn</option>
                <option value="pre-winter">Pre-Winter</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
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
                className="grow"
                placeholder="Enter tourists spot name"
                {...register("email")}
                disabled
              />
            </label>
            <label className="input bg-gray-50 input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
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

export default AddSpot;
