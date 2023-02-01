import Link from 'next/link';
import logo from '../../public/assets/wakanda-logo-color.svg';
import Image from 'next/image';
import Pages from './Pages';
import classes from './Navbar.styles.js';
import { useState } from 'react';
function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logoWrapper}>
          <div>
            <Link href='/'>
              <Image
                src={logo}
                alt='Wakanda'
                className='max-[400px]:w-22'
                width={200}
                height={32}
              />
            </Link>
          </div>
          <div
            className={classes.hamburgerWrapper}
            aria-label='menu-button'
            onClick={() => setIsMobile(!isMobile)}>
            <div className={isMobile ? classes.cross : classes.hamburger}></div>
          </div>
        </div>
        {isMobile ? (
          <Pages pages={props.pages} verticalMenu={true} />
        ) : (
          <Pages pages={props.pages} verticalMenu={false} />
        )}
      </nav>
    </>
  );
}
export default Navbar;
