import { productImagePaths } from '../components/ProductImages.jsx';
import React from 'react';

// Custom component for product names with color formatting
export const FormattedProductName = ({ name }) => {
  // For specific product formatting based on exact product names
  switch(name) {
    case 'SCELIO-Q10':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>SCELIO-</span>
          <span style={{ color: '#FF8C00' }}>Q10</span>
        </span>
      );
    case 'SCELIO-NT':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>SCELIO-</span>
          <span style={{ color: '#FF8C00' }}>NT</span>
        </span>
      );
    case 'SCELIO-D3':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>SCELIO-</span>
          <span style={{ color: '#FF8C00' }}>D3</span>
        </span>
      );
    case 'SCELIO-B7':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>SCELIO-</span>
          <span style={{ color: '#FF8C00' }}>B7</span>
        </span>
      );
    case 'SCELIO-9G':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>SCELIO-</span>
          <span style={{ color: '#FF8C00' }}>9G</span>
        </span>
      );
    case 'SCELIO-DZ':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>SCELIO-</span>
          <span style={{ color: '#FF8C00' }}>DZ</span>
        </span>
      );
    case 'LIOTEND':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>LIO</span>
          <span style={{ color: '#FF8C00' }}>TEND</span>
        </span>
      );
    case 'LIOFRAC':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>LIO</span>
          <span style={{ color: '#FF8C00' }}>FRAC</span>
        </span>
      );
    case 'LIOTRYP-AP':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>LIOTRYP-</span>
          <span style={{ color: '#FF8C00' }}>AP</span>
        </span>
      );
    case 'LIOCET-5':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>LIOCET-</span>
          <span style={{ color: '#FF8C00' }}>5</span>
        </span>
      );
    case 'LIOGESIC-R':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>LIOGESIC-</span>
          <span style={{ color: '#FF8C00' }}>R</span>
        </span>
      );
    case 'LIOGESIC-GEL':
      return (
        <span>
          <span style={{ color: '#143c5c' }}>LIOGESIC-</span>
          <span style={{ color: '#FF8C00' }}>GEL</span>
        </span>
      );
    default:
      return <span>{name}</span>;
  }
};

// Pharmaceutical product data
const products = [
  {
    id: 1,
    slug: 'scelio-q10',
    name: 'SCELIO-Q10',
    category: 'Supplements',
    image: productImagePaths['vitamins'], // Using placeholder image
    description: 'SCELIO-Q10 is a high-quality coenzyme Q10 supplement designed to support heart health and energy production at the cellular level.',
    composition: [
      'L-Carnitine-500mg', 
      'Co enzyme Q10-100mg', 
      'Vit\u00A0E\u00A0(D\u00A0Alpha\u00A0Tocopheryl\u00A0Acetate)-10mg',
      'Lycopene-1000mcg', 
      'Zinc-10mg', 
      'Cyanocobalamin-2.2mcg', 
      'Folic\u00A0Acid-300mcg Tablets'
    ],
    indications: 'For supporting cardiovascular health, energy production, and as an antioxidant to protect cells from damage.',
    dosage: 'Adults: Take one capsule daily with food or as directed by your healthcare provider.',
    sideEffects: 'Generally well-tolerated. Some people may experience mild digestive discomfort.',
    contraindications: 'If you are pregnant, nursing, taking medications, or have a medical condition, consult your healthcare provider before use.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep out of reach of children.'
  },
  {
    id: 2,
    slug: 'scelio-nt',
    name: 'SCELIO-NT',
    category: 'Supplements',
    image: productImagePaths['vitamins'],
    description: 'SCELIO-NT is a specialized nutritional supplement formulated to support neurological health and cognitive function.',
    composition: [
      'Pregabalin(SR)-75mg', 
      'Methylcobalamin-1500mcg', 
      'Nortriptyline-10mg Tablets'
    ],
    indications: 'For supporting brain health, cognitive function, and neurological well-being.',
    dosage: 'Adults: Take one tablet daily with food or as directed by your healthcare provider.',
    sideEffects: 'Generally well-tolerated when taken as directed.',
    contraindications: 'Consult your healthcare provider before use if you are pregnant, nursing, or have any medical conditions.',
    storage: 'Store in a cool, dry place away from direct sunlight.'
  },
  {
    id: 3,
    slug: 'scelio-d3',
    name: 'SCELIO-D3',
    category: 'Vitamins',
    image: productImagePaths['vitamins'],
    description: 'SCELIO-D3 is a high-potency vitamin D3 supplement designed to support bone health, immune function, and overall wellness.',
    composition: ['Cholecalciferol-60000 IU Softgel Capsules'],
    indications: 'For vitamin D deficiency, bone health support, and immune system enhancement.',
    dosage: 'Adults: Take one softgel capsule weekly or as directed by your healthcare provider.',
    sideEffects: 'Rare at recommended doses. High doses may cause nausea, vomiting, or weakness.',
    contraindications: 'People with certain medical conditions should consult their doctor before use.',
    storage: 'Store at room temperature away from moisture and heat.'
  },
  {
    id: 4,
    slug: 'scelio-b7',
    name: 'SCELIO-B7',
    category: 'Vitamins',
    image: productImagePaths['vitamins'],
    description: 'SCELIO-B7 is a biotin supplement formulated to support healthy hair, skin, and nails.',
    composition: [
      'Biotin-30mcg', 
      'Green Tea Extract-40mg', 
      'Pantothenic Acid-5mg', 
      'Saccharomyces\u00A0Cerevisiae-100mg', 
      'L-cysteine-60mg Tablets'
    ],
    indications: 'For supporting hair, skin, and nail health, and assisting in metabolism of fats and carbohydrates.',
    dosage: 'Adults: Take one tablet daily with water.',
    sideEffects: 'Generally well-tolerated. May cause mild digestive discomfort in some individuals.',
    contraindications: 'If you have any medical conditions, consult your healthcare provider before use.',
    storage: 'Store in a cool, dry place away from direct sunlight.'
  },
  {
    id: 5,
    slug: 'scelio-9g',
    name: 'SCELIO-9G',
    category: 'Supplements',
    image: productImagePaths['vitamins'],
    description: 'SCELIO-9G is an advanced nutritional supplement designed to support overall health and vitality.',
    composition: [
      'Omega 3 Fatty Acids', 
      'Green Tea Extract', 
      'Ginkgo', 
      'Ginseng', 
      'Grape\u00A0Seed\u00A0Extract', 
      'Multivitamins & Multiminerals Softgel Capsules'
    ],
    indications: 'For general wellness support and nutritional supplementation.',
    dosage: 'Adults: Take one softgel capsule daily with food or as directed by your healthcare provider.',
    sideEffects: 'Generally well-tolerated when taken as directed.',
    contraindications: 'Consult your healthcare provider before use if you have any medical conditions.',
    storage: 'Store in a cool, dry place away from direct sunlight.'
  },
  {
    id: 6,
    slug: 'scelio-dz',
    name: 'SCELIO-DZ',
    category: 'Anti-inflammatory',
    image: productImagePaths['vitamins'],
    description: 'SCELIO-DZ is a corticosteroid medication with anti-inflammatory and immunosuppressive properties.',
    composition: ['Deflazacort-6mg Tablets'],
    indications: 'For reducing inflammation and treating various inflammatory and autoimmune conditions.',
    dosage: 'Adults: Take as directed by your healthcare provider. Dosage varies based on medical condition.',
    sideEffects: 'May cause increased appetite, weight gain, mood changes, elevated blood sugar, or other side effects. Consult your doctor about potential side effects.',
    contraindications: 'Not recommended for patients with systemic fungal infections. Consult your healthcare provider before use if you have any medical conditions.',
    storage: 'Store in a cool, dry place away from direct sunlight.'
  },
  {
    id: 7,
    slug: 'liotend',
    name: 'LIOTEND',
    category: 'Joint Health',
    image: productImagePaths['pain-relief'],
    description: 'LIOTEND is a specialized joint health supplement designed to support cartilage health, joint flexibility, and overall joint function.',
    composition: [
      'Mucopolysaccharide-220mg', 
      'Bioactive Collagen Peptide Type I-40mg', 
      'Sodium\u00A0Hyaluronate-30mg', 
      'Chondroitin Sulfate-200mg', 
      'Vit.C-35mg', 
      'Rosehip\u00A0Extract-375mg', 
      'Vitamin D3-600 IU Tablets'
    ],
    indications: 'For supporting joint health, reducing joint discomfort, and improving mobility.',
    dosage: 'Adults: Take one tablet twice daily with meals or as directed by your healthcare provider.',
    sideEffects: 'Generally well-tolerated. May cause mild digestive discomfort in some individuals.',
    contraindications: 'If you have shellfish allergies, are pregnant or nursing, consult your healthcare provider before use.',
    storage: 'Store at room temperature away from moisture and heat.'
  },
  {
    id: 8,
    slug: 'liofrac',
    name: 'LIOFRAC',
    category: 'Bone Health',
    image: productImagePaths['vitamins'],
    description: 'LIOFRAC is a specialized supplement designed to support bone health and strength.',
    composition: [
      'Cissus Quadrangularis-500mg', 
      'Calcium Citrate-500mg', 
      'Vitamin K2-7 45mcg Tablets'
    ],
    indications: 'For supporting bone density and overall bone health.',
    dosage: 'Adults: Take one tablet daily with food or as directed by your healthcare provider.',
    sideEffects: 'Generally well-tolerated when taken as directed.',
    contraindications: 'Consult your healthcare provider before use if you have any medical conditions.',
    storage: 'Store in a cool, dry place away from direct sunlight.'
  },
  {
    id: 9,
    slug: 'liotryp-ap',
    name: 'LIOTRYP-AP',
    category: 'Anti-inflammatory',
    image: productImagePaths['pain-relief'],
    description: 'LIOTRYP-AP is an anti-inflammatory medication designed to reduce inflammation and relieve pain.',
    composition: [
      'Trypsin-Chymotrypsin 150000 AU', 
      'Aceclofenac-100mg', 
      'Paracetamol-325mg Tablets'
    ],
    indications: 'For the relief of inflammation and associated pain.',
    dosage: 'Adults: Take as directed by your healthcare provider.',
    sideEffects: 'May cause stomach upset or drowsiness in some individuals.',
    contraindications: 'Do not use if you have certain medical conditions. Consult your doctor before use.',
    storage: 'Store at room temperature away from moisture and heat.'
  },
  {
    id: 10,
    slug: 'liocet-5',
    name: 'LIOCET-5',
    category: 'Antihistamine',
    image: productImagePaths['pain-relief'],
    description: 'LIOCET-5 is an antihistamine medication designed to provide effective relief from allergy symptoms.',
    composition: ['Levocetirizine-5mg Tablets'],
    indications: 'For the relief of symptoms associated with allergic rhinitis and chronic urticaria.',
    dosage: 'Adults: Take as directed by your healthcare provider.',
    sideEffects: 'May cause drowsiness, dry mouth, fatigue, or headache. Less common side effects include dizziness or stomach upset.',
    contraindications: 'Do not use if you have severe kidney impairment or are hypersensitive to levocetirizine. Consult your doctor before use if you have any medical conditions.',
    storage: 'Store at room temperature away from moisture and heat.'
  },
  {
    id: 11,
    slug: 'liogesic-r',
    name: 'LIOGESIC-R',
    category: 'Pain Relief',
    image: productImagePaths['pain-relief'],
    description: 'LIOGESIC-R is a specialized pain relief medication designed for rapid relief of pain and inflammation, with added gastric protection.',
    composition: [
      'Aceclofenac-200mg(SR)', 
      'Rabeprazole Sodium-20mg Capsules'
    ],
    indications: 'For the rapid relief of pain and inflammation with protection against NSAID-induced gastric irritation.',
    dosage: 'Adults: Take as directed by your healthcare provider.',
    sideEffects: 'May cause headache, dizziness, or gastrointestinal effects. The rabeprazole component helps reduce the risk of gastric irritation.',
    contraindications: 'Do not use if you have a history of hypersensitivity to NSAIDs, active peptic ulceration, or severe hepatic or renal impairment. Consult your doctor before use.',
    storage: 'Store at room temperature away from moisture and heat.'
  },
  {
    id: 12,
    slug: 'liogesic-gel',
    name: 'LIOGESIC-GEL',
    category: 'Topical Pain Relief',
    image: productImagePaths['pain-relief'],
    description: 'LIOGESIC-GEL is a topical pain relief gel designed to provide localized relief from pain and inflammation.',
    composition: ['Diclofenac Diethylamine-1.16%', 'Methyl Salicylate-8%', 'Menthol-2%\u00A0&\u00A0Nano\u00A0Technology'],
    indications: 'For the temporary relief of minor aches and pains of muscles and joints.',
    dosage: 'Adults: Apply a thin layer to affected area and massage gently. Use 3-4 times daily or as directed.',
    sideEffects: 'May cause skin irritation in some individuals.',
    contraindications: 'Do not use on broken or irritated skin. Avoid contact with eyes.',
    storage: 'Store at room temperature away from direct sunlight.'
  }
];

export default products;

// Helper function to find a product by its slug
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug) || null;
};

// Helper function to get all products
export const getAllProducts = () => {
  return products;
};