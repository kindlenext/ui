import Header from "../components/Headers/Header";

const HeaderPage = () => {
  return (
    <div>
      <Header
        headerName={"Header 1"}
        items={[
          { title: "Home", url: "/" },
          { title: "About", url: "/about" },
          { title: "Contact", url: "/contact" },
          { title: "Login", url: "/login" },
        ]}
      />
    </div>
  );
};

export default HeaderPage;
