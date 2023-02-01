import Image from 'next/image';
import logo from '../../public/assets/wakanda-logo-bw.svg';
import insta from '../../public/assets/insta.svg';
import dr from '../../public/assets/dribble.svg';
import tw from '../../public/assets/twitter.svg';
import yt from '../../public/assets/yt.svg';
import data from './data';
import emailIcon from '../../public/assets/email.svg';
function Footer(props) {
  const socialLinks = [
    { link: insta, id: 1 },
    { link: dr, id: 2 },
    { link: tw, id: 3 },
    { link: yt, id: 4 },
  ];
  return (
    <footer className='w-full bg-customBlack grid max-md:grid-cols-1 lg:grid-cols-3 text-white'>
      {/* social */}
      <section className='flex flex-col justify-center max-xl:items-center xl:items-start pt-16 xl:pl-4 lg:mb-8 xl:mx-auto'>
        <Image
          src={logo}
          width={200}
          height={32}
          alt='Wakanda'
          className='max-[400px]:w-22 mb-8'
        />
        <ul className='flex justify-center items-center gap-x-8 mb-6'>
          {socialLinks.map(({ link, id }) => (
            <li key={id}>
              <a href='#'>
                <Image
                  src={link}
                  width={48}
                  height={48}
                  className='hover:opacity-90'
                  alt=''
                />
              </a>
            </li>
          ))}
        </ul>
        <p className='mb-16'>
          Copyright &copy; 2022 Kashaan Mahmood. All rights reserved
        </p>
      </section>

      {/* pages */}
      <section className='flex justify-center items-center lg:pt-16 lg:mb-8'>
        {data.map(({ title, pages, id }) => (
          <article className='w-1/2 flex justify-center items-center' key={id}>
            <div aria-label='region'>
              <h4 className='text-2xl font-bold'>{title}</h4>
              <ul>
                {pages.map(({ page, id }) => (
                  <li key={id} className='my-4'>
                    <a href='#'>{page}</a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* email */}
      <section className='flex flex-col justify-start max-lg:items-center lg:items-start lg:pt-16 mb-8'>
        <h4 className='text-2xl font-bold mb-4'>Subscribe to our newsletter</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <div aria-label='enter email' className='w-full relative'>
            <input
              type='text'
              placeholder='Your email address'
              className='bg-defaultGray w-full placeholder:text-white placeholder:text-sm p-2 accent-primary caret-primary'
            />
            <div aria-label='send email' className='absolute top-1 right-1'>
              <button type='submit' className=''>
                <Image src={emailIcon} width={33} height={36} alt='' />
              </button>
            </div>
          </div>
        </form>
      </section>
    </footer>
  );
}
export default Footer;
