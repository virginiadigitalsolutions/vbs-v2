import CoursesDirectionSection from "@/components/courses-certifications/direction-section";
import CoursesEvaluationSection from "@/components/courses-certifications/evaluation-section";
import CoursesFreeVsPaidSection from "@/components/courses-certifications/free-vs-paid-section";
import CoursesHeroSection from "@/components/courses-certifications/hero-section";
import CoursesMistakesSection from "@/components/courses-certifications/mistakes-section";
import CoursesProgressionSection from "@/components/courses-certifications/progression-section";
import CoursesStructureSection from "@/components/courses-certifications/structure-section";

export const metadata = {
  title: "Digital Courses & Certifications in India | Structured Learning Paths",
  description:
    "Explore structured digital courses and certifications in India. Learn through beginner, intermediate, and advanced paths with clear guidance on free and paid options.",
};

export default function CoursesCertificationsPage() {
  return (
    <div>
      <CoursesHeroSection />
      <CoursesStructureSection />
      <CoursesProgressionSection />
      <CoursesFreeVsPaidSection />
      <CoursesEvaluationSection />
      <CoursesMistakesSection />
      <CoursesDirectionSection />
    </div>
  );
}
