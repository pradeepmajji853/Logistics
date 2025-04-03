import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Truck, 
  AlertTriangle, 
  CheckCircle2, 
  BarChart3, 
  Calendar, 
  Clock, 
  LogOut
} from 'lucide-react';
import FleetOverview from './FleetOverview';
import VehicleList from './VehicleList';
import VehicleDetails from './VehicleDetails';

const Dashboard: React.FC = () => {
  const { user, logout, fleets } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFleet, setSelectedFleet] = useState(fleets[0]?.id || '');
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const handleSelectVehicle = (vehicleId: string) => {
    setSelectedVehicle(vehicleId);
    setActiveTab('vehicle-details');
  };

  const handleBackToVehicles = () => {
    setSelectedVehicle(null);
    setActiveTab('vehicles');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">PMaaS Dashboard</span>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-right">
                <div className="text-sm text-gray-500">Welcome back,</div>
                <div className="font-semibold">{user?.name}</div>
              </div>
              <button
                onClick={logout}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Navigation Tabs */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-wrap space-x-2">
            <button
              onClick={() => {
                setActiveTab('overview');
                setSelectedVehicle(null);
              }}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'overview'
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              Dashboard Overview
            </button>
            <button
              onClick={() => {
                setActiveTab('vehicles');
                setSelectedVehicle(null);
              }}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'vehicles' || activeTab === 'vehicle-details'
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              Vehicles
            </button>
            <button
              onClick={() => {
                setActiveTab('maintenance');
                setSelectedVehicle(null);
              }}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'maintenance'
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              Maintenance Schedule
            </button>
            <button
              onClick={() => {
                setActiveTab('alerts');
                setSelectedVehicle(null);
              }}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'alerts'
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              Alerts
            </button>
            <button
              onClick={() => {
                setActiveTab('analytics');
                setSelectedVehicle(null);
              }}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'analytics'
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {activeTab === 'overview' && <FleetOverview fleets={fleets} onSelectFleet={setSelectedFleet} />}
          
          {activeTab === 'vehicles' && (
            <VehicleList fleetId={selectedFleet} onSelectVehicle={handleSelectVehicle} />
          )}
          
          {activeTab === 'vehicle-details' && selectedVehicle && (
            <VehicleDetails vehicleId={selectedVehicle} onBack={handleBackToVehicles} />
          )}
          
          {activeTab === 'maintenance' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Maintenance Schedule</h2>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-lg text-gray-500">Maintenance scheduling module coming soon!</p>
              </div>
            </div>
          )}
          
          {activeTab === 'alerts' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Alert Management</h2>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <AlertTriangle className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-lg text-gray-500">Alert management module coming soon!</p>
              </div>
            </div>
          )}
          
          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Fleet Analytics</h2>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <BarChart3 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-lg text-gray-500">Analytics module coming soon!</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 