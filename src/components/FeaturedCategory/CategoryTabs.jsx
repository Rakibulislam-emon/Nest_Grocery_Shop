import { Tab, TabGroup, TabList } from "@headlessui/react";

const CategoryTabs = ({ categories, setSelectedCategory }) => {
  return (
    <TabGroup>
      <TabList className="flex gap-4">
       
        {categories.map((category, idx) => (
          <Tab
            key={idx}
            className="data-[selected]:bg-green px-4 py-2 rounded-md data-[selected]:text-white data-[hover]:bg-green"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
};

export default CategoryTabs;
