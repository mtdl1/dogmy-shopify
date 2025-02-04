import Grid from 'components/grid';
import type { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <Grid className="container mx-auto max-w-screen-2xl gap-6 px-4 py-4 grid-cols-1 md:grid-cols-4">

      {/* mostre em texto todas as informações recebidas na variavel products
      {products.map((product) => (
        <Grid.Item key={product.handle} className="border p-4">
          <pre>{JSON.stringify(product, null, 2)}</pre>
        </Grid.Item>
      ))} */}

      {/* mostre as imagens dos produtos */}
      {products.map((product) => (
        <Grid.Item key={product.handle} className="border rounded-lg p-4">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
            prefetch
          >
            <Image src={product.featuredImage?.url} alt={product.title} width={415} height={415} />
            <h2>{product.priceRange.maxVariantPrice.amount}</h2>

            {/* <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
            /> */}

          </Link>
          {/* Exemplo de botão de compra */}
          <button className="mt-2 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600">
            Comprar
          </button>

        </Grid.Item>
      ))}
    </Grid>
  );
}