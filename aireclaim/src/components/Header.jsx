import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React,{useState,useEffect} from 'react';
import navigation from './nav';
import ClaimPage from './pages/ClaimPage';
import HomePage from './pages/HomePage';
import UserArea from "./pages/UserArea";
import Delays from "./pages/Delays";
import Cancellations from "./pages/Cancellations";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import TermsConditions from "./pages/TermsConditions";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import PassengerRights from "./pages/PassengerRights";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = ({navigation}) => {

  
  const [navItems, setNavItems] = useState(navigation);
  const [goHomeFlag, setGoHomeFlag] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(<HomePage />)
  const goHome = () => {
    console.log('ola')
    setGoHomeFlag(true);
    const updatedNavigation = navItems.map((item, index) => {  
        return {...item, current: false};
    });
    setNavItems(updatedNavigation);

  }

  const handleNavigation = ({name}) =>{
    
    const updatedNavigation = navItems.map((item, index) => {
      
      
      if (item.name == name) {
        return {...item, current: true};
        
      } else {
        return {...item, current: false};
      }
    });

    setNavItems(updatedNavigation);

    switch (name) {
    case navItems[0].name:
      setCurrentComponent(<ClaimPage></ClaimPage>)
      setGoHomeFlag(false);
      break;
    

    case navItems[1].name:
      setCurrentComponent(<UserArea></UserArea>)
      setGoHomeFlag(false);
      break;
    

    case navItems[2].name:
      setCurrentComponent(<PassengerRights></PassengerRights>)
      setGoHomeFlag(false);
      break;
    

    case navItems[3].name:
      setCurrentComponent(<Delays></Delays>)
      setGoHomeFlag(false);
      break;
    
    case navItems[4].name:
      setCurrentComponent(<Cancellations></Cancellations>)
      setGoHomeFlag(false);
      break;
    
    case navItems[5].name:
      setCurrentComponent(<HowItWorks></HowItWorks>)
      setGoHomeFlag(false);
      break;
    
    case navItems[6].name:
      setCurrentComponent(<FAQ></FAQ>)
      setGoHomeFlag(false);
      break;
    
    case navItems[7].name:
      setCurrentComponent(<TermsConditions></TermsConditions>)
      setGoHomeFlag(false);
      break;
    
    case navItems[8].name:
      setCurrentComponent(<Blog></Blog>)
      setGoHomeFlag(false);
      break;
    
    case navItems[9].name:
      setCurrentComponent(<AboutUs></AboutUs>)
      setGoHomeFlag(false);
      break;
    
    // default:
    //   setCurrentComponent( <HomePage></HomePage>)
    //   break;
    // }
    }
    
  }
  
  return (
    
    
    
    
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <button className=' rounded-3xl hover:ring-2' onClick={goHome}>
                <img
                  alt="Your Company"
                  src="https://static.vecteezy.com/ti/vetor-gratis/p3/6998411-asas-asas-logotipo-design-abstrato-modelo-asas-logo-logo-golden-asas-logo-icon-modern-heraldic-asas-logo-linear-flying-airlines-logotype-wings-logo-concept-wings-logo-projeto-vetor.jpg"
                  className="h-8 w-auto border rounded-full h-8 w-8"
                />
              </button>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-2 py-2 text-sm font-medium',
                    )} 
                   onClick={() => handleNavigation({name: item.name})}>
                    {item.name} 
                  </a>
                ))}
              </div>


            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://www.visionbanks.com/wp-content/uploads/Clients.png"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      

      <div>
        
          <hr className=''></hr>
      
        {/* {navItems[0].current && <ClaimPage />}
        {navItems[1].current && <UserArea />}
        {navItems[2].current && <PassengerRights />}
        {navItems[3].current && <Delays />}
        {navItems[4].current && <Cancellations />}
        {navItems[5].current && <HowItWorks />}
        {navItems[6].current && <FAQ />}
        {navItems[7].current && <TermsConditions />}
        {navItems[8].current && <Blog />}
        {navItems[9].current && <AboutUs />}
         */}

         {(!goHomeFlag && currentComponent)}

         {(goHomeFlag && <HomePage />)}
      </div>


      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              onClick={()=> handleNavigation({string: item.name})}
              
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
              
            >
              {item.name}
              
              
            </DisclosureButton>

            
          ))}

            
        </div>

        
        
      </DisclosurePanel>
    </Disclosure>

    
    

    
  )
}

export default React.memo(Header);
