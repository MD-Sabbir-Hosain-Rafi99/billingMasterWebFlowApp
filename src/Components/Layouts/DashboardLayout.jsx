// src/components/layouts/DashboardLayout.jsx
import { useNavigate } from 'react-router-dom'
import Flex from '../Flex.jsx'
import Heading from '../Heading.jsx'

const DashboardLayout = ({ title, children }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
  }
  return (
    <div className="p-4">
      <Flex className="justify-between items-center mb-4">
        <Heading text={title} />
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          LogOut
        </button>
      </Flex>
      {children}
    </div>
  )
}

export default DashboardLayout