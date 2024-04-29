import Swal from "sweetalert2";
import Navbar from "./Navbar";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    // send data to the server
    fetch("https://espresso-emporium-server-one.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "user added",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div className=" bg-[#f4f3f0] p-24">
      <Navbar></Navbar>
      <h2 className=" text-3xl font-extrabold">add coffee</h2>
      <form onSubmit={handleAddCoffee} className="card-body">
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

export default AddCoffee;
<h2>this is add coffee</h2>;
