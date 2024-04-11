import { NavLink } from "react-router-dom";

function LinksComponent({ navlinks }) {
  const generateLinks = () => {
    return navlinks.map((link, index) => (
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
        <NavLink 
          key={index}
          to={link.url}
          className={link.additionalClass} // Use additionalClass as className
        >
          {link.title}
        </NavLink>
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