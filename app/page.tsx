import Banner from 'components/banner';
import BannerBeneficios from 'components/banner-beneficios';
import BannerKit from 'components/banner-kit';
import Beneficios from 'components/beneficios';
import Depoimentos from 'components/depoimentos';
import Footer from 'components/layout/footer';
import ProductShowcase from 'components/layout/product-showcase';
import { getCollectionProducts } from 'lib/shopify';

export const metadata = {
  title: 'Dogmy - O Stick que seu amigo merece!',
  description: 'Melhores multivitamínicos para o seu melhor amigo!',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const products = await getCollectionProducts({ collection: 'hidden-homepage-featured-items' });
  const productsKits = await getCollectionProducts({ collection: 'todos-os-kits' });
  return (
    <>
      <Banner />
      <Beneficios />
      <h2 className='text-3xl text-gray-800 font-bold text-center py-4' >Os Melhores Kits</h2>
      <ProductShowcase products={productsKits}/>
      <BannerKit />
      <h2 className='text-3xl text-gray-800 font-bold text-center py-4' >Individuais</h2>
      <ProductShowcase products={products}/>
      <BannerBeneficios />
      <Depoimentos />
      <Footer />
    </>
  );
}