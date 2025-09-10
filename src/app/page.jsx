import Header from './components/Header';
import HeroSection from './components/HeroSection';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";


export default function Home() {
  return (
    <div className="flex flex-col w-full">     
      <div className="mt-8 w-full">
        <HeroSection />
      </div>
    </div>
  );
}