import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { getOwner } from "./Read/Owner";
import { getAssetCount } from "./Read/AssetCount";
import AllowedChainid from "./AssetManager/AllowedChainid";
import CryptoAssets from "./AssetManager/CryptoAssets";

const AssetManagerRead = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-start">
          {/* Read */}
          <Card className="w-auto">
            <CardHeader>
              <CardDescription className="mt-4 gap-2 flex flex-col">
                <p>
                  Owner ={" "}
                  <span className="text-slate-300">{getOwner.toString()} </span>
                </p>
                <p>
                  Asset Count ={" "}
                  <span className=" text-slate-300">
                    {getAssetCount.toString()}
                  </span>{" "}
                </p>
              </CardDescription>
            </CardHeader>
            {/* all componnets here  */}
            <AllowedChainid />
            <CryptoAssets/>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AssetManagerRead;
