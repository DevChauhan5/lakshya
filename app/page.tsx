import About from "@/components/About";

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <h1
          className={`absolute top-[45%] left-1/2 text-9xl transform -translate-x-1/2 -translate-y-1/2 text-white`}
        >
          Lakshya'24
        </h1>
        <div className="absolute inset-0 opacity-20">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/main-back.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <About />
    </>
  );
}


