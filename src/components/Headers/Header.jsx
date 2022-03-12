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
    <Header className="py-2 d-flex align-items-center">
      <nav>
        <div className="col-3 fs-4 fw-bold">{props.headerName}</div>
        <div className="col-8 links fw-bold">{navItems}</div>
        <div className="col-1"></div>
      </nav>
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
