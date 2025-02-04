import Banner from 'components/banner';
import Beneficios from 'components/beneficios';
import { getCollectionProducts } from 'lib/shopify';
// import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import ProductShowcase from 'components/layout/product-showcase';


export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
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
      <ProductShowcase products={products}/>
      <ThreeItemGrid />
      {/* <Carousel /> */}
      <Footer />
    </>
  );
}
