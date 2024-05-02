import { useState, useEffect } from 'react';
import { CardContent } from "@/components/ui/card";
import { getAllowedChainids } from "../Read/AllowedChainid";

const AllowedChainid = () => {
  const [allowedChainIds, setAllowedChainIds] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllowedChainids();
        setAllowedChainIds(data.toString());
      } catch (error) {
        console.error("Error fetching allowed chain IDs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CardContent className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground flex gap-2  ">
          Allowed Chain Id ={" "}
          <span className="text-slate-300 flex items-center ">
            {allowedChainIds}
          </span>
        </p>
      </CardContent>
    </>
  );
};

export default AllowedChainid;