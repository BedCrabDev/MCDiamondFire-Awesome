import { faDiscord, faGithub, faNpm, faPython, faRust } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCodeCompare, faGlobe, faLink, faQuestion, faSkull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMd, niceUrl } from "./util";

interface Props {
  data: [string, string]
}

export default function(props: Props) {
  const [label, value] = props.data;
  let icon;
  switch(label.toLowerCase()) {
    case "github":
      icon = <FontAwesomeIcon icon={faGithub} />
      break
    case "discord":
      icon = <FontAwesomeIcon icon={faDiscord} />
      break
    case "website":
      icon = <FontAwesomeIcon icon={faGlobe} />
      break
    case "version":
      icon = <FontAwesomeIcon icon={faCodeCompare} />
      break
    case "link":
      icon = <FontAwesomeIcon icon={faLink} />
      break
    case "docs":
      icon = <FontAwesomeIcon icon={faBook} />
      break
    case "npm":
      icon = <FontAwesomeIcon icon={faNpm} />
      break
    case "crates.io":
      icon = <FontAwesomeIcon icon={faRust} />
      break
    case "pypi":
      icon = <FontAwesomeIcon icon={faPython} />
      break
    case "deprecated":
      icon = <FontAwesomeIcon icon={faSkull} />
      break
    default:
      icon = <FontAwesomeIcon icon={faQuestion} />
  }

  const isLink = value.startsWith("http")

  if(!isMd()) {
    if (isLink) {
      return <p><a href={value} target="_blank">{icon} {label}</a></p>
    } else {
      return <p>{icon} {label}: {value}</p>
    }
  } else {
    if (isLink) {
      return <p>{icon} {label}: <a href={value} target="_blank">{niceUrl(value)}</a></p>
    } else {
      return <p>{icon} {label}: {value}</p>;
    }
  }
}
