import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

export async function Navbar() {
  let menu: Menu[] = [];

  try {
    menu = await getMenu('next-js-frontend-header-menu');
    console.log('Menu data:', menu);
  } catch (error) {
    console.error('Error fetching menu:', error);
  }

  if (menu.length === 0) {
    console.warn('Menu is empty or not loaded');
  }

  if (menu.length > 0) {
    console.log('Menu data:', menu);
  }

  return (
    <nav className="relative m-auto flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex max-w-screen-2xl m-auto w-full items-center bewtween md:justify-between md:items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <Image src="/logo_100x40.png" alt="Logo" width={100} height={40} />
          </Link>
          {/* exibir toda a variavel menu em um p */}
          <p>{JSON.stringify(menu)}</p>
          <div className="menu">
            {menu.length ? (
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      prefetch={true}
                      className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-red-500">Menu not available</p>
            )}
          </div>
        </div>
        <div className="hidden justify-center md:flex md:w-1/4">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
