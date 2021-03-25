import Image from "next/image"
import * as React from "react"
import Button from "../components/Button/Button"
import FeaturesCard from "../components/FeaturesCard/FeaturesCard"
import Layout from "../components/Layout"
import PhotoStoryCard from "../components/PhotoStoryCard/PhotoStoryCard"

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  return (
    <Layout title="Photosnap | Features">
      <PhotoStoryCard
        image="/photog-view.png"
        title="Features"
        desc="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        reverse={false}
        bg="black"
      />
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center py-20 space-y-7 md:space-y-0">
        <FeaturesCard
          title="100% Responsive"
          desc="No matter which the device you’re on, our site is fully responsive and stories look
              beautiful on any screen."
          image="/responsive.svg"
        />
        <FeaturesCard
          title="No Photo Upload Limit"
          desc="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of
          your stories in one go."
          image="/forever.svg"
        />
        <FeaturesCard
          title="Available to Embed"
          desc="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps,
          and more."
          image="/embed.svg"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center py-20 space-y-7 md:space-y-0">
        <FeaturesCard
          title="Custom Domain"
          desc="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
          image="/web.svg"
        />
        <FeaturesCard
          title="Boost Your Exposure"
          desc="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
          image="/boost.svg"
        />
        <FeaturesCard
          title="Drag & Drop Image"
          desc="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
          image="/drag-drop.svg"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row h-full relative text-white">
        <div className="w-full h-full items-center flex order-1 md:order-none">
          <div className="w-full h-full relative">
            <div className="aspect-w-4 aspect-h-3 md:aspect-w-12 md:aspect-h-4  lg:aspect-w-16 lg:aspect-h-3 relative">
              <Image
                src="/desert.jpg"
                layout="fill"
                objectFit="cover"
                className="z-0"
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="text-white w-full h-full z-30 flex flex-col md:flex-row justify-between items-center absolute py-3 px-10 space-y-1">
          <div className="md:w-1/2 w-full flex items-center justify-center h-full">
            <h4 className="text-5xl w-10/12 md:w-8/12 mx-auto  font-extrabold">
              We’re in beta. Get your invite today!
            </h4>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Button text="get an invite" arrow="white" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Features
