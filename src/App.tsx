import { useEffect, useState } from "react"
import { Data } from "./data";
import Category from "./Category";

function App() {

  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    (async()=>{
      const response = await fetch("/data.json")
      setData(await response.json())
    })();
  }, []);

  return (
    <div className="md:m-10">
      <div className="w-full md:w-fit p-10 bg-cover relative">
        <img className="md:rounded-lg absolute top-0 left-0 z-[-1] h-full w-full object-cover opacity-75" src="https://raw.githubusercontent.com/SquaredStudios-MC/DiamondFireWithShaders/main/images/node7_2.png" />
        <div>
          <h1 className="text-5xl font-bold">
            DiamondFire-Awesome
          </h1>
          <p className="text-2xl">Awesome list for MCDiamondFire: External tools, code templates, and more</p>
        </div>
      </div>
      <div className="m-10 md:m-0 mt-5">
        {data == null ? <p></p> : <div className="animate-fade-in">{data.filter(category => !category.hidden).map(category => <Category data={category} key={category.name} />)}</div>}
      </div>
    </div>
  )
}

export default App
