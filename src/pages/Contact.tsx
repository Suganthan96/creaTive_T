import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout>
      <div className="min-h-[80vh] bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium border border-gray-200">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Contact Us Today
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="md:col-span-5 w-full space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-black">
                <div className="flex items-center mb-4">
                  <MapPin className="h-7 w-7 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold text-yellow-600">Location</h3>
                </div>
                <p className="text-gray-700">
                  Your Company Address<br />
                  City, State ZIP<br />
                  Country
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-black">
                <div className="flex items-center mb-4">
                  <Phone className="h-7 w-7 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold text-yellow-600">Phone</h3>
                </div>
                <p className="text-gray-700 mb-1">123-456-7890</p>
                <p className="text-gray-700">987-654-3210</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-black">
                <div className="flex items-center mb-4">
                  <Mail className="h-7 w-7 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold text-yellow-600">Email</h3>
                </div>
                <p className="text-gray-700 mb-1">info@yourcompany.com</p>
                <p className="text-gray-700 mb-1">support@yourcompany.com</p>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="md:col-span-7 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact; 