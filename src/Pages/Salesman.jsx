// src/pages/Salesman.jsx
import DashboardLayout from '../components/layouts/DashboardLayout.jsx'
import Flex from '../components/Flex.jsx'
import StatCard from '../components/StatCard.jsx'
import ProductSalesTable from '../components/ProductSalesTable.jsx'
import StockList from '../components/StockList.jsx'
import AddProduct from '../components/AddProduct.jsx'
import InvoiceSection from '../components/InvoiceSection.jsx'

const Salesman = () => {
  const invoiceItems = [
    'Invoice History',
    "Today's Sales",
    'Weekly Sales',
    'Monthly Sales'
  ]

  return (
    <DashboardLayout title="Saler Dashboard">
      <Flex className="flex-wrap gap-4 mb-8">
        <StatCard title="Today's Sales" value="৳20,500" />
        <StatCard title="Weekly Sales" value="৳85,000" />
        <StatCard title="Monthly Sales" value="৳320,000" />
        <StatCard title="Total Stock Items" value="1,200" />
      </Flex>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Sales Analytics</h2>
        <Flex className="gap-4">
          <div className="flex-1">
            <h3 className="font-bold mb-2">Product Wise Sales (Bar Chart)</h3>
            <ProductSalesTable />
          </div>
          <div className="flex-1">
            <h3 className="font-bold mb-2">Current Stock</h3>
            <StockList />
          </div>
        </Flex>
      </section>
      <AddProduct buttonText="Add Product" />
      <InvoiceSection items={invoiceItems} />
    </DashboardLayout>
  )
}

export default Salesman