import Image from 'next/image';
import testimonial_1 from '../../public/assets/testimonial_1.png';
import testimonial_2 from '../../public/assets/testimonial_2.png';
import testimonial_3 from '../../public/assets/testimonial_3.png';
import testimonial_4 from '../../public/assets/testimonial_4.png';
import testimonial_5 from '../../public/assets/testimonial_5.png';
import testimonial_6 from '../../public/assets/testimonial_6.png';
function Testimonial() {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center bg-lightGray'>
      <div className='w-11/12 flex flex-col justify-center items-center bg-white text-[#000000] mb-8'>
        <article className='text-center w-2/3 lg:w-2/5 my-8'>
          <p className='text-primary mb-4'>Testimonial</p>
          <h2 className='font-bold text-2xl lg:text-4xl'>
            See what they’re saying about us
          </h2>
        </article>
        <article className='w-full flex justify-center items-start flex-wrap lg:px-12 mb-12'>
          <div className='lg:w-1/3 lg:px-8 lg:my-8 lg:mb-0'>
            <Image
              src={testimonial_1}
              width={318}
              height={238}
              alt='testimonial'
            />
          </div>
          <div className='lg:w-1/3 lg:px-8 lg:my-8 lg:mb-0 self-center'>
            <Image
              src={testimonial_2}
              width={320}
              height={190}
              alt='testimonial'
            />
          </div>
          <div className='lg:w-1/3 lg:px-8 lg:my-8 lg:mb-0'>
            <Image
              src={testimonial_3}
              width={318}
              height={238}
              alt='testimonial'
            />
          </div>
          <div className='lg:w-1/3 lg:px-8 lg:my-8 lg:mb-0'>
            <Image
              src={testimonial_4}
              width={318}
              height={238}
              alt='testimonial'
            />
          </div>
          <div className='lg:w-1/3 lg:px-8 lg:my-8 lg:mb-0'>
            <Image
              src={testimonial_5}
              width={320}
              height={286}
              alt='testimonial'
            />
          </div>
          <div className='lg:w-1/3 lg:px-8 lg:my-8 lg:mb-0'>
            <Image
              src={testimonial_6}
              width={318}
              height={262}
              alt='testimonial'
            />
          </div>
        </article>
      </div>
    </section>
  );
}
export default Testimonial;
