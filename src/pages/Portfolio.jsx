const Portfolio = () => {
  return (
    <section className="space-y-4 py-4">
      <div className="grid grid-cols-2 gap-y-16 py-8">
        {new Array(5).fill(0).map((i) => (
          <div key={i} className="size-40 bg-black"></div>
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
