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
        imageUrl="https://res.cloudinary.com/dc2xfaobx/image/upload/v1767164166/banner-pages_zprf9f.jpg"
        height={320}
      />
      <main className="max-w-375 mx-auto px-6 py-12">

        <div className="text-center mb-10 mt-12">
          <h2 className="text-6xl font-bold mb-4">ISO/IEC 27001:2022</h2>
          <p className="text-2xl">Information security, cybersecurity and privacy protection &mdash; Information security management systems &mdash; Requirements</p>
          <p className="text-2xl mb-8">With cyber-crime on the rise and <strong>new threats constantly emerging,</strong> it can seem difficult or even impossible to manage cyber-risks. ISO/IEC 27001 helps organizations become risk-aware and proactively identify and address weaknesses.</p>
        </div>

        {/* Services Categories */}
        <div className="flex flex-col md:flex-row gap-10 my-12">
          <div className="w-full md:w-1/4 p-5 border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-600 p-5">
              <h5 className="text-shadow-2xs text-2xl text-white text-shadow-black text-center">Quality Standards</h5>
            </div>
            <div className="bg-gray-200 my-1">
              <Image
                src="/srv-quality.jpg"
                alt="Quality Standards"
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
            <div className="bg-gray-600 p-5">
              <h5 className="text-shadow-2xs text-2xl text-white text-shadow-black text-center">Safety &amp; Health</h5>
            </div>
            <div className="bg-gray-200 my-1">
              <Image
                src="/srv-health.jpg"
                alt="Safety & Health"
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
                src="/srv-food-safety.jpg"
                alt="Food Safety Standards"
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
                src="/srv-regulatory.jpg"
                alt=""
                width={380}
                height={380}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-5 bg-gray-100 p-5">
              <span><strong>SA 8000:</strong> Social Accountability 8000 &ndash; Social Responsibility Standard</span>
              <span><strong>WRAP:</strong> Worldwide Responsible Accredited Production &ndash; Social Compliance Certification Program</span>
              <span><strong>RoHS:</strong> Restriction of Hazardous Substances &ndash; Directive for Electrical and Electronic Equipment</span>
              <span><strong>IECQ 0800:</strong> IEC Quality Assessment System for Electronic Components &ndash; Requirements for Supplier Assessment</span>
              <span><strong>ISO 17025:</strong> General Requirements for the Competence of Testing and Calibration Laboratories</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
