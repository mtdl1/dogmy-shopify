import Image from "next/image";
import Link from "next/link";

export default function BannerKit() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 md:grid-cols-6 rounded-lg">
      <Link href="/search/todos-os-produtos">
        <Image className="rounded-lg hidden md:block w-full" src="/banner-kit/banner_oferta.jpg" alt="Banner" width={1391} height={222} />
        <Image className="rounded-lg block md:hidden" src="/banner-kit/banner_oferta_mobile.jpg" alt="Banner" width={500} height={300} />
      </Link>
    </div>
  );
}