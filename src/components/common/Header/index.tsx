import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Cart } from '@assets/cart.svg';
import { ReactComponent as MenuToggle } from '@assets/hamburger.svg';
import { ReactComponent as Profile } from '@assets/profile.svg';
import { ReactComponent as Logo } from '@assets/wct_logo.svg';
import NavMenu from '@components/common/NavMenu';

const Header = () => {
  const [isNavOpened, setNavOpenState] = useState<boolean>(true);
  const handleClickHamburgerBtn = () => {
    setNavOpenState(true);
  };

  return (
    <div className="flex sticky top-0 justify-between items-center w-full h-16 px-4 bg-white">
      <div className="w-16">
        <button className="block" onClick={handleClickHamburgerBtn}>
          <MenuToggle className="fill-black" />
        </button>
      </div>
      <div className="">
        <h1 className="w-[68px]">
          <Link to="/">
            <Logo className="w-[68px]" />
          </Link>
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
      {isNavOpened && <NavMenu setNavOpenState={setNavOpenState} />}
    </div>
  );
};

export default Header;
