import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Pages';
import BrandSlider from '@/components/Slideshow';
import { siteConfig } from '@/config/site';
import { CheckLine } from 'lucide-react';

export default function Milestone() {
  return (
    <>
      <Header />
      <Banner
        title="Milestone"
        subtitle="Our journey, focused on delivering value to you"
        imageUrl="https://res.cloudinary.com/dc2xfaobx/image/upload/v1767164166/banner-pages_zprf9f.jpg"
        height={320}
      />
      <main className="max-w-375 mx-auto px-6 py-12">
        <div className="text-center mb-6 mt-10">
          <h2 className="text-3xl font-bold mb-4">A nationwide leader in quality services for over 25 years.</h2>
          <p className="text-lg">Proin ut posuere diam. Nam at urna vitae sem fringilla molestie non sollicitudin sapien. Donec sit amet tristique dui.</p>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full p-8">
              <div className="flex flex-wrap gap-1 justify-center items-center">
                <div className="flex items-center justify-center border border-gray-400 h-16 w-16">
                  <CheckLine className="block text-orange-400" size={45} />
                </div>
                <div className="flex bg-blue-950 text-4xl text-white font-(family-name:--font-baskerville) border border-blue-900 px-6 h-16 w-3xs items-center justify-center-safe">Luzon</div>
              </div>
            </div>
            <div className="w-full p-8">
              <div className="flex flex-wrap gap-1 justify-center items-center">
                <div className="flex items-center justify-center border border-gray-400 h-16 w-16">
                  <CheckLine className="block text-orange-400" size={45} />
                </div>
                <div className="flex bg-blue-950 text-4xl text-white font-(family-name:--font-baskerville) border border-blue-900 px-6 h-16 w-3xs items-center justify-center-safe">Visayas</div>
              </div>
            </div>
            <div className="w-full p-8">
              <div className="flex flex-wrap gap-1 justify-center items-center">
                <div className="flex items-center justify-center border border-gray-400 h-16 w-16">
                  <CheckLine className="block text-orange-400" size={45} />
                </div>
                <div className="flex bg-blue-950 text-4xl text-white font-(family-name:--font-baskerville) border border-blue-900 px-6 h-16 w-3xs items-center justify-center-safe">Mindanao</div>
              </div>
            </div>
          </div>
        </div>

        <BrandSlider />

        <h2 className="text-3xl font-bold mb-4">{siteConfig.brand} Milestone</h2>
        <p className="text-md">Discover the key milestones that have shaped QualiTexPH's growth and success. Fusce pulvinar purus sit amet ligula feugiat, eu viverra risus auctor. Aenean ac mattis augue. Mauris vulputate porta diam a faucibus. Suspendisse vitae risus sit amet tellus efficitur laoreet. Pellentesque vestibulum ligula eros, vitae porta nulla interdum id. Suspendisse condimentum, erat at hendrerit tincidunt, nisl odio sollicitudin orci, ac venenatis elit velit nec urna. Donec sit amet tristique dui. Morbi laoreet lorem a ligula aliquet, sollicitudin sollicitudin ex commodo. Maecenas metus nulla, aliquam et semper ut, porta a magna. Vivamus a ligula nec justo tincidunt dictum. Suspendisse massa sapien, cursus et porttitor ut, feugiat quis est. Phasellus a eros fermentum, vestibulum diam vitae, aliquam mi. Curabitur maximus fermentum eros ut aliquam. Nulla cursus scelerisque commodo.</p>

        <p className="text-md">Proin ut posuere diam. Nam at urna vitae sem fringilla molestie non sollicitudin sapien. Nulla tortor magna, malesuada at justo vel, dictum fermentum justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor id diam non imperdiet. Phasellus vehicula lacinia turpis, eget imperdiet est ullamcorper volutpat. Fusce cursus porttitor magna sit amet vestibulum. Curabitur sodales interdum egestas. Maecenas vel finibus dui, vel posuere quam. Maecenas ultrices lectus ut erat ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, tempus eu sapien nec, sollicitudin consequat odio. Integer eget aliquam urna. Nunc in urna id tortor posuere vehicula eget vitae velit. Maecenas ullamcorper laoreet felis non mattis. Aliquam id dictum neque, vitae consectetur tellus.</p>
      </main>
      <Footer />
    </>
  );
}
