const Header = (props) => {
  const items = props.items;

  const navItems = [];

  for (let i = 0; i < items.length; i++) {
    navItems.push(
      <ul>
        <li>
          <a href={items(i).url}>{items[i].title}</a>
        </li>
      </ul>
    );
  }

  return (
    <Header>
      <nav className="links fw-bold">{navItems}></nav>
    </Header>
  );
};

export default Header;

// items=[
//     {title: "Home", url: "/" },
//     { title: "About", url: "/about" },
//     { title: "Contact", url: "/contact" },
//     { title: "Login", url: "/login" },
//     ]

// href={items[i].url}
// {items[i].title}
