
import React, { useState } from 'react';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

// Real product data, 10 for each category
const productData = [
  // Oil & Gas
  {
    name: 'API 5L Seamless Steel Pipe',
    description: 'High-strength seamless steel pipes for oil and gas transmission, meeting API 5L standards.',
    category: 'Oil & Gas',
    image: require('../../assets/ball.png'),
  },
  {
    name: 'Wellhead Christmas Tree',
    description: 'Advanced wellhead equipment for pressure control and safe oil extraction.',
    category: 'Oil & Gas',
    image: require('../../assets/wellhead.jpg'),
  },
  {
    name: 'Subsea Control Valve',
    description: 'Corrosion-resistant valves for subsea oil and gas operations.',
    category: 'Oil & Gas',
    image: require('../../assets/valve.jpg'),
  },
  {
    name: 'Downhole Tubing',
    description: 'Premium tubing for downhole applications in oil wells.',
    category: 'Oil & Gas',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Gas Lift Mandrel',
    description: 'Mandrels for gas lift systems, improving oil recovery efficiency.',
    category: 'Oil & Gas',
    image: require('../../assets/gas.jpg'),
  },
  {
    name: 'Pipeline Gasket',
    description: 'High-pressure gaskets for pipeline sealing in oil and gas transport.',
    category: 'Oil & Gas',
    image: require('../../assets/gasket.jpg'),
  },
  {
    name: 'Rotary Drill Bit',
    description: 'Durable drill bits for oilfield drilling operations.',
    category: 'Oil & Gas',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Production Tubing Hanger',
    description: 'Tubing hangers for secure suspension of production tubing in wells.',
    category: 'Oil & Gas',
    image: require('../../assets/heritage.png'),
  },
  {
    name: 'Mud Pump',
    description: 'Heavy-duty mud pumps for drilling fluid circulation.',
    category: 'Oil & Gas',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Casing Centralizer',
    description: 'Centralizers for proper casing placement in oil wells.',
    category: 'Oil & Gas',
    image: require('../../assets/service2.jpeg'),
  },
  // Industrial
  {
    name: 'Stainless Steel Flange',
    description: 'Precision flanges for industrial piping systems.',
    category: 'Industrial',
    image: require('../../assets/stainless.jpg'),
  },
  {
    name: 'Industrial Ball Valve',
    description: 'Reliable ball valves for flow control in industrial processes.',
    category: 'Industrial',
    image: require('../../assets/valves.jpg'),
  },
  {
    name: 'Electric Motor',
    description: 'High-efficiency electric motors for industrial machinery.',
    category: 'Industrial',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Gearbox Assembly',
    description: 'Heavy-duty gearboxes for power transmission applications.',
    category: 'Industrial',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Industrial Cable',
    description: 'Durable cables for power and signal transmission in factories.',
    category: 'Industrial',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Hydraulic Pump',
    description: 'Robust hydraulic pumps for industrial automation.',
    category: 'Industrial',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Pneumatic Actuator',
    description: 'Actuators for precise control in industrial systems.',
    category: 'Industrial',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Industrial Fasteners',
    description: 'Assorted fasteners for assembly and maintenance.',
    category: 'Industrial',
    image: require('../../assets/screws.jpg'),
  },
  {
    name: 'Heat Exchanger',
    description: 'Efficient heat exchangers for process industries.',
    category: 'Industrial',
    image: require('../../assets/item.jpg'),
  },
  {
    name: 'Pressure Gauge',
    description: 'Accurate gauges for monitoring industrial processes.',
    category: 'Industrial',
    image: require('../../assets/profile.png'),
  },
  // Automotive
  {
    name: 'Automotive Spark Plug',
    description: 'High-performance spark plugs for gasoline engines.',
    category: 'Automotive',
    image: require('../../assets/default.png'),
  },
  {
    name: 'Brake Pad Set',
    description: 'Durable brake pads for safe vehicle stopping.',
    category: 'Automotive',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Fuel Injector',
    description: 'Precision fuel injectors for efficient combustion.',
    category: 'Automotive',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Car Battery',
    description: 'Long-lasting batteries for automotive applications.',
    category: 'Automotive',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Radiator Hose',
    description: 'Flexible hoses for vehicle cooling systems.',
    category: 'Automotive',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Shock Absorber',
    description: 'Quality shock absorbers for smooth rides.',
    category: 'Automotive',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Timing Belt',
    description: 'Reliable timing belts for engine synchronization.',
    category: 'Automotive',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Automotive Oil Filter',
    description: 'Efficient oil filters for engine protection.',
    category: 'Automotive',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Headlight Bulb',
    description: 'Bright and durable bulbs for vehicle headlights.',
    category: 'Automotive',
    image: require('../../assets/heritage.png'),
  },
  {
    name: 'Windshield Wiper Blade',
    description: 'High-quality wiper blades for clear visibility.',
    category: 'Automotive',
    image: require('../../assets/chevron.png'),
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(productData.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <main style={{ flexGrow: 1, marginTop: NAVBAR_HEIGHT, position: 'relative', zIndex: 2 }}>
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginTop: 0,
            paddingTop: 0,
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 'bold', marginBottom: 20 }}>Our Products</h1>
          <p style={{ color: 'white', fontSize: 18, maxWidth: 700, margin: '0 auto', opacity: 0.9 }}>
            Explore our range of high-quality products for the oil & gas, industrial, and automotive sectors.
          </p>
        </motion.section>
        <section style={{ padding: '40px 5%', background: '#f8f9fa' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, backgroundColor: '#FFA500', color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '25px',
                    border: 'none',
                    backgroundColor: selectedCategory === category ? '#667eea' : 'white',
                    color: selectedCategory === category ? 'white' : '#333',
                    cursor: 'pointer',
                    fontWeight: '500',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.name + idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: 'white',
                    borderRadius: 15,
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {product.image && (
                    <img src={product.image} alt={product.name} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 12, marginBottom: 18, boxShadow: '0 2px 8px #0001' }} />
                  )}
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{product.name}</h3>
                  <p style={{ color: '#666', fontSize: 15, marginBottom: 10 }}>{product.description}</p>
                  <span style={{ background: '#e0e7ff', color: '#667eea', borderRadius: 12, padding: '4px 12px', fontSize: 13, fontWeight: 500 }}>{product.category}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
