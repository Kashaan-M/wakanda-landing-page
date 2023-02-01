import { useRef, useEffect } from 'react';
import Image from 'next/image';
import icon1 from '../../public/assets/icon-1.svg';
import icon2 from '../../public/assets/icon-2.svg';
import icon3 from '../../public/assets/icon-3.svg';
import data from './data';
import debounce from '../../utils/debouncer';

function Feature(props) {
  const secondRef = useRef();
  const icons = [icon1, icon2, icon3];
  useEffect(() => {
    window.addEventListener('scroll', debounce(checkSlide));
    console.log(document.querySelector('#id'));
    return () => window.removeEventListener('scroll', debounce(checkSlide));
  }, []);
  function checkSlide() {
    const componentHeight = secondRef.current.getBoundingClientRect().height;
    const componentOffsetTop = secondRef.current.getBoundingClientRect().top;
    const slideInAt = window.scrollY + window.innerHeight - componentHeight / 2;
    // componentOffsetTop tells us how far down each image is from top of window
    const isHalfShown = slideInAt > componentOffsetTop;

    if (isHalfShown) {
      secondRef.current.classList.add('active');
    } else {
      secondRef.current.classList.remove('active');
    }
  }

  return (
    <section className='w-full h-full flex flex-col justify-center items-center bg-primary text-white mb-8'>
      <article className='text-center w-2/3 lg:w-1/3 my-8'>
        <p className='mb-4'>FEATURE</p>
        <h2 className='font-bold text-2xl lg:text-4xl'>
          The benefit of using our platform
        </h2>
      </article>
      <section
        className='w-full flex justify-center items-center flex-wrap px-12 mb-12 transition-all duration-700 delay-1000 ease-in-out move-right slide-in'
        ref={secondRef}>
        {data.map(({ id, heading, text }, index) => (
          <article
            className='lg:w-1/3 flex flex-col justify-center lg:px-8 mb-8 lg:mb-0 '
            key={id}>
            <Image
              className='mb-6'
              src={icons[index]}
              width={72}
              height={72}
              alt='icon'
            />
            <h3 className='font-bold text-xl lg:text-2xl mb-3'>{heading}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
export default Feature;
