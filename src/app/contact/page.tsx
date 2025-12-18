import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Pages';

export default function Contact() {
  return (
    <>
      <Header />
      <Banner
        title="Contact Us"
        subtitle=""
        imageUrl="/banner-pages.webp"
        height={300}
      />
      <main className="max-w-375 mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-md">We would love to hear from you! Reach out for inquiries, collaborations, or support.</p>

        <p className="text-md">Pellentesque massa nulla, fermentum ac sagittis at, consequat vitae augue. Etiam tellus orci, rutrum sed dolor quis, tincidunt finibus lorem. Ut vulputate, turpis vitae fermentum vestibulum, arcu arcu eleifend mi, eu suscipit risus ipsum eu purus. Sed eu lorem feugiat nunc placerat consequat hendrerit ut elit. Proin tincidunt ac orci a molestie. Quisque efficitur ex vitae ex sollicitudin, egestas elementum ipsum gravida. Sed ullamcorper libero non ipsum tristique tempus.</p>
      </main>
      <Footer />
    </>
  );
}
