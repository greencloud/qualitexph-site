import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Pages';

export default function Milestone() {
  return (
    <>
      <Header />
      <Banner
        title="Milestone"
        subtitle="Our journey and achievements"
        imageUrl="/banner-pages.webp"
        height={300}
      />
      <main className="max-w-375 mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">QualiTex Milestone</h2>
        <p className="text-md">Discover the key milestones that have shaped QualiTexPH's growth and success. Fusce pulvinar purus sit amet ligula feugiat, eu viverra risus auctor. Aenean ac mattis augue. Mauris vulputate porta diam a faucibus. Suspendisse vitae risus sit amet tellus efficitur laoreet. Pellentesque vestibulum ligula eros, vitae porta nulla interdum id. Suspendisse condimentum, erat at hendrerit tincidunt, nisl odio sollicitudin orci, ac venenatis elit velit nec urna. Donec sit amet tristique dui. Morbi laoreet lorem a ligula aliquet, sollicitudin sollicitudin ex commodo. Maecenas metus nulla, aliquam et semper ut, porta a magna. Vivamus a ligula nec justo tincidunt dictum. Suspendisse massa sapien, cursus et porttitor ut, feugiat quis est. Phasellus a eros fermentum, vestibulum diam vitae, aliquam mi. Curabitur maximus fermentum eros ut aliquam. Nulla cursus scelerisque commodo.</p>

        <p className="text-md">Proin ut posuere diam. Nam at urna vitae sem fringilla molestie non sollicitudin sapien. Nulla tortor magna, malesuada at justo vel, dictum fermentum justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor id diam non imperdiet. Phasellus vehicula lacinia turpis, eget imperdiet est ullamcorper volutpat. Fusce cursus porttitor magna sit amet vestibulum. Curabitur sodales interdum egestas. Maecenas vel finibus dui, vel posuere quam. Maecenas ultrices lectus ut erat ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, tempus eu sapien nec, sollicitudin consequat odio. Integer eget aliquam urna. Nunc in urna id tortor posuere vehicula eget vitae velit. Maecenas ullamcorper laoreet felis non mattis. Aliquam id dictum neque, vitae consectetur tellus.</p>
      </main>
      <Footer />
    </>
  );
}
