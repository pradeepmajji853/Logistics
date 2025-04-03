import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

const ROICalculator: React.FC = () => {
  const { calculateROI } = useApp();
  const [formData, setFormData] = useState({
    fleetSize: 50,
    avgBreakdownsPerYear: 24,
    costPerBreakdown: 50000,
    avgMaintenanceCost: 300000
  });
  const [results, setResults] = useState<null | {
    annualSavings: number;
    maintenanceCostReduction: number;
    breakdownReduction: number;
    totalROI: number;
    paybackPeriod: number;
  }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculatedResults = calculateROI(formData);
    setResults(calculatedResults);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">ROI Calculator</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fleetSize" className="block text-gray-700 text-sm font-bold mb-2">
              Fleet Size (vehicles)
            </label>
            <input
              type="number"
              id="fleetSize"
              name="fleetSize"
              min="1"
              value={formData.fleetSize}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="avgBreakdownsPerYear" className="block text-gray-700 text-sm font-bold mb-2">
              Average Breakdowns Per Year
            </label>
            <input
              type="number"
              id="avgBreakdownsPerYear"
              name="avgBreakdownsPerYear"
              min="0"
              value={formData.avgBreakdownsPerYear}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="costPerBreakdown" className="block text-gray-700 text-sm font-bold mb-2">
              Average Cost Per Breakdown (INR)
            </label>
            <input
              type="number"
              id="costPerBreakdown"
              name="costPerBreakdown"
              min="0"
              value={formData.costPerBreakdown}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="avgMaintenanceCost" className="block text-gray-700 text-sm font-bold mb-2">
              Annual Maintenance Cost (INR)
            </label>
            <input
              type="number"
              id="avgMaintenanceCost"
              name="avgMaintenanceCost"
              min="0"
              value={formData.avgMaintenanceCost}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Calculate ROI
        </button>
      </form>
      
      {results && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-bold mb-4">Your Estimated ROI</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-600 font-semibold">Annual Savings</div>
              <div className="text-2xl font-bold">{formatCurrency(results.annualSavings)}</div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm text-green-600 font-semibold">Maintenance Cost Reduction</div>
              <div className="text-2xl font-bold">{formatCurrency(results.maintenanceCostReduction)}</div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-sm text-purple-600 font-semibold">Breakdown Reduction</div>
              <div className="text-2xl font-bold">{results.breakdownReduction} fewer breakdowns</div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-sm text-amber-600 font-semibold">Total ROI</div>
              <div className="text-2xl font-bold">{results.totalROI}%</div>
            </div>
          </div>
          
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <div className="text-lg font-bold text-center">
              Estimated Payback Period: <span className="text-blue-600">{results.paybackPeriod} months</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              These calculations are based on industry averages and your inputs. Schedule a demo for a personalized assessment.
            </p>
            
            <button
              onClick={() => window.location.href = '#demo-request'}
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROICalculator; 