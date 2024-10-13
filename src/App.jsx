import NavBar from './Components/NavBar'
import LandingMain from './Components/LandingMain'
import InfiniteScroller from './Components/InfiniteScroller'
import ProjectsCarousel from './Components/ProjectsCarousel'

function App() {
  return (
    <>
    <div className="min-h-screen h-full min-w-screen items-center px-[150px] py-0 bg-neutral-950
    bg-[radial-gradient(ellipse_60%_60%_at_50%_-30%,rgba(0,163,255,0.3),rgba(255,255,255,0))]
    phone:max-tablet:px-[30px]">
      <NavBar/>
      <LandingMain/>
      <InfiniteScroller word="Projects" delayTime={0.8}/>
      <ProjectsCarousel/>
      <InfiniteScroller word="Projects" delayTime={1}/>
      <div className='h-[25px]'></div>
    </div>
    </>
  )
}

export default App
