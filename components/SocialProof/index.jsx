import Image from 'next/image';

function SocialProof(props) {
  return (
    <div className='flex justify-center px-4 my-8'>
      <Image src={props.svgs} width={988} height={88} alt='social-proof' />
    </div>
  );
}
export default SocialProof;
