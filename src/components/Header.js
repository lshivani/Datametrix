import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './header.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import PlatformT from './PlatformT';
import ResourcesT from './ResourcesT';
import CompanyT from './CompanyT';
import DevelopersT from './DevelopersT'
import SolutionsT from './SolutionsT';
import 'tippy.js/themes/light.css'

const Header = () => {
  return (
    <div className='header'>
    <div className='header__first'>
        <img src='/images/log.png'
        alt='datamatrix logo'/>
    </div>
    <div className='header__second'>
        <Tippy theme="light" content={<PlatformT></PlatformT>} interactive={true} offset={[5, 18]}>
        <span>Platform</span>
        </Tippy>
        <ExpandMoreIcon/>
    </div>
    <div className='header__third'>
    <Tippy theme="light" content={<SolutionsT></SolutionsT>} interactive={true} offset={[5, 18]} >
        <span>Solutions</span>
        </Tippy>
        <ExpandMoreIcon/>
    </div>
    <div className='header__fourth'>
    <Tippy theme="light" content={<DevelopersT></DevelopersT>} interactive={true} offset={[5, 18]} >
        <span>Developers</span>
        </Tippy>
    </div>
    <div className='header__fifth'>
    <Tippy theme="light" content={<CompanyT></CompanyT>} interactive={true} offset={[5, 18]}>
        <span>Company</span>
        </Tippy>
    </div>
    <div className='header__six'>
    <Tippy theme="light" content={<ResourcesT></ResourcesT>} interactive={true} offset={[5, 18]}>
        <span>Resources</span>
        </Tippy>  
    </div>
    <div className='header__seven'>
        <span>Sign in</span>
    </div>
    <div className='header__eight'>
        
        <button>Book a Demo</button>
    </div>
    </div>
  )
}

export default Header
