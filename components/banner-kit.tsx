import Image from "next/image";

// [components/banner.tsx](components/banner.tsx)
export default function BannerKit() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 pb-4 md:grid-cols-6 rounded-lg">
      <Image className="rounded-lg hidden md:block" src="/banner_02__kit.jpg" alt="Banner" width={1982} height={282} />
      <Image className="rounded-lg block md:hidden" src="/banner_01__kit.jpg" alt="Banner" width={500} height={610} />
    </div>
  );
}