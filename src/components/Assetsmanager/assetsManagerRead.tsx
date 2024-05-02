import { useEffect, useState } from 'react';
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { getOwner } from "./Read/Owner";
import { getAssetCount } from "./Read/AssetCount";
import AllowedChainid from "./AssetManager/AllowedChainid";
import CryptoAssets from "./AssetManager/CryptoAssets";

const AssetManagerRead = () => {
  const [owner, setOwner] = useState(null);
  const [assetCount, setAssetCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ownerData = await getOwner();
        setOwner(ownerData);

        const assetCountData = await getAssetCount();
        setAssetCount(assetCountData.toString());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-start">
          {/* Read */}
          <Card className="w-auto">
            <CardHeader>
              <CardDescription className="mt-4 gap-2 flex flex-col">
                <p>
                  Owner = <span className="text-slate-300">{owner}</span>
                </p>
                <p>
                  Asset Count = <span className="text-slate-300">{assetCount}</span>
                </p>
              </CardDescription>
            </CardHeader>
            {/* All components here */}
            <AllowedChainid />
            <CryptoAssets />
          </Card>
        </div>
      </div>
    </>
  );
};

export default AssetManagerRead;
