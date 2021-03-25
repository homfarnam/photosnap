import Layout from "../components/Layout"
import StoryCard from "../components/StoryCard/StoryCard"
import StorySlide from "../components/StorySlide/StorySlide"
import useWindowSize from "../hooks/useWindowSize"

interface StoriesProps {}

const Stories: React.FC<StoriesProps> = () => {
  const size: number = useWindowSize()
  return (
    <Layout title="Photosnap | Stories">
      <StorySlide />

      <div className="h-[4000px] md:h-[1000px] lg:h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StoryCard title="The Mountains" author="by John Appleseed" image="/mountain.png" />
        <StoryCard title="Sunset Cityscapes" author="by Benjamin Cruz" image="/city.png" />
        <StoryCard title="18 Days Voyage" author="by Alexei Borodin" image="/walking.png" />
        <StoryCard title="Architecturals" author="by Samantha Brooke" image="/building.png" />
      </div>
      <div className="h-[4000px] md:h-[1000px] lg:h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StoryCard title="World Tour 2019" author="by Timothy Wagner" image="/light-mountain.png" />
        <StoryCard title="Unforeseen Corners" author="by William Malcolm" image="/sunset.png" />
        <StoryCard title="King on Africa: Part II" author="by Tim Hillenburg" image="/lion.png" />
        <StoryCard title="The Trip to Nowhere" author="by Felicia Rourke" image="/tree.png" />
      </div>
      <div className="h-[4000px] md:h-[1000px] lg:h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StoryCard title="Rage of The Sea" author="by Mohammed Abdul" image="/sunrise.png" />
        <StoryCard title="Running Free" author="by Michelle" image="/horse.png" />
        <StoryCard title="Behind the Waves" author="by Lamarr Wilson" image="/sea.png" />
        <StoryCard title="Calm Waters" author="by Samantha Brooke" image="/red-sunset.png" />
      </div>
      <div className="h-[4000px] md:h-[1000px] lg:h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StoryCard title="The Milky Way" author="by Benjamin Cruz" image="/galaxy.png" />
        <StoryCard
          title="Night at The Dark Forests"
          author="by  Mohammed Abdul"
          image="/snow-mountain.png"
        />
        <StoryCard title="Somwarpet’s Beauty" author="by Michelle" image="/flower.png" />
        <StoryCard title="Land of Dreams" author="by William Malcolm" image="/snow-home.png" />
      </div>
    </Layout>
  )
}

export default Stories
