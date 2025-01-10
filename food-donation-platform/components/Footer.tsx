// src/components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Food Donation Platform</p>
          <p>Contact us: support@fooddonation.com</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  