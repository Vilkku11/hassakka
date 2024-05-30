const Footer = () => {
  const Links = [
    { name: "placeholder1", link: "/" },
    { name: "Other interesting portfolios", link: "/" },
  ];

  return (
    <div className="flex flex-col w-full sticky top-[100vh]">
      <ul className="flex flex-col">
        {Links.map((link) => (
          <li key={link.name} className="text-xl my-1">
            <a href={link.link} className="text-white">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
