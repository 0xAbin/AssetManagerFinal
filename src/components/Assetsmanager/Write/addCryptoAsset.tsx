import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  type BaseError,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { assetmanagerAbi } from "@/lib/AssetManager";
import { address , hashLinkExplorer } from "@/lib/contracts";
import { convertToBytes32 } from "@/lib/Bytes32toString";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";



const AddCryptoAsset = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const [assetId, setAssetId] = useState("");
  const [minLiqReq, setMinLiqReq] = useState("");
  const [minliqReq2, setMinliqReq2] = useState("");
  const [minliqReq3, setMinliqReq3] = useState("");
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [assetTickName, setAssetTickName] = useState("");
  const [chainIdAllowed, setChainIdAllowed] = useState("");
  const [assetAddressByChainId, setAssetAddressByChainId] = useState(
    "0x160703AbBa9F8D2Ae03Cc14C2Ec1e646b896D768"
  );
  const [initialPrice, setInitialPrice] = useState("");
  const [tokenDecimalsPrecision, setTokenDecimalsPrecision] = useState("");
  const [tokenPricePrecision, setTokenPricePrecision] = useState("");
  const [isIsolatedPoolAllowed, setIsIsolatedPoolAllowed] = useState(false);
  const [isSharedPoolAllowed, setIsSharedPoolAllowed] = useState(false);
  const [isDecentralisedSourceEnabled, setIsDecentralisedSourceEnabled] =
    useState(false);
  const [isCentralisedSourceEnabled, setIsCentralisedSourceEnabled] =
    useState(false);

  const assetTuples = [
    parseInt(assetId),
    [minLiqReq, minliqReq2, minliqReq3],
    isWhitelisted,
    convertToBytes32(assetTickName),
    [parseInt(chainIdAllowed)],
    [assetAddressByChainId],
    parseInt(initialPrice),
    parseInt(tokenDecimalsPrecision),
    parseInt(tokenPricePrecision),
    isIsolatedPoolAllowed,
    isSharedPoolAllowed,
    isDecentralisedSourceEnabled,
    isCentralisedSourceEnabled,
  ];
  console.log("Asset Tuples", assetTuples);

  //for Risk Props
  const [maxLeverageFactor, setMaxLeverageFactor] = useState("");
  const [minLeverageFactor, setMinLeverageFactor] = useState("");
  const [leverageFactorPrecision, setLeverageFactorPrecision] = useState("");
  const [positionSizeReserveFactor, setPositionSizeReserveFactor] =
    useState("");
  const [positionReserveFactorPrecision, setPositionReserveFactorPrecision] =
    useState("");
  const [maxPositionSizeInUSD, setMaxPositionSizeInUSD] = useState("");
  const [maxPositionPnlFactor, setMaxPositionPnlFactor] = useState("");
  const [maxGlobalPnlFactor, setMaxGlobalPnlFactor] = useState("");
  const [pnlFactorPrecision, setPnlFactorPrecision] = useState("");

  const riskProps = [
    parseInt(maxLeverageFactor),
    parseInt(minLeverageFactor),
    parseInt(leverageFactorPrecision),
    parseInt(positionSizeReserveFactor),
    parseInt(positionReserveFactorPrecision),
    parseInt(maxPositionSizeInUSD),
    parseInt(maxPositionPnlFactor),
    parseInt(maxGlobalPnlFactor),
    parseInt(pnlFactorPrecision),
  ];
  console.log("Risk Props", riskProps);

  //for trade props

  const [isShortable, setIsShortable] = useState(false);
  const [isStable, setIsStable] = useState(false);
  const [isLongable, setIsLongable] = useState(false);
  const [isCollateral, setIsCollateral] = useState(false);
  const [isReference, setIsReference] = useState(false);

  const tradeProps = [
    isShortable,
    isStable,
    isLongable,
    isCollateral,
    isReference,
  ];
  console.log("tradeprops", tradeProps);

  //for market props

  const [isSwapEnabled, setIsSwapEnabled] = useState(false);
  const [isMarginTradingEnabled, setIsMarginTradingEnabled] = useState(false);

  const marketProps = [isSwapEnabled, isMarginTradingEnabled];
  console.log(marketProps);

  async function addCryptoAsset(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const write = await writeContract({
      address: address,
      abi: assetmanagerAbi,
      functionName: "addCryptoAsset",
      args: [assetTuples, riskProps, tradeProps, marketProps],
    });
    write;
    toast.info("Sign Transaction");
  }

  const handleToast = (message: string, type = "default") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast.info(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      default:
        toast(message);
    }
    return null;
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <>
      <div>
        <CardContent className="flex flex-col gap-3">
          <h2 className="text-zinc-200 mb-3">Add Crypto Assets</h2>
          <Separator />
          <form className="flex  flex-col gap-3" onSubmit={addCryptoAsset}>
            <h3 className="text-green-300">Asset Tuples</h3>
            <p className="text-sm  flex gap-2 ">
              Id
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="CryptoTupls"
                  placeholder="uint256"
                  value={assetId}
                  onChange={(e) => setAssetId(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* //minliq Req for eq */}
            <p className="text-sm  flex gap-2 ">
              Min Liq Req For Execution
              <span className="text-slate-300 flex items-center ">
                <Popover>
                  <PopoverTrigger>Open</PopoverTrigger>
                  <PopoverContent>
                    <Input
                      name="CryptoTupls"
                      placeholder="uint256"
                      value={minLiqReq}
                      onChange={(e) => setMinLiqReq(e.target.value)}
                      required
                    />
                    <Input
                      name="CryptoTupls"
                      placeholder="uint256"
                      value={minliqReq2}
                      onChange={(e) => setMinliqReq2(e.target.value)}
                      required
                    />
                    <Input
                      name="CryptoTupls"
                      placeholder="uint256"
                      value={minliqReq3}
                      onChange={(e) => setMinliqReq3(e.target.value)}
                      required
                    />
                  </PopoverContent>
                </Popover>
              </span>
            </p>
            {/* is whitelisted Req for eq */}
            <p className="text-sm  flex gap-2 ">
              Is Whitelisted
              <span className="text-slate-300 flex items-center ">
                <Input
                  className="bg-background"
                  type="checkbox"
                  name="bool"
                  checked={isWhitelisted}
                  onChange={(e) => setIsWhitelisted(e.target.checked)}
                  
                />
              </span>
            </p>
            {/* asset TickName for eq */}
            <p className="text-sm  flex gap-2 ">
              Asset TickName
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="CryptoTupls"
                  placeholder="bytes32"
                  type="bytes32"
                  value={assetTickName}
                  onChange={(e) => setAssetTickName(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* chain Id Allowed */}
            <p className="text-sm  flex gap-2 ">
              Chain Id Allowed
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="chainIdAllowed"
                  placeholder="uint256[]"
                  value={chainIdAllowed}
                  onChange={(e) => setChainIdAllowed(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* Asset Address By ChainId */}
            <p className="text-sm  flex gap-2 ">
              Asset Address By ChainId
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="assetAddressByChainId"
                  placeholder="address[]"
                  value={assetAddressByChainId}
                  onChange={(e) => setAssetAddressByChainId(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* Intital Price */}
            <p className="text-sm  flex gap-2 ">
              Intital Price
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="intitalPrice"
                  placeholder="uint256"
                  value={initialPrice}
                  onChange={(e) => setInitialPrice(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* Token Decimals Precison */}
            <p className="text-sm  flex gap-2 ">
              Token Decimals Precision
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="TOKEN_DECIMALS_PRECISION"
                  placeholder="uint256"
                  value={tokenDecimalsPrecision}
                  onChange={(e) => setTokenDecimalsPrecision(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* Token Price Precison */}
            <p className="text-sm  flex gap-2 ">
              Token Price Precision
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="Token Price Precison "
                  placeholder="uint256"
                  value={tokenPricePrecision}
                  onChange={(e) => setTokenPricePrecision(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* Is Isolated PoolAllowed */}
            <p className="text-sm  flex gap-2 ">
              Is Isolated Pool Allowed
              <span className="text-slate-300 flex items-center ">
                <Input
                  type="checkbox"
                  name="isIsolatedPoolAllowed"
                  checked={isIsolatedPoolAllowed}
                  onChange={(e) => setIsIsolatedPoolAllowed(e.target.checked)}
                  required
                />
              </span>
            </p>
            {/* Is Shared Pool Allowed */}
            <p className="text-sm  flex gap-2 ">
              Is Shared Pool Allowed
              <span className="text-slate-300 flex items-center ">
                <Input
                  type="checkbox"
                  name="isSharedPoolAllowed"
                  checked={isSharedPoolAllowed}
                  onChange={(e) => setIsSharedPoolAllowed(e.target.checked)}
                  
                />
              </span>
            </p>
            {/* Is Decentralised SourceEnabled */}
            <p className="text-sm  flex gap-2 ">
              Is Decentralised Source Enabled
              <span className="text-slate-300 flex items-center ">
                <Input
                  type="checkbox"
                  name="isDecentralisedSourceEnabled"
                  checked={isDecentralisedSourceEnabled}
                  onChange={(e) =>
                    setIsDecentralisedSourceEnabled(e.target.checked)
                  }
                  
                />
              </span>
            </p>
            {/* Is Centralised SourceEnabled */}
            <p className="text-sm  flex gap-2 ">
              Is Centralised SourceEnabled
              <span className="text-slate-300 flex items-center ">
                <Input
                  type="checkbox"
                  name="isCentralisedSourceEnabled"
                  checked={isCentralisedSourceEnabled}
                  onChange={(e) =>
                    setIsCentralisedSourceEnabled(e.target.checked)
                  }
                  
                />
              </span>
            </p>
            <Separator />
            <h3 className="text-green-300">Risk Props</h3>
            <p className="text-sm  flex gap-2 ">
              Max Leverage Factor
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="MaxLeverageFactor"
                  placeholder="uint256"
                  value={maxLeverageFactor}
                  onChange={(e) => setMaxLeverageFactor(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* min lev fact */}
            <p className="text-sm  flex gap-2 ">
              Min Leverage Factor
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="MaxLeverageFactor"
                  placeholder="uint256"
                  value={minLeverageFactor}
                  onChange={(e) => setMinLeverageFactor(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* LEVERAGE_FACTOR_PRECISION */}
            <p className="text-sm  flex gap-2 ">
              Leverage Factor Precison
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="MaxLeverageFactor"
                  placeholder="uint256"
                  value={leverageFactorPrecision}
                  onChange={(e) => setLeverageFactorPrecision(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* Position Size Reserve Factor */}
            <p className="text-sm  flex gap-2 ">
              Position Size Reserve Factor
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="MaxLeverageFactor"
                  placeholder="uint256"
                  value={positionSizeReserveFactor}
                  onChange={(e) => setPositionSizeReserveFactor(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* POSITION_RESERVE_FACTOR_PRECISION */}
            <p className="text-sm  flex gap-2 ">
              Position Reserve Factor Precision
              <span className="text-slate-300 flex items-center ">
                <Input
                  name=" Position Reserve Factor Precision"
                  placeholder="uint256"
                  value={positionReserveFactorPrecision}
                  onChange={(e) =>
                    setPositionReserveFactorPrecision(e.target.value)
                  }
                  required
                />
              </span>
            </p>
            {/* MAX_POSITION_SIZE_IN_USD*/}
            <p className="text-sm  flex gap-2 ">
              Max Position Size In USD
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="Max Position Size In USD"
                  placeholder="uint256"
                  value={maxPositionSizeInUSD}
                  onChange={(e) => setMaxPositionSizeInUSD(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* MAX_POSITION_PNL_FACTOR*/}
            <p className="text-sm  flex gap-2 ">
              Max Position PNl Factor
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="Max Position Size In USD"
                  placeholder="uint256"
                  value={maxPositionPnlFactor}
                  onChange={(e) => setMaxPositionPnlFactor(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* MAX_GLOBAL_PNL_FACTOR*/}
            <p className="text-sm  flex gap-2 ">
              Max Global PNl Factor
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="MAX_GLOBAL_PNL_FACTOR"
                  placeholder="uint256"
                  value={maxGlobalPnlFactor}
                  onChange={(e) => setMaxGlobalPnlFactor(e.target.value)}
                  required
                />
              </span>
            </p>
            {/* PNL_FACTOR_PRECISION*/}
            <p className="text-sm  flex gap-2 ">
              PNl Factor Precision
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="PNL_FACTOR_PRECISION"
                  placeholder="uint256"
                  value={pnlFactorPrecision}
                  onChange={(e) => setPnlFactorPrecision(e.target.value)}
                  required
                />
              </span>
            </p>
            <Separator />
            <h3 className="text-green-300">Trade Props</h3>
            {/* is shortable  */}
            <p className="text-sm  flex gap-2 ">
              Is Shortable
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="PNL_FACTOR_PRECISION"
                  placeholder="uint256"
                  type="checkbox"
                  checked={isShortable}
                  onChange={(e) => setIsShortable(e.target.checked)}
             
                />
              </span>
            </p>
            {/* isStable  */}
            <p className="text-sm  flex gap-2 ">
              Is Stable
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="PNL_FACTOR_PRECISION"
                  placeholder="uint256"
                  type="checkbox"
                  checked={isStable}
                  onChange={(e) => setIsStable(e.target.checked)}
               
                />
              </span>
            </p>
            {/* isLongable */}
            <p className="text-sm  flex gap-2 ">
              Is Longable
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="PNL_FACTOR_PRECISION"
                  placeholder="uint256"
                  type="checkbox"
                  checked={isLongable}
                  onChange={(e) => setIsLongable(e.target.checked)}
                  
                />
              </span>
            </p>
            {/* isCollateral */}
            <p className="text-sm  flex gap-2 ">
              Is Collateral
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="PNL_FACTOR_PRECISION"
                  placeholder="uint256"
                  type="checkbox"
                  checked={isCollateral}
                  onChange={(e) => setIsCollateral(e.target.checked)}
                 
                />
              </span>
            </p>
            {/* isReference */}
            <p className="text-sm  flex gap-2 ">
              Is Reference
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="PNL_FACTOR_PRECISION"
                  placeholder="uint256"
                  type="checkbox"
                  checked={isReference}
                  onChange={(e) => setIsReference(e.target.checked)}
                 
                />
              </span>
            </p>
            <Separator />
            <h3 className="text-green-300">MarketProps</h3>
            {/* isSwapEnabled */}
            <p className="text-sm  flex gap-2 ">
              Is SwapEnabled
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="Is SwapEnabled"
                  placeholder="uint256"
                  type="checkbox"
                  checked={isSwapEnabled}
                  onChange={(e) => setIsSwapEnabled(e.target.checked)}
                  
                />
              </span>
            </p>
            {/* isMarginTradingEnabled */}
            <p className="text-sm  flex gap-2 ">
              Is Margin TradingEnabled
              <span className="text-slate-300 flex items-center ">
                <Input
                  name="isMarginTradingEnabled"
                  placeholder="uint256"
                  type="checkbox"
                  checked={isMarginTradingEnabled}
                  onChange={(e) => setIsMarginTradingEnabled(e.target.checked)}
                 
                />
              </span>
            </p>
            <Button
              disabled={isPending}
              type="submit"
              className="h-8 w-[100px] mt-4 flex"
            >
              {isPending ? "Confirming..." : "Submit"}
            </Button>
            {hash &&
              toast("Transaction Success", {
                action: {
                  label: `Explorer`,
                  onClick: () => window.open(`${hashLinkExplorer}${hash}`, '_blank')
                },
              })}
            {isConfirming && <div>Confirming</div>}
            {isConfirmed && <div>Confirmed</div>}
            {error &&
              handleToast(
                (error as BaseError).shortMessage || error.message,
                "error"
              )}
          </form>
        </CardContent>
      </div>
    </>
  );
};
export default AddCryptoAsset;
