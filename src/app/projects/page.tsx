import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Pages';

export default function Projects() {
  return (
    <>
      <Header />
      <Banner
        title="Projects"
        subtitle="Explore our featured projects"
        imageUrl="https://res.cloudinary.com/dc2xfaobx/image/upload/v1767164166/banner-pages_zprf9f.jpg"
        height={320}
      />
      <main className="max-w-400 mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-lg">Take a look at some of the projects that demonstrate our expertise and commitment to quality.</p>
      </main>
      <Footer />
    </>
  );
}
