import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Pages';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Services() {
  return (
    <>
      <Header />
      <Banner
        title="Services"
        subtitle="Solutions tailored to your needs"
        imageUrl="/banner-pages.jpg"
        height={320}
      />
      <main className="max-w-375 mx-auto px-6 py-12">

        {/* Services Categories */}
        <div className="flex flex-col md:flex-row gap-10 my-12">
          <div className="w-full md:w-1/4 p-5 border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-600 text-center text-2xl text-white p-5">Quality Standards</div>
            <div className="bg-gray-200 my-1">
              <Image
                src="/srv-quality-standard.jpg"
                alt=""
                width={380}
                height={380}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-5 bg-gray-100 p-5">
              <span><strong>ISO 9001:</strong> Quality Management Systems &ndash; Requirements</span>
              <span><strong>ISO/TS 16949:</strong> Quality Management Systems &ndash; Particular Requirements for Automotive Production and Relevant Service Part Organizations</span>
              <span><strong>ISO/TL 9000:</strong> Telecommunications Quality Management System Requirements and Measurements</span>
              <span><strong>AS 9100:</strong> Quality Management Systems &ndash; Requirements for Aviation, Space and Defense Organizations</span>
              <span><strong>ISO 13485:</strong> Medical Devices &ndash; Quality Management Systems &ndash; Requirements for Regulatory Purposes</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-5 border border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-600 text-center text-2xl text-white p-5">Safety &amp; Health</div>
            <div className="bg-gray-200 my-1">
              <Image
                src="/srv-health-safety.jpg"
                alt=""
                width={380}
                height={380}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-5 bg-gray-100 p-5">
              <span><strong>ISO 14001</strong> Environmental Management Systems &ndash; Requirements with Guidance for Use</span>
              <span><strong>OHSAS 18000</strong> (commonly referring to <strong>OHSAS 18001</strong>): Occupational Health and Safety Management Systems &ndash; Requirements</span>
              <span><strong>SHMS:</strong> Safety &amp; Health Management System</span>
              <span><strong>SMHS:</strong> Safe Management of Hazardous Substances</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-5 border border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-600 text-center text-2xl text-white p-5">Food Safety Standards</div>
            <div className="bg-gray-200 my-1">
              <Image
                src="/srv-quality-standard.jpg"
                alt=""
                width={380}
                height={380}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-5 bg-gray-100 p-5">
              <span><strong>ISO 22000:</strong> Food Safety Management Systems &nbsp; Requirements for Any Organization in the Food Chain</span>
              <span><strong>FSSC 22000:</strong> Food Safety System Certification 22000 (a GFSI-recognized certification scheme based on ISO 22000 plus sector-specific requirements)</span>
              <span><strong>HACCP:</strong> Hazard Analysis and Critical Control Points &nbsp; A Preventive Food-Safety Management System</span>
              <span><strong>GMP:</strong> Good Manufacturing Practice &nbsp; A Hygiene and Process-Control Program for Safe Production (program name rather than an ISO standard)</span>
              <span><strong>Second Party Audits:</strong> Customer- or Buyer-Conducted Supplier Audits (not a formal standard; it's a type of audit performed by a customer on its suppliers)</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-5 border border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-600 text-center text-2xl text-white p-5">Regulatory Standards</div>
            <div className="bg-gray-200 my-1">
              <Image
                src="/srv-quality-standard.jpg"
                alt=""
                width={380}
                height={380}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-5 bg-gray-100 p-5">
              <span><strong>SA 8000:</strong> Social Accountability 8000 &ndash; Social Responsibility Standard</span>
              <span><strong>WRAP:</strong> Worldwide Responsible Accredited Production &nbsp; Social Compliance Certification Program</span>
              <span><strong>RoHS:</strong> Restriction of Hazardous Substances &ndash; Directive for Electrical and Electronic Equipment</span>
              <span><strong>IECQ 0800:</strong> IEC Quality Assessment System for Electronic Components &ndash; Requirements for Supplier Assessment</span>
              <span><strong>ISO 17025:</strong> General Requirements for the Competence of Testing and Calibration Laboratories</span>
            </div>
          </div>
        </div>


        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-md">{siteConfig.brand} offers a wide range of textile services tailored to your needs.Vivamus sed dolor sed sem porta egestas. Praesent urna velit, vulputate in viverra a, dapibus vel orci. Cras accumsan, ex a iaculis lacinia, lacus orci congue neque, vel suscipit urna nunc vel arcu. Nunc ultricies facilisis placerat. Maecenas et venenatis nibh. Duis eu eros consectetur, porttitor urna vulputate, volutpat dolor. Etiam lorem ipsum, elementum id ex eget, pretium laoreet turpis. Proin eget enim a quam consectetur rhoncus. Nunc in ipsum et risus aliquam fermentum a ac massa. Cras in pretium erat. Donec tristique elit eget nisl pharetra sodales. Aenean sit amet condimentum est. Aenean in eros non elit malesuada imperdiet. Quisque sollicitudin gravida elementum. Curabitur eget dapibus felis.</p>

        <p className="text-md">Donec metus nunc, pretium ut auctor quis, lacinia vitae libero. Duis aliquet justo purus, cursus consequat sem fringilla vitae. Suspendisse porttitor ullamcorper magna, et tincidunt arcu tincidunt sed. Aenean posuere justo arcu, eget pulvinar dui consectetur sit amet. Integer sed orci gravida, malesuada ipsum sit amet, sodales leo. Praesent ullamcorper pretium est, ut varius lacus. Donec et nisl convallis, mattis sapien quis, aliquet ante. Curabitur cursus augue felis, at porta orci gravida sed. Ut sagittis fringilla diam, et lacinia ligula pretium ac. Sed id urna dolor. Etiam a auctor dui, eu rutrum dolor. Maecenas est nulla, vulputate at ante non, tempor facilisis leo. Fusce ut fringilla sem. Integer interdum a enim id tempor. Fusce nec interdum dui, sit amet mollis arcu.</p>
      </main>
      <Footer />
    </>
  );
}
