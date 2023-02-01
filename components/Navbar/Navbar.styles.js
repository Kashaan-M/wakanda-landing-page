export default {
  nav: 'w-100 flex flex-wrap justify-evenly items-center mx-6  my-6',

  logoWrapper: 'max-lg:w-full flex justify-between items-center',
  hamburgerWrapper:
    'hidden w-[24px] h-[24px] min-[275px]:max-lg:flex justify-center items-center',
  hamburger:
    "w-[24px] h-[4px] bg-black relative before:content-[''] before:w-[24px] before:h-[4px] before:absolute before:bottom-[8px] before:bg-black after:content-[''] after:w-[24px] after:h-[4px] after:absolute after:top-[8px] after:bg-black   ease-in-out duration-100",
  cross:
    "w-[24px] h-[0] bg-black relative before:content-[''] before:w-[24px] before:h-[4px] before:absolute before:bottom-[-1px] before:bg-black after:content-[''] after:w-[24px] after:h-[4px] after:absolute after:top-[-2px]  after:bg-black   ease-in-out duration-100 after:rotate-45 before:-rotate-45",
};
