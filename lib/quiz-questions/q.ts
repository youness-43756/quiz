export type QuizQuestionsProps = {
  id: number;
  question: {
    label: string;
    rightAnswer: string;
    answers: {
      id: string;
      answer: string;
    }[];
  }[];
}[];
export type QuizQuestionProps = {
  id: number;
  question: {
    label: string;
    rightAnswer: string;
    answers: {
      id: string;
      answer: string;
    }[];
  }[];
};

export const QuizQuestions: QuizQuestionsProps = [
  {
    id: 0,
    question: [
      {
        label: "What is the largest mammal in the world?",
        rightAnswer: "b",
        answers: [
          { id: "a", answer: "Elephant" },
          { id: "b", answer: "Blue Whale" },
          { id: "c", answer: "Giraffe" },
          { id: "d", answer: "Hippopotamus" },
        ],
      },
    ],
  },
  {
    id: 1,
    question: [
      {
        label: "Which planet is known as the Red Planet?",
        rightAnswer: "a",
        answers: [
          { id: "a", answer: "Mars" },
          { id: "b", answer: "Jupiter" },
          { id: "c", answer: "Saturn" },
          { id: "d", answer: "Venus" },
        ],
      },
    ],
  },
  {
    id: 2,
    question: [
      {
        label: "What is the most abundant gas in Earth's atmosphere?",
        rightAnswer: "c",
        answers: [
          { id: "a", answer: "Oxygen" },
          { id: "b", answer: "Carbon Dioxide" },
          { id: "c", answer: "Nitrogen" },
          { id: "d", answer: "Hydrogen" },
        ],
      },
    ],
  },
  {
    id: 3,
    question: [
      {
        label: "What type of tree produces acorns?",
        rightAnswer: "a",
        answers: [
          { id: "a", answer: "Oak" },
          { id: "b", answer: "Pine" },
          { id: "c", answer: "Maple" },
          { id: "d", answer: "Birch" },
        ],
      },
    ],
  },
  {
    id: 4,
    question: [
      {
        label: "Which of the following animals is a marsupial?",
        rightAnswer: "b",
        answers: [
          { id: "a", answer: "Elephant" },
          { id: "b", answer: "Kangaroo" },
          { id: "c", answer: "Lion" },
          { id: "d", answer: "Penguin" },
        ],
      },
    ],
  },
  {
    id: 5,
    question: [
      {
        label: "What is the primary source of energy for Earth?",
        rightAnswer: "d",
        answers: [
          { id: "a", answer: "Wind" },
          { id: "b", answer: "Geothermal" },
          { id: "c", answer: "Hydroelectric" },
          { id: "d", answer: "Sun" },
        ],
      },
    ],
  },
  {
    id: 6,
    question: [
      {
        label: "Which ocean is the largest?",
        rightAnswer: "a",
        answers: [
          { id: "a", answer: "Pacific Ocean" },
          { id: "b", answer: "Atlantic Ocean" },
          { id: "c", answer: "Indian Ocean" },
          { id: "d", answer: "Arctic Ocean" },
        ],
      },
    ],
  },
  {
    id: 7,
    question: [
      {
        label: "What is the tallest mountain in the world?",
        rightAnswer: "b",
        answers: [
          { id: "a", answer: "K2" },
          { id: "b", answer: "Mount Everest" },
          { id: "c", answer: "Kangchenjunga" },
          { id: "d", answer: "Lhotse" },
        ],
      },
    ],
  },
  {
    id: 8,
    question: [
      {
        label: "Which of the following is not a type of rock?",
        rightAnswer: "d",
        answers: [
          { id: "a", answer: "Igneous" },
          { id: "b", answer: "Sedimentary" },
          { id: "c", answer: "Metamorphic" },
          { id: "d", answer: "Plastic" },
        ],
      },
    ],
  },
  {
    id: 9,
    question: [
      {
        label: "What is the process by which plants make their food?",
        rightAnswer: "a",
        answers: [
          { id: "a", answer: "Photosynthesis" },
          { id: "b", answer: "Respiration" },
          { id: "c", answer: "Fermentation" },
          { id: "d", answer: "Decomposition" },
        ],
      },
    ],
  },
  {
    id: 10,
    question: [
      {
        label: "What is the largest desert in the world?",
        rightAnswer: "b",
        answers: [
          { id: "a", answer: "Sahara" },
          { id: "b", answer: "Antarctic Desert" },
          { id: "c", answer: "Arabian Desert" },
          { id: "d", answer: "Gobi Desert" },
        ],
      },
    ],
  },
  {
    id: 11,
    question: [
      {
        label: "Which bird is known for its ability to mimic sounds?",
        rightAnswer: "a",
        answers: [
          { id: "a", answer: "Parrot" },
          { id: "b", answer: "Eagle" },
          { id: "c", answer: "Penguin" },
          { id: "d", answer: "Sparrow" },
        ],
      },
    ],
  },
  {
    id: 12,
    question: [
      {
        label: "What type of animal is a Komodo dragon?",
        rightAnswer: "d",
        answers: [
          { id: "a", answer: "Mammal" },
          { id: "b", answer: "Bird" },
          { id: "c", answer: "Fish" },
          { id: "d", answer: "Reptile" },
        ],
      },
    ],
  },
  {
    id: 13,
    question: [
      {
        label: "Which layer of the Earth is liquid?",
        rightAnswer: "b",
        answers: [
          { id: "a", answer: "Crust" },
          { id: "b", answer: "Outer Core" },
          { id: "c", answer: "Mantle" },
          { id: "d", answer: "Inner Core" },
        ],
      },
    ],
  },
  {
    id: 14,
    question: [
      {
        label: "What is the main function of a tree's leaves?",
        rightAnswer: "a",
        answers: [
          { id: "a", answer: "Photosynthesis" },
          { id: "b", answer: "Water Storage" },
          { id: "c", answer: "Reproduction" },
          { id: "d", answer: "Protection" },
        ],
      },
    ],
  },
  {
    id: 15,
    question: [
      {
        label: "Which of these animals is a mammal?",
        rightAnswer: "c",
        answers: [
          { id: "a", answer: "Shark" },
          { id: "b", answer: "Crocodile" },
          { id: "c", answer: "Dolphin" },
          { id: "d", answer: "Lizard" },
        ],
      },
    ],
  },
];

// export type QuizQuestionsProps = {
//   id: number;
//   subject: string;
//   quiz: {
//     id: number;
//     question: {
//       label: string;
//       rightAnswer: string;
//       answers: {
//         id: string;
//         answer: string;
//       }[];
//     }[];
//   }[];
// }[];

// export const QuizQuestions: QuizQuestionsProps = [
//   {
//     id: 0,
//     subject: "nature",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "What is the largest mammal in the world?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Elephant" },
//               { id: "b", answer: "Blue Whale" },
//               { id: "c", answer: "Giraffe" },
//               { id: "d", answer: "Hippopotamus" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "Which planet is known as the Red Planet?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Mars" },
//               { id: "b", answer: "Jupiter" },
//               { id: "c", answer: "Saturn" },
//               { id: "d", answer: "Venus" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "What is the most abundant gas in Earth's atmosphere?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Oxygen" },
//               { id: "b", answer: "Carbon Dioxide" },
//               { id: "c", answer: "Nitrogen" },
//               { id: "d", answer: "Hydrogen" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "What type of tree produces acorns?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Oak" },
//               { id: "b", answer: "Pine" },
//               { id: "c", answer: "Maple" },
//               { id: "d", answer: "Birch" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label: "Which of the following animals is a marsupial?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Elephant" },
//               { id: "b", answer: "Kangaroo" },
//               { id: "c", answer: "Lion" },
//               { id: "d", answer: "Penguin" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "What is the primary source of energy for Earth?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Wind" },
//               { id: "b", answer: "Geothermal" },
//               { id: "c", answer: "Hydroelectric" },
//               { id: "d", answer: "Sun" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label: "Which ocean is the largest?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Pacific Ocean" },
//               { id: "b", answer: "Atlantic Ocean" },
//               { id: "c", answer: "Indian Ocean" },
//               { id: "d", answer: "Arctic Ocean" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "What is the tallest mountain in the world?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "K2" },
//               { id: "b", answer: "Mount Everest" },
//               { id: "c", answer: "Kangchenjunga" },
//               { id: "d", answer: "Lhotse" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label: "Which of the following is not a type of rock?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Igneous" },
//               { id: "b", answer: "Sedimentary" },
//               { id: "c", answer: "Metamorphic" },
//               { id: "d", answer: "Plastic" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label: "What is the process by which plants make their food?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Photosynthesis" },
//               { id: "b", answer: "Respiration" },
//               { id: "c", answer: "Fermentation" },
//               { id: "d", answer: "Decomposition" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "What is the largest desert in the world?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Sahara" },
//               { id: "b", answer: "Antarctic Desert" },
//               { id: "c", answer: "Arabian Desert" },
//               { id: "d", answer: "Gobi Desert" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label: "Which bird is known for its ability to mimic sounds?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Parrot" },
//               { id: "b", answer: "Eagle" },
//               { id: "c", answer: "Penguin" },
//               { id: "d", answer: "Sparrow" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label: "What type of animal is a Komodo dragon?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Mammal" },
//               { id: "b", answer: "Bird" },
//               { id: "c", answer: "Fish" },
//               { id: "d", answer: "Reptile" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label: "Which layer of the Earth is liquid?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Crust" },
//               { id: "b", answer: "Outer Core" },
//               { id: "c", answer: "Mantle" },
//               { id: "d", answer: "Inner Core" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "What is the main function of a tree's leaves?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Photosynthesis" },
//               { id: "b", answer: "Water Storage" },
//               { id: "c", answer: "Reproduction" },
//               { id: "d", answer: "Protection" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 15,
//         question: [
//           {
//             label: "Which of these animals is a mammal?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Shark" },
//               { id: "b", answer: "Crocodile" },
//               { id: "c", answer: "Dolphin" },
//               { id: "d", answer: "Lizard" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   // Repeat similar structure for different subjects
//   {
//     id: 1,
//     subject: "history",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "What year did World War I begin?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "1912" },
//               { id: "b", answer: "1914" },
//               { id: "c", answer: "1916" },
//               { id: "d", answer: "1918" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "Who was the first President of the United States?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "George Washington" },
//               { id: "b", answer: "Thomas Jefferson" },
//               { id: "c", answer: "Abraham Lincoln" },
//               { id: "d", answer: "John Adams" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "In which year did the Berlin Wall fall?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "1985" },
//               { id: "b", answer: "1987" },
//               { id: "c", answer: "1989" },
//               { id: "d", answer: "1991" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "Who was the British Prime Minister during World War II?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Neville Chamberlain" },
//               { id: "b", answer: "Clement Attlee" },
//               { id: "c", answer: "Margaret Thatcher" },
//               { id: "d", answer: "Winston Churchill" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label: "What ancient civilization built the pyramids?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Egyptians" },
//               { id: "b", answer: "Romans" },
//               { id: "c", answer: "Greeks" },
//               { id: "d", answer: "Babylonians" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "Who was the famous nurse during the Crimean War?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Clara Barton" },
//               { id: "b", answer: "Florence Nightingale" },
//               { id: "c", answer: "Marie Curie" },
//               { id: "d", answer: "Mary Seacole" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label: "Which empire was ruled by Genghis Khan?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Roman Empire" },
//               { id: "b", answer: "Ottoman Empire" },
//               { id: "c", answer: "Mongol Empire" },
//               { id: "d", answer: "Byzantine Empire" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "What was the main language spoken in the Roman Empire?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Latin" },
//               { id: "b", answer: "Greek" },
//               { id: "c", answer: "Italian" },
//               { id: "d", answer: "Arabic" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label: "Who discovered America in 1492?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Marco Polo" },
//               { id: "b", answer: "Leif Erikson" },
//               { id: "c", answer: "James Cook" },
//               { id: "d", answer: "Christopher Columbus" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label:
//               "What was the name of the ship that brought the Pilgrims to America in 1620?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Santa Maria" },
//               { id: "b", answer: "Mayflower" },
//               { id: "c", answer: "HMS Beagle" },
//               { id: "d", answer: "Endeavour" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "Who was known as the 'Mad Monk' in Russian history?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Ivan the Terrible" },
//               { id: "b", answer: "Peter the Great" },
//               { id: "c", answer: "Grigori Rasputin" },
//               { id: "d", answer: "Leon Trotsky" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label: "In which year did the Titanic sink?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "1912" },
//               { id: "b", answer: "1914" },
//               { id: "c", answer: "1905" },
//               { id: "d", answer: "1920" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label:
//               "Who was the leader of the Soviet Union during World War II?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Vladimir Lenin" },
//               { id: "b", answer: "Nikita Khrushchev" },
//               { id: "c", answer: "Leonid Brezhnev" },
//               { id: "d", answer: "Joseph Stalin" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label:
//               "What was the name of the first man-made satellite launched by the Soviet Union in 1957?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Apollo" },
//               { id: "b", answer: "Vostok" },
//               { id: "c", answer: "Sputnik" },
//               { id: "d", answer: "Luna" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "Who was the Queen of England during the Spanish Armada?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Queen Elizabeth I" },
//               { id: "b", answer: "Queen Victoria" },
//               { id: "c", answer: "Queen Mary I" },
//               { id: "d", answer: "Queen Anne" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     subject: "science",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "What is the chemical symbol for water?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "H2O" },
//               { id: "b", answer: "O2" },
//               { id: "c", answer: "CO2" },
//               { id: "d", answer: "HO" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "What planet is known as the Red Planet?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Venus" },
//               { id: "b", answer: "Mars" },
//               { id: "c", answer: "Jupiter" },
//               { id: "d", answer: "Saturn" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "What is the speed of light?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "300,000 km/s" },
//               { id: "b", answer: "150,000 km/s" },
//               { id: "c", answer: "299,792 km/s" },
//               { id: "d", answer: "250,000 km/s" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "What gas do plants absorb from the atmosphere?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Oxygen" },
//               { id: "b", answer: "Nitrogen" },
//               { id: "c", answer: "Helium" },
//               { id: "d", answer: "Carbon Dioxide" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label: "What is the hardest natural substance on Earth?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Gold" },
//               { id: "b", answer: "Diamond" },
//               { id: "c", answer: "Iron" },
//               { id: "d", answer: "Platinum" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "What is the powerhouse of the cell?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Nucleus" },
//               { id: "b", answer: "Ribosome" },
//               { id: "c", answer: "Mitochondria" },
//               { id: "d", answer: "Chloroplast" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label: "What is the primary gas found in the Earth's atmosphere?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Nitrogen" },
//               { id: "b", answer: "Oxygen" },
//               { id: "c", answer: "Carbon Dioxide" },
//               { id: "d", answer: "Hydrogen" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "Who developed the theory of relativity?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Isaac Newton" },
//               { id: "b", answer: "Galileo Galilei" },
//               { id: "c", answer: "Nikola Tesla" },
//               { id: "d", answer: "Albert Einstein" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label: "What is the most abundant element in the universe?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Oxygen" },
//               { id: "b", answer: "Hydrogen" },
//               { id: "c", answer: "Carbon" },
//               { id: "d", answer: "Helium" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label: "What is the process by which plants make their food?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Respiration" },
//               { id: "b", answer: "Digestion" },
//               { id: "c", answer: "Photosynthesis" },
//               { id: "d", answer: "Transpiration" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "Which planet is known for its rings?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Saturn" },
//               { id: "b", answer: "Neptune" },
//               { id: "c", answer: "Uranus" },
//               { id: "d", answer: "Jupiter" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label: "What part of the atom has a positive charge?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Electron" },
//               { id: "b", answer: "Neutron" },
//               { id: "c", answer: "Orbital" },
//               { id: "d", answer: "Proton" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label: "What planet is closest to the sun?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Venus" },
//               { id: "b", answer: "Mercury" },
//               { id: "c", answer: "Mars" },
//               { id: "d", answer: "Earth" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label: "What force keeps us on the ground?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Gravity" },
//               { id: "b", answer: "Magnetism" },
//               { id: "c", answer: "Electromagnetism" },
//               { id: "d", answer: "Friction" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "What is the boiling point of water at sea level?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "50°C" },
//               { id: "b", answer: "90°C" },
//               { id: "c", answer: "100°C" },
//               { id: "d", answer: "110°C" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     subject: "geography",
//     quiz: [
//       // 15 questions related to geography
//     ],
//   },
//   {
//     id: 4,
//     subject: "literature",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "Who wrote 'Pride and Prejudice'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Charlotte Brontë" },
//               { id: "b", answer: "Jane Austen" },
//               { id: "c", answer: "Emily Dickinson" },
//               { id: "d", answer: "Mary Shelley" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "What is the title of the first Harry Potter book?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Harry Potter and the Philosopher's Stone" },
//               { id: "b", answer: "Harry Potter and the Chamber of Secrets" },
//               { id: "c", answer: "Harry Potter and the Prisoner of Azkaban" },
//               { id: "d", answer: "Harry Potter and the Goblet of Fire" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "Who is the author of '1984'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Aldous Huxley" },
//               { id: "b", answer: "F. Scott Fitzgerald" },
//               { id: "c", answer: "Ray Bradbury" },
//               { id: "d", answer: "George Orwell" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label:
//               "In which novel would you find the character Holden Caulfield?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "To Kill a Mockingbird" },
//               { id: "b", answer: "The Great Gatsby" },
//               { id: "c", answer: "The Catcher in the Rye" },
//               { id: "d", answer: "The Grapes of Wrath" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label:
//               "Which Shakespeare play features the character of Lady Macbeth?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Othello" },
//               { id: "b", answer: "Macbeth" },
//               { id: "c", answer: "Hamlet" },
//               { id: "d", answer: "Romeo and Juliet" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "Who wrote 'The Great Gatsby'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Ernest Hemingway" },
//               { id: "b", answer: "William Faulkner" },
//               { id: "c", answer: "John Steinbeck" },
//               { id: "d", answer: "F. Scott Fitzgerald" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label: "Which novel features the character of Jay Gatsby?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "The Great Gatsby" },
//               { id: "b", answer: "Tender Is the Night" },
//               { id: "c", answer: "The Old Man and the Sea" },
//               { id: "d", answer: "Brave New World" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "Who is the author of 'Moby Dick'?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Herman Melville" },
//               { id: "b", answer: "Mark Twain" },
//               { id: "c", answer: "Herman Melville" },
//               { id: "d", answer: "Nathaniel Hawthorne" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label: "Which book begins with the line 'Call me Ishmael'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "The Scarlet Letter" },
//               { id: "b", answer: "Moby Dick" },
//               { id: "c", answer: "The Adventures of Tom Sawyer" },
//               { id: "d", answer: "Heart of Darkness" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label:
//               "Which author is known for writing 'The Chronicles of Narnia'?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "C.S. Lewis" },
//               { id: "b", answer: "J.R.R. Tolkien" },
//               { id: "c", answer: "J.K. Rowling" },
//               { id: "d", answer: "Philip Pullman" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "Who wrote 'The Catcher in the Rye'?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "J.D. Salinger" },
//               { id: "b", answer: "F. Scott Fitzgerald" },
//               { id: "c", answer: "J.D. Salinger" },
//               { id: "d", answer: "Ernest Hemingway" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label: "What is the main theme of 'To Kill a Mockingbird'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Love" },
//               { id: "b", answer: "Ambition" },
//               { id: "c", answer: "War" },
//               { id: "d", answer: "Racial Injustice" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label: "Which novel features the character of Elizabeth Bennet?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Pride and Prejudice" },
//               { id: "b", answer: "Emma" },
//               { id: "c", answer: "Sense and Sensibility" },
//               { id: "d", answer: "North and South" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label: "Who is the author of 'Brave New World'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "George Orwell" },
//               { id: "b", answer: "Aldous Huxley" },
//               { id: "c", answer: "Ray Bradbury" },
//               { id: "d", answer: "Isaac Asimov" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label:
//               "What is the name of the hobbit's home in 'The Lord of the Rings'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Rivendell" },
//               { id: "b", answer: "Mordor" },
//               { id: "c", answer: "Gondor" },
//               { id: "d", answer: "The Shire" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 5,
//     subject: "art",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "Who painted the Mona Lisa?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Vincent van Gogh" },
//               { id: "b", answer: "Claude Monet" },
//               { id: "c", answer: "Pablo Picasso" },
//               { id: "d", answer: "Leonardo da Vinci" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "What is the art movement associated with Salvador Dalí?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Surrealism" },
//               { id: "b", answer: "Impressionism" },
//               { id: "c", answer: "Cubism" },
//               { id: "d", answer: "Baroque" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label:
//               "Which artist is known for his 'Campbell's Soup Cans' artwork?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Andy Warhol" },
//               { id: "b", answer: "Roy Lichtenstein" },
//               { id: "c", answer: "Andy Warhol" },
//               { id: "d", answer: "Jackson Pollock" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "Which famous painting was created by Vincent van Gogh?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "The Persistence of Memory" },
//               { id: "b", answer: "Starry Night" },
//               { id: "c", answer: "Guernica" },
//               { id: "d", answer: "The Birth of Venus" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label: "Who painted 'The Creation of Adam'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Raphael" },
//               { id: "b", answer: "Leonardo da Vinci" },
//               { id: "c", answer: "Caravaggio" },
//               { id: "d", answer: "Michelangelo" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "Which artist is known for the 'Blue Period'?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Pablo Picasso" },
//               { id: "b", answer: "Henri Matisse" },
//               { id: "c", answer: "Gustav Klimt" },
//               { id: "d", answer: "Edvard Munch" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label: "What art movement is associated with Jackson Pollock?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Surrealism" },
//               { id: "b", answer: "Abstract Expressionism" },
//               { id: "c", answer: "Renaissance" },
//               { id: "d", answer: "Impressionism" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "Which artist painted the ceiling of the Sistine Chapel?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Leonardo da Vinci" },
//               { id: "b", answer: "Raphael" },
//               { id: "c", answer: "Titian" },
//               { id: "d", answer: "Michelangelo" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label:
//               "What is the name of the technique where artists use small dots of color?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Pointillism" },
//               { id: "b", answer: "Sfumato" },
//               { id: "c", answer: "Impasto" },
//               { id: "d", answer: "Chiaroscuro" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label: "Which famous artist cut off his own ear?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Claude Monet" },
//               { id: "b", answer: "Vincent van Gogh" },
//               { id: "c", answer: "Paul Cézanne" },
//               { id: "d", answer: "Henri Rousseau" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "Which artist is known for his 'Water Lilies' series?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Paul Cézanne" },
//               { id: "b", answer: "Gustav Klimt" },
//               { id: "c", answer: "Claude Monet" },
//               { id: "d", answer: "Henri Matisse" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label:
//               "Which art movement is associated with Salvador Dalí and René Magritte?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Surrealism" },
//               { id: "b", answer: "Expressionism" },
//               { id: "c", answer: "Cubism" },
//               { id: "d", answer: "Fauvism" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label: "Who is known for the 'The School of Athens' fresco?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Leonardo da Vinci" },
//               { id: "b", answer: "Titian" },
//               { id: "c", answer: "Caravaggio" },
//               { id: "d", answer: "Raphael" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label:
//               "Which artist is known for the 'The Persistence of Memory' painting?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Salvador Dalí" },
//               { id: "b", answer: "Francis Bacon" },
//               { id: "c", answer: "Marc Chagall" },
//               { id: "d", answer: "Georges Braque" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "Who created the 'David' sculpture?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Raphael" },
//               { id: "b", answer: "Donatello" },
//               { id: "c", answer: "Gian Lorenzo Bernini" },
//               { id: "d", answer: "Michelangelo" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 6,
//     subject: "music",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "Who composed the 'Symphony No. 5'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Wolfgang Amadeus Mozart" },
//               { id: "b", answer: "Ludwig van Beethoven" },
//               { id: "c", answer: "Johann Sebastian Bach" },
//               { id: "d", answer: "Franz Schubert" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "Which band is known for the album 'Dark Side of the Moon'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "The Beatles" },
//               { id: "b", answer: "Led Zeppelin" },
//               { id: "c", answer: "The Rolling Stones" },
//               { id: "d", answer: "Pink Floyd" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "What genre is associated with Elvis Presley?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Rock and Roll" },
//               { id: "b", answer: "Jazz" },
//               { id: "c", answer: "Classical" },
//               { id: "d", answer: "Country" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "Which composer is famous for 'The Four Seasons'?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "George Frideric Handel" },
//               { id: "b", answer: "Joseph Haydn" },
//               { id: "c", answer: "Antonio Vivaldi" },
//               { id: "d", answer: "Ludwig van Beethoven" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label:
//               "Which musical genre did Beyoncé popularize with 'Single Ladies'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Pop" },
//               { id: "b", answer: "R&B" },
//               { id: "c", answer: "Rock" },
//               { id: "d", answer: "Country" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "Who is known as the 'Queen of Pop'?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Madonna" },
//               { id: "b", answer: "Lady Gaga" },
//               { id: "c", answer: "Whitney Houston" },
//               { id: "d", answer: "Mariah Carey" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label: "What instrument is Yo-Yo Ma known for playing?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Violin" },
//               { id: "b", answer: "Piano" },
//               { id: "c", answer: "Trumpet" },
//               { id: "d", answer: "Cello" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "Which composer is known for 'Swan Lake'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Pyotr Ilyich Tchaikovsky" },
//               { id: "b", answer: "Igor Stravinsky" },
//               { id: "c", answer: "Sergei Prokofiev" },
//               { id: "d", answer: "Claude Debussy" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label:
//               "Which genre does the song 'Billie Jean' by Michael Jackson belong to?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Pop" },
//               { id: "b", answer: "Jazz" },
//               { id: "c", answer: "Classical" },
//               { id: "d", answer: "Rock" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label: "What is the stage name of Robert Zimmerman?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Elton John" },
//               { id: "b", answer: "David Bowie" },
//               { id: "c", answer: "Johnny Cash" },
//               { id: "d", answer: "Bob Dylan" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label:
//               "Which music festival is held annually in the desert of California?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Glastonbury" },
//               { id: "b", answer: "Rock in Rio" },
//               { id: "c", answer: "Coachella" },
//               { id: "d", answer: "Lollapalooza" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label:
//               "What is the name of the famous music award given annually in the U.S.?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Grammy" },
//               { id: "b", answer: "Oscar" },
//               { id: "c", answer: "Emmy" },
//               { id: "d", answer: "Tony" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label: "Which Beatles album features the song 'Hey Jude'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Sgt. Pepper's Lonely Hearts Club Band" },
//               { id: "b", answer: "The Beatles (White Album)" },
//               { id: "c", answer: "Revolver" },
//               { id: "d", answer: "Rubber Soul" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label: "Which jazz musician is known for the album 'Kind of Blue'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Louis Armstrong" },
//               { id: "b", answer: "Duke Ellington" },
//               { id: "c", answer: "Charlie Parker" },
//               { id: "d", answer: "Miles Davis" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "What year was the song 'Imagine' by John Lennon released?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "1971" },
//               { id: "b", answer: "1969" },
//               { id: "c", answer: "1973" },
//               { id: "d", answer: "1975" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 7,
//     subject: "movies",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "Who directed 'Inception'?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Christopher Nolan" },
//               { id: "b", answer: "Steven Spielberg" },
//               { id: "c", answer: "Martin Scorsese" },
//               { id: "d", answer: "Quentin Tarantino" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "Which film won the Academy Award for Best Picture in 1994?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Pulp Fiction" },
//               { id: "b", answer: "Forrest Gump" },
//               { id: "c", answer: "The Shawshank Redemption" },
//               { id: "d", answer: "Braveheart" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "Who starred as the titular character in 'The Dark Knight'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Robert Downey Jr." },
//               { id: "b", answer: "Christian Bale" },
//               { id: "c", answer: "Heath Ledger" },
//               { id: "d", answer: "Michael Caine" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "Which movie features the song 'My Heart Will Go On'?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Titanic" },
//               { id: "b", answer: "Avatar" },
//               { id: "c", answer: "The Bodyguard" },
//               { id: "d", answer: "The Greatest Showman" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label:
//               "What is the name of the fictional African country in 'Black Panther'?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Zamunda" },
//               { id: "b", answer: "Wakanda" },
//               { id: "c", answer: "Narnia" },
//               { id: "d", answer: "Elbonia" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label:
//               "Who played the role of Jack Sparrow in 'Pirates of the Caribbean'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Orlando Bloom" },
//               { id: "b", answer: "Johnny Depp" },
//               { id: "c", answer: "Geoffrey Rush" },
//               { id: "d", answer: "Ian McShane" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label: "Which film features a character named 'Forrest Gump'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Cast Away" },
//               { id: "b", answer: "Saving Private Ryan" },
//               { id: "c", answer: "The Green Mile" },
//               { id: "d", answer: "Forrest Gump" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "In which movie does Tom Hanks play a stranded astronaut?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Apollo 13" },
//               { id: "b", answer: "Gravity" },
//               { id: "c", answer: "Cast Away" },
//               { id: "d", answer: "Interstellar" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label: "Who directed 'Pulp Fiction'?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Quentin Tarantino" },
//               { id: "b", answer: "Martin Scorsese" },
//               { id: "c", answer: "Francis Ford Coppola" },
//               { id: "d", answer: "Ridley Scott" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label: "Which movie features a fictional sport called 'Quidditch'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "The Hunger Games" },
//               { id: "b", answer: "Harry Potter" },
//               { id: "c", answer: "Star Wars" },
//               { id: "d", answer: "Percy Jackson" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "What is the name of the spaceship in 'Alien'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "The Nostromo" },
//               { id: "b", answer: "The Enterprise" },
//               { id: "c", answer: "The Millennium Falcon" },
//               { id: "d", answer: "The Serenity" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label: "Which movie is about a man who ages backward?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "The Curious Case of Benjamin Button" },
//               { id: "b", answer: "Inception" },
//               { id: "c", answer: "Eternal Sunshine of the Spotless Mind" },
//               { id: "d", answer: "Memento" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label: "Which actor played 'The Joker' in 'The Dark Knight'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Jack Nicholson" },
//               { id: "b", answer: "Heath Ledger" },
//               { id: "c", answer: "Jared Leto" },
//               { id: "d", answer: "Joaquin Phoenix" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label: "In which film does the character 'Gollum' appear?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "The Hobbit" },
//               { id: "b", answer: "The Chronicles of Narnia" },
//               { id: "c", answer: "The Lord of the Rings" },
//               { id: "d", answer: "Harry Potter" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "Which film features a character named 'Amélie Poulain'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "La Haine" },
//               { id: "b", answer: "Blue Is the Warmest Colour" },
//               { id: "c", answer: "The Intouchables" },
//               { id: "d", answer: "Amélie" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 15,
//         question: [
//           {
//             label:
//               "Which movie was directed by Steven Spielberg and features an alien named 'E.T.'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Jaws" },
//               { id: "b", answer: "E.T. the Extra-Terrestrial" },
//               { id: "c", answer: "Jurassic Park" },
//               { id: "d", answer: "Close Encounters of the Third Kind" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 8,
//     subject: "sports",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "Which country won the FIFA World Cup in 2018?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "France" },
//               { id: "b", answer: "Croatia" },
//               { id: "c", answer: "Brazil" },
//               { id: "d", answer: "Germany" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "What sport is known as 'the beautiful game'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Basketball" },
//               { id: "b", answer: "Soccer" },
//               { id: "c", answer: "Tennis" },
//               { id: "d", answer: "Golf" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label:
//               "Which player holds the record for most home runs in a single MLB season?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Babe Ruth" },
//               { id: "b", answer: "Hank Aaron" },
//               { id: "c", answer: "Barry Bonds" },
//               { id: "d", answer: "Mark McGwire" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "In which sport would you perform a slam dunk?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Basketball" },
//               { id: "b", answer: "Football" },
//               { id: "c", answer: "Volleyball" },
//               { id: "d", answer: "Baseball" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label: "Which country is famous for the sport of cricket?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Brazil" },
//               { id: "b", answer: "USA" },
//               { id: "c", answer: "India" },
//               { id: "d", answer: "Russia" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label:
//               "What is the maximum number of players on a soccer team fielded at once?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "7" },
//               { id: "b", answer: "11" },
//               { id: "c", answer: "9" },
//               { id: "d", answer: "12" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label: "Which tennis player has won the most Grand Slam titles?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Roger Federer" },
//               { id: "b", answer: "Rafael Nadal" },
//               { id: "c", answer: "Novak Djokovic" },
//               { id: "d", answer: "Margaret Court" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "In which city were the 2016 Summer Olympics held?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Rio de Janeiro" },
//               { id: "b", answer: "London" },
//               { id: "c", answer: "Beijing" },
//               { id: "d", answer: "Tokyo" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label: "Which sport uses a shuttlecock?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Tennis" },
//               { id: "b", answer: "Baseball" },
//               { id: "c", answer: "Badminton" },
//               { id: "d", answer: "Squash" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label: "What is the length of an Olympic swimming pool?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "25 meters" },
//               { id: "b", answer: "50 meters" },
//               { id: "c", answer: "75 meters" },
//               { id: "d", answer: "100 meters" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "Which athlete is known as 'The Greatest' in boxing?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Mike Tyson" },
//               { id: "b", answer: "Floyd Mayweather" },
//               { id: "c", answer: "Manny Pacquiao" },
//               { id: "d", answer: "Muhammad Ali" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label: "Which team won the NBA championship in 2021?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Milwaukee Bucks" },
//               { id: "b", answer: "Phoenix Suns" },
//               { id: "c", answer: "Los Angeles Lakers" },
//               { id: "d", answer: "Miami Heat" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label: "What type of race is the Tour de France?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Marathon" },
//               { id: "b", answer: "Motorbike" },
//               { id: "c", answer: "Cycling" },
//               { id: "d", answer: "Swimming" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label:
//               "Which country has the most successful rugby team in World Cup history?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Australia" },
//               { id: "b", answer: "England" },
//               { id: "c", answer: "South Africa" },
//               { id: "d", answer: "New Zealand" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "Which sport features the Ryder Cup?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Golf" },
//               { id: "b", answer: "Tennis" },
//               { id: "c", answer: "Basketball" },
//               { id: "d", answer: "Cricket" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 9,
//     subject: "technology",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "What does HTML stand for?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Hypertext Markup Language" },
//               { id: "b", answer: "Hypertext Markup Language" },
//               { id: "c", answer: "Hightext Markup Language" },
//               { id: "d", answer: "Hyperlink and Text Markup Language" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "Which company developed the Windows operating system?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Microsoft" },
//               { id: "b", answer: "Apple" },
//               { id: "c", answer: "IBM" },
//               { id: "d", answer: "Google" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label:
//               "What is the main programming language used for web development?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "JavaScript" },
//               { id: "b", answer: "Java" },
//               { id: "c", answer: "Python" },
//               { id: "d", answer: "C++" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "What does 'HTTP' stand for in web development?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Hypertext Transfer Protocol" },
//               { id: "b", answer: "Hypertext Transport Protocol" },
//               { id: "c", answer: "Hightext Transfer Protocol" },
//               { id: "d", answer: "Hypertext Transfer Protocol" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label: "Which company is known for the development of the iPhone?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Samsung" },
//               { id: "b", answer: "Sony" },
//               { id: "c", answer: "Apple" },
//               { id: "d", answer: "Nokia" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "What does 'URL' stand for?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Uniform Resource Locator" },
//               { id: "b", answer: "Uniform Resource Locator" },
//               { id: "c", answer: "Universal Resource Locator" },
//               { id: "d", answer: "Uniform Reference Locator" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label:
//               "Which programming language is known for its use in data science and machine learning?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Python" },
//               { id: "b", answer: "Ruby" },
//               { id: "c", answer: "Java" },
//               { id: "d", answer: "JavaScript" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label:
//               "What is the name of the virtual assistant developed by Amazon?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Siri" },
//               { id: "b", answer: "Cortana" },
//               { id: "c", answer: "Alexa" },
//               { id: "d", answer: "Google Assistant" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label:
//               "What is the term for a software bug that prevents a program from functioning?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Crash" },
//               { id: "b", answer: "Glitch" },
//               { id: "c", answer: "Feature" },
//               { id: "d", answer: "Patch" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label: "What does 'VPN' stand for?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Virtual Private Network" },
//               { id: "b", answer: "Virtual Public Network" },
//               { id: "c", answer: "Visible Private Network" },
//               { id: "d", answer: "Virtual Private Network" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "Which technology is used to store and manage databases?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "HTML" },
//               { id: "b", answer: "SQL" },
//               { id: "c", answer: "CSS" },
//               { id: "d", answer: "JavaScript" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label:
//               "What is the name of the cloud storage service provided by Google?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "OneDrive" },
//               { id: "b", answer: "iCloud" },
//               { id: "c", answer: "Dropbox" },
//               { id: "d", answer: "Google Drive" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label:
//               "What is the name of the software development methodology that emphasizes iterative development?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Agile" },
//               { id: "b", answer: "Waterfall" },
//               { id: "c", answer: "Scrum" },
//               { id: "d", answer: "Kanban" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label: "Which of the following is an open-source operating system?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Windows" },
//               { id: "b", answer: "Linux" },
//               { id: "c", answer: "macOS" },
//               { id: "d", answer: "iOS" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "What is the primary function of a web browser?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Manage files" },
//               { id: "b", answer: "Run applications" },
//               { id: "c", answer: "Display web pages" },
//               { id: "d", answer: "Compile code" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 15,
//         question: [
//           {
//             label:
//               "What is the term for a network of interconnected computers?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Internet" },
//               { id: "b", answer: "Intranet" },
//               { id: "c", answer: "Extranet" },
//               { id: "d", answer: "LAN" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 10,
//     subject: "mythology",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "Who is the king of the Greek gods?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Zeus" },
//               { id: "b", answer: "Poseidon" },
//               { id: "c", answer: "Hades" },
//               { id: "d", answer: "Apollo" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "What is the Roman name for the Greek goddess Athena?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Juno" },
//               { id: "b", answer: "Venus" },
//               { id: "c", answer: "Minerva" },
//               { id: "d", answer: "Pallas" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "In Norse mythology, who is the god of thunder?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Odin" },
//               { id: "b", answer: "Thor" },
//               { id: "c", answer: "Loki" },
//               { id: "d", answer: "Freyja" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "Who was cursed to turn everything he touched into gold?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Hercules" },
//               { id: "b", answer: "Perseus" },
//               { id: "c", answer: "King Midas" },
//               { id: "d", answer: "Theseus" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label:
//               "Which mythological creature has the body of a lion and the head of a human?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Sphinx" },
//               { id: "b", answer: "Griffin" },
//               { id: "c", answer: "Chimera" },
//               { id: "d", answer: "Hydra" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "What is the name of the Greek goddess of love and beauty?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Hera" },
//               { id: "b", answer: "Demeter" },
//               { id: "c", answer: "Artemis" },
//               { id: "d", answer: "Aphrodite" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label:
//               "Which god in Egyptian mythology is known for his jackal head?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Ra" },
//               { id: "b", answer: "Anubis" },
//               { id: "c", answer: "Osiris" },
//               { id: "d", answer: "Horus" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label:
//               "In Greek mythology, who was punished to eat his own liver every day?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Atlas" },
//               { id: "b", answer: "Prometheus" },
//               { id: "c", answer: "Tantalus" },
//               { id: "d", answer: "Sisyphus" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label: "Who is the Roman god of war?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Apollo" },
//               { id: "b", answer: "Jupiter" },
//               { id: "c", answer: "Mercury" },
//               { id: "d", answer: "Mars" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label: "Which Greek hero is known for his 12 labors?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Hercules" },
//               { id: "b", answer: "Perseus" },
//               { id: "c", answer: "Theseus" },
//               { id: "d", answer: "Achilles" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "In Norse mythology, who is the trickster god?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Odin" },
//               { id: "b", answer: "Loki" },
//               { id: "c", answer: "Thor" },
//               { id: "d", answer: "Freyja" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label: "Which Greek titan held up the sky?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Cronus" },
//               { id: "b", answer: "Oceanus" },
//               { id: "c", answer: "Hyperion" },
//               { id: "d", answer: "Atlas" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label:
//               "What is the name of the goddess of wisdom in Greek mythology?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Hera" },
//               { id: "b", answer: "Demeter" },
//               { id: "c", answer: "Athena" },
//               { id: "d", answer: "Artemis" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label: "Who is the Greek goddess of the harvest?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Hera" },
//               { id: "b", answer: "Demeter" },
//               { id: "c", answer: "Aphrodite" },
//               { id: "d", answer: "Athena" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label:
//               "Which mythological creature is a hybrid of a lion, goat, and serpent?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Chimera" },
//               { id: "b", answer: "Hydra" },
//               { id: "c", answer: "Cerberus" },
//               { id: "d", answer: "Griffin" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 11,
//     subject: "philosophy",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "Who is known as the father of Western philosophy?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Aristotle" },
//               { id: "b", answer: "Socrates" },
//               { id: "c", answer: "Plato" },
//               { id: "d", answer: "Descartes" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "Which philosopher wrote 'Meditations'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Nietzsche" },
//               { id: "b", answer: "Hume" },
//               { id: "c", answer: "Kant" },
//               { id: "d", answer: "Marcus Aurelius" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label:
//               "What is the term for a philosophical belief in the ultimate reality being non-material?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Idealism" },
//               { id: "b", answer: "Realism" },
//               { id: "c", answer: "Materialism" },
//               { id: "d", answer: "Empiricism" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label:
//               "Which philosopher is associated with the concept of 'the social contract'?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Hobbes" },
//               { id: "b", answer: "Locke" },
//               { id: "c", answer: "Rousseau" },
//               { id: "d", answer: "Hume" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label:
//               "What philosophical concept argues that existence precedes essence?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Essentialism" },
//               { id: "b", answer: "Existentialism" },
//               { id: "c", answer: "Determinism" },
//               { id: "d", answer: "Utilitarianism" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "Who wrote 'The Republic'?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Plato" },
//               { id: "b", answer: "Aristotle" },
//               { id: "c", answer: "Socrates" },
//               { id: "d", answer: "Nietzsche" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label:
//               "Which philosopher is known for the phrase 'I think, therefore I am'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Spinoza" },
//               { id: "b", answer: "Locke" },
//               { id: "c", answer: "Hume" },
//               { id: "d", answer: "Descartes" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "What is the philosophical study of knowledge called?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Epistemology" },
//               { id: "b", answer: "Ontology" },
//               { id: "c", answer: "Ethics" },
//               { id: "d", answer: "Logic" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label:
//               "Who is the philosopher known for developing the theory of 'categorical imperatives'?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Kant" },
//               { id: "b", answer: "Hegel" },
//               { id: "c", answer: "Kant" },
//               { id: "d", answer: "Hume" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label:
//               "Which philosopher is known for the concept of 'the will to power'?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Hegel" },
//               { id: "b", answer: "Kierkegaard" },
//               { id: "c", answer: "Locke" },
//               { id: "d", answer: "Nietzsche" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label:
//               "What is the term for a philosophy that emphasizes practical consequences and real-world applications?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Pragmatism" },
//               { id: "b", answer: "Idealism" },
//               { id: "c", answer: "Rationalism" },
//               { id: "d", answer: "Empiricism" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label:
//               "Which philosopher is associated with 'The Phenomenology of Spirit'?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Hegel" },
//               { id: "b", answer: "Hegel" },
//               { id: "c", answer: "Kant" },
//               { id: "d", answer: "Marx" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label:
//               "What is the philosophical term for the belief that everything is predetermined?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Libertarianism" },
//               { id: "b", answer: "Determinism" },
//               { id: "c", answer: "Fatalism" },
//               { id: "d", answer: "Predestination" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label:
//               "Which philosopher proposed the concept of 'the social contract' in his work 'Leviathan'?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Hobbes" },
//               { id: "b", answer: "Locke" },
//               { id: "c", answer: "Rousseau" },
//               { id: "d", answer: "Marx" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label:
//               "Which philosophical school of thought emphasizes the importance of personal experience and subjective perspective?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Rationalism" },
//               { id: "b", answer: "Phenomenology" },
//               { id: "c", answer: "Empiricism" },
//               { id: "d", answer: "Logical Positivism" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 12,
//     subject: "languages",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "What is the most spoken language in the world?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "English" },
//               { id: "b", answer: "Mandarin Chinese" },
//               { id: "c", answer: "Spanish" },
//               { id: "d", answer: "Hindi" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "Which language is the official language of Brazil?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Portuguese" },
//               { id: "b", answer: "Spanish" },
//               { id: "c", answer: "French" },
//               { id: "d", answer: "English" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "In which language is 'Don Quixote' written?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "French" },
//               { id: "b", answer: "Italian" },
//               { id: "c", answer: "Spanish" },
//               { id: "d", answer: "German" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "Which language uses the Cyrillic alphabet?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Greek" },
//               { id: "b", answer: "Arabic" },
//               { id: "c", answer: "Latin" },
//               { id: "d", answer: "Russian" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label: "What is the official language of Japan?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Japanese" },
//               { id: "b", answer: "Chinese" },
//               { id: "c", answer: "Korean" },
//               { id: "d", answer: "Vietnamese" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "Which language is known for its use of tones?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Spanish" },
//               { id: "b", answer: "Mandarin Chinese" },
//               { id: "c", answer: "French" },
//               { id: "d", answer: "Japanese" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label: "What is the language family of German?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Romance" },
//               { id: "b", answer: "Slavic" },
//               { id: "c", answer: "Germanic" },
//               { id: "d", answer: "Celtic" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "Which language is spoken in Egypt?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Arabic" },
//               { id: "b", answer: "Turkish" },
//               { id: "c", answer: "Persian" },
//               { id: "d", answer: "Hebrew" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label: "Which language is primarily spoken in Quebec, Canada?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "English" },
//               { id: "b", answer: "French" },
//               { id: "c", answer: "Spanish" },
//               { id: "d", answer: "German" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label: "What is the official language of Switzerland?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "German" },
//               { id: "b", answer: "French" },
//               { id: "c", answer: "Italian" },
//               { id: "d", answer: "All of the above" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label: "Which language is written in the Devanagari script?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Bengali" },
//               { id: "b", answer: "Punjabi" },
//               { id: "c", answer: "Hindi" },
//               { id: "d", answer: "Tamil" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label: "Which language is known for its click sounds?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Xhosa" },
//               { id: "b", answer: "Zulu" },
//               { id: "c", answer: "Swahili" },
//               { id: "d", answer: "Amharic" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label: "What is the primary language of South Africa?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Afrikaans" },
//               { id: "b", answer: "Zulu" },
//               { id: "c", answer: "Sotho" },
//               { id: "d", answer: "Swazi" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label: "Which language is spoken in Indonesia?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Indonesian" },
//               { id: "b", answer: "Thai" },
//               { id: "c", answer: "Malay" },
//               { id: "d", answer: "Tagalog" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "What is the official language of Lebanon?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "French" },
//               { id: "b", answer: "Arabic" },
//               { id: "c", answer: "English" },
//               { id: "d", answer: "Armenian" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 13,
//     subject: "politics",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "Who is the current President of the United States?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Joe Biden" },
//               { id: "b", answer: "Donald Trump" },
//               { id: "c", answer: "Barack Obama" },
//               { id: "d", answer: "George Bush" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "Which political party is known for its red logo in the UK?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Liberal Democrats" },
//               { id: "b", answer: "Labour Party" },
//               { id: "c", answer: "Conservative Party" },
//               { id: "d", answer: "Scottish National Party" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "What is the name of the German parliament?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Bundesrat" },
//               { id: "b", answer: "Landtag" },
//               { id: "c", answer: "Bundestag" },
//               { id: "d", answer: "Reichstag" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "Who is the Prime Minister of Canada?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Stephen Harper" },
//               { id: "b", answer: "Paul Martin" },
//               { id: "c", answer: "Jean Chrétien" },
//               { id: "d", answer: "Justin Trudeau" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label:
//               "Which country has a system of government called a 'monarchy'?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "United Kingdom" },
//               { id: "b", answer: "Germany" },
//               { id: "c", answer: "France" },
//               { id: "d", answer: "Italy" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label: "What is the term for the head of government in France?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Chancellor" },
//               { id: "b", answer: "Prime Minister" },
//               { id: "c", answer: "President" },
//               { id: "d", answer: "King" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label:
//               "Which political party is known for its elephant symbol in the USA?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Democratic Party" },
//               { id: "b", answer: "Libertarian Party" },
//               { id: "c", answer: "Republican Party" },
//               { id: "d", answer: "Green Party" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label:
//               "In which country is the political system known as 'communism' most associated?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "China" },
//               { id: "b", answer: "India" },
//               { id: "c", answer: "Brazil" },
//               { id: "d", answer: "Japan" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label:
//               "What is the highest legislative authority in the United States?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Supreme Court" },
//               { id: "b", answer: "Congress" },
//               { id: "c", answer: "President" },
//               { id: "d", answer: "Senate" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label:
//               "Who was the first female Prime Minister of the United Kingdom?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Margaret Thatcher" },
//               { id: "b", answer: "Theresa May" },
//               { id: "c", answer: "Priti Patel" },
//               { id: "d", answer: "Ellen Wilkinson" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label:
//               "What is the term for the system of government where power is divided between national and state governments?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Monarchy" },
//               { id: "b", answer: "Autocracy" },
//               { id: "c", answer: "Federalism" },
//               { id: "d", answer: "Socialism" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label:
//               "Which document serves as the supreme law of the United States?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Constitution" },
//               { id: "b", answer: "Declaration of Independence" },
//               { id: "c", answer: "Bill of Rights" },
//               { id: "d", answer: "Federalist Papers" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label: "What is the political system in Russia called?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Democracy" },
//               { id: "b", answer: "Federal Republic" },
//               { id: "c", answer: "Constitutional Monarchy" },
//               { id: "d", answer: "Theocracy" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label: "What is the main legislative body in Australia called?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Senate" },
//               { id: "b", answer: "House of Commons" },
//               { id: "c", answer: "Federal Council" },
//               { id: "d", answer: "Parliament" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "Who is the current Chancellor of Germany?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Olaf Scholz" },
//               { id: "b", answer: "Angela Merkel" },
//               { id: "c", answer: "Frank-Walter Steinmeier" },
//               { id: "d", answer: "Gerhard Schröder" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 14,
//     subject: "astronomy",
//     quiz: [
//       {
//         id: 0,
//         question: [
//           {
//             label: "What is the closest planet to the Sun?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Mercury" },
//               { id: "b", answer: "Venus" },
//               { id: "c", answer: "Earth" },
//               { id: "d", answer: "Mars" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 1,
//         question: [
//           {
//             label: "Which planet is known as the Red Planet?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Jupiter" },
//               { id: "b", answer: "Saturn" },
//               { id: "c", answer: "Neptune" },
//               { id: "d", answer: "Mars" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: [
//           {
//             label: "What is the largest planet in our solar system?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Saturn" },
//               { id: "b", answer: "Jupiter" },
//               { id: "c", answer: "Uranus" },
//               { id: "d", answer: "Neptune" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: [
//           {
//             label: "Which planet is famous for its rings?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Jupiter" },
//               { id: "b", answer: "Uranus" },
//               { id: "c", answer: "Saturn" },
//               { id: "d", answer: "Neptune" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: [
//           {
//             label: "What is the name of our galaxy?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Andromeda" },
//               { id: "b", answer: "Triangulum" },
//               { id: "c", answer: "Whirlpool" },
//               { id: "d", answer: "Milky Way" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: [
//           {
//             label:
//               "Which celestial object is at the center of our solar system?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "The Sun" },
//               { id: "b", answer: "The Moon" },
//               { id: "c", answer: "Jupiter" },
//               { id: "d", answer: "Earth" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         question: [
//           {
//             label:
//               "What is the name of the first manned mission to land on the Moon?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Apollo 11" },
//               { id: "b", answer: "Apollo 11" },
//               { id: "c", answer: "Apollo 12" },
//               { id: "d", answer: "Apollo 13" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 7,
//         question: [
//           {
//             label: "Which planet has the highest mountain in the solar system?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Earth" },
//               { id: "b", answer: "Venus" },
//               { id: "c", answer: "Uranus" },
//               { id: "d", answer: "Mars" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         question: [
//           {
//             label: "What is the name of the largest moon of Saturn?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Titan" },
//               { id: "b", answer: "Enceladus" },
//               { id: "c", answer: "Titan" },
//               { id: "d", answer: "Rhea" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 9,
//         question: [
//           {
//             label:
//               "What phenomenon occurs when the Moon passes between the Earth and the Sun?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Solar Eclipse" },
//               { id: "b", answer: "Lunar Eclipse" },
//               { id: "c", answer: "Meteor Shower" },
//               { id: "d", answer: "Aurora" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 10,
//         question: [
//           {
//             label:
//               "Which planet is known for having a day longer than its year?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Mercury" },
//               { id: "b", answer: "Venus" },
//               { id: "c", answer: "Mars" },
//               { id: "d", answer: "Jupiter" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 11,
//         question: [
//           {
//             label:
//               "What is the name of the theory that describes the origin of the universe?",
//             rightAnswer: "c",
//             answers: [
//               { id: "a", answer: "Steady State Theory" },
//               { id: "b", answer: "String Theory" },
//               { id: "c", answer: "Big Bang Theory" },
//               { id: "d", answer: "Quantum Theory" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         question: [
//           {
//             label:
//               "Which planet is known as the Earth's twin due to its similar size?",
//             rightAnswer: "d",
//             answers: [
//               { id: "a", answer: "Mars" },
//               { id: "b", answer: "Venus" },
//               { id: "c", answer: "Mercury" },
//               { id: "d", answer: "Mars" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         question: [
//           {
//             label:
//               "What is the name of the zone beyond Neptune that contains many icy bodies?",
//             rightAnswer: "a",
//             answers: [
//               { id: "a", answer: "Kuiper Belt" },
//               { id: "b", answer: "Asteroid Belt" },
//               { id: "c", answer: "Oort Cloud" },
//               { id: "d", answer: "Hertzsprung-Russell" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 14,
//         question: [
//           {
//             label: "What type of galaxy is the Milky Way?",
//             rightAnswer: "b",
//             answers: [
//               { id: "a", answer: "Elliptical Galaxy" },
//               { id: "b", answer: "Spiral Galaxy" },
//               { id: "c", answer: "Irregular Galaxy" },
//               { id: "d", answer: "Lenticular Galaxy" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];
