import type { Question, CategoryInfo, QuizCategory } from "@/type/question";
import { BookOpenText, Headphones, PenLine, AudioLines } from "lucide-react";

export const quizQuestions: Question[] = [
  // Reading questions (10 questions)
  {
    id: 1,
    category: "reading",
    type: "multiple-choice",
    text: "The black rhinoceros is listed as a critically _____ species.",
    options: ["endangered", "dangerous", "exposed", "weak"],
    correctAnswer: "endangered",
    points: 5,
  },
  {
    id: 2,
    category: "reading",
    type: "multiple-choice",
    text: "Which of the following is NOT a renewable energy source?",
    options: ["Solar", "Wind", "Coal", "Hydroelectric"],
    correctAnswer: "Coal",
    points: 5,
  },
  {
    id: 3,
    category: "reading",
    type: "multiple-choice",
    text: "The process by which plants convert sunlight into energy is called:",
    options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
    correctAnswer: "Photosynthesis",
    points: 5,
  },
  {
    id: 4,
    category: "reading",
    type: "multiple-choice",
    text: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    points: 5,
  },
  {
    id: 5,
    category: "reading",
    type: "multiple-choice",
    text: "What is the largest organ in the human body?",
    options: ["Heart", "Brain", "Liver", "Skin"],
    correctAnswer: "Skin",
    points: 5,
  },
  {
    id: 6,
    category: "reading",
    type: "multiple-choice",
    text: "Which of these is NOT a type of cloud?",
    options: ["Cumulus", "Stratus", "Nimbus", "Nebulus"],
    correctAnswer: "Nebulus",
    points: 5,
  },
  {
    id: 7,
    category: "reading",
    type: "multiple-choice",
    text: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
    points: 5,
  },
  {
    id: 8,
    category: "reading",
    type: "multiple-choice",
    text: "Which of these elements is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    correctAnswer: "Helium",
    points: 5,
  },
  {
    id: 9,
    category: "reading",
    type: "multiple-choice",
    text: "What is the main function of the mitochondria in a cell?",
    options: [
      "Protein synthesis",
      "Energy production",
      "Cell division",
      "Waste removal",
    ],
    correctAnswer: "Energy production",
    points: 5,
  },
  {
    id: 10,
    category: "reading",
    type: "multiple-choice",
    text: "Which of these is NOT a primary color?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: "Green",
    points: 5,
  },

  // Listening questions (8 questions)
  {
    id: 11,
    category: "listening",
    type: "listening",
    text: "Listen to the audio and answer: Where is the conversation taking place?",
    audioUrl: "/audio/conversation1.mp3",
    options: ["At a restaurant", "In a library", "At a park", "In a museum"],
    correctAnswer: "At a restaurant",
    points: 5,
  },
  {
    id: 12,
    category: "listening",
    type: "listening",
    text: "What is the main topic of the lecture?",
    audioUrl: "/audio/lecture1.mp3",
    options: [
      "Climate change",
      "Ocean pollution",
      "Deforestation",
      "Renewable energy",
    ],
    correctAnswer: "Climate change",
    points: 5,
  },
  {
    id: 13,
    category: "listening",
    type: "listening",
    text: "What instrument is playing the main melody?",
    audioUrl: "/audio/music1.mp3",
    options: ["Piano", "Violin", "Guitar", "Flute"],
    correctAnswer: "Violin",
    points: 5,
  },
  {
    id: 14,
    category: "listening",
    type: "listening",
    text: "What is the weather forecast for tomorrow?",
    audioUrl: "/audio/weather1.mp3",
    options: ["Sunny", "Rainy", "Cloudy", "Snowy"],
    correctAnswer: "Rainy",
    points: 5,
  },
  {
    id: 15,
    category: "listening",
    type: "listening",
    text: "What is the speaker's main argument?",
    audioUrl: "/audio/debate1.mp3",
    options: [
      "For stricter gun laws",
      "Against stricter gun laws",
      "For increased police funding",
      "Against increased police funding",
    ],
    correctAnswer: "For stricter gun laws",
    points: 5,
  },
  {
    id: 16,
    category: "listening",
    type: "listening",
    text: "What type of animal is making the sound?",
    audioUrl: "/audio/animal1.mp3",
    options: ["Lion", "Elephant", "Wolf", "Whale"],
    correctAnswer: "Wolf",
    points: 5,
  },
  {
    id: 17,
    category: "listening",
    type: "listening",
    text: "What is the main emotion expressed in this piece of music?",
    audioUrl: "/audio/music2.mp3",
    options: ["Joy", "Sadness", "Anger", "Fear"],
    correctAnswer: "Joy",
    points: 5,
  },
  {
    id: 18,
    category: "listening",
    type: "listening",
    text: "What is the speaker's accent?",
    audioUrl: "/audio/accent1.mp3",
    options: ["British", "American", "Australian", "Scottish"],
    correctAnswer: "Scottish",
    points: 5,
  },

  // Writing questions (4 questions)
  {
    id: 19,
    category: "writing",
    type: "writing",
    text: "Write an essay about the importance of environmental conservation.",
    promptText:
      "Discuss the major environmental challenges and potential solutions.",
    wordLimit: 250,
    points: 20,
  },
  {
    id: 20,
    category: "writing",
    type: "writing",
    text: "Describe a significant event in your life and its impact on you.",
    promptText:
      "Include details about what happened, how you felt, and how it changed you.",
    wordLimit: 300,
    points: 20,
  },
  {
    id: 21,
    category: "writing",
    type: "writing",
    text: "Write a letter to your future self, 10 years from now.",
    promptText: "Discuss your current goals, fears, and hopes for the future.",
    wordLimit: 200,
    points: 20,
  },
  {
    id: 22,
    category: "writing",
    type: "writing",
    text: "Argue for or against the statement: 'Social media has more negative than positive effects on society.'",
    promptText:
      "Provide clear arguments and examples to support your position.",
    wordLimit: 350,
    points: 20,
  },

  // Speaking questions (5 questions)
  {
    id: 23,
    category: "speaking",
    type: "speaking",
    text: "Describe your ideal vacation destination.",
    promptText:
      "Include details about location, activities, and why you would choose this destination.",
    durationLimit: 60,
    points: 20,
  },
  {
    id: 24,
    category: "speaking",
    type: "speaking",
    text: "Talk about a person who has had a significant influence on your life.",
    promptText:
      "Explain who this person is, how they influenced you, and why they are important to you.",
    durationLimit: 90,
    points: 20,
  },
  {
    id: 25,
    category: "speaking",
    type: "speaking",
    text: "Discuss the advantages and disadvantages of working from home.",
    promptText:
      "Consider factors such as productivity, work-life balance, and social interaction.",
    durationLimit: 120,
    points: 20,
  },
  {
    id: 26,
    category: "speaking",
    type: "speaking",
    text: "Explain a complex topic from your field of study or work to a general audience.",
    promptText:
      "Choose a topic you're familiar with and explain it in simple terms.",
    durationLimit: 150,
    points: 20,
  },
  {
    id: 27,
    category: "speaking",
    type: "speaking",
    text: "Describe a challenging situation you've faced and how you overcame it.",
    promptText:
      "Include details about the situation, your actions, and the outcome.",
    durationLimit: 120,
    points: 20,
  },
];

export const categoryInfo: CategoryInfo[] = [
  { name: "reading", icon: BookOpenText, time: 20 * 60, questionCount: 10 },
  { name: "listening", icon: Headphones, time: 15 * 60, questionCount: 8 },
  { name: "writing", icon: PenLine, time: 30 * 60, questionCount: 4 },
  { name: "speaking", icon: AudioLines, time: 15 * 60, questionCount: 5 },
];

export const initialTimeRemaining: Record<QuizCategory, number> =
  Object.fromEntries(categoryInfo.map((c) => [c.name, c.time])) as Record<
    QuizCategory,
    number
  >;
