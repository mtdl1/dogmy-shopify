import Image from "next/image";
import Link from "next/link";

export default function BannerBeneficios() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-4 mt-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
      <Link href="/search/todos-os-produtos">
        <Image className="rounded-lg" src="/banner-promocoes/banner4.png" alt="Banner" width={1136} height={632} />
      </Link>
      <Link href="/search/todos-os-produtos">
        <Image className="rounded-lg" src="/banner-promocoes/banner5.png" alt="Banner" width={1136} height={632} />
      </Link>
    </div>
  );
}