import React from 'react';
import { Truck, AlertTriangle, Wrench, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

type FleetOverviewProps = {
  fleets: Array<{
    id: string;
    name: string;
    totalVehicles: number;
    healthScore: number;
    maintenanceRequired: number;
  }>;
  onSelectFleet: (fleetId: string) => void;
};

const FleetOverview: React.FC<FleetOverviewProps> = ({ fleets, onSelectFleet }) => {
  const { vehicles } = useApp();
  
  // Calculate aggregates
  const totalVehicles = fleets.reduce((sum, fleet) => sum + fleet.totalVehicles, 0);
  const avgHealthScore = fleets.reduce((sum, fleet) => sum + fleet.healthScore, 0) / fleets.length;
  const totalMaintenanceRequired = fleets.reduce((sum, fleet) => sum + fleet.maintenanceRequired, 0);
  
  // Count vehicles by status
  const vehiclesByStatus = {
    operational: vehicles.filter(v => v.status === 'operational').length,
    maintenance: vehicles.filter(v => v.status === 'maintenance').length,
    critical: vehicles.filter(v => v.status === 'critical').length
  };
  
  const getHealthScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Fleet Overview</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="flex items-center">
            <Truck className="h-10 w-10 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-500">Total Vehicles</h3>
              <p className="text-2xl font-bold">{totalVehicles}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-500">Average Health</h3>
              <p className={`text-2xl font-bold ${getHealthScoreColor(avgHealthScore)}`}>
                {avgHealthScore.toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <Wrench className="h-10 w-10 text-yellow-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-500">Maintenance Required</h3>
              <p className="text-2xl font-bold">{totalMaintenanceRequired}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
          <div className="flex items-center">
            <AlertTriangle className="h-10 w-10 text-red-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-500">Critical Issues</h3>
              <p className="text-2xl font-bold">{vehiclesByStatus.critical}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fleet List */}
      <h3 className="text-xl font-semibold mb-4">Your Fleets</h3>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fleet Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vehicles
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Health Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Maintenance Required
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fleets.map((fleet) => (
              <tr key={fleet.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{fleet.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fleet.totalVehicles}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${getHealthScoreColor(fleet.healthScore)}`}>
                    {fleet.healthScore}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fleet.maintenanceRequired}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => onSelectFleet(fleet.id)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FleetOverview; 