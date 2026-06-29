import React from 'react';
import { MapPin, Phone, Mail, Clock, Fish } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_HOURS, COMPANY_LICENSE } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-sullivan-dark text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/phone/1920/1080')] bg-cover bg-center opacity-20"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-header text-5xl md:text-6xl font-bold uppercase mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-sullivan-primary mx-auto"></div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-8">
             <div>
               <h3 className="font-header text-2xl font-bold text-sullivan-dark uppercase mb-6">Get In Touch</h3>
               <p className="text-gray-600 leading-relaxed mb-8">
                 Ready to break ground? Call us or text us directly to discuss your next project. We offer free estimates for all services.
               </p>
             </div>

             <div className="space-y-6">
               <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">Phone</h4>
                   <p className="text-gray-600">{COMPANY_PHONE}</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">Email</h4>
                   <p className="text-gray-600">{COMPANY_EMAIL}</p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">Office</h4>
                   <p className="text-gray-600">{COMPANY_ADDRESS}</p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">Hours</h4>
                   <p className="text-gray-600">{COMPANY_HOURS}</p>
                 </div>
               </div>

                <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <Fish size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">License</h4>
                   <p className="text-gray-600">{COMPANY_LICENSE}</p>
                 </div>
               </div>

            </div>

          </div>

          {/* Form Side Replacement */}
          <div className="lg:w-2/3 bg-white p-8 md:p-12 shadow-xl border-t-8 border-sullivan-primary flex flex-col justify-center min-h-[500px]">
             <div className="text-center space-y-8">
                <h3 className="font-header text-3xl font-bold text-sullivan-dark uppercase mb-4 tracking-tight">Contact Us Directly</h3>
                <div className="w-16 h-1 bg-sullivan-primary mx-auto mb-8"></div>
                
                <div className="max-w-2xl mx-auto">
                  <p className="text-2xl text-gray-700 leading-relaxed italic font-medium">
                    "Your interest in our services is important to us. Please reach out by text or phone us directly at <a href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`} className="text-sullivan-primary hover:underline font-bold whitespace-nowrap">{COMPANY_PHONE}</a>. We'll get back to you as soon as possible. Thank you again."
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-sullivan-dark font-header font-bold text-2xl uppercase tracking-wider">— Erin Sullivan</p>
                  <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mt-2 font-bold">Sullivan Excavating Inc</p>
                </div>
                
                <p className="text-sm text-gray-400 pt-8 uppercase tracking-widest font-semibold">
                  Licensed • Bonded • Insured
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
