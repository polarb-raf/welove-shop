import { Dispatch, SetStateAction } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { ReactComponent as Cart } from '@assets/cart.svg';
import { ReactComponent as Contents } from '@assets/contents.svg';
import { ReactComponent as Disc } from '@assets/disc.svg';
import { ReactComponent as Download } from '@assets/download.svg';
import { ReactComponent as MusicNote } from '@assets/music_note.svg';
import { ReactComponent as Profile } from '@assets/profile.svg';
import { ReactComponent as Xmark } from '@assets/x_icon.svg';

interface NavProps {
  setNavOpenState: Dispatch<SetStateAction<boolean>>;
}

const NavMenu = ({ setNavOpenState }: NavProps) => {
  const handleClick = () => {
    setNavOpenState(false);
  };

  return (
    <nav className="absolute left-0 top-0 w-full p-4 bg-[rgba(233,_233,_233,_0.95)] backdrop-blur-[2px]">
      <div className="w-5 mb-[38px]">
        <button className="block" onClick={handleClick}>
          <Xmark className="fill-[#53D660]" />
        </button>
      </div>
      <div className="nav_item_container">
        <div className="grow">
          <div>
            <NavLink className="nav_menu_link" to="/song" onClick={handleClick}>
              <div className="nav_menu_item">
                <div className="nav_menu_icon">
                  <MusicNote />
                </div>
                <span className="nav_menu_title">Song</span>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav_menu_link" to="/album" onClick={handleClick}>
              <div className="nav_menu_item">
                <div className="nav_menu_icon">
                  <Disc />
                </div>
                <span className="nav_menu_title">Album</span>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav_menu_link" to="/contents" onClick={handleClick}>
              <div className="nav_menu_item">
                <div className="nav_menu_icon">
                  <Contents />
                </div>
                <span className="nav_menu_title">Contents</span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="flex items-center px-3">
          <div className="nav_menu_divide" />
        </div>
        <div className="grow">
          <div>
            <NavLink className="nav_menu_link" to="/profile" onClick={handleClick}>
              <div className="nav_menu_item">
                <div className="nav_menu_icon">
                  <Profile />
                </div>
                <span className="nav_menu_title">Profile</span>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav_menu_link" to="/cart" onClick={handleClick}>
              <div className="nav_menu_item">
                <div className="nav_menu_icon">
                  <Cart />
                </div>
                <span className="nav_menu_title">Cart</span>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav_menu_link" to="/download" onClick={handleClick}>
              <div className="nav_menu_item">
                <div className="nav_menu_icon no-fill">
                  <Download />
                </div>
                <span className="nav_menu_title">Download</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="text-center">
          <Link className="text-[10px] text-[#3dd24c] font-bold" to="/signup" onClick={handleClick}>
            회원가입하기
          </Link>
        </div>
        <div className="flex justify-center pt-1">
          <Link className="default-btn w-[209px]" to="/signin" onClick={handleClick}>
            로그인하기
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
