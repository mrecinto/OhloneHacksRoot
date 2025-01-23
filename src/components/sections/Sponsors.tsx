import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function Sponsors() {
  const sponsors = [
    {
      tier: " ",
      logos: [
        { name: "NordPass", logo: "https://images.saasworthy.com/nordpass_6669_logo_1719204895_2ykhq.png" },
        { name: "Saily", logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/esizssebffamghufonie" },
        { name: "NordVPN", logo: "https://play-lh.googleusercontent.com/G166NGtIsLp_UdpDjC1FF6dooIgd83fs2lstSI7mhW06q7gmiE1cw4BZ16OCX0WokPE" },
        { name: "Incogni", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhvUze9qyZi_wylK2rZKdUdxTTLBLTW7_vg&s" },
        { name: "CodeCrafters.io", logo: "https://media.licdn.com/dms/image/v2/D560BAQEqzh_Uhd_rbw/company-logo_200_200/company-logo_200_200/0/1684437783960/codecraftersio_logo?e=2147483647&v=beta&t=xehlblVMw6zGFt5W7qBeiK4MkSjRxbxndVn_SSA-4h0" },
        { name: "InterviewCake", logo: "https://www.interviewcake.com/static//images/cake_white_on_blue_600.png" },
        { name: "1Password", logo: "https://assets.wheelhouse.com/media/_solution_logo_11062023_16183098.png" },
      ]
    },
  ];

  return (
    <section id="sponsors" className="py-20 px-6">
      <div className="container mx-auto">
        <SectionTitle>Our Sponsors</SectionTitle>
        {sponsors.map((tier, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6">{tier.tier}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {tier.logos.map((logo, i) => (
                <div 
                  key={i}
                  className="w-40 h-40 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={logo.logo} // Use `logo.logo` to access the image URL
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
