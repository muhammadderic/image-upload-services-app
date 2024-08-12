import Image from "next/image";

export default function Home() {
  return (
    <section className="pt-12 bg-gray-50 sm:pt-16 grid grid-cols-2 gap-4">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mt-5 text-2xl font-bold leading-tight text-gray-900 md:text-right sm:leading-tight sm:text-3xl lg:text-5xl lg:leading-tight font-pj">
            Simplify Your
            <br />
            <span className="relative inline-flex sm:inline">
              <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
              <span className="relative"> Image Upload Process </span>
            </span>
            <br />
            with These Various Services
          </p>

          <p className="mt-8 text-base text-gray-500 md:text-right font-inter">
            Seamlessly store, organize, and share your photos in the cloud with our partners: Cloudinary, Edgestore, and UploadThing
          </p>
        </div>
      </div>

      <div className="flex items-center justify-start">
        <div className="flex-none w-1/2 mx-auto">
          <div className="max-w-md mx-auto">
            <Image
              className="object-cover w-full h-full max-w-xs"
              src="/cloud.png"
              alt="Next.js logo"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
