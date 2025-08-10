// src/components/ProductSalesTable.jsx
const ProductSalesTable = () => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2">Product</th>
          <th className="border p-2">Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">Product A</td>
          <td className="border p-2">120</td>
        </tr>
        <tr>
          <td className="border p-2">Product B</td>
          <td className="border p-2">90</td>
        </tr>
        <tr>
          <td className="border p-2">Product C</td>
          <td className="border p-2">150</td>
        </tr>
        <tr>
          <td className="border p-2">Product D</td>
          <td className="border p-2">80</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ProductSalesTable