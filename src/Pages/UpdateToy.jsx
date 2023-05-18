import React from "react";

function UpdateToy() {
  const handleUpdate = (e)=>{
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const qty = form.qty.value;
    const description = form.description.value;

    const UpdatedToy = {price,qty,description}
    console.log(UpdatedToy)
  }
  return <div>
    <div className="w-2/3 bg-slate-100 mx-auto p-10 rounded-lg my-6 ">
      <h1 className="text-3xl font-bold mb-6">Update Toy_Name</h1>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      
      <input type="number" placeholder="Price" name="price" className="input input-bordered input-secondary w-full" />
      <input type="number" placeholder="Quantity" name="qty" className="input input-bordered input-secondary w-full" />
     
      </div>
      <textarea className="textarea textarea-secondary w-full my-4" name="description" placeholder="Description"></textarea>
      <input type="submit" className="btn btn-secondary w-full" value="Update Toy"/>
   
      </form>
    </div>
  </div>;
}

export default UpdateToy;
