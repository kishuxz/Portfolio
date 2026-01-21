import Hero from '@/components/Hero';
import SkillsSnapshot from '@/components/SkillsSnapshot';
import WorkExperience from '@/components/WorkExperience';
import FeaturedProjects from '@/components/FeaturedProjects';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import ChatbotButton from '@/components/ChatbotButton';

export default function HomePage() {
    return (
        <>
            <FloatingNav />
            <ChatbotButton />
            <main className="min-h-screen">
                {/* 01. Hero - Name, title, bio, social links */}
                <Hero />

                {/* 02. Skills - What I work with */}
                <SkillsSnapshot />

                {/* 03. Work Experience - Companies and achievements */}
                <WorkExperience />

                {/* 04. Projects - Technical showcase */}
                <FeaturedProjects />

                {/* 05. Education, Certifications & Awards */}
                <Education />
            </main>

            <Footer />
        </>
    );
}
