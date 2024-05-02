
import { CardContent } from "@/components/ui/card";

import { getAllowedChainids } from "../Read/AllowedChainid";

const AllowedChainid = () => {
  return (
    <>
      <CardContent className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground flex gap-2  ">
          Allowed Chain Id  =
          <span className="text-slate-300 flex items-center ">
            {getAllowedChainids.toString()}
          </span>
        </p>
      </CardContent>
    </>
  );
};
export default AllowedChainid;
