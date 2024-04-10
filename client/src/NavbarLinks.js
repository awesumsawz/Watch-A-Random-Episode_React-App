import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    url: "/",
    externalLink: false,
    additionalClass: ''
  },
  {
    title: "Add A Show",
    url: "/AddAShow",
    externalLink: false,
    additionalClass: ''
  },
  {
    title: "Watch A Show",
    url: "/WatchAShow",
    externalLink: false,
    additionalClass: ''
  },
  {
    title: "Portfolio",
    url: "https://jason-biggs.com",
    externalLink: true,
    additionalClass: 'external'
  }
];

function LinksComponent() {
  // Adjusted function to include the additionalClass in className
  const generateLinks = () => {
    return links.map((link, index) => (
      link.externalLink ? (
        <a 
          key={index}
          href={link.url} // Changed to `href` for external links
          className={link.additionalClass} // Use additionalClass as className
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.title}
        </a>
      ) : (
        <Link 
          key={index}
          to={link.url}
          className={link.additionalClass} // Use additionalClass as className
        >
          {link.title}
        </Link>
      )
    ));
  };

  return (
    <div>
      {generateLinks()}
    </div>
  );
}

export default LinksComponent;