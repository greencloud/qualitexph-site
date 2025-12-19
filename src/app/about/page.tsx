import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Pages';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function About() {
  return (
    <>
      <Header />
      <Banner
        title="About Us"
        subtitle="Driven by your needs, guided by experience"
        imageUrl="/banner-pages.webp"
        height={300}
      />
      <main className="max-w-375 mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:gap-8 mb-8">
          <div className="w-full md:w-1/4">
            <Image
              src="/about-us.webp"
              alt="About Us"
              width={400}
              height={400}
              className="w-full h-auto mb-8 rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-3/4">
            <p className="text-md"><strong>{siteConfig.brand}</strong> was established in December 1999 in response to the growing pressures of globalization, particularly within the manufacturing and service industries. In the past, a company could feel secure if it was competitive in any one of these areas: cost and productivity, quality and service, or speed and flexibility. Today, long-term success requires excellence in all three. Businesses must deliver high-quality products, provide fast and responsive service, and do so at a relatively low cost.</p>

            <h3 className="text-2xl font-semibold mt-6 mb-4">Our Mission</h3>
            <p className="text-md">To assist and empower organizations in achieving global recognition and success, we provide comprehensive support in the design, development and implementation of various Management Systems based on international standards, tailored to meet their specific requirements. This approach enables them to effectively compete in a globalized market by: (1), Bridging the gap between theory and application, and (2), Integrating human and technological resources to balance individual and total system needs.</p>

            <h3 className="text-2xl font-semibold mt-6 mb-4">Our Vision</h3>
            <p className="text-md">{siteConfig.brand} is a leader, customer focused consulting company, well admired by its clients, and a benchmark of speed, flexibility and consistency among all the business and management consulting firms in the Philippines.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Meet Our Dedicated Team</h2>
        <p className="text-md">Etiam ultricies magna erat, at suscipit metus porta interdum. Proin volutpat scelerisque lacus lobortis commodo. Curabitur egestas iaculis fermentum. Mauris auctor sapien a nulla facilisis, at mollis lacus imperdiet. Quisque quis congue nisl. Donec lacinia ipsum turpis, sed placerat ligula mollis nec. Ut dapibus, lorem sit amet auctor hendrerit, enim nulla laoreet nulla, a commodo quam diam pretium mauris. Phasellus ut nulla lorem.</p>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="w-full mb-8 border border-gray-300 p-5">
            <Image
              src="/personnel/sample1.webp"
              alt="Our Mission"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">John Doe</h3>
            <p className="text-md">Chief Executive Officer</p>
            <p><i>When he's not working, he enjoys mountain climbing and spending quality time with his one and only child.</i></p>
          </div>
          <div className="w-full mb-8 border border-gray-300 p-5">
            <Image
              src="/personnel/sample2.webp"
              alt="Our Vision"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Jane Smith</h3>
            <p className="text-md">Chief Operating Officer</p>
            <p><i>In her free time, she loves painting and taking long walks in the park to recharge her creativity.</i></p>
          </div>
          <div className="w-full mb-8 border border-gray-300 p-5">
            <Image
              src="/personnel/sample3.webp"
              alt="Our Vision"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Alice Johnson</h3>
            <p className="text-md">Chief Financial Officer</p>
            <p><i>When she's off the clock, she can be found exploring new recipes or curled up with a good book.</i></p>
          </div>
          <div className="w-full mb-8 border border-gray-300 p-5">
            <Image
              src="/personnel/sample4.webp"
              alt="Our Vision"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Cindy Williams</h3>
            <p className="text-md">Chief Technology Officer</p>
            <p><i>Outside of work, she enjoys volunteering at the local animal shelter and weekend bike rides.</i></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
