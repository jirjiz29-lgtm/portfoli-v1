import { HeroSection } from "@/components/home/HeroSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { HowIWorkSection } from "@/components/home/HowIWorkSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ExpertiseSection />
      <FeaturedProjectsSection />
      <HowIWorkSection />
      <AboutPreviewSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactCtaSection />
    </div>
  );
}
