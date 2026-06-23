import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="relative w-full py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          fill
          src="/images/photo-8.png"
          alt=""
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-background)]" style={{ mixBlendMode: "multiply" }} />
      </div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="reveal w-full">
          <div className="relative aspect-[3/4] rounded overflow-hidden">
            <Image
              fill
              src="/images/photo-7.png"
              alt="The LA Roofing (Exeter) Ltd team with their branded van"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="reveal flex flex-col gap-6" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl font-bold text-[var(--color-trust)]">Rooted in Exeter</h2>
          <p className="text-[var(--color-body-teal)] text-lg leading-relaxed max-w-prose">
            Whether you need your damaged roof repaired or need a complete re-roofing
            service, we can help. At LA Roofing (Exeter) Ltd, we are passionate about
            what we do. Our dedicated team of roofers will go out of their way to
            provide a great service. With years of experience, we are rightly placed
            to make a positive difference. We cater to customers in Exeter and the
            surrounding areas of Devon.
          </p>
        </div>
      </div>
    </section>
  );
}
