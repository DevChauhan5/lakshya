import { Bebas_Neue } from "next/font/google"

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
})

const Hero = () => {
  return (
    <section id="hero" className="overflow-hidden relative w-ful h-screen">
      <video
      src="https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761"
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
      >
      </video>
      <div className="absolute top-0 left-0 right-0 h-full text-[25vw] select-none bg-black mix-blend-multiply">
        <h1 className={`${bebas.className} text-white `}>Lakshya'24</h1>
      </div>
    </section>
  )
}

export default Hero