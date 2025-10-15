import firstAidImg from "@/assets/first-aid.jpg";
import sewingImg from "@/assets/sewing.jpg";
import landscapingImg from "@/assets/landscaping.jpg";
import childmindingImg from "@/assets/childminding.jpg";

export interface Course {
  id: string;
  title: string;
  description: string;
  fee: number;
  feeDisplay: string;
  duration: string;
  type: "six-month" | "short";
  image: string;
  slug: string;
  purpose: string;
  content: string[];
}

export const courses: Course[] = [
  // Six-Month Courses
  {
    id: "first-aid",
    title: "First Aid",
    description: "To provide first aid awareness and basic life support",
    fee: 1500,
    feeDisplay: "R1500",
    duration: "6 months",
    type: "six-month",
    image: firstAidImg,
    slug: "first-aid",
    purpose: "To provide first aid awareness and basic life support",
    content: [
      "Wounds and bleeding",
      "Burns and fractures",
      "Emergency scene management",
      "Cardio-Pulmonary Resuscitation (CPR)",
      "Respiratory distress e.g., Choking, blocked airway",
    ],
  },
  {
    id: "sewing",
    title: "Sewing",
    description: "To provide alterations and new garment tailoring services",
    fee: 1500,
    feeDisplay: "R1500",
    duration: "6 months",
    type: "six-month",
    image: sewingImg,
    slug: "sewing",
    purpose: "To provide alterations and new garment tailoring services",
    content: [
      "Types of stitches",
      "Threading a sewing machine",
      "Sewing buttons, zips, hems and seams",
      "Alterations",
      "Designing and sewing new garments",
    ],
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description: "To provide landscaping services for new and established gardens",
    fee: 1500,
    feeDisplay: "R1500",
    duration: "6 months",
    type: "six-month",
    image: landscapingImg,
    slug: "landscaping",
    purpose: "To provide landscaping services for new and established gardens",
    content: [
      "Indigenous and exotic plants and trees",
      "Fixed structures (fountains, statues, benches, tables, built-in braai)",
      "Balancing of plants and trees in a garden",
      "Aesthetics of plant shapes and colours",
      "Garden layout",
    ],
  },
  {
    id: "life-skills",
    title: "Life Skills",
    description: "To provide skills to navigate basic life necessities",
    fee: 1500,
    feeDisplay: "R1500",
    duration: "6 months",
    type: "six-month",
    image: firstAidImg,
    slug: "life-skills",
    purpose: "To provide skills to navigate basic life necessities",
    content: [
      "Opening a bank account",
      "Basic labour law (know your rights)",
      "Basic reading and writing literacy",
      "Basic numeric literacy",
    ],
  },
  // Short Courses
  {
    id: "child-minding",
    title: "Child Minding",
    description: "To provide basic child and baby care",
    fee: 750,
    feeDisplay: "R750",
    duration: "6 weeks",
    type: "short",
    image: childmindingImg,
    slug: "child-minding",
    purpose: "To provide basic child and baby care",
    content: [
      "Birth to six-month old baby needs",
      "Seven-month to one year old needs",
      "Toddler needs",
      "Educational toys",
    ],
  },
  {
    id: "cooking",
    title: "Cooking",
    description: "To prepare and cook nutritious family meals",
    fee: 750,
    feeDisplay: "R750",
    duration: "6 weeks",
    type: "short",
    image: sewingImg,
    slug: "cooking",
    purpose: "To prepare and cook nutritious family meals",
    content: [
      "Nutritional requirements for a healthy body",
      "Types of protein, carbohydrates and vegetables",
      "Planning meals",
      "Tasty and nutritious recipes",
      "Preparation and cooking of meals",
    ],
  },
  {
    id: "garden-maintenance",
    title: "Garden Maintenance",
    description: "To provide basic knowledge of watering, pruning and planting in a domestic garden",
    fee: 750,
    feeDisplay: "R750",
    duration: "6 weeks",
    type: "short",
    image: landscapingImg,
    slug: "garden-maintenance",
    purpose: "To provide basic knowledge of watering, pruning and planting in a domestic garden",
    content: [
      "Water restrictions and the watering requirements of indigenous and exotic plants",
      "Pruning and propagation of plants",
      "Planting techniques for different plant types",
    ],
  },
];

export const getSixMonthCourses = () => courses.filter((c) => c.type === "six-month");
export const getShortCourses = () => courses.filter((c) => c.type === "short");
export const getCourseBySlug = (slug: string) => courses.find((c) => c.slug === slug);
