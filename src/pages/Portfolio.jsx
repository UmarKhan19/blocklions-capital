const Portfolio = () => {
  const projects = [
    {
      image: "../../public/images/portfolio/aaveLogoWhite.svg",
      name: "AAVE",
      desc: "Toolkit for Ethereum developers",
      website: "https://aave.com/",
    },
    {
      image: "../../public/images/portfolio/opensea-logo.svg",
      name: "Opensea",
      desc: "Ethereum building blocks in Rust",
      website: "https://opensea.io/",
    },
    {
      image: "../../public/images/portfolio/worldcoin-logo.svg",
      name: "Worldcoin",
      desc: "Performant MEV bots in Rust",
      website: "https://worldcoin.org/",
    },
    {
      image: "../../public/images/portfolio/circle-logo.png",
      name: "Circle",
      desc: "Load testing tool for EVM nodes",
      website: "https://www.circle.com/en/",
    },
    {
      image: "../../public/images/portfolio/coinbase-logo.svg",
      name: "Coinbase",
      desc: "Modular & fast Ethereum client in Rust",
      website: "https://www.coinbase.com/",
    },
    {
      image: "../../public/images/portfolio/lens-logo.svg",
      name: "Lens",
      desc: "Typescript interface for Ethereum",
      website: "https://www.lens.xyz/",
    },
    {
      image: "../../public/images/portfolio/lumox-land-logo",
      name: "Lumox land",
      desc: "React Hooks for Ethereum",
      website: "https://lumoxland.com/",
    },
  ];

  return (
    <section className="space-y-4 py-4">
      <div className="flex gap-16 flex-wrap py-8 ">
        {projects.map(({ image, name, desc, website }, i) => (
          <a href={website} key={i} className="flex gap-4 max-w-[280px] ">
            <div className="w-full grayscale bg-black p-4">
              <img
                src={image}
                alt={name}
                className="w-full aspect-square object-contain"
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
        The investments or portfolio companies mentioned, referred to, or
        described on this page are not representative of all investments in
        vehicles managed by Paradigm and there can be no assurance that the
        investments will be profitable or that other investments made in the
        future will have similar characteristics or results. A more complete
        list of investments (which excludes investments for which the issuer has
        not provided permission for Paradigm to disclose publicly, as well as
        unannounced investments in publicly traded digital assets) can be found
        here. Please note that this list reflects current as well as historical
        investments (save those portfolio companies (i) that have shut down
        without a liquidity event or exit and (ii) for which the equity has been
        written to zero without the corresponding receipt of another asset).
        Further, the list of investments is updated periodically, and as such
        may not reflect the most recent Paradigm investments. Past results of
        Paradigm&apos;s investments, pooled investment vehicles, or investment
        strategies are not necessarily indicative of future results.
      </p>
    </section>
  );
};

export default Portfolio;
