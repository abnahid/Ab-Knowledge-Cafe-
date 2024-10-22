import profile from "../../assets/images/profile.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 mx-4 border-b-2">
      <h3 className="font-exo2 text-4xl font-bold leading-10 text-gray-900">
        Knowledge Cafe
      </h3>
      <img src={profile} alt="" />
    </div>
  );
};

export default Navbar;
