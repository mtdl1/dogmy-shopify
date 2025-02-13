import Grid from 'components/grid';
import type { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <Grid className="container mx-auto max-w-screen-2xl gap-6 px-4 py-4 mt-4 grid-cols-1 md:grid-cols-4">
      {products.map((product) => (
        <Grid.Item key={product.handle} className="border rounded-lg p-4">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
            prefetch
          >
            <span className='absolute left-2 top-2 z-10 bg-yellow-300 p-1 px-2 rounded font-semibold text-xs'>
              {Math.round((1 - parseFloat(product.variants[0]?.price.amount || '0') / parseFloat(product.variants[0]?.compareAtPrice.amount || '0')) * 100)}% OFF
            </span>
            <span className='absolute right-2 top-2 z-10 bg-green-500 p-1 px-2 rounded font-semibold text-xs text-white block w-fit'>FRETE GRATIS</span>
            <Image className='rounded-xl-' src={product.featuredImage?.url} alt={product.title} width={415} height={415} />
            <h2 className='mt-4 text-xl font-bold text-gray-900 min-h-14 flex items-center justify-start'>{product.title}</h2>
            <h2 className='text-sm text-muted-foreground line-through text-gray-600'><s>R$ {product.variants[0]?.compareAtPrice.amount}</s></h2>
            <p className='text-gray-600'>em <strong className='text-gray-950'>até 6x</strong> de</p>
            <h3 className='text-4xl font-semibold text-gray-950'>R$ {product.variants[0] && product.variants[0].price.amount ? (parseFloat(product.variants[0].price.amount) / 6).toFixed(2) : 'N/A'}</h3>
            <h3 className='text-lg font-semibold text-gray-600'>Ou <strong className='text-gray-950'>R$ {product.variants[0]?.price.amount}</strong> á vista</h3>

            <p className='mt-2 w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold uppercase py-2 px-4 rounded'>Compre agora</p>

          </Link>
        </Grid.Item>
      ))}
    </Grid>
  );
}