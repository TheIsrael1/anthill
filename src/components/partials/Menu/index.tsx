import Hamburger from 'components/animation/hamburger';
import useOnClickOutside from 'hooks/useClickOutside';
import { useRef, useState } from 'react';
import Icon from 'utils/Icon';
import AuthMenu from './views/auth';
import NonAuthMenu from './views/non-auth';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from 'hooks/useLockBodyScroll';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => {
    setMenuOpen(false);
  });

  useLockBodyScroll(menuOpen);

  const loggedIn = true;

  return (
    <div className='relative z-20 overflow-hidden'>
      <button className='relative flex items-center group' onClick={() => setMenuOpen(true)}>
        <Hamburger menuOpen={menuOpen} />
      </button>
      {createPortal(
        <>
          <div
            className={`fixed h-screen w-full overflow-hidden top-0 right-0 bottom-0 left-0 bg-black/[0.25] ${
              menuOpen ? `opacity-100` : `opacity-0 hidden`
            } delay-200 transition-all duration-300 ease-in-out`}
          ></div>
          <aside
            ref={menuRef}
            className={`fixed bg-white top-0 right-0 bottom-0 w-[320px] h-screen z-20 ${
              menuOpen ? `translate-x-0` : `translate-x-[100%]`
            } transition-transform delay-300 duration-300 ease-in-out `}
          >
            <div className='w-full h-full  flex flex-col px-[1.5rem] py-[1.875rem] '>
              <div className='w-full flex justify-between pb-[1.875rem] border-b-2 border-extraColor-borderBottom-2'>
                <button
                  className='relative flex items-center group'
                  onClick={() => setMenuOpen(false)}
                >
                  <Hamburger menuOpen={menuOpen} />
                </button>
                <button>
                  <Icon name='notificationIcon' />
                </button>
              </div>
              <div className='flex-grow flex flex-col py-[2.5rem] overflow-y-auto overflow-x-hidden'>
                {loggedIn ? (
                  <AuthMenu close={() => setMenuOpen(false)} />
                ) : (
                  <NonAuthMenu close={() => setMenuOpen(false)} />
                )}
              </div>
            </div>
          </aside>
        </>,
        document.body,
      )}
    </div>
  );
};

export default Menu;
