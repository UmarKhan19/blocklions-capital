const Portfolio = () => {
  const projects = [
    {
      image: "/images/portfolio/lumox-land-logo.png",
      name: "Lumox",
      desc: "GameFi - Play to Earn build on BSC",
      website: "https://lumoxland.com/",
    },
    {
      image: "/images/portfolio/aaveLogoWhite.svg",
      name: "AAVE",
      desc: "Decentralized lending protocol",
      website: "https://aave.com/",
    },
    {
      image: "/images/portfolio/opensea-logo.svg",
      name: "Opensea",
      desc: "NFT marketplace platform",
      website: "https://opensea.io/",
    },
    {
      image: "/images/portfolio/worldcoin-logo.svg",
      name: "Worldcoin",
      desc: "Iris biometric cryptocurrency",
      website: "https://worldcoin.org/",
    },
    {
      image: "/images/portfolio/circle-logo.png",
      name: "Circle",
      desc: "Cryptocurrency investment platform",
      website: "https://www.circle.com/en/",
    },
    {
      image: "/images/portfolio/coinbase-logo.svg",
      name: "Coinbase",
      desc: "Cryptocurrency exchange platform",
      website: "https://www.coinbase.com/",
    },
    {
      image: "/images/portfolio/lens-logo.svg",
      name: "Lens",
      desc: "Decentralized social media platform",
      website: "https://www.lens.xyz/",
    },
  ];

  return (
    <section className="space-y-4 py-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16  py-8">
        {projects.map(({ image, name, desc, website }, i) => (
          <a href={website} key={i} className="flex gap-4 max-w-[280px] ">
            <div className="w-full flex justify-center items-center aspect-square grayscale bg-black p-4">
              <img
                src={image}
                alt={name}
                className="w-full  aspect-square object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm">{name}</h3>
              <p className="text-sm text-gray-600 tracking-widest">{desc}</p>
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs leading-6 tracking-widest  text-gray-400">
        The investments or portfolio companies showcased on this page are just a
        selection and do not encompass the entirety of BlockLionsCapital&apos;s
        investment portfolio. While we strive for successful outcomes, we cannot
        guarantee the profitability of these investments or predict similar
        results for future endeavors. It&apos;s important to understand that
        past performance may not always reflect future results for
        BlockLionsCapital&apos;s investments or strategies.
      </p>
    </section>
  );
};

export default Portfolio;
