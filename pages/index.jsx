import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import socialProofSvgs from '../public/assets/social-proof.svg';
import Feature from '../components/Feature';
import Tutorial from '../components/Tutorial';
import Explore from '../components/Explore';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Home(props) {
  return (
    <>
      <main className='overflow-hidden'>
        <Hero />
        <SocialProof svgs={socialProofSvgs} />
        <Feature />
        <Tutorial />
        <Explore />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
export default Home;
