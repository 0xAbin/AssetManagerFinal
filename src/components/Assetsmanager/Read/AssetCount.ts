import { publicClient } from "@/lib/vimConfig";
import { assetmanagerAbi } from "@/lib/AssetManager";
import { address } from "@/lib/contracts";

export const getAssetCount = async () => {
  try {
    const response = await publicClient.readContract({
      address: address,
      abi: assetmanagerAbi,
      functionName: "assetCount",
    });
    console.log(response)
    return response;
  } catch (error) {
    console.error("Error fetching asset count:", error);
    throw error;
  }
};
