function Stars() {
  return (
    <div className="fixed inset-0 -z-40 pointer-events-none">

      {[...Array(120)].map((_, i) => (

        <span
          key={i}
          className="absolute rounded-full bg-white opacity-80 animate-pulse"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />

      ))}

    </div>
  );
}

export default Stars;