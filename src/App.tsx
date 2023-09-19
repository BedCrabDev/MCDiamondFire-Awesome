import { useEffect, useState } from "react"
import { Data } from "./data";
import Property from "./Property";
import TitleInner from "./TitleInner";
import { objectMap } from "./util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    (async()=>{
      // Gather the data from public/data.json
      const response = await fetch("data.json")
      const data: Data = await response.json();

      // Remove hidden categories
      setData(data.filter(category => !category.hidden));
    })();
  }, []);

  if(data != null && location.href.includes("#")) {
    // Naviage to the previous section on page refresh
    const a = document.createElement("a")
    a.href = "#" + location.href.split("#")[1]
    a.click()
  }

  let tableOfContents: JSX.Element[] | null = null;
  let content: JSX.Element[] | null = null;

  if (data != null) {
    // Table of contents section
    tableOfContents = data.map(category => {
      // Format:
      // ⬤ Category Name (Project Count)
      return <li key={category.name}>
        <a href={`#${category.name}`}>
          <FontAwesomeIcon icon={faCircle} className="text-[8px] translate-y-[-2.5px] mr-2 text-white" />
          {category.name} ({category.items.length})
        </a>
      </li>
    });
    // Items
    content = data.map(category => {
      return <>
        <h1 className="text-3xl pt-10 font-extrabold"><TitleInner text={category.name} /></h1>
        <p className="text-lg">{category.description}</p>
        {category.items.map(item => <>
          <h1 className="text-xl pt-2 font-bold"><TitleInner text={item.name} small />{item.outdated ? <span className="bg-gradient-to-r from-red-700 to-red-900 rounded-sm ml-2 p-1 text-sm">OUTDATED</span> : <></>}</h1>
          <p className="">{item.description}</p>
          {objectMap(item.properties, (k, v) => <Property data={[k, v]} key={k} />)}
        </>)}
      </>
    });
  }

  // Render HTML
  return (
    <div className="md:m-10 cursor-default select-none">
      {/* Header */}
      <div className="w-full md:w-fit p-10 bg-cover relative">
        <img className="md:rounded-lg absolute top-0 left-0 z-[-1] h-full w-full object-cover opacity-75" src="https://raw.githubusercontent.com/AstroSquared/DiamondFireWithShaders/main/images/node7_2.png" />
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
      {/* Content */}
      <div className="m-10 md:m-0 mt-5">
        {data == null ? <p></p> :
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold mt-10">Table of contents</h1>
          <ul>{tableOfContents}</ul>
          {content}
        </div>
        }
      </div>
    </div>
  )
}

export default App
