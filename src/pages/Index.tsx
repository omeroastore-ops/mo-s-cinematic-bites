import HeroSection from "@/components/HeroSection";
import FoodStory from "@/components/FoodStory";
import FeaturedItems from "@/components/FeaturedItems";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CartDrawer from "@/components/CartDrawer";
import FloatingCartButton from "@/components/FloatingCartButton";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <HeroSection />
      <FoodStory />
      <FeaturedItems />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <CartDrawer />
      <FloatingCartButton />
    </main>
  );
};

export default Index;
