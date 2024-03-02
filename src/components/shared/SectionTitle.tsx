type TTitle = {
  heading: string;
  subHeading?: string;
};

const SectionTitle = ({ heading, subHeading }: TTitle) => {
  return (
    <div className="md:w-4/12 mx-auto my-8 text-center">
      <h3 className="text-3xl uppercase border-y-4 border-slate-500 py-4 text-black">
        {heading}
      </h3>
      <p className="text-yellow-600 mb-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
