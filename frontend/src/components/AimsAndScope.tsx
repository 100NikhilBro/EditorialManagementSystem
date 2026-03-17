// import React from 'react';

// const AimsAndScope: React.FC = () => {
//   return (
//     <section className="bg-white w-full min-h-screen flex flex-col md:flex-row">
//       {/* Left side: Title */}
//       <div className="md:w-[30%] w-full flex items-start justify-center border-r border-gray-200 p-8">
//         <h1 className="text-3xl font-bold text-gray-800">Aims and scope</h1>
//       </div>
//       {/* Right side: Content */}
//       <div className="md:w-[70%] w-full p-8 flex items-center">
//         <div className="w-full text-gray-800">
//           <p className="font-semibold mb-4">
//             <span className="font-bold">Internet of Things; Engineering Cyber Physical Human Systems</span> is a comprehensive journal encouraging cross collaboration between researchers, engineers and practitioners in the field of IoT & Cyber Physical Human Systems. The journal offers a unique platform to exchange scientific information on the entire breadth of technology, science, and societal applications of the IoT.
//           </p>
//           <p className="mb-4">The journal will place a high priority on timely publication, and provide a home for high quality:</p>
//           <ul className="list-disc ml-6 mb-4">
//             <li>Full Research papers</li>
//             <li>Survey Papers</li>
//             <li>Open Software and Data</li>
//             <li>Tutorials and best practices</li>
//             <li>Case studies</li>
//             <li>Whitepapers</li>
//           </ul>
//           <p className="mb-4">Furthermore, IOT is interested in publishing topical Special Issues on any aspect of IOT. Please submit your SI proposal for IOT through the Elsevier CSSI Portal. Detailed instructions could be found at: <a href="https://www.elsevier.com/physical-sciences-and-engineering/computer-science/journals/how-to-prepare-a-special-issue-proposal" className="text-brand-blue underline" target="_blank" rel="noopener noreferrer">https://www.elsevier.com/physical-sciences-and-engineering/computer-science/journals/how-to-prepare-a-special-issue-proposal</a></p>
//           <p className="mb-4">The scope of IoT comprises four main blocks to cover the entire spectrum of the field. From Research to Technology, from Applications to their Consequences for life and society.</p>

//           <h2 className="font-bold text-lg mt-6 mb-2">Theory and fundamental research</h2>
//           <p className="mb-2">Research that addresses the core underlying scientific principles dealing with the analysis and algorithmics of "IoT ecosystem" as a multicomponent system with complex and dynamic dependences at large-scale, such as:</p>
//           <ul className="list-disc ml-6 mb-4">
//             <li>New formal methods research to create abstractions, formalisms and semantics at IoT layer.</li>
//             <li>Artificial Intelligence of Things (AIoT), Explainable Machine Learning for IoT, Intelligent Edge.</li>
//             <li>Research on the unique IoT challenges in security, reliability and privacy.</li>
//             <li>High-level policy languages for specifying permissible communication patterns.</li>
//           </ul>

//           <h2 className="font-bold text-lg mt-6 mb-2">Software development, technology and engineering</h2>
//           <p className="mb-2">Key enabling IoT technologies related to sensors, actuators and machine intelligence. Development and deployment IoT tools and platforms to ensure security, reliability and efficiency, such as:</p>
//           <ul className="list-disc ml-6 mb-4">
//             <li>Device software development, such as minimal operating systems.</li>
//             <li>IoT in Cloud-to-thing-Continuum. Secure communication of IoT with other software layers from edge computing to the Cloud.</li>
//             <li>IoT software designs, including addressing security at design phase.</li>
//             <li>Best practices for IoT (software) development, test beds and quality assurance. Sensors and actuators; Remote Operations and Control; IoT and Digital Twins.</li>
//           </ul>

//           <h2 className="font-bold text-lg mt-6 mb-2">Applications of IoT</h2>
//           <p className="mb-2">New Applications of connected products and/or connected business processes to create new business value and business models. We are looking for contributions, and lessons learned, from researchers applying IoT in various domains including but not limited to:</p>
//           <ul className="list-disc ml-6 mb-4">
//             <li>Energy (smart grids, meters & appliances, renewable energy).</li>
//             <li>Transportation and Critical Infrastructures (infrastructures, logistics, road and rail, shipping, aerospace, autonomous vehicles).</li>
//             <li>Manufacturing & industry (smart design & smart manufacturing, advanced robotics; Robotic Process Automation).</li>
//             <li>Business, marketing & finance (e-commerce, finance, advertising & media).</li>
//             <li>Urban life (smart/cyber-cities, home automation, smart buildings).</li>
//             <li>Behavioral Sciences, Well-being Society, Sustainable Digital Transformation.</li>
//             <li>eLearning, Technology-Enhanced Learning, CSCL, Virtual Campuses, Education and Technology.</li>
//             <li>Ecology (precision agriculture, dairy, fishing, wildlife management, water, climate & ecology).</li>
//             <li>Medicine & healthcare (delivery & care systems, decision support, wearables).</li>
//             <li>Nano IoT (personalized precision medicine, Biological IoT, Chemical IoT).</li>
//           </ul>

//           <h2 className="font-bold text-lg mt-6 mb-2">Societal aspects of IoT</h2>
//           <ul className="list-disc ml-6 mb-4">
//             <li>Keeping humans in the loop is vital. Research in cyber-human systems that reflect human understanding and interaction with the physical world and (semi) autonomous systems.</li>
//             <li>Societal, political and social impacts of the IoT.</li>
//             <li>Ethics & (proposed) laws & regulations.</li>
//             <li>IoT Governance.</li>
//             <li>IoT Solutions for Pandemics, Disaster Management and Public Safety.</li>
//             <li>Human Technology Interaction - at scale.</li>
//             <li>Emerging standards and technology in human life.</li>
//             <li>And, of course, hot issues, such as auditing, liability and social vulnerabilities.</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AimsAndScope;





import React from "react";
import { useNavigate } from "react-router-dom";

const AimScope: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">

      <div className="max-w-7xl mx-auto flex gap-8">

        {/* LEFT SIDE */}
        <div className="flex-1 bg-white border border-gray-300 px-8 py-8">

          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Aim & Scope
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <span className="font-semibold text-gray-900">
              Internet of Journals; Engineering Cyber Physical Human Systems
            </span>{" "}
            is a comprehensive journal encouraging cross-collaboration between researchers, engineers, and practitioners in IoT and Cyber Physical Human Systems.
          </p>

          <p className="mb-6">
            The journal provides a platform to exchange scientific knowledge across technology, research, applications, and societal impact.
          </p>

          {/* TYPES */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3 border-l-4 border-blue-700 pl-3">
              Types of Contributions
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Full Research Papers</li>
              <li>Survey Papers</li>
              <li>Case Studies</li>
              <li>Whitepapers</li>
              <li>Software & Data Contributions</li>
              <li>Tutorials and Best Practices</li>
            </ul>
          </section>

          {/* THEORY */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3 border-l-4 border-green-600 pl-3">
              Theory & Fundamental Research
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>IoT system modeling and architectures</li>
              <li>AIoT and intelligent edge systems</li>
              <li>Security, privacy, and reliability</li>
              <li>Formal methods and IoT abstractions</li>
            </ul>
          </section>

          {/* TECHNOLOGY */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3 border-l-4 border-purple-600 pl-3">
              Technology & Engineering
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>IoT software systems</li>
              <li>Cloud-to-edge communication</li>
              <li>Device-level development</li>
              <li>IoT platforms and tools</li>
            </ul>
          </section>

          {/* APPLICATIONS */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3 border-l-4 border-orange-500 pl-3">
              Applications of IoT
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Smart cities</li>
              <li>Healthcare systems</li>
              <li>Manufacturing & robotics</li>
              <li>Energy & smart grids</li>
              <li>Transportation systems</li>
              <li>Education & digital learning</li>
            </ul>
          </section>

          {/* SOCIETY */}
          <section>
            <h2 className="text-lg font-semibold mb-3 border-l-4 border-gray-700 pl-3">
              Societal Impact & Governance
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ethics and regulations</li>
              <li>Human-centered IoT</li>
              <li>IoT governance</li>
              <li>Public safety systems</li>
            </ul>
          </section>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="w-80 space-y-6">

          {/* INFO */}
          <div className="bg-white border border-gray-300 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">
              Journal Overview
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><strong>Focus:</strong> IoT & Cyber Physical Systems</li>
              <li><strong>Access:</strong> Open Access Supported</li>
              <li><strong>Type:</strong> Peer-reviewed Journal</li>
            </ul>
          </div>

          {/* AREAS */}
          <div className="bg-white border border-gray-300 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">
              Key Research Areas
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Artificial Intelligence of Things</li>
              <li>Edge Computing</li>
              <li>Cyber Physical Systems</li>
              <li>IoT Security</li>
              <li>Smart Infrastructure</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gray-50 border border-gray-300 p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              Ready to Publish?
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Submit your manuscript and contribute to cutting-edge research.
            </p>

            <button
              onClick={() => navigate("/signup")}
              className="w-full bg-blue-800 text-white py-2 text-sm hover:bg-blue-900"
            >
              Submit Article
            </button>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default AimScope;