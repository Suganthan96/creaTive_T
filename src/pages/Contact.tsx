import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout>
      <div className="min-h-[80vh] bg-gradient-to-b from-white to-black py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-black">
              <div className="flex items-center mb-4">
                <MapPin className="h-7 w-7 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-yellow-600">Location</h3>
              </div>
              <p className="text-gray-700">
                26a2, Gangai Amman Koil, 2nd Cross Street,<br />
                Sholinganallur, Chennai - 600119.<br />
                Tamil Nadu, India.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-black">
              <div className="flex items-center mb-4">
                <Phone className="h-7 w-7 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-yellow-600">Phone</h3>
              </div>
              <p className="text-gray-700 mb-1">+91-9789089048</p>
              <p className="text-gray-700">+91-9444476602</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-black">
              <div className="flex items-center mb-4">
                <Mail className="h-7 w-7 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-yellow-600">Email</h3>
              </div>
              <p className="text-gray-700 mb-1">artwork@prakashgraphics.in</p>
              <p className="text-gray-700 mb-1">prakashgraphics07@gmail.com</p>
              <p className="text-gray-700 mb-1">prakashgraphics0721@gmail.com</p>
              <p className="text-gray-700">admin@prakashgraphics.in</p>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="bg-yellow-400 p-8 rounded-lg shadow-md border border-gray-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact; 