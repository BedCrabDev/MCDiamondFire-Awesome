import Item from "./Item";
import TitleInner from "./TitleInner";
import { Category } from "./data";

interface Props {
    data: Category
}

export default function(props: Props) {
    const {data} = props;
    return <>
        <h1 className="text-3xl pt-10 font-extrabold"><TitleInner text={data.name} /></h1>
        <p className="text-lg">{data.description}</p>
        {data.items.map(item => <Item data={item} key={item.name} />)}
    </>
}