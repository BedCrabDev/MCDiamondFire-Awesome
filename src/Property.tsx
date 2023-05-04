import { faDiscord, faGithub, faNpm, faPython, faRust } from "@fortawesome/free-brands-svg-icons";
import { faBook, faGlobe, faLink, faListNumeric, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMd, niceUrl } from "./util";

interface Props {
    data: [string, string]
    refresh: any
}

export default function(props: Props) {
    const [label, value] = props.data;

    let icon = <FontAwesomeIcon icon={faQuestion} />
    const l = label.toLowerCase()

    if(l == "github") {
        icon = <FontAwesomeIcon icon={faGithub} />
    }

    if(l == "discord") {
        icon = <FontAwesomeIcon icon={faDiscord} />
    }

    if(l == "website") {
        icon = <FontAwesomeIcon icon={faGlobe} />
    }

    if(l == "version") {
        icon = <FontAwesomeIcon icon={faListNumeric} />
    }

    if(l == "link") {
        icon = <FontAwesomeIcon icon={faLink} />
    }

    if(l == "docs") {
        icon = <FontAwesomeIcon icon={faBook} />
    }

    if(l == "npm") {
        icon = <FontAwesomeIcon icon={faNpm} />
    }

    if(l == "crates.io") {
        icon = <FontAwesomeIcon icon={faRust} />
    }

    if(l == "pypi") {
        icon = <FontAwesomeIcon icon={faPython} />
    }

    const isLink = value.startsWith("http")

    if(!isMd()) {
        return <p>{isLink ? <a href={value} target="_blank" className="text-green-400 hover:text-green-500 transition">{icon} {label}</a> : <>{icon} {label}: {value}</>}</p>
    }

    return <p>{icon} {label}: {isLink ? <a href={value} target="_blank" className="text-green-400 hover:text-green-500 transition">{niceUrl(value)}</a> : value}</p>;
}