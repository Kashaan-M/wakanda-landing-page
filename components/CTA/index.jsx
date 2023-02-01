import Image from 'next/image';
import Button from '../Button';
import cta_image from '../../public/assets/cute-asian-woman-studying-laptop-smiling-standing-against-yellow-wall-min 1.png';
function CTA(props) {
  return (
    <section className='w-9/12 h-auto flex justify-center items-center flex-wrap  bg-primary text-white mx-auto mb-16'>
      <article className='lg:w-1/2  order-2 '>
        <div className='flex flex-col justify-center max-lg:items-center items-start max-md:text-center max-md:mb-8'>
          <p className='text-base font-bold mb-8'>WHAT ARE YOU WAITING FOR?</p>
          <h2 className='font-extrabold text-2xl lg:text-4xl mb-6'>
            Find the talent to get your business growing
          </h2>
          <Button page={'get-started'} key={'yikes'} hero={false} cta={true} />
        </div>
      </article>
      <article className='lg:w-1/2 flex justify-center order-1 max-lg:mb-8'>
        <Image src={cta_image} width={359} height={307} alt='image' />
      </article>
    </section>
  );
}
export default CTA;
