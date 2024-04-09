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
      <a 
        key={index}
        href={link.url}
        className={link.additionalClass} // Use additionalClass as className
        target={link.externalLink ? "_blank" : undefined}
        rel={link.externalLink ? "noopener noreferrer" : undefined}
      >
        {link.title}
      </a>
    ));
  };

  return (
    <div>
      {generateLinks()}
    </div>
  );
}

export default LinksComponent;