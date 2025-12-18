import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Pages';

export default function Services() {
  return (
    <>
      <Header />
      <Banner
        title="Services"
        subtitle="All the services we offer"
        imageUrl="/banner-pages.webp"
        height={300}
      />
      <main className="max-w-375 mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-md">QualiTexPH offers a wide range of textile services tailored to your needs.Vivamus sed dolor sed sem porta egestas. Praesent urna velit, vulputate in viverra a, dapibus vel orci. Cras accumsan, ex a iaculis lacinia, lacus orci congue neque, vel suscipit urna nunc vel arcu. Nunc ultricies facilisis placerat. Maecenas et venenatis nibh. Duis eu eros consectetur, porttitor urna vulputate, volutpat dolor. Etiam lorem ipsum, elementum id ex eget, pretium laoreet turpis. Proin eget enim a quam consectetur rhoncus. Nunc in ipsum et risus aliquam fermentum a ac massa. Cras in pretium erat. Donec tristique elit eget nisl pharetra sodales. Aenean sit amet condimentum est. Aenean in eros non elit malesuada imperdiet. Quisque sollicitudin gravida elementum. Curabitur eget dapibus felis.</p>

        <p className="text-md">Donec metus nunc, pretium ut auctor quis, lacinia vitae libero. Duis aliquet justo purus, cursus consequat sem fringilla vitae. Suspendisse porttitor ullamcorper magna, et tincidunt arcu tincidunt sed. Aenean posuere justo arcu, eget pulvinar dui consectetur sit amet. Integer sed orci gravida, malesuada ipsum sit amet, sodales leo. Praesent ullamcorper pretium est, ut varius lacus. Donec et nisl convallis, mattis sapien quis, aliquet ante. Curabitur cursus augue felis, at porta orci gravida sed. Ut sagittis fringilla diam, et lacinia ligula pretium ac. Sed id urna dolor. Etiam a auctor dui, eu rutrum dolor. Maecenas est nulla, vulputate at ante non, tempor facilisis leo. Fusce ut fringilla sem. Integer interdum a enim id tempor. Fusce nec interdum dui, sit amet mollis arcu.</p>
      </main>
      <Footer />
    </>
  );
}
