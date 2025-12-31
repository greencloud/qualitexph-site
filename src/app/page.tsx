import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Home';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <>
      <Header />
      <Banner
        title="Become ISO/IEC 27001 Certified"
        subtitle="ISO/IEC 27001 is the world's best-known standard for information security management systems (ISMS). It defines requirements an ISMS must meet."
        imageUrl="https://res.cloudinary.com/dc2xfaobx/image/upload/v1767163945/banner-main_f86xaf.jpg"
        height={680}
      />
      <main className="max-w-375 mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Welcome to {siteConfig.title}</h2>
        <p className="text-md">{siteConfig.brand} offers a wide range of textile services tailored to your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin porttitor felis eget placerat. Nullam molestie enim mauris, nec rutrum erat tincidunt a. Mauris sagittis ex non arcu pharetra dictum. Praesent a augue ac nisi ornare convallis. Sed id accumsan diam, eget sodales massa. Donec non magna maximus, sagittis ligula ut, tempus tellus. Etiam convallis neque massa, nec condimentum leo posuere tincidunt. Donec orci mauris, porta id dapibus eu, commodo et mi. Vestibulum mollis velit non lacus consequat, eget malesuada nisl gravida. Curabitur suscipit, orci eu ullamcorper lacinia, metus ligula ultricies elit, vitae gravida eros metus vel lorem. Fusce dapibus quam nec erat ullamcorper, non rutrum odio molestie. Nulla consectetur libero at nisi ultrices, a eleifend ipsum sodales.</p>

        <p className="text-md">Cras mollis, nulla sit amet mattis dapibus, metus libero tincidunt nisi, rhoncus molestie ligula turpis ut dolor. Quisque porttitor leo sed neque dapibus, eget sollicitudin lorem semper. Donec in augue sagittis, rhoncus diam vitae, ultrices elit. Vestibulum euismod, felis et tincidunt euismod, neque sem tincidunt metus, eu cursus nisl est eu mi. Phasellus sodales leo urna, quis mattis ante volutpat id. Proin gravida eleifend tempor. Phasellus euismod ipsum nisi, accumsan efficitur magna tristique sed. Phasellus malesuada nisi lorem, a dapibus neque sagittis vitae. Pellentesque gravida, leo a tincidunt pellentesque, ante elit efficitur quam, id rutrum purus sem vel dui.</p>

        <p className="text-md">Etiam ultricies magna erat, at suscipit metus porta interdum. Proin volutpat scelerisque lacus lobortis commodo. Curabitur egestas iaculis fermentum. Mauris auctor sapien a nulla facilisis, at mollis lacus imperdiet. Quisque quis congue nisl. Donec lacinia ipsum turpis, sed placerat ligula mollis nec.</p>


        {/* Testimonials */}
        <div className="block my-12">
          <h2 className="text-3xl text-center font-bold mb-4">What our satified clients had to say</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="/personnel/sample1.jpg" alt="John Doe" className="w-full h-full object-cover" />
                </div>
                <div className="h-16 overflow-hidden">
                  <span className="font-semibold text-lg m-0 block">John Doe</span>
                  <span className="text-sm text-gray-600">CEO, Example Corp.</span>
                </div>
              </div>
              <p className="text-md mb-4">"Qualitex PH provided exceptional service. Their expertise helped us streamline our processes and achieve our certification goals efficiently. Highly recommended!"</p>
              <div className="flex text-yellow-500 text-2xl">
                {'★'.repeat(5)}
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="/personnel/sample2.jpg" alt="Jane Smith" className="w-full h-full object-cover" />
                </div>
                <div className="h-16 overflow-hidden">
                  <span className="font-semibold text-lg m-0 block">Jane Smith</span>
                  <span className="text-sm text-gray-600">Operations Manager, Global Solutions</span>
                </div>
              </div>
              <p className="text-md mb-4">"The team at Qualitex PH was incredibly professional and knowledgeable. They guided us through every step of the ISO certification process with ease."</p>
              <div className="flex text-yellow-500 text-2xl">
                {'★'.repeat(5)}
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="/personnel/sample3.jpg" alt="Alice Johnson" className="w-full h-full object-cover" />
                </div>
                <div className="h-16 overflow-hidden">
                  <span className="font-semibold text-lg m-0 block">Alice Johnson</span>
                  <span className="text-sm text-gray-600">Director, Tech Innovations</span>
                </div>
              </div>
              <p className="text-md mb-4">"We are extremely satisfied with the results. Qualitex PH helped us not only achieve compliance but also improve our overall quality management system."</p>
              <div className="flex text-yellow-500 text-2xl">
                {'★'.repeat(5)}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}