import Navbar from '../Navbar';
function Layout(props) {
  const pages = [
    'home',
    'about-us',
    'how-it-works',
    'for-freelancer',
    'get-started',
  ];
  return (
    <>
      <Navbar pages={pages} />
      {props.children}
    </>
  );
}
export default Layout;
