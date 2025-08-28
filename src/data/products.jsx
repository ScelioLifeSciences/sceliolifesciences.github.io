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
    description: 'SCELIO-Q10 is a comprehensive supplement formulated to support energy production, cardiovascular health, and antioxidant defense. It combines L-Carnitine, Coenzyme Q10, Vitamin E, Lycopene, Zinc, Cyanocobalamin, and Folic Acid in a convenient tablet form.',
    composition: [
      'L-Carnitine-500mg', 
      'Co enzyme Q10-100mg', 
      'Vit\u00A0E\u00A0(D\u00A0Alpha\u00A0Tocopheryl\u00A0Acetate)-10mg',
      'Lycopene-1000mcg', 
      'Zinc-10mg', 
      'Cyanocobalamin-2.2mcg', 
      'Folic\u00A0Acid-300mcg Tablets'
    ],
    indications: 'May be used to support energy levels, heart health, antioxidant protection, and overall well-being.',
    dosage: 'Adults: Take one tablet daily or as directed by your healthcare provider.',
    contraindications: 'Individuals with known allergies to any of the ingredients should avoid use. Consult your doctor if you are pregnant, breastfeeding, or have any underlying medical conditions.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep out of reach of children.'
  },
  {
    id: 2,
    slug: 'scelio-nt',
    name: 'SCELIO-NT',
    category: 'Supplements',
    image: productImagePaths['vitamins'],
    description: 'SCELIO-NT is a combination medication formulated to help manage certain types of nerve pain. It contains Pregabalin (sustained release), Methylcobalamin, and Nortriptyline, working together to alleviate discomfort.',
    composition: [
      'Pregabalin(SR)-75mg', 
      'Methylcobalamin-1500mcg', 
      'Nortriptyline-10mg Tablets'
    ],
    indications: 'Indicated for the management of neuropathic pain.',
    dosage: 'Adults: Take one tablet daily or as directed by your healthcare provider. Dosage should be individualized based on patient response and tolerability.',
    contraindications: 'This medication is contraindicated in individuals with known hypersensitivity to any of its components. It should also be used with caution in patients with certain medical conditions. Consult your doctor before use, especially if you have a history of heart problems, glaucoma, or urinary retention.',
    storage: 'Store in a cool, dry place away from light and moisture. Keep out of reach of children.'
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
    contraindications: 'People with certain medical conditions should consult their doctor before use.',
    storage: 'Store at room temperature away from moisture and heat.'
  },
  {
    id: 4,
    slug: 'scelio-b7',
    name: 'SCELIO-B7',
    category: 'Vitamins',
    image: productImagePaths['vitamins'],
    description: 'SCELIO-B7 is a dietary supplement formulated to support healthy hair, skin, and nails. It contains a blend of Biotin, Green Tea Extract, Pantothenic Acid, Saccharomyces Cerevisiae, and L-cysteine.',
    composition: [
      'Biotin-30mcg', 
      'Green Tea Extract-40mg', 
      'Pantothenic Acid-5mg', 
      'Saccharomyces\u00A0Cerevisiae-100mg', 
      'L-cysteine-60mg Tablets'
    ],
    indications: 'May be used to support healthy hair growth, strengthen nails, and promote healthy skin.',
    dosage: 'Adults: Take one tablet daily or as directed by your healthcare provider.',
    contraindications: 'Individuals with known allergies to any of the ingredients should avoid use. Consult your doctor if you are pregnant, breastfeeding, or have any underlying medical conditions.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep out of reach of children.'
  },
  {
    id: 5,
    slug: 'scelio-9g',
    name: 'SCELIO-9G',
    category: 'Supplements',
    image: productImagePaths['vitamins'],
    description: 'SCELIO-9G is a comprehensive blend of Omega 3 Fatty Acids, Green Tea Extract, Ginkgo, Ginseng, Grape Seed Extract, Multivitamins, and Multiminerals, formulated to support overall health and well-being.',
    composition: [
      'Omega 3 Fatty Acids', 
      'Green Tea Extract', 
      'Ginkgo', 
      'Ginseng', 
      'Grape\u00A0Seed\u00A0Extract', 
      'Multivitamins & Multiminerals Softgel Capsules'
    ],
    indications: 'May be used to support cardiovascular health, cognitive function, antioxidant defense, energy levels, and overall nutritional balance.',
    dosage: 'Adults: Take one softgel capsule daily or as directed by your healthcare provider.',
    contraindications: 'Individuals with known allergies to any of the ingredients should avoid use. Consult your doctor if you are pregnant, breastfeeding, taking blood thinners, or have any underlying medical conditions.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep out of reach of children.'
  },
  {
    id: 6,
    slug: 'scelio-dz',
    name: 'SCELIO-DZ',
    category: 'Anti-inflammatory',
    image: productImagePaths['vitamins'],
    description: 'SCELIO-DZ contains deflazacort, a corticosteroid medication used to treat a variety of conditions involving inflammation and autoimmune responses.',
    composition: ['Deflazacort-6mg Tablets'],
    indications: 'Indicated for the treatment of inflammatory and autoimmune conditions such as rheumatoid arthritis, asthma, and certain muscular dystrophies. Your doctor will determine the specific condition for which this medication is appropriate.',
    dosage: 'Dosage will be determined by your healthcare provider based on your specific condition, its severity, and your response to treatment. Follow your doctor\'s instructions precisely.',
    contraindications: 'This medication is contraindicated in individuals with systemic fungal infections and those with known hypersensitivity to deflazacort or any components of the formulation. It should be used with caution in patients with certain medical conditions. Inform your doctor about your complete medical history.',
    storage: 'Store in a cool, dry place away from light and moisture. Keep out of reach of children.'
  },
  {
    id: 7,
    slug: 'liotend',
    name: 'LIOTEND',
    category: 'Joint Health',
    image: productImagePaths['pain-relief'],
    description: 'LIOTEND is a joint support supplement formulated with a blend of Mucopolysaccharide, Bioactive Collagen Peptide Type I, Sodium Hyaluronate, Chondroitin Sulfate, Vitamin C, Rosehip Extract, and Vitamin D3 to promote joint health and mobility.',
    composition: [
      'Mucopolysaccharide-220mg', 
      'Bioactive Collagen Peptide Type I-40mg', 
      'Sodium\u00A0Hyaluronate-30mg', 
      'Chondroitin Sulfate-200mg', 
      'Vit.C-35mg', 
      'Rosehip\u00A0Extract-375mg', 
      'Vitamin D3-600 IU Tablets'
    ],
    indications: 'May be used to support joint health, reduce joint discomfort, improve flexibility, and aid in cartilage maintenance.',
    dosage: 'Adults: Take one tablet twice daily or as directed by your healthcare provider.',
    contraindications: 'Individuals with known allergies to any of the ingredients should avoid use. Consult your doctor if you are pregnant, breastfeeding, or have any underlying medical conditions.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep out of reach of children.'
  },
  {
    id: 8,
    slug: 'liofrac',
    name: 'LIOFRAC',
    category: 'Bone Health',
    image: productImagePaths['vitamins'],
    description: 'LIOFRAC is a dietary supplement formulated to support bone health. It contains Cissus Quadrangularis, Calcium Citrate, and Vitamin K2-7.',
    composition: [
      'Cissus Quadrangularis-500mg', 
      'Calcium Citrate-500mg', 
      'Vitamin K2-7 45mcg Tablets'
    ],
    indications: 'May be used to support bone strength, bone density, and overall skeletal health.',
    dosage: 'Adults: Take one tablet twice daily or as directed by your healthcare provider.',
    contraindications: 'Individuals with known allergies to any of the ingredients should avoid use. Consult your doctor if you are pregnant, breastfeeding, or have any underlying medical conditions, especially those related to blood clotting.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep out of reach of children.'
  },
  {
    id: 9,
    slug: 'liotryp-ap',
    name: 'LIOTRYP-AP',
    category: 'Anti-inflammatory',
    image: productImagePaths['pain-relief'],
    description: 'LIOTRYP-AP is a combination medication formulated to help manage pain and inflammation. It contains Trypsin-Chymotrypsin, Aceclofenac, and Paracetamol.',
    composition: [
      'Trypsin-Chymotrypsin 150000 AU', 
      'Aceclofenac-100mg', 
      'Paracetamol-325mg Tablets'
    ],
    indications: 'Indicated for the relief of pain and inflammation associated with musculoskeletal conditions, post-traumatic and post-operative pain, and other inflammatory conditions.',
    dosage: 'Adults: Take one tablet two or three times daily or as directed by your healthcare provider. The dosage may vary depending on the severity of the condition.',
    contraindications: 'This medication is contraindicated in individuals with known hypersensitivity to any of its components, a history of peptic ulcer or gastrointestinal bleeding, severe liver or kidney disease, and in patients with known aspirin or other NSAID-induced asthma, urticaria, or angioedema. Consult your doctor before use, especially if you have any other medical conditions.',
    storage: 'Store in a cool, dry place away from light and moisture. Keep out of reach of children.'
  },
  {
    id: 10,
    slug: 'liocet-5',
    name: 'LIOCET-5',
    category: 'Antihistamine',
    image: productImagePaths['pain-relief'],
    description: 'LIOCET-5 contains levocetirizine, an antihistamine used to relieve symptoms of allergies.',
    composition: ['Levocetirizine-5mg Tablets'],
    indications: 'Indicated for the relief of symptoms associated with allergic rhinitis (seasonal and perennial) such as sneezing, runny nose, itchy, watery eyes, and itching of the nose or throat. It is also used to relieve symptoms of chronic idiopathic urticaria (hives and itching).',
    dosage: 'Adults and children 6 years and older: Take one tablet once daily or as directed by your healthcare provider. The timing of the dose can be flexible but should be consistent each day.',
    contraindications: 'This medication is contraindicated in individuals with known hypersensitivity to levocetirizine or any of its ingredients, or to hydroxyzine. It is also generally not recommended for use in children under 6 years of age or in patients with severe kidney disease unless specifically directed by a doctor.',
    storage: 'Store in a cool, dry place away from light and moisture. Keep out of reach of children.'
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
    indications: 'For the rapid relief of pain and inflammation in conditions like osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis, especially with protection against NSAID-induced gastric irritation.',
    dosage: 'Adults: Take one capsule once or twice daily, preferably after food, or as directed by your healthcare provider. Swallow the capsule whole and do not crush or chew it.',
    contraindications: 'Do not use if you have a history of hypersensitivity to NSAIDs, active peptic ulceration, or severe hepatic or renal impairment. Consult your doctor before use.',
    storage: 'Store in a cool, dry place away from light and moisture. Keep out of reach of children.'
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
    dosage: 'Adults: Apply a thin layer of the gel to the affected area 2 to 3 times daily or as directed by your healthcare provider.',
    contraindications: 'Do not use on broken skin or Open wounds. Avoid contact with eyes.',
    storage: 'Store in a cool, dry place below 30°C. Keep out of reach of children.'
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