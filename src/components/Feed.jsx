import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  // return (
  //   <div className="flex flex-row h-[calc(100%-56px)] ">
  //     <LeftNav />
  //     <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black  ">
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
  //         {searchResults.map((item) => {
  //           if (item.type !== "video") return false;
  //           return (
  //             <VideoCard key={item?.video?.videoId} video={item?.video} />
  //           );
  //         })}
            
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-row h-[calc(100%-56px)] ">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black  ">
        {loading ? (
          <p>Loading...</p>
        ) : Array.isArray(searchResults) && searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
            {searchResults.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
          </div>
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
  
};

export default Feed;
// import React from 'react'

// const Feed = () => {
//   return (
//     <div>Feed</div>
//   )
// }

// export default Feed
