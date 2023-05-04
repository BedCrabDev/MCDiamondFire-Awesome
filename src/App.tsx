import { useEffect, useState } from "react"
import { Data } from "./data";
import Category from "./Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    (async()=>{
      const response = await fetch("data.json")
      setData(await response.json())
    })();
  }, []);


  return (
    <div className="md:m-10">
      <div className="w-full md:w-fit p-10 bg-cover relative">
        <img className="md:rounded-lg absolute top-0 left-0 z-[-1] h-full w-full object-cover opacity-75" src="https://raw.githubusercontent.com/SquaredStudios-MC/DiamondFireWithShaders/main/images/node7_2.png" />
        <div className="absolute top-3 right-3 flex gap-3 text-3xl">
          <a href="https://github.com/BedCrabDev/MCDiamondFire-Awesome" className="ignore opacity-90 hover:opacity-100 transition"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://discord.gg/NqU6XnyVPA" className="ignore opacity-90 hover:opacity-100 transition"><FontAwesomeIcon icon={faDiscord} /></a>
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            DiamondFire-Awesome
          </h1>
          <p className="text-2xl">Awesome list for MCDiamondFire: External tools, code templates, and more</p>
        </div>
      </div>
      <div className="m-10 md:m-0 mt-5">
        {data == null ? <p></p> : <div className="animate-fade-in">
            <h1 className="text-4xl font-bold mt-10">Table of contents</h1>
            <ul>
              {data.filter(category => !category.hidden).map(category => <li key={category.name}><a href={"#" + category.name}><FontAwesomeIcon icon={faCircle} className="text-[8px] translate-y-[-2.5px] mr-2" />{category.name} ({category.items.length})</a></li>)}
            </ul>
            {data.filter(category => !category.hidden).map(category => <Category data={category} key={category.name} />)}
          </div>}
      </div>
    </div>
  )
}

export default App
