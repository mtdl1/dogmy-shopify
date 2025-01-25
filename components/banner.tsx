import Image from "next/image";

// [components/banner.tsx](components/banner.tsx)
export default function Banner() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <Image src="/banner.jpg" alt="Banner" width={2676} height={1016} />
    </div>
  );
}