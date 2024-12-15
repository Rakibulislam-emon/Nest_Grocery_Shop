import Image from "next/image";

const ViewAllGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 clear-both">
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <Image
            width={200}
            height={200}
            src={item.image}
            alt={item.title}
            className="w-40 h-40 rounded-full object-cover"
          />
          <p className="text-center mt-2 text-lg font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewAllGrid;
