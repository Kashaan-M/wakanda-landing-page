import portrait from '../../public/assets/portrait-successful-handsome-executive-businessman-smart-casual-wear-looking-camera-smiling 1.png';
import ellipse from '../../public/assets/Ellipse.svg';
import card_bg from '../../public/assets/Card-bg.png';
import card_fg from '../../public/assets/Card-fg.png';
import Image from 'next/image';
import Button from '../Button';
function Explore() {
  return (
    <section className='w-full h-auto grid justify-items-center items-start grid-cols-1 md:grid-cols-2 bg-lightSky pt-8'>
      <article className='self-start order-2 lg:order-1 mb-8'>
        <div className='lg:ml-20 lg:mt-20 px-8 flex flex-col justify-between gap-y-8 '>
          <h2 className='font-extrabold text-2xl lg:text-4xl'>
            Explore and hire talent from our platform
          </h2>
          <p className='text-xl'>
            We've got experts for every industry - all under one roof! You can
            find everything from WordPress developers to Graphic designers to
            copywriters and many more at Wakanda.
          </p>
          <Button page={'explore-now'} key={'aloha'} hero={true} cta={false} />
        </div>
      </article>
      <article className='w-auto relative order-1 lg:order-2 mb-8'>
        <div className='block ml-auto mr-auto relative'>
          <div className='w-full h-full absolute top-20 max-lg:left-8 z-1 select-none'>
            <Image
              className='max-lg:w-[318px] max-lg:h-[318px]'
              src={ellipse}
              width={414}
              height={414}
              alt=''
            />
          </div>
          <div className='w-full h-full absolute top-12 left-48  z-2 select-none'>
            <Image src={card_bg} width={186} height={168} alt='' />
          </div>
          <div className='w-full h-full relative'>
            <Image
              src={portrait}
              className='max-w-full h-auto relative z-3'
              width={388}
              height={604}
              alt='image'
            />
          </div>
          <div className='w-full h-full absolute top-56 right-8 z-4 select-none'>
            <Image src={card_fg} width={186} height={168} alt='' />
          </div>
        </div>
      </article>
    </section>
  );
}
export default Explore;
