import networkSupportImage from '../assets/network-support-img.webp';
import ServicesIntro from '../components/ServicesIntro'
import ServicesList from '../components/ServicesList'

export default function NetworkSupport() {
  const featureItems = [
    {
      icon: 'fas fa-tools',
      title: 'Fault Diagnosis & Resolution',
      desc: 'Identification and remote resolution of connectivity, performance, or configuration issues.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Firewall & Security Management',
      desc: 'Ongoing updates and configuration of firewalls and security appliances to protect your network from threats.',
    },
    {
      icon: 'fas fa-network-wired',
      title: 'Switch & Router Support',
      desc: 'Setup, configuration, and troubleshooting of network switches, routers, and other critical devices.',
    },
    {
      icon: 'fas fa-lock',
      title: 'VPN & Remote Access Management',
      desc: 'Secure configuration and support for remote access solutions, ensuring your team can work safely from anywhere.',
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Patch Management',
      desc: 'Ensuring all network devices are kept up to date with the latest firmware and security patches.',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Vendor Coordination',
      desc: 'Liaising with third-party vendors to resolve issues.',
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <ServicesIntro
          title="Network Support"
          description="Our Network Support Service provides remote support to ensure your network’s performance, security, and reliability."
          image={networkSupportImage}
        />
        <ServicesList items={featureItems} />
      </div>
    </div>
  );
}
