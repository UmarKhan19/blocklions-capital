const OpenSource = () => {
  const projects = [
    {
      image: "../../public/images/open-source/foundry.png",
      name: "Foundry",
      desc: "Toolkit for Ethereum developers",
      website: "https://foundry.com",
    },
    {
      image: "../../public/images/open-source/alloy.png",
      name: "Alloy",
      desc: "Ethereum building blocks in Rust",
      website: "https://foundry.com",
    },
    {
      image: "../../public/images/open-source/artemis.png",
      name: "Artemis",
      desc: "Performant MEV bots in Rust",
      website: "https://foundry.com",
    },
    {
      image: "../../public/images/open-source/flood.png",
      name: "Flood",
      desc: "Load testing tool for EVM nodes",
      website: "https://foundry.com",
    },
    {
      image: "../../public/images/open-source/reth.png",
      name: "Reth",
      desc: "Modular & fast Ethereum client in Rust",
      website: "https://foundry.com",
    },
    {
      image: "../../public/images/open-source/viem.png",
      name: "Viem",
      desc: "Typescript interface for Ethereum",
      website: "https://foundry.com",
    },
    {
      image: "../../public/images/open-source/wagmi.png",
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
        The open-source projects presented on this page are not representative
        of all projects that Blocklions Capital builds or otherwise supports. No
        assurance is made that such open-source projects will be profitable or
        economically or technically viable. Blocklions Capital provides no
        express or implied warranties with respect to such projects, which are
        publicly available “as is,” subject to the terms of use on each
        project&apos;s website, as applicable. The open-source projects
        presented are not portfolio companies of Blocklions Capital-managed
        investment vehicles. Blocklions Capital assumes no duty to update the
        above list of open-source projects.
      </p>
    </section>
  );
};

export default OpenSource;
