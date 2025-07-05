import { useState } from 'react'

const CLP = 922
const ARS_CREDIT = 1638
const ARS_BLUE = 1220

function App() {
  const [usd, setUsd] = useState('')
  const [clp, setClp] = useState('')
  const [arsCredit, setArsCredit] = useState('')
  const [arsBlue, setArsBlue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id
    const value = Number(e.target.value)

    if (isNaN(value)) return;

    switch (id) {
      case 'usd':
        setUsd(String(value))
        
        setClp((value * CLP).toFixed(2))
        setArsCredit((value * ARS_CREDIT).toFixed(2))
        setArsBlue((value * ARS_BLUE).toFixed(2))
        break
      case 'clp': {
        setClp(String(value))

        const usdValue = value / CLP
        setUsd(usdValue.toFixed(2))
        setArsCredit((usdValue * ARS_CREDIT).toFixed(2))
        setArsBlue((usdValue * ARS_BLUE).toFixed(2))
      }
      break
      case 'arsCredit': {
        setArsCredit(String(value))

        const usdValue = value / ARS_CREDIT
        setUsd(usdValue.toFixed(2))
        setClp((usdValue * CLP).toFixed(2))
        setArsBlue((usdValue * ARS_BLUE).toFixed(2))
      }
      break
      case 'arsBlue': {
        setArsBlue(String(value))

        const usdValue = value / ARS_BLUE
        setUsd(usdValue.toFixed(2))
        setClp((usdValue * CLP).toFixed(2))
        setArsCredit((usdValue * ARS_CREDIT).toFixed(2))
      }
      break
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Conversor de divisas
        </h1>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="usd" className="block text-sm font-medium text-gray-700 mb-2">
              USD
            </label>
            <input
              id="usd"
              type="number"
              value={usd}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0.00"
              step="0.01"
            />
          </div>

          <div>
            <label htmlFor="clp" className="block text-sm font-medium text-gray-700 mb-2">
              CLP (Peso Chileno)
            </label>
            <input
              id="clp"
              type="number"
              value={clp}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0.00"
              step="0.01"
            />
          </div>

          <div>
            <label htmlFor="arsCredit" className="block text-sm font-medium text-gray-700 mb-2">
              ARS (Dólar Tarjeta)
            </label>
            <input
              id="arsCredit"
              type="number"
              value={arsCredit}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0.00"
              step="0.01"
            />
          </div>

          <div>
            <label htmlFor="arsBancoNacion" className="block text-sm font-medium text-gray-700 mb-2">
              ARS (Dólar Blue)
            </label>
            <input
              id="arsBancoNacion"
              type="number"
              value={arsBlue}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0.00"
              step="0.01"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
