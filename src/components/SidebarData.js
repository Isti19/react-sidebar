import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text',
  },
  {
    title: 'Reviews',
    path: '/reviews',
    icon: <CgIcons.CgFileDocument />,
    cName: 'nav-text',
  },
  {
    title: 'Report',
    path: '/report',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Log Out',
    path: '/logout',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text',
  },
];
