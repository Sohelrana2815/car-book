import { FOOTER_CONTACTS, FOOTER_NAV_COLUMNS } from "../../constants/footerData";

export default function FooterNavColumns() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
      {/* 3 Nav Columns */}
      {FOOTER_NAV_COLUMNS.map((col) => (
        <div key={col.title} className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-white tracking-wide">
            {col.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {col.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* 4th Column: Contacts */}
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-bold text-white tracking-wide">
          Contacts
        </h3>
        <div className="flex flex-col gap-3 text-sm text-gray-300">
          <a
            href={`mailto:${FOOTER_CONTACTS.email}`}
            className="hover:text-white transition-colors"
          >
            {FOOTER_CONTACTS.email}
          </a>
          <p className="leading-relaxed max-w-xs">{FOOTER_CONTACTS.address}</p>
          <a
            href={`tel:${FOOTER_CONTACTS.phone.replace(/\s+/g, "")}`}
            className="hover:text-white transition-colors"
          >
            {FOOTER_CONTACTS.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
