const OpenSource = () => {
  const projects = [
    {
      image: "/images/open-source/foundry.png",
      name: "Foundry",
      desc: "Toolkit for Ethereum developers",
      website: "https://foundry.com",
    },
    {
      image: "/images/open-source/alloy.png",
      name: "Alloy",
      desc: "Ethereum building blocks in Rust",
      website: "https://foundry.com",
    },
    {
      image: "/images/open-source/artemis.png",
      name: "Artemis",
      desc: "Performant MEV bots in Rust",
      website: "https://foundry.com",
    },
    {
      image: "/images/open-source/flood.png",
      name: "Flood",
      desc: "Load testing tool for EVM nodes",
      website: "https://foundry.com",
    },
    // {
    //   image: "/images/open-source/reth.png",
    //   name: "Reth",
    //   desc: "Modular & fast Ethereum client in Rust",
    //   website: "https://foundry.com",
    // },
    {
      image: "/images/open-source/viem.png",
      name: "Viem",
      desc: "Typescript interface for Ethereum",
      website: "https://foundry.com",
    },
    {
      image: "/images/open-source/wagmi.png",
      name: "Wagmi",
      desc: "React Hooks for Ethereum",
      website: "https://foundry.com",
    },
  ];

  return (
    <section className="space-y-4 py-4">
      <h1 className="font-medium text-2xl ">Open Source</h1>
      <p className="text-sm text-gray-500">
        Blocklions Capital builds and contributes to projects that advance the
        frontier. We believe in doing so even when there may not be a direct
        commercial incentive. A sampling of open source projects are listed
        below.
      </p>
      <div className="flex gap-16 flex-wrap py-8 ">
        {projects.map(({ image, name, desc, website }, i) => (
          <a href={website} key={i} className="flex gap-4 max-w-[280px] ">
            <div className="w-full">
              <img src={image} alt={name} className="w-full aspect-square" />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm">{name}</h3>
              <p className="text-sm text-gray-600 tracking-widest">{desc}</p>
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs leading-6 tracking-widest  text-gray-400">
        The open-source projects you see here are just some of the ones
        BlockLionsCapital supports. Keep in mind, they don&apos;t represent all
        our projects. While we believe in their potential, we can&apos;t
        guarantee they&apos;ll make money or work perfectly. These projects are
        available to everyone &apos;as is,&apos; with their own rules.
      </p>
    </section>
  );
};

export default OpenSource;
