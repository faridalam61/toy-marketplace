import React from "react";

function AddToy() {
  const handleAddToy = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const category = form.category.value;
    const qty = form.qty.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;

    const newToy = {name,seller,category,subCategory,price,qty,image,description}
    console.log(newToy)
  }
  return <div>
    <div className="w-2/3 bg-slate-100 mx-auto p-10 rounded-lg my-6 ">
      <h1 className="text-3xl font-bold mb-6">Add A Toy</h1>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <input type="text" placeholder="Toy Name" name="name" className="input input-bordered input-secondary w-full" />
      <input type="text" placeholder="Seller" name="seller" className="input input-bordered input-secondary w-full" />
      <select className="select select-secondary w-full" name="category">
  <option disabled defaultValue="">Select Category</option>
  <option defaultValue="java">Java</option>
  <option defaultValue="go">Go</option>
  <option defaultValue="c">C</option>
</select>
      <select className="select select-secondary w-full" name="subCategory">
  <option disabled defaultValue="">Select Sub Category</option>
  <option defaultValue="java">Java</option>
  <option defaultValue="go">Go</option>
  <option defaultValue="c">C</option>
</select>
   
      <input type="number" placeholder="Price" name="price" className="input input-bordered input-secondary w-full" />
      <input type="number" placeholder="Quantity" name="qty" className="input input-bordered input-secondary w-full" />
      <input type="number" placeholder="Ratings" name="ratings" className="input input-bordered input-secondary w-full" />
      <input type="text" placeholder="Email" name="email" className="input input-bordered input-secondary w-full" hidden/>
      <input type="text" placeholder="Image URL" name="image" className="input input-bordered input-secondary w-full" />
      </div>
      <textarea className="textarea textarea-secondary w-full my-4" name="description" placeholder="Description"></textarea>
      <input type="submit" className="btn btn-secondary w-full" value="Add Toy"/>
   
      </form>
    </div>
  </div>;
}

export default AddToy;
