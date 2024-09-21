import headerImage from "../assets/img/header.png";

const Footer = () => {
  return (
    <footer className=" py-3 text-center">
      <div className=" p-0">
        <img src={headerImage} alt="Header Image" className="w-full" />
      </div>
      <p className="font-roboto mb-0">
        &copy; 2024 | Putri Nabella [1959095840-46]
      </p>
    </footer>
  );
};

export default Footer;
