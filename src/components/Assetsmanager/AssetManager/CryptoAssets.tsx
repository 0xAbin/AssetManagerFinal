import { CardContent } from "@/components/ui/card";
import { getCryptoAssets } from "../Read/CryptoAssets";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CryptoAssets = () => {
  const [cryptoAssetid, setCryptoAssetid] = useState("1");
  const [cryptoAsset, setCryptoAsset] = useState(null);

  const handelCrytoAssetSubmit = async () => {
    try {
      const response = await getCryptoAssets(cryptoAssetid);
      if (response && 'id' in response && 'isWhitelisted' in response &&
          'assetTickName' in response && 'intitalPrice' in response &&
          'TOKEN_DECIMALS_PRECISION' in response && 'TOKEN_PRICE_PRECISION' in response &&
          'isIsolatedPoolAllowed' in response && 'isSharedPoolAllowed' in response &&
          'isDecentralisedSourceEnabled' in response && 'isCentralisedSourceEnabled' in response) {
        setCryptoAsset(response);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error fetching crypto assets:', error);
    }
  };

  return (
    <>
      <CardContent className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground flex gap-2 ">
          Crypto Assets{" "}
          <span className="text-slate-300 flex items-center ">
            <Input
              value={cryptoAssetid}
              onChange={(e) => setCryptoAssetid(e.target.value)}
              placeholder="enter Asset Id"
            />
          </span>
          <Button className="h-6" onClick={handelCrytoAssetSubmit}>
            Submit
          </Button>
        </p>
        {cryptoAsset && (
          <>
            <p className="text-sm text-muted-foreground flex gap-2">
              Id :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.id}
              </span>
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              Is Whitelisted :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.isWhitelisted}
              </span>
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              Asset TickName :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.assetTickName}
              </span>
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              Intital Price :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.intitalPrice}
              </span>
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              Token Decimals Precision :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.TOKEN_DECIMALS_PRECISION}
              </span>
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              Token Price Precision :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.TOKEN_PRICE_PRECISION}
              </span>
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              Is Isolated Pool Allowed :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.isIsolatedPoolAllowed}
              </span>
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              Is Shared Pool Allowed :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.isSharedPoolAllowed}
              </span>
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              Is Decentralised Source Enabled :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.isDecentralisedSourceEnabled}
              </span>
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              IsCentralised Source Enabled :{" "}
              <span className="text-slate-300 flex items-center ">
                {cryptoAsset?.isCentralisedSourceEnabled}
              </span>
            </p>
          </>
        )}
      </CardContent>
    </>
  );
};

export default CryptoAssets;