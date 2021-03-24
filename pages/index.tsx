import Layout from "../components/Layout"
import PhotoStoryCard from "../components/PhotoStoryCard/PhotoStoryCard"
import StoryCard from "../components/StoryCard/StoryCard"

const IndexPage = () => {
  return (
    <>
      <Layout title="Photosnap">
        <PhotoStoryCard
          image="/clouds.png"
          title="Create and share your photo stories."
          desc="Photosnap is a platform for photographers and visual storytellers. We make it easy
          to share photos, tell stories and connect with others."
          reverse={false}
          bg="black"
        />

        <PhotoStoryCard
          image="/laptop.png"
          title="BEAUTIFUL STORIES EVERY TIME"
          desc="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          reverse={true}
          bg="white"
        />

        <PhotoStoryCard
          image="/photographer.png"
          title="DESIGNED FOR EVERYONE"
          desc="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
          reverse={false}
          bg="white"
        />
        <div className="h-[4000px] md:h-[1000px] lg:h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <StoryCard title="The Mountains" author="by John Appleseed" image="/mountain.png" />
          <StoryCard title="Sunset Cityscapes" author="by Benjamin Cruz" image="/city.png" />
          <StoryCard title="18 Days Voyage" author="by Alexei Borodin" image="/walking.png" />
          <StoryCard title="Architecturals" author="by Samantha Brooke" image="/building.png" />
        </div>
      </Layout>
    </>
  )
}
export default IndexPage
