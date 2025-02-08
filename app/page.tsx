import Banner from 'components/banner';
import Beneficios from 'components/beneficios';
import { getCollectionProducts } from 'lib/shopify';
// import { Carousel } from 'components/carousel';
// import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import ProductShowcase from 'components/layout/product-showcase';
import BannerKit from 'components/banner-kit';
import BannerBeneficios from 'components/banner-beneficios';


export const metadata = {
  title: 'Dogmy - O Stick que seu amigo merece!',
  description: 'Melhores multivitamínicos para o seu melhor amigo!',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });
  return (
    <>
      <Banner />
      <Beneficios />
      <BannerKit />
      <ProductShowcase products={products}/>
      <BannerBeneficios />
      {/* <ThreeItemGrid /> */}
      {/* <Carousel /> */}
      <Footer />
    </>
  );
}
