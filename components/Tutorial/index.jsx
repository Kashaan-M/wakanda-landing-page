import tutorialImg from '../../public/assets/tutorial.svg';
import Image from 'next/image';
function Tutorial(props) {
  return (
    <section className='w-full flex justify-center items-center flex-wrap  px-16 mb-8'>
      <article>
        <Image
          src={tutorialImg}
          width={402}
          height={502}
          alt=''
          className='px-8 lg:pb-8'
        />
      </article>
      <article className='lg:w-1/2 self-start mt-12 ml-8 lg:ml-0 p-0 lg:pl-12 lg:pr-8 pb-8'>
        <h2 className='font-bold text-2xl lg:text-4xl mb-4'>
          Wakanda is an easy platform to find talent
        </h2>
        <ul className='flex flex-col justify-center items-start gap-y-4'>
          <li className='flex gap-x-4'>
            <span className='relative w-[24px] h-[24px] text-center'>
              <div className='absolute w-[28px] h-[28px] rounded-full bg-lightSky -z-10'></div>
              1
            </span>
            <p>Sign in to our website</p>
          </li>
          <li className='flex gap-x-4'>
            <span className='relative w-[24px] h-[24px] text-center'>
              <div className='absolute w-[28px] h-[28px] rounded-full bg-lightSky -z-10'></div>
              2
            </span>
            <p>Fill out necessary information</p>
          </li>
          <li className='flex gap-x-4'>
            <span className='relative w-[24px] h-[24px] text-center'>
              <div className='absolute w-[28px] h-[28px] rounded-full bg-lightSky -z-10'></div>
              3
            </span>
            <p>Discover thousands of freelancers</p>
          </li>
          <li className='flex gap-x-4'>
            <span className='relative w-[24px] h-[24px] text-center'>
              <div className='absolute w-[28px] h-[28px] rounded-full bg-[#C7EEFF] -z-10'></div>
              4
            </span>
            <p>View freelancer's profile and hire</p>
          </li>
          <li className='flex gap-x-4'>
            <span className='relative w-[24px] h-[24px] text-center'>
              <div className='absolute w-[28px] h-[28px] rounded-full bg-[#C7EEFF] -z-10'></div>
              5
            </span>
            <p>Complete payment and it's time to work!</p>
          </li>
        </ul>
      </article>
    </section>
  );
}
export default Tutorial;
