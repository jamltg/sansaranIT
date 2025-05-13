// components/ServiceCard.jsx
export default function ServiceCard({ image, title, description, bgColor = 'bg-white', textColor = 'text-gray-600', titleColor = 'text-xl font-semibold mb-2' }) {
  return (
    <div className={`${bgColor} shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full sm:w-[300px]`}>
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] sm:h-[220px] md:h-56 object-cover object-top"
      />
      <div className="p-5">
        <h2 className={`${titleColor} ${textColor === 'text-white' ? 'text-white' : 'text-black'}`}>{title}</h2>
        <p className={`text-sm ${textColor}`}>{description}</p>
      </div>
    </div>
  );
}
