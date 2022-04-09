/* TODO: create footer here */

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='py-16 bg-footer bg-no-repeat bg-right-bottom bg-cover'>
      <div className='container bg-bg-color py-12 bg-opacity-80 rounded-lg px-8 md:grid md:grid-cols-2 place-items-center lg:grid-cols-3'>
        <div className='text-center font-Overlock flex flex-col '>
          <a className='text-xl text-sub' href='tel:+91 9829444440'>
            +91 9829444440
          </a>
          <a
            className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-500'
            href='mailto:contact@scelebration.com'>
            contact@scelebration.com
          </a>
        </div>
        <div className='text-center'>
          <p className="text-xl text-text-heading font-semibold font-Overlock">
            32 A, Dhuleshwar Gardenbr <br />
            C -Scheme <br />
            Jaipur
          </p>
          <button className="btn mt-6">CONTACT US</button>
        </div>
        <div className="m-auto">
        <ul className='flex space-x-4 items-center justify-center mt-5 md:mt-0'>
            <Link to='/'>
              <i className='text-gray-500 fa-brands fa-instagram text-xl   transition-all hover:text-red-900 cursor-pointer'></i>
            </Link>
            <Link to='/'>
              <i className='text-gray-500 fa-brands fa-facebook text-xl   transition-all hover:text-red-900 cursor-pointer'></i>
            </Link>
            <Link to='/'>
              <i className='text-gray-500 fa-brands fa-twitter text-xl   transition-all hover:text-red-900 cursor-pointer'></i>
            </Link>
            <Link to='/'>
              <i className='text-gray-500 fa-brands fa-pinterest text-xl  transition-all hover:text-red-900 cursor-pointer'></i>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
