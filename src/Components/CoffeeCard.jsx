import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleDelete = (id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://espresso-emporium-server-4xbrbqdyz-naiem-hasans-projects.vercel.app//coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 border p-4">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className=" flex justify-between items-center w-full ml-4">
          <div className=" grid grid-cols-1 gap-8">
            <p>{name}</p>
            <p>{chef}</p>
            <p>{taste}</p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <button className="btn">view</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn">edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
