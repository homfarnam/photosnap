import Layout from "../components/Layout"
import PhotoStoryCard from "../components/PhotoStoryCard/PhotoStoryCard"

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
      </Layout>
    </>
  )
}
export default IndexPage
