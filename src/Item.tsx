import { useEffect, useState } from "react";
import Property from "./Property";
import { Item } from "./data";
import { objectMap } from "./util";

interface Props {
    data: Item
}

export default function(props: Props) {
    const {data} = props;

    const [size, setSize] = useState([0, 0])

    useEffect(() => {
        function kb() {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener("resize", kb);
        return () => {
          window.removeEventListener("resize", kb);
        };
      }, []);

    return <>
        <h1 className="text-xl pt-2 font-bold">{data.name}{data.deprecation ? <span className="bg-gradient-to-r from-red-700 to-red-900 rounded-sm ml-2 p-1 text-sm">OUTDATED</span> : <></>}</h1>
        <p className="">{data.description}</p>
        {objectMap(data.properties, (k, v) => <Property refresh={size} data={[k, v]} key={k} />)}
    </>
}
