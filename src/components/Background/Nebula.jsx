function Nebula() {
  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden">

        <div
          className="
          absolute
          top-[-200px]
          left-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[140px]
          bg-purple-700/20
          animate-pulse
        "
        />

        <div
          className="
          absolute
          bottom-[-250px]
          right-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[140px]
          bg-pink-600/20
          animate-pulse
        "
        />

      </div>
    </>
  );
}

export default Nebula;