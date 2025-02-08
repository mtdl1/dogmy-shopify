import Image from "next/image";

// [components/banner.tsx](components/banner.tsx)
export default function BannerBeneficios() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-4 mt-4 flex justify-between items-center gap-4">
      <Image className="rounded-lg w-1/2" src="/banner_01.jpg" alt="Banner" width={1136} height={632} />
      <Image className="rounded-lg w-1/2" src="/banner_02.jpg" alt="Banner" width={1136} height={632} />
    </div>
  );
}