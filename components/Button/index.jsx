import classes from './button.styles.js';
import Link from 'next/link.js';
function Button(props) {
  return (
    <>
      <li className='my-2 list-none' key={props.index}>
        <Link
          href={`/${props.page}`}
          className={
            props.hero ? classes.hero : props.cta ? classes.cta : classes.nav
          }>
          {props.page.replace(/-/g, ' ')}
        </Link>
      </li>
    </>
  );
}
export default Button;
