import React from 'react'
import ReactDOM from 'react-dom';
import '../assets/styles/_all.sass'

function App() {
  const handleAction = () => {
    alert('Panget ako')
  }

  return (
    <div className="w-56 h-56">
      <p className="text-red-500 text-center mt-5 text-lg"> Challeg industries</p>
      <div className="flex justify-center mt-5">
        <button onClick={handleAction} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)