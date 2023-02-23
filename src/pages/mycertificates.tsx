import Image from "next/image";

export default function MyCertificates() {
  return (
    <section className="px-6 sm:px-12">
      <div className="max-w-6xl py-8 mx-auto space-y-10 sm:py-16 sm:space-y-20 ">
        <h2 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">
          My Certificate
        </h2>
        <div className="relative w-full aspect-video">
          <Image src="/assets/images/certificate-1.jpg" alt="" layout="fill" />
        </div>
      </div>
    </section>
  );
}
