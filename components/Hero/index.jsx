import { useRef, useEffect } from 'react';
import Button from '../Button';
import HeroImage from '../../public/assets/handsome-businessman-suit-glasses-cross-arms-chest-look 1.png';
import HeroBg from '../../public/assets/Vector.svg';
import Image from 'next/image';
function Hero(props) {
  const heroRef = useRef();
  const textRef = useRef();
  useEffect(() => {
    slideLeft();
    slideRight();
  }, []);

  function slideLeft() {
    heroRef.current.style.transform = 'translateX(0)';
    heroRef.current.style.opacity = '1';
  }
  function slideRight() {
    textRef.current.style.transform = 'translateX(0)';
    textRef.current.style.opacity = '1';
  }
  return (
    <section className='w-full h-auto grid justify-items-center items-start grid-cols-1 lg:grid-cols-2 '>
      <article
        className='self-start order-2 lg:order-1 mb-8 opacity-0 transition-all duration-500 ease-in-out translate-x-[-50px] slide-in align-l'
        ref={textRef}
        onLoad={(e) => slideRight()}>
        <div className='lg:ml-20 lg:mt-20 px-8 flex flex-col justify-between gap-y-8'>
          <h1 className='font-extrabold text-3xl lg:text-5xl'>
            Recruit top talented freelancer for your business
          </h1>
          <p className='text-xl'>
            Connect you to thoudsands of talented freelancer from any industry.
            You can have the best people in just few simple steps.
          </p>
          <Button page={'get-started'} key={'yes'} hero={true} cta={false} />
        </div>
      </article>
      <article
        className='w-full h-auto relative flex justify-center  mr-16 order-1 lg:order-2 mb-8 opacity-0 transition-all duration-500 ease-in-out translate-x-[50px] slide-in align-r'
        ref={heroRef}
        onLoad={(e) => slideLeft()}>
        <div className='w-full h-full absolute max-lg:w-5/6 -z-10 select-none'>
          <Image
            className='w-full h-full'
            src={HeroBg}
            width={516}
            height={518}
            alt=''
          />
        </div>
        <Image
          src={HeroImage}
          className='max-w-full max-lg:w-[288px] h-auto'
          width={388}
          height={604}
          alt='hero-image'
        />
      </article>
    </section>
  );
}
export default Hero;
