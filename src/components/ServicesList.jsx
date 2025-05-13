export default function ServicesList({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t pt-12">
      {items.map(({ icon, title, desc }, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 rounded transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
        >
          <div className="text-[#1f5175] text-3xl mt-1 w-10 flex-shrink-0 transition-colors duration-300 group-hover:text-[#1e3d58]">
            <i className={icon}></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1f5175] mb-2 group-hover:text-[#1e3d58] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
