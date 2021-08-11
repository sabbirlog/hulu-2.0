import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import NavigationItem from './NavigationItem';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <NavigationItem title='HOME' Icon={HomeIcon} />
        <NavigationItem title='TRENDING' Icon={LightningBoltIcon} />
        <NavigationItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <NavigationItem title='COLLECTIONS' Icon={CollectionIcon} />
        <NavigationItem title='SEARCH' Icon={SearchIcon} />
        <NavigationItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        className='object-contain'
        src='https://links.papareact.com/ua6'
        height={100}
        width={200}
        alt=''
      />
    </header>
  );
}

export default Header;
