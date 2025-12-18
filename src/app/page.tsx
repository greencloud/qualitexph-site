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
        imageUrl="https://res.cloudinary.com/dc2xfaobx/image/upload/f_auto,q_auto/v1766061567/banner-main_fsf1es.webp"
        height={680}
      />
      <main className="max-w-375 mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Welcome to {siteConfig.title}</h2>
        <p className="text-md">{siteConfig.brand} offers a wide range of textile services tailored to your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin porttitor felis eget placerat. Nullam molestie enim mauris, nec rutrum erat tincidunt a. Mauris sagittis ex non arcu pharetra dictum. Praesent a augue ac nisi ornare convallis. Sed id accumsan diam, eget sodales massa. Donec non magna maximus, sagittis ligula ut, tempus tellus. Etiam convallis neque massa, nec condimentum leo posuere tincidunt. Donec orci mauris, porta id dapibus eu, commodo et mi. Vestibulum mollis velit non lacus consequat, eget malesuada nisl gravida. Curabitur suscipit, orci eu ullamcorper lacinia, metus ligula ultricies elit, vitae gravida eros metus vel lorem. Fusce dapibus quam nec erat ullamcorper, non rutrum odio molestie. Nulla consectetur libero at nisi ultrices, a eleifend ipsum sodales.</p>

        <p className="text-md">Cras mollis, nulla sit amet mattis dapibus, metus libero tincidunt nisi, rhoncus molestie ligula turpis ut dolor. Quisque porttitor leo sed neque dapibus, eget sollicitudin lorem semper. Donec in augue sagittis, rhoncus diam vitae, ultrices elit. Vestibulum euismod, felis et tincidunt euismod, neque sem tincidunt metus, eu cursus nisl est eu mi. Phasellus sodales leo urna, quis mattis ante volutpat id. Proin gravida eleifend tempor. Phasellus euismod ipsum nisi, accumsan efficitur magna tristique sed. Phasellus malesuada nisi lorem, a dapibus neque sagittis vitae. Pellentesque gravida, leo a tincidunt pellentesque, ante elit efficitur quam, id rutrum purus sem vel dui.</p>

        <p className="text-md">Etiam ultricies magna erat, at suscipit metus porta interdum. Proin volutpat scelerisque lacus lobortis commodo. Curabitur egestas iaculis fermentum. Mauris auctor sapien a nulla facilisis, at mollis lacus imperdiet. Quisque quis congue nisl. Donec lacinia ipsum turpis, sed placerat ligula mollis nec. Ut dapibus, lorem sit amet auctor hendrerit, enim nulla laoreet nulla, a commodo quam diam pretium mauris. Phasellus ut nulla lorem. Maecenas vulputate, nulla at ullamcorper accumsan, mauris nibh luctus nisl, vel viverra nibh lacus eget nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis ante volutpat, rutrum ex eget, dapibus metus. Cras consectetur bibendum nisi, et suscipit purus porttitor vel. Integer rutrum quam eget sem aliquet, sit amet iaculis nulla tincidunt. Nunc iaculis risus ut magna laoreet, in hendrerit lorem dignissim.</p>
      </main>
      <Footer />
    </>
  );
}