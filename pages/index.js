import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>PocketGuruAI: Mindfulness & Meditation App | Coming Soon!</title>
        <meta
          name="description"
          content="PocketGuruAI: Revolutionizing mental wellness with AI-driven guidance. Transforming support services. Coming soon to App Store & Google Play."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Revolutionizing Mental Wellness"
        title="Welcome to PocketGuruAI"
      >
        Transform your mental health with PocketGuruAI, an AI-powered app designed to provide personalized guidance and support for mindfulness and meditation practices. Join us in revolutionizing the way we approach mental well-being.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a Demo"
        title="See PocketGuruAI in Action"
      >
        Experience the power of PocketGuruAI through our demo video. Discover how our app can help you achieve mental clarity, reduce stress, and enhance overall well-being.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="What Our Users Say"
        title="Testimonials"
      >
        Hear from our users about their transformative journey with PocketGuruAI. Join the community and be a part of this positive change in mental health support.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Have questions? We have answers. Explore our FAQs to learn more about PocketGuruAI and how it can benefit you on your path to improved mental well-being.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
