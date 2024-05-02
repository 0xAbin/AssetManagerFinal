import { publicClient } from '@/lib/vimConfig'
import { assetmanagerAbi } from '@/lib/AssetManager'
import { address } from '@/lib/contracts'
 
export const getOwner = async () => {
  try {
    const response = await publicClient.readContract({
      address: address,
      abi: assetmanagerAbi,
      functionName: "owner",
    });
    return response;
  } catch (error) {
    console.error("Error fetching owner:", error);
    throw error; 
  }
}