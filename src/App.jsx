function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white">
      <img src="/logo.png" alt="Logo" className="w-32 h-32 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Model 3 Studio</h1>
      <p className="text-lg text-center mb-6">
        Visualize, edite e teste seus modelos Three.js com facilidade.
      </p>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
        Start
      </button>
    </div>
  )
}

export default App
