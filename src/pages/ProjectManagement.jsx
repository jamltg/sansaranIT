import ProjectManagementImg from '../assets/project-management-img.webp';
import ServicesIntro from '../components/ServicesIntro';
import ServicesList from '../components/ServicesList';

const featureItems = [
    {
      icon: 'fas fa-calendar-check',
      title: 'End-to-End Project Planning:',
      desc: 'Development of detailed project plans, timelines, and milestones tailored to your business objectives and resources.',
    },
    {
      icon: 'fas fa-tasks',
      title: 'Scope Definition & Control:',
      desc: 'Clear documentation of project goals, deliverables, and boundaries to avoid scope creep and ensure alignment.',
    },
    {
      icon: 'fas fa-exclamation-triangle',
      title: 'Risk Management & Mitigation:',
      desc: 'Identification of potential risks early in the project with proactive strategies to minimise disruption and cost overruns.',
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Budgeting & Cost Control:',
      desc: 'Accurate budgeting and regular financial tracking to keep your project financially on track and avoid unexpected expenses.',
    },
    {
      icon: 'fas fa-cogs',
      title: 'Vendor & Supplier Coordination:',
      desc: 'Managing procurement processes, vendor relationships, and third-party involvement to ensure smooth integration and delivery.',
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Post-Project Review & Handover:',
      desc: 'Comprehensive project closure process including knowledge transfer, documentation, and performance evaluation.',
    },
];


export default function ProjectManagement() {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
            <ServicesIntro
              title="Project Management"
              description="Our Project Management Service ensures your IT projects are delivered on time, within scope, and within budget."
              image={ProjectManagementImg}
            />
            <ServicesList items={featureItems} />
        </div>
    </div>
  )
}
