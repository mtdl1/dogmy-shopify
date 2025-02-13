import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;


export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const menuNav = await getMenu('menu-navegacao');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:justify-between md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <Image src="/logo_100x40.png" alt="Logo" width={100} height={40} />
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <div>
            <h3 className='text-lg font-bold text-gray-900'>Navegação</h3>
            <FooterMenu menu={menu} />
          </div>
        </Suspense>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        > 
          <div>
            <h3 className='text-lg font-bold text-gray-900'>Conta</h3>
            <FooterMenu menu={menuNav} />
          </div>
        </Suspense>

        {/* newsletter */}
        <div>
          <h3 className='text-lg font-bold text-gray-900'>Newsletter</h3>
          <p className='text-gray-900'>Rece
          ba novidades e promoções por e-mail:</p>
          <form className='flex gap-2'>
            <input type='email' placeholder='Seu e-mail' className='border border-gray-300 rounded p-1' />
            <button type='submit' className='bg-black text-white rounded p-1'>Inscrever-se</button>
          </form>
        </ div>
      </div>

      {/* faixa de formas de pagamentos aceitas */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
        <div className='text-center pb-4'>
          <Image src='/credit-cards.png' alt='Formas de pagamento' width={963} height={80} />
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} Todos os direitos reservados.
          </p>
          <p className="md:ml-auto">
            <a href="https://vercel.com" className="text-black dark:text-white">
              Criado por Webicky com ▲ Vercel, Next.js e Shopify
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
