import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`https://espresso-emporium-server-one.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "coffee updated",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className=" bg-[#f4f3f0] p-24">
      <h2 className=" text-3xl font-extrabold">update coffee</h2>
      <form onSubmit={handleUpdateCoffee} className="card-body">
        <div className=" flex gap-4">
          {/* row 1 */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              name="name"
              defaultValue={name}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              placeholder="chef"
              className="input input-bordered"
              name="chef"
              defaultValue={chef}
            />
          </div>
        </div>
        <div className=" flex gap-4">
          {/* row 2 */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="supplier"
              className="input input-bordered"
              name="supplier"
              defaultValue={supplier}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              placeholder="taste"
              className="input input-bordered"
              name="taste"
              defaultValue={taste}
            />
          </div>
        </div>
        <div className=" flex gap-4">
          {/* row 3 */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="category"
              className="input input-bordered"
              name="category"
              defaultValue={category}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="details"
              className="input input-bordered"
              name="details"
              defaultValue={details}
            />
          </div>
        </div>
        <div>
          {/* row 4 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="photo Url"
              className="input input-bordered"
              name="photo"
              defaultValue={photo}
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-neutral">Add Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
