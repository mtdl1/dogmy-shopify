import Image from "next/image";

// [components/banner.tsx](components/banner.tsx)
export default function Banner() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 pb-4 md:grid-cols-6 rounded-lg">
      <Image className="rounded-lg hidden md:block" src="/banner_site_A1.jpg" alt="Banner" width={2720} height={1275} />
      <Image className="rounded-lg block md:hidden" src="/banner_site_mobile.jpg" alt="Banner" width={500} height={610} />
    </div>
  );
}