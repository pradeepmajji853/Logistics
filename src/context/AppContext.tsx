import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types
type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type Fleet = {
  id: string;
  name: string;
  totalVehicles: number;
  healthScore: number;
  maintenanceRequired: number;
};

type Vehicle = {
  id: string;
  regNumber: string;
  model: string;
  healthScore: number;
  lastMaintenance: string;
  nextScheduledMaintenance: string;
  alerts: VehicleAlert[];
  status: 'operational' | 'maintenance' | 'critical';
};

type VehicleAlert = {
  id: string;
  component: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
  estimatedTimeToFailure: string;
  recommendedAction: string;
  date: string;
};

type DemoRequest = {
  name: string;
  company: string;
  email: string;
  phone: string;
  fleetSize: string;
  message: string;
  date: string;
};

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
};

type ROICalculationInput = {
  fleetSize: number;
  avgBreakdownsPerYear: number;
  costPerBreakdown: number;
  avgMaintenanceCost: number;
};

type ROICalculationResult = {
  annualSavings: number;
  maintenanceCostReduction: number;
  breakdownReduction: number;
  totalROI: number;
  paybackPeriod: number;
};

// Define context type
interface AppContextType {
  // Authentication
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  
  // Demo requests
  demoRequests: DemoRequest[];
  submitDemoRequest: (data: Omit<DemoRequest, 'date'>) => Promise<boolean>;
  
  // Contact form
  submitContactForm: (data: Omit<ContactFormData, 'date'>) => Promise<boolean>;
  
  // ROI Calculator
  calculateROI: (input: ROICalculationInput) => ROICalculationResult;
  
  // Fleet data
  fleets: Fleet[];
  vehicles: Vehicle[];
  getFleetVehicles: (fleetId: string) => Vehicle[];
  getVehicleDetails: (vehicleId: string) => Vehicle | undefined;
}

// Create context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Sample data
const sampleUser: User = {
  id: '1',
  name: 'Demo User',
  email: 'demo@mahindralogistics.com',
  role: 'Fleet Manager'
};

const sampleFleets: Fleet[] = [
  {
    id: '1',
    name: 'North Region',
    totalVehicles: 45,
    healthScore: 87,
    maintenanceRequired: 4
  },
  {
    id: '2',
    name: 'South Region',
    totalVehicles: 38,
    healthScore: 92,
    maintenanceRequired: 2
  },
  {
    id: '3',
    name: 'East Region',
    totalVehicles: 32,
    healthScore: 78,
    maintenanceRequired: 7
  }
];

const sampleVehicles: Vehicle[] = [
  {
    id: '1',
    regNumber: 'MH04 AB 1234',
    model: 'Mahindra Blazo X 28.280',
    healthScore: 92,
    lastMaintenance: '2023-02-15',
    nextScheduledMaintenance: '2023-05-15',
    status: 'operational',
    alerts: []
  },
  {
    id: '2',
    regNumber: 'MH04 CD 5678',
    model: 'Mahindra Blazo X 35.300',
    healthScore: 78,
    lastMaintenance: '2023-01-10',
    nextScheduledMaintenance: '2023-04-10',
    status: 'maintenance',
    alerts: [
      {
        id: 'a1',
        component: 'Brake system',
        severity: 'medium',
        message: 'Brake pad wear exceeding normal parameters',
        estimatedTimeToFailure: '10 days',
        recommendedAction: 'Replace brake pads at next scheduled maintenance',
        date: '2023-03-25'
      }
    ]
  },
  {
    id: '3',
    regNumber: 'MH04 EF 9012',
    model: 'Mahindra Furio 14',
    healthScore: 65,
    lastMaintenance: '2023-01-22',
    nextScheduledMaintenance: '2023-04-22',
    status: 'critical',
    alerts: [
      {
        id: 'a2',
        component: 'Engine',
        severity: 'high',
        message: 'Abnormal engine vibration detected',
        estimatedTimeToFailure: '3 days',
        recommendedAction: 'Immediate inspection required',
        date: '2023-03-29'
      },
      {
        id: 'a3',
        component: 'Oil pressure',
        severity: 'medium',
        message: 'Oil pressure fluctuations detected',
        estimatedTimeToFailure: '7 days',
        recommendedAction: 'Check oil levels and pressure system',
        date: '2023-03-28'
      }
    ]
  }
];

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  
  // Login function (simulate API call)
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call with 1-second delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simple validation for demo purposes
        if (email === 'demo@mahindralogistics.com' && password === 'demo123') {
          setIsAuthenticated(true);
          setUser(sampleUser);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };
  
  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  
  // Submit demo request (simulate API call)
  const submitDemoRequest = async (data: Omit<DemoRequest, 'date'>): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newRequest = {
          ...data,
          date: new Date().toISOString()
        };
        setDemoRequests([...demoRequests, newRequest]);
        resolve(true);
      }, 1000);
    });
  };
  
  // Submit contact form (simulate API call)
  const submitContactForm = async (data: Omit<ContactFormData, 'date'>): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Just simulate success response
        resolve(true);
      }, 1000);
    });
  };
  
  // ROI Calculator
  const calculateROI = (input: ROICalculationInput): ROICalculationResult => {
    // Calculate estimated savings based on inputs
    const breakdownReduction = Math.round(input.avgBreakdownsPerYear * 0.5); // 50% reduction
    const breakdownSavings = breakdownReduction * input.costPerBreakdown;
    
    const maintenanceCostReduction = Math.round(input.avgMaintenanceCost * 0.3); // 30% reduction
    const annualSavings = breakdownSavings + maintenanceCostReduction;
    
    // Calculate ROI as percentage
    const implementationCost = 200000 + (input.fleetSize * 15000); // Base cost + per vehicle
    const totalROI = Math.round((annualSavings / implementationCost) * 100);
    
    // Calculate payback period in months
    const paybackPeriod = Math.round((implementationCost / annualSavings) * 12);
    
    return {
      annualSavings,
      maintenanceCostReduction,
      breakdownReduction,
      totalROI,
      paybackPeriod
    };
  };
  
  // Get vehicles for a specific fleet
  const getFleetVehicles = (fleetId: string) => {
    // Simulate filtering vehicles by fleet ID
    // In a real app, vehicles would have a fleetId property
    return sampleVehicles;
  };
  
  // Get details for a specific vehicle
  const getVehicleDetails = (vehicleId: string) => {
    return sampleVehicles.find(vehicle => vehicle.id === vehicleId);
  };
  
  const values: AppContextType = {
    isAuthenticated,
    user,
    login,
    logout,
    demoRequests,
    submitDemoRequest,
    submitContactForm,
    calculateROI,
    fleets: sampleFleets,
    vehicles: sampleVehicles,
    getFleetVehicles,
    getVehicleDetails
  };
  
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}; 