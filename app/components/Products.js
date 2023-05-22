import React from "react";
import Image from "next/image";
import Link from "next/link";
const Products = () => {
  return (
    // using grid to create a 3 column layout
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-6 sm:mx-20 py">
      <div>
        <Image
          src="/tile-image__activate.png"
          alt="Product activate"
          width={500}
          height={500}
          priority
        />
        <div className="mt-5 grid grid-rows-3 gap-y-4">
          <h1 className="text-2xl text-[#373737] mb-4 font-MorLight">Activate</h1>
          <p className="text-[#373737] text-base leading-6 font-AKLight">
            With pH-balancing cleansers to reboot skin for self-repair
          </p>
          <Link
            href="/"
            className="border-b-2 border-black pb-1 hover:text-[#BB8934] hover:border-[#BB8934] font-AKMedium place-self-start"
          >
            Shop Cleansers
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/tile-image__accelerate.png"
          alt="Product accelerate"
          width={500}
          height={500}
          priority
        />
        <div className="mt-5 grid grid-rows-3 gap-y-4">
          <h1 className="text-2xl text-[#373737] mb-4 font-MorLight">
            Accelerate
          </h1>
          <p className="text-[#373737] text-base leading-6 font-AKLight">
            With acid treatments that build skin’s resilience.
          </p>
          <Link
            href="/"
            className="border-b-2 border-black pb-1 hover:text-[#BB8934] hover:border-[#BB8934] font-AKMedium place-self-start"
          >
            Shop Exfoliants
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/tile-image__advocate.png"
          alt="Product advocate"
          width={500}
          height={500}
          priority
        />
        <div className="mt-5 grid grid-rows-3 gap-y-4">
          <h1 className="text-2xl text-[#373737] mb-4 font-MorLight">Advocate</h1>
          <p className="text-[#373737] text-base leading-6 font-AKLight">
            To nourish and protect your skin’s healthy and vitality.
          </p>
          <Link
            href="/"
            className="border-b-2 border-black pb-1 hover:text-[#BB8934] hover:border-[#BB8934] font-AKMedium place-self-start"
          >
            Shop Moisturisers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
