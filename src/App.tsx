import { useState } from 'react'

const CLP = 922
const ARS_BLUE = 1220

function App() {
  const [clpValue, setClpValue] = useState('')

  const handleClpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '') // Remove non-numeric chars
    setClpValue(value)
  }

  const formatDisplayValue = (value: string) => {
    if (!value) return ''
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  const clpNumber = parseFloat(clpValue) || 0
  const usdValue = clpNumber / CLP
  const arsValue = usdValue * ARS_BLUE

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Conversor de divisas
        </h1>

        <div className="mb-8">
            <label htmlFor="clp" className="block text-sm font-medium text-gray-700 mb-2">
              CLP (Peso Chileno)
            </label>
            <input
              id="clp"
              type="text"
              value={formatDisplayValue(clpValue)}
              onChange={handleClpChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0"
            />
          </div>
        
        <div className="space-y-4">
          <div className="p-3 bg-gray-50 rounded-md">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              USD
            </span>
            <span className="text-lg font-semibold text-gray-900">
              ${usdValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </span>
          </div>
          
          <div className="p-3 bg-gray-50 rounded-md">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              ARS (Dólar Blue)
            </span>
            <span className="text-lg font-semibold text-gray-900">
              ${arsValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
