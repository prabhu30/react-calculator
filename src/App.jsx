import { Calculator } from "./components/index"

function App() {
  return (
    <div className="w-full h-[100vh] text-white bg-slate-800">
      <h1 className="text-center text-2xl pt-8 uppercase">Calculator</h1>
      <Calculator />
    </div>
  )
}

export default App