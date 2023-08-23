import logo from '../assets/logo.svg';
import cart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';

function NavBar() {

  const routes = [
    ['/collections', 'Collections'],
    ['/men', 'Men'],
    ['/women', 'Women'],
    ['/about', 'About'],
    ['/contact', 'Contact']
  ];

  return (
    <header className='w-screen flex justify-center items-center h-12 my-5 '>
      <div className='w-10/12 flex items-center justify-between py-6 border-light-grayish-blue border-b-2 '>
        <div className='flex  w-full h-12 items-center justify-start'>
        <img src={logo} alt="My Company Logo" className='w-fit h-fit' />
        <nav className='flex w-3/6 justify-around items-start ml-5 h-3'>
          {routes.map(([key,value],idx)=>(
            <a className='text-dark-grayish-blue text-sm font-c-normal hover:border-b-2 hover:border-primary-orange' key={idx} href={key}>{value}</a>
          ))}
        </nav>
        </div>


        <div className='flex justify-around w-2/12 items-center'>

          
        <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white ">
        <img src={cart} alt="Cart Logo" role='button' />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary-orange border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
        </button>


          <img src={avatar} alt='Avatar' className=' w-10 h-10 hover:border-primary-orange hover:border hover:rounded-full' role='button'/>
        </div>
      </div>

    </header>
  );
}

export default NavBar;