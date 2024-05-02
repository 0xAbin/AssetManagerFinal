import TransferOwner from "./Write/transferOwner";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import RenounceOwnerShip from "./Write/renounceOwnership";
import AddCryptoAsset from "./Write/addCryptoAsset";

const AssetManagerWrite = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col gap-3 justify-start">
          {/* Write */}
          <h3>Write</h3>
          <Card className="w-auto">
            <CardHeader>
              <CardDescription className="mt-4 gap-2 flex flex-col">
                <RenounceOwnerShip />
                <TransferOwner />
              </CardDescription>
            </CardHeader>
            {/* all componnets here  */}
          </Card>
          <Card className="w-auto">
            <CardHeader>
              <CardDescription className="mt-4 gap-2 flex flex-col">
                <AddCryptoAsset />
              </CardDescription>
            </CardHeader>
            {/* all componnets here  */}
          </Card>
        </div>
      </div>
    </>
  );
};

export default AssetManagerWrite;
