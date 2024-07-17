import { AccordionData } from "@/components/Accordion/Accordion";
import { WhyJoinData } from "@/pages/job/interview-camp/WhyJoinList/WhyJoinList";
import whyJoin1Img from "@/assets/interview-camp/icon_whyjoin_1.png";
import whyJoin2Img from "@/assets/interview-camp/icon_whyjoin_2.png";
import whyJoin3Img from "@/assets/interview-camp/icon_whyjoin_3.png";
import whyJoin4Img from "@/assets/interview-camp/icon_whyjoin_4.png";
import { CourceArrangement } from "@/pages/job/interview-camp/CourseArrangement/CourseArrangement";

export const interviewCampFAQData: AccordionData[] = [
  {
    id: 1,
    title: "Is the course live or recorded?",
    content: (
      <>
        Live classes. Students who cannot attend live can watch the replay. The
        replay is permanently available for repeated study.
      </>
    ),
  },
  {
    id: 2,
    title: "How to get the course bonuses?",
    content: (
      <>
        For the best learning experience, the instructor will provide a code
        during the live class. Use the code to claim the bonuses from the class
        coordinator.
      </>
    ),
  },
  {
    id: 3,
    title: "How to join the study Wechat group?",
    content: (
      <>
        After registration, provide a payment screenshot and contact Rexpand
        career consultant to join the Wechat group.
      </>
    ),
  },
  {
    id: 4,
    title: "Who is the lead instructor of the interview boot camp?",
    content: (
      <>
        Chen Li, formerly with Goldman Sachs Investment Banking and EY Advisory.
        Over 8 years of experience in Chinese international student job search
        education, with years of experience as a Goldman Sachs interviewer,
        helping hundreds of international students secure desired offers.
      </>
    ),
  },
];

export const whyJoinData: WhyJoinData[] = [
  {
    id: 1,
    icon: whyJoin1Img,
    title: "Real Question Review",
    description:
      "Review real interview questions from top companies with a 90% pass rate",
  },
  {
    id: 2,
    icon: whyJoin2Img,
    title: "Full Process Analysis",
    description:
      "Master the entire interview process from Hirevue to Super Day interviews in 5 days",
  },
  {
    id: 3,
    icon: whyJoin3Img,
    title: "Top Company Hiring Manager",
    description:
      "Lectures by hiring managers from top companies with over 10 years of experience",
  },
  {
    id: 4,
    icon: whyJoin4Img,
    title: "Monthly Courses",
    description:
      "Program rotating every month, with thousands of Chinese international students enrolled",
  },
];

export const courceArrangementData: CourceArrangement[] = [
  {
    id: 1,
    title: "48-Hour Pre-Interview Strategy to Secure Offers",
    content: ["Course Bonus: Interview 64 Questions Handbook (with answers)"],
  },
  {
    id: 2,
    title: "Ultimate Guide to Online Assessments and HireVue",
    content: [
      "Course Bonus: Real HireVue interview questions and answers from Goldman Sachs and others",
    ],
  },
  {
    id: 3,
    title: "Three Universal Logics for All Interviews",
    content: [
      "Course Bonus: Personalized BQ Interview Answers (Memorization Version))",
    ],
  },
  {
    id: 4,
    title: "Mock Interview to Master Real Interviews",
    content: [
      "Course Bonus: Referral opportunities for positions in top US companies",
    ],
  },
  {
    id: 5,
    title:
      "While Others Wait, Learn to Get More Opportunities Through Referrals",
    content: ["Course Bonus: Networking White Paper"],
  },
];
