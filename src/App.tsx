import React, { useState } from 'react';
import { 
  Truck, 
  Brain, 
  AlertTriangle, 
  Calendar, 
  BarChart3, 
  Clock, 
  Battery, 
  Shield, 
  Settings,
  ChevronRight,
  Gauge,
  Cog,
  Bell,
  CheckCircle2,
  LineChart,
  Wrench,
  Car,
  Smartphone,
  Network,
  Database,
  CloudCog,
  Timer,
  TrendingUp
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">PMaaS</span>
            </div>
            <div className="hidden md:flex space-x-4">
              {['Overview', 'Features', 'Technology', 'Implementation', 'ROI'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === item.toLowerCase()
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Powered Predictive Maintenance
                <span className="text-blue-400"> for Mahindra Logistics</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Revolutionizing fleet management with AI-driven predictive maintenance that reduces downtime by 50% and cuts maintenance costs by 30%.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center">
                  Schedule Demo <ChevronRight className="ml-2" />
                </button>
                <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold">
                  View ROI Calculator
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800"
                alt="AI Maintenance Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Problem Statement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Current Industry Challenges</h3>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1 mr-2" />
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Our Solution</h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-blue-500 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techSteps.map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="text-blue-400 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <ul className="space-y-2">
                  {step.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation Roadmap</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold text-blue-600">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, dIndex) => (
                        <li key={dIndex} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ROI Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-500 mb-4">{metric.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{metric.value}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fleet Management?</h2>
          <p className="text-xl mb-8">Join the future of predictive maintenance today.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
              Schedule a Demo
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const challenges = [
  "40% of fleet downtime is due to unplanned maintenance",
  "Manual scheduling leads to 25% maintenance inefficiency",
  "Reactive repairs cost 3x more than preventive maintenance",
  "Limited real-time visibility across fleet operations",
  "High risk of road accidents due to mechanical failures"
];

const solutions = [
  "AI-powered prediction reduces unplanned downtime by 50%",
  "Automated scheduling optimizes maintenance efficiency",
  "Preventive maintenance reduces repair costs by 30%",
  "Real-time monitoring dashboard for entire fleet",
  "Enhanced safety through early problem detection"
];

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "50% Less Downtime",
    description: "Keep your trucks operational longer and ensure on-time deliveries with predictive maintenance."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "30% Cost Savings",
    description: "Reduce maintenance costs by eliminating unnecessary repairs and preventing emergency breakdowns."
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "30% Longer Lifespan",
    description: "Extend your fleet's working life through proactive, AI-driven maintenance care."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Real-Time Monitoring",
    description: "100% visibility into your fleet's health status with remote monitoring capabilities."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enhanced Safety",
    description: "Prevent accidents by identifying potential failures before they occur."
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Insights",
    description: "Leverage advanced analytics for smarter maintenance decisions."
  }
];

const techSteps = [
  {
    icon: <Database className="w-12 h-12" />,
    title: "Data Collection Layer",
    features: [
      "IoT sensors for real-time monitoring",
      "Telematics integration",
      "Historical maintenance data",
      "Driver behavior analytics",
      "Environmental conditions"
    ]
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI Processing Layer",
    features: [
      "Machine learning models",
      "Pattern recognition",
      "Anomaly detection",
      "Predictive analytics",
      "Risk assessment algorithms"
    ]
  },
  {
    icon: <CloudCog className="w-12 h-12" />,
    title: "Service Layer",
    features: [
      "Automated scheduling system",
      "Real-time alerts",
      "Maintenance workflow automation",
      "Service center integration",
      "Mobile app notifications"
    ]
  }
];

const phases = [
  {
    title: "Phase 1: Initial Setup & Integration",
    description: "Deploy IoT sensors and establish data collection infrastructure",
    deliverables: [
      "IoT sensor installation across pilot fleet",
      "Data collection system setup",
      "Integration with existing telematics",
      "Initial dashboard deployment"
    ]
  },
  {
    title: "Phase 2: AI Model Development",
    description: "Build and train AI models using collected data",
    deliverables: [
      "Failure prediction models",
      "Maintenance optimization algorithms",
      "Risk assessment system",
      "Performance monitoring tools"
    ]
  },
  {
    title: "Phase 3: Full Scale Deployment",
    description: "Roll out the complete system across the entire fleet",
    deliverables: [
      "Fleet-wide sensor deployment",
      "Staff training programs",
      "Integration with service centers",
      "Mobile app deployment"
    ]
  }
];

const roiMetrics = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "₹2.5 Cr",
    description: "Annual savings through reduced maintenance costs"
  },
  {
    icon: <Timer className="w-8 h-8" />,
    value: "50%",
    description: "Reduction in unplanned downtime"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    value: "18 Months",
    description: "Average payback period for full implementation"
  }
];

export default App;