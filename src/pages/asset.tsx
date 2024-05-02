import AssetManagerWrite from "@/components/Assetsmanager/assetManagerWrite";
import AssetManagerRead from "@/components/Assetsmanager/assetsManagerRead";


const Asset = () => {
  return (
    <>
      <div className="flex items-center justify-start px-20">
        <h1 className="text-xl mt-6 mb-12">Asset Manager</h1>

      </div>

      <div className="flex flex-col gap-3 mb-12 px-20">
       <h3>Basic Info</h3>
       <div className="flex flex-col gap-6 md:flex-row  md:justify-between">
       <AssetManagerRead  />
       <AssetManagerWrite/>
       </div>
       
      </div>
    </>
  );
};

export default Asset;
