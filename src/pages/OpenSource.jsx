const OpenSource = () => {
  return (
    <section className="space-y-4 py-4">
      <h1 className="font-medium text-2xl ">Open Source</h1>
      <p className="text-sm text-gray-500">
        Blocklions Capital builds and contributes to projects that advance the
        frontier. We believe in doing so even when there may not be a direct
        commercial incentive. A sampling of open source projects are listed
        below.
      </p>
      <div className="grid grid-cols-2 gap-y-16 py-8">
        {new Array(5).fill(0).map((i) => (
          <div key={i} className="size-40 bg-black"></div>
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
