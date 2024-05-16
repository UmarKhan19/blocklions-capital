const Contact = () => {
  return (
    <section className="py-4 space-y-6">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-400">Information</span>
        <a className="text-[2.4vh]" href="mailto:info@blocklionscapital.com">
          info@blocklionscapital.com
        </a>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-400">Press Inquiries</span>
        <a className="text-[2.4vh]" href="mailto:press@blocklionscapital.com">
          press@blocklionscapital.com
        </a>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-400">Investor Inquiries</span>
        <a
          className="text-[2.4vh]"
          href="mailto:inv_inquiries@blocklionscapital.com"
        >
          inv_inquiries@blocklionscapital.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
