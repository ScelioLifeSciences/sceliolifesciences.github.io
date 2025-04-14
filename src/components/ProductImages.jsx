import React from 'react';

// Pain Relief Medication Image
export const PainReliefImage = () => (
  <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#f0f7ff" />
    <rect x="75" y="60" width="150" height="180" rx="10" fill="#ffffff" stroke="#0066cc" strokeWidth="3" />
    <rect x="90" y="80" width="120" height="40" rx="5" fill="#0066cc" />
    <text x="150" y="105" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle">PAIN RELIEF</text>
    <text x="150" y="140" fontFamily="Arial" fontSize="12" fill="#333" textAnchor="middle">500mg</text>
    <text x="150" y="170" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">Fast-acting formula</text>
    <text x="150" y="190" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">For headache & muscle pain</text>
    <text x="150" y="220" fontFamily="Arial" fontSize="8" fill="#777" textAnchor="middle">Scelio Lifesciences®</text>
  </svg>
);

// Antibiotics Image
export const AntibioticsImage = () => (
  <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#f0f7ff" />
    <rect x="75" y="60" width="150" height="180" rx="10" fill="#ffffff" stroke="#0066cc" strokeWidth="3" />
    <rect x="90" y="80" width="120" height="40" rx="5" fill="#4CAF50" />
    <text x="150" y="105" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle">ANTIBIOTICS</text>
    <text x="150" y="140" fontFamily="Arial" fontSize="12" fill="#333" textAnchor="middle">250mg</text>
    <text x="150" y="170" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">Broad-spectrum</text>
    <text x="150" y="190" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">For bacterial infections</text>
    <text x="150" y="220" fontFamily="Arial" fontSize="8" fill="#777" textAnchor="middle">Scelio Lifesciences®</text>
  </svg>
);

// Vitamins Image
export const VitaminsImage = () => (
  <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#f0f7ff" />
    <rect x="75" y="60" width="150" height="180" rx="10" fill="#ffffff" stroke="#0066cc" strokeWidth="3" />
    <rect x="90" y="80" width="120" height="40" rx="5" fill="#FF9800" />
    <text x="150" y="105" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle">VITAMINS</text>
    <text x="150" y="140" fontFamily="Arial" fontSize="12" fill="#333" textAnchor="middle">Multivitamin</text>
    <text x="150" y="170" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">Daily supplement</text>
    <text x="150" y="190" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">Essential nutrients</text>
    <text x="150" y="220" fontFamily="Arial" fontSize="8" fill="#777" textAnchor="middle">Scelio Lifesciences®</text>
  </svg>
);

// Cardiovascular Image
export const CardiovascularImage = () => (
  <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#f0f7ff" />
    <rect x="75" y="60" width="150" height="180" rx="10" fill="#ffffff" stroke="#0066cc" strokeWidth="3" />
    <rect x="90" y="80" width="120" height="40" rx="5" fill="#F44336" />
    <text x="150" y="105" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle">CARDIOVASCULAR</text>
    <text x="150" y="140" fontFamily="Arial" fontSize="12" fill="#333" textAnchor="middle">10mg</text>
    <text x="150" y="170" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">Blood pressure control</text>
    <text x="150" y="190" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">Heart health support</text>
    <text x="150" y="220" fontFamily="Arial" fontSize="8" fill="#777" textAnchor="middle">Scelio Lifesciences®</text>
    
    {/* Heart icon */}
    <path d="M150,160 C150,160 130,140 110,140 C90,140 80,160 80,170 C80,190 110,210 150,230 C190,210 220,190 220,170 C220,160 210,140 190,140 C170,140 150,160 150,160 Z" 
          fill="#F44336" fillOpacity="0.3" />
  </svg>
);

// Diabetes Care Image
export const DiabetesImage = () => (
  <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#f0f7ff" />
    <rect x="75" y="60" width="150" height="180" rx="10" fill="#ffffff" stroke="#0066cc" strokeWidth="3" />
    <rect x="90" y="80" width="120" height="40" rx="5" fill="#9C27B0" />
    <text x="150" y="105" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle">DIABETES CARE</text>
    <text x="150" y="140" fontFamily="Arial" fontSize="12" fill="#333" textAnchor="middle">500mg</text>
    <text x="150" y="170" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">Blood sugar control</text>
    <text x="150" y="190" fontFamily="Arial" fontSize="10" fill="#555" textAnchor="middle">Type 2 diabetes</text>
    <text x="150" y="220" fontFamily="Arial" fontSize="8" fill="#777" textAnchor="middle">Scelio Lifesciences®</text>
  </svg>
);

// Function to get image component by product slug
export const getProductImage = (slug) => {
  switch(slug) {
    case 'pain-relief':
      return <PainReliefImage />;
    case 'antibiotics':
      return <AntibioticsImage />;
    case 'vitamins':
      return <VitaminsImage />;
    case 'cardiovascular':
      return <CardiovascularImage />;
    case 'diabetes':
      return <DiabetesImage />;
    default:
      return null;
  }
};

// Export image paths for use in the products data
export const productImagePaths = {
  'pain-relief': '/src/assets/images/pain-relief.svg',
  'antibiotics': '/src/assets/images/antibiotics.svg',
  'vitamins': '/src/assets/images/vitamins.svg',
  'cardiovascular': '/src/assets/images/cardiovascular.svg',
  'diabetes': '/src/assets/images/diabetes.svg'
};