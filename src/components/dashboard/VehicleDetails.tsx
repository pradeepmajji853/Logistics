import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowLeft, 
  Truck, 
  AlertTriangle, 
  Calendar, 
  Clock, 
  BarChart3,
  Gauge,
  Thermometer,
  Battery,
  Activity,
  CheckCircle2
} from 'lucide-react';

type VehicleDetailsProps = {
  vehicleId: string;
  onBack: () => void;
};

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicleId, onBack }) => {
  const { getVehicleDetails } = useApp();
  const vehicle = getVehicleDetails(vehicleId);
  
  if (!vehicle) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">Vehicle not found. Please go back and try again.</p>
        <button
          onClick={onBack}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Vehicles
        </button>
      </div>
    );
  }
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'operational': return 'text-green-600';
      case 'maintenance': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };
  
  const getHealthScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'low': return 'border-blue-200 bg-blue-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'high': return 'border-red-200 bg-red-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };
  
  const getSeverityTextColor = (severity: string) => {
    switch(severity) {
      case 'low': return 'text-blue-800';
      case 'medium': return 'text-yellow-800';
      case 'high': return 'text-red-800';
      default: return 'text-gray-800';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold flex items-center">
          <Truck className="w-6 h-6 mr-2" />
          {vehicle.regNumber}
        </h2>
      </div>
      
      {/* Vehicle Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Vehicle Information</h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-500">Registration Number:</span>
              <div className="font-medium">{vehicle.regNumber}</div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Model:</span>
              <div className="font-medium">{vehicle.model}</div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Status:</span>
              <div className={`font-medium ${getStatusColor(vehicle.status)}`}>
                {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Health Score:</span>
              <div className={`font-medium ${getHealthScoreColor(vehicle.healthScore)}`}>
                {vehicle.healthScore}%
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Maintenance History</h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-500">Last Maintenance:</span>
              <div className="font-medium">
                {new Date(vehicle.lastMaintenance).toLocaleDateString()}
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Next Scheduled:</span>
              <div className="font-medium">
                {new Date(vehicle.nextScheduledMaintenance).toLocaleDateString()}
              </div>
            </div>
            <div className="pt-4">
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Complete History
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
              Schedule Maintenance
            </button>
            <button className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
              Generate Report
            </button>
            <button className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
              Update Information
            </button>
          </div>
        </div>
      </div>
      
      {/* Real-time Metrics */}
      <h3 className="text-lg font-semibold mb-4">Real-time Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
          <Gauge className="w-10 h-10 text-blue-500" />
          <div>
            <div className="text-sm text-gray-500">Fuel Level</div>
            <div className="text-xl font-bold">78%</div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
          <Thermometer className="w-10 h-10 text-blue-500" />
          <div>
            <div className="text-sm text-gray-500">Engine Temp</div>
            <div className="text-xl font-bold">92°C</div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
          <Battery className="w-10 h-10 text-blue-500" />
          <div>
            <div className="text-sm text-gray-500">Battery</div>
            <div className="text-xl font-bold">12.8V</div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
          <Activity className="w-10 h-10 text-blue-500" />
          <div>
            <div className="text-sm text-gray-500">Oil Pressure</div>
            <div className="text-xl font-bold">45 PSI</div>
          </div>
        </div>
      </div>
      
      {/* Alerts/Issues */}
      <h3 className="text-lg font-semibold mb-4">
        Current Alerts
        {vehicle.alerts.length > 0 && (
          <span className="ml-2 px-2.5 py-0.5 bg-red-100 text-red-800 text-xs font-medium rounded-full">
            {vehicle.alerts.length}
          </span>
        )}
      </h3>
      
      {vehicle.alerts.length === 0 ? (
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-green-800 mb-8">
          <div className="flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            <span>No active alerts for this vehicle</span>
          </div>
        </div>
      ) : (
        <div className="space-y-4 mb-8">
          {vehicle.alerts.map(alert => (
            <div key={alert.id} className={`border rounded-lg p-4 ${getSeverityColor(alert.severity)}`}>
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <AlertTriangle className={`w-5 h-5 mr-2 mt-0.5 ${getSeverityTextColor(alert.severity)}`} />
                  <div>
                    <h4 className={`font-semibold ${getSeverityTextColor(alert.severity)}`}>
                      {alert.component} Issue
                    </h4>
                    <p className="text-gray-700">{alert.message}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                    alert.severity === 'high' ? 'bg-red-200 text-red-800' : 
                    alert.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' : 
                    'bg-blue-200 text-blue-800'
                  }`}>
                    {alert.severity.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-500">Estimated Time to Failure:</span>
                  <div className="font-medium">{alert.estimatedTimeToFailure}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Recommended Action:</span>
                  <div className="font-medium">{alert.recommendedAction}</div>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  View Details
                </button>
                <button className="ml-4 text-sm text-blue-600 hover:text-blue-800">
                  Mark Resolved
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Performance Graph Placeholder */}
      <h3 className="text-lg font-semibold mb-4">Performance Trends</h3>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-center">
        <BarChart3 className="w-16 h-16 mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500">Performance analytics visualizations coming soon.</p>
      </div>
    </div>
  );
};

export default VehicleDetails; 