import Hero from '@/components/Hero';
import SkillsSnapshot from '@/components/SkillsSnapshot';
import WorkExperience from '@/components/WorkExperience';
import FeaturedProjects from '@/components/FeaturedProjects';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import ChatbotButton from '@/components/ChatbotButton';
import IntroOverlay from '@/components/IntroOverlay';
import CustomCursor from '@/components/CustomCursor';
import ProofBar from '@/components/ProofBar';

export default function HomePage() {
    return (
        <>
            {/* <IntroOverlay /> */}
            {/* <CustomCursor /> */}
            <FloatingNav />
            <ChatbotButton />
            <main className="min-h-screen">
                {/* 01. Hero - Name, title, bio, social links */}
                <Hero />

                {/* Proof Bar - Technologies */}
                <ProofBar />

                {/* Rounded Container for Skills + Experience */}
                <div className="relative py-16" style={{ background: '#F8F8F8' }}>
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="bg-white rounded-[60px] shadow-lg overflow-hidden">
                            {/* 02. Skills - What I work with */}
                            <SkillsSnapshot />

                            {/* 03. Work Experience - Companies and achievements */}
                            <WorkExperience />
                        </div>
                    </div>
                </div>

                {/* 04. Projects - Technical showcase */}
                <FeaturedProjects />

                {/* 05. Education, Certifications & Awards */}
                <Education />
            </main>

            <Footer />
        </>
    );
}
