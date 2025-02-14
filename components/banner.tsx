import Image from "next/image";

// [components/banner.tsx](components/banner.tsx)
export default function Banner() {
  return (
    <div className="mx-auto pb-4 md:grid-cols-6">
      <Image className="hidden md:block" src="/banner_site_A1.jpg" alt="Banner" width={2720} height={1275} />
      <Image className="block md:hidden" src="/banner_site_mobile.jpg" alt="Banner" width={500} height={610} />
    </div>
  );
}