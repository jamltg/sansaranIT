import cyberSecuritytImage from '../assets/cyber-security-img.webp';
import ServicesIntro from '../components/ServicesIntro'
import ServicesList from '../components/ServicesList'

export default function CyberSecurity() {
  const featureItems = [
    {
      icon: 'fas fa-search-plus',
      title: 'Security Risk Assessments',
      desc: 'Audits to identify vulnerabilities in your systems, applications, and infrastructure.',
    },
    {
      icon: 'fas fa-user-lock',
      title: 'Multi-Factor Authentication (MFA)',
      desc: 'Enforcing secure login methods to reduce the risk of unauthorised access to critical systems and data.',
    },
    {
      icon: 'fas fa-wrench',
      title: 'Patch Management',
      desc: 'Ensuring timely updates of operating systems, software, and firmware to eliminate known vulnerabilities.',
    },
    {
      icon: 'fas fa-database',
      title: 'Backup & Disaster Recovery Planning',
      desc: 'Secure backup strategies and tested recovery procedures to protect against ransomware and data loss.',
    },
    {
      icon: 'fas fa-file-contract',
      title: 'Compliance & Policy Development:',
      desc: 'Helping your business align with GDPR, Cyber Essentials, and other industry-specific regulatory requirements.',
    },
    {
      icon: 'fas fa-shield-virus',
      title: 'Incident Response & Remediation:',
      desc: 'Detection, investigation, and resolution of security incidents to minimise impact and prevent recurrence.',
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <ServicesIntro
          title="Cyber Security"
          description="Our Cyber Security Service ensures that your business follows best practices to protect your data from potential threats."
          image={cyberSecuritytImage}
        />
        <ServicesList items={featureItems} />
      </div>
    </div>
  );
}
