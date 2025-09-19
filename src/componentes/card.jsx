export function Card({ item }) {
  

  return (
    <div className="
    relative
    group w-[200px]
    h-[360px]
    border-2
    border-neutral-300
    rounded-md
    shadow-sm
    hover:scale-105
    duration-300
    hover:shadow-2xl 
    hover:shadow-black 
    overflow-hidden">

      
       
     <img
          className="
          absolute 
          top-0 
          left-0 
          w-full 
          h-full 
          object-cover"
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        />
      

      
      <h3 className="
      absolute 
      top-0 
      left-0 
      w-full 
      text-center 
      text-white 
      font-bold 
      text-sm 
      z-10 
      px-2 
      py-1 
      font-sans 
      drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] 
      bg-black/50 ">
        {item?.title}
      </h3>

      <div className="absolute 
      bottom-0 
      left-0 
      w-full 
      h-[70%] 
      bg-black/50 
      text-white 
      text-xs 
      p-2 
      overflow-y-auto 
      translate-y-full 
      group-hover:opacity-100 
      group-hover:translate-y-0 
      transition-all 
      duration-500">
        {item?.overview}
      </div>
    </div>
  );
}



