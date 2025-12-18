import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Pages';
import { siteConfig } from '@/config/site';

export default function About() {
  return (
    <>
      <Header />
      <Banner
        title="About Us"
        subtitle="Who we are and what we do best"
        imageUrl="/banner-pages.webp"
        height={300}
      />
      <main className="max-w-375 mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">About {siteConfig.brand}</h2>
        <p className="text-md">{siteConfig.brand} is dedicated to providing high-quality textile solutions. Our team is passionate about innovation and excellence in the textile industry. Cras mollis, nulla sit amet mattis dapibus, metus libero tincidunt nisi, rhoncus molestie ligula turpis ut dolor. Quisque porttitor leo sed neque dapibus, eget sollicitudin lorem semper. Donec in augue sagittis, rhoncus diam vitae, ultrices elit. Vestibulum euismod, felis et tincidunt euismod, neque sem tincidunt metus, eu cursus nisl est eu mi. Phasellus sodales leo urna, quis mattis ante volutpat id. Proin gravida eleifend tempor. Phasellus euismod ipsum nisi, accumsan efficitur magna tristique sed. Phasellus malesuada nisi lorem, a dapibus neque sagittis vitae. Pellentesque gravida, leo a tincidunt pellentesque, ante elit efficitur quam, id rutrum purus sem vel dui.</p>

        <p className="text-md">Etiam ultricies magna erat, at suscipit metus porta interdum. Proin volutpat scelerisque lacus lobortis commodo. Curabitur egestas iaculis fermentum. Mauris auctor sapien a nulla facilisis, at mollis lacus imperdiet. Quisque quis congue nisl. Donec lacinia ipsum turpis, sed placerat ligula mollis nec. Ut dapibus, lorem sit amet auctor hendrerit, enim nulla laoreet nulla, a commodo quam diam pretium mauris. Phasellus ut nulla lorem. Maecenas vulputate, nulla at ullamcorper accumsan, mauris nibh luctus nisl, vel viverra nibh lacus eget nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis ante volutpat, rutrum ex eget, dapibus metus. Cras consectetur bibendum nisi, et suscipit purus porttitor vel. Integer rutrum quam eget sem aliquet, sit amet iaculis nulla tincidunt. Nunc iaculis risus ut magna laoreet, in hendrerit lorem dignissim.</p>
      </main>
      <Footer />
    </>
  );
}
