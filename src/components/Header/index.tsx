import Navbar from "./Navbar";
import ProfileDetails from "./ProfileDetails";
import Socials from "./Socials";

const Header: React.FC = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <ProfileDetails />
        <Navbar />
      </div>
      <Socials />
    </header>
  );
};

export default Header;
