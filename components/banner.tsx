import Image from "next/image";

// [components/banner.tsx](components/banner.tsx)
export default function Banner() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 pb-4 md:grid-cols-6 rounded-lg">
      <Image className="rounded-lg" src="/banner_site_A1.jpg" alt="Banner" width={2720} height={1275} />
    </div>
  );
}