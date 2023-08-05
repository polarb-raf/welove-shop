import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Cart } from '@assets/cart.svg';
import { ReactComponent as MenuToggle } from '@assets/hamburger.svg';
import { ReactComponent as Profile } from '@assets/profile.svg';
import { ReactComponent as Logo } from '@assets/wct_logo.svg';

const Nav = () => {
  return (
    <div className="absolute left-0 top-0 w-full p-4 bg-[rgba(233,_233,_233,_0.95)] backdrop-blur-[2px]">
      <div>
        <button>closeBtn</button>
      </div>
      <div>
        <div>송앨범컨텐츠</div>
        <div>디바이드</div>
        <div>프로필카트다운로드</div>
      </div>
      <div>
        <div>회원가입하기</div>
        <div>로그인하기</div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isNavOpened, setNavOpenState] = useState<boolean>(false);
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
      {isNavOpened && <Nav />}
    </div>
  );
};

export default Header;
