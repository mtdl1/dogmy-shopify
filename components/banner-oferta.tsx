import Image from "next/image";
import Link from "next/link";

export default function BannerOferta() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 md:grid-cols-6 rounded-lg">
      <Link href="/search/todos-os-produtos">
        <Image className="rounded-lg hidden md:block w-full" src="/banner-oferta/banner_oferta2.jpg" alt="Banner" width={1391} height={222} />
      </Link>
      <Link href="/search/todos-os-produtos">
        <Image className="rounded-lg block md:hidden" src="/banner-oferta/banner_oferta_mobile2.jpg" alt="Banner" width={500} height={300} />
      </Link>
    </div>
  );
}