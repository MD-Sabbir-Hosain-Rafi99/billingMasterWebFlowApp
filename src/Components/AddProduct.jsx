// src/components/AddProduct.jsx
const AddProduct = ({ buttonText }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Add Product to Stock</h2>
      <form className="flex flex-col gap-2 max-w-md">
        <input type="text" placeholder="Product Name" className="p-2 border rounded" />
        <input type="number" placeholder="Quantity" className="p-2 border rounded" />
        <button className="bg-blue-500 text-white p-2 rounded">{buttonText}</button>
      </form>
    </section>
  )
}

export default AddProduct