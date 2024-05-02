import { publicClient } from "@/lib/vimConfig";
import { assetmanagerAbi } from "@/lib/AssetManager";
import { address } from "@/lib/contracts";

export const getAssetCount = await publicClient.readContract({
  address: address,
  abi: assetmanagerAbi,
  functionName: "assetCount",
});
