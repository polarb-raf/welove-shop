import { ReactComponent as Cart } from '@assets/cart.svg';
import { ReactComponent as MenuToggle } from '@assets/hamburger.svg';
import logo from '@assets/logo.png';
import { ReactComponent as Profile } from '@assets/profile.svg';

const Nav = () => {
  return (
    <div className="flex sticky top-0 justify-between items-center w-full h-16 px-4 bg-white">
      <div className="w-16">
        <button className="block">
          <MenuToggle className="fill-black" />
        </button>
      </div>
      <div className="">
        <h1 className="w-[68px]">
          <img src={logo} alt="Welove" />
        </h1>
      </div>
      <div className="flex">
        <button className="block">
          <Cart className="w-[24px] fill-[#2F2F2F]" />
        </button>
        <button className="block ml-4">
          <Profile className="w-[24px] fill-[#2F2F2F]" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
