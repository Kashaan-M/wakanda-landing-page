import Link from 'next/link';
import Button from '../../Button';
function Pages(props) {
  return (
    <>
      <ul
        className={
          props.verticalMenu
            ? 'lg:hidden w-full flex flex-col bg-gray-200 rounded-md justify-center items-start my-4 p-2'
            : 'hidden w-auto lg:flex justify-center items-center'
        }>
        {props.pages.map((page, index) => {
          return page === 'get-started' ? (
            <Button
              page={'get-started'}
              key={'alas'}
              hero={false}
              cta={false}
            />
          ) : (
            <li className='mx-4 my-2' key={index}>
              <Link href={`/{page}`} className='capitalize sm:text-base '>
                {page.replace(/-/g, ' ')}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Pages;
