// src/components/InvoiceSection.jsx
const InvoiceSection = ({ items }) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
      <ul className="list-disc pl-5">
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </section>
  )
}

export default InvoiceSection