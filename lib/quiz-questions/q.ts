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

export type QuizQuestionsWithSubjectsTypes = {
  id: number;
  subject: string;
  quiz: {
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
}[];

export const QuizQuestionsWithSubjects: QuizQuestionsWithSubjectsTypes = [
  {
    id: 0,
    subject: "nature",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "What is the largest mammal in the world?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Blue Whale" },
              { id: "b", answer: "Elephant" },
              { id: "c", answer: "Giraffe" },
              { id: "d", answer: "Rhino" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "What is the tallest tree in the world?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Baobab" },
              { id: "b", answer: "Redwood" },
              { id: "c", answer: "Douglas Fir" },
              { id: "d", answer: "Sequoia" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "What is the largest rainforest in the world?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Congo Rainforest" },
              { id: "b", answer: "Daintree Rainforest" },
              { id: "c", answer: "Amazon Rainforest" },
              { id: "d", answer: "Southeast Asian Rainforest" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Which bird is known for its impressive mimicry skills?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Canary" },
              { id: "b", answer: "Parrot" },
              { id: "c", answer: "Nightingale" },
              { id: "d", answer: "Lyrebird" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "What is the fastest land animal?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Lion" },
              { id: "b", answer: "Cheetah" },
              { id: "c", answer: "Gazelle" },
              { id: "d", answer: "Horse" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "What is the most poisonous animal in the world?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "King Cobra" },
              { id: "b", answer: "Stonefish" },
              { id: "c", answer: "Box Jellyfish" },
              { id: "d", answer: "Poison Dart Frog" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "What type of animal is a Komodo dragon?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Lizard" },
              { id: "b", answer: "Snake" },
              { id: "c", answer: "Crocodile" },
              { id: "d", answer: "Turtle" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "Which is the only flying mammal?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Flying Squirrel" },
              { id: "b", answer: "Gliding Lemur" },
              { id: "c", answer: "Pterodactyl" },
              { id: "d", answer: "Bat" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "Which animal has the longest lifespan?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Elephant" },
              { id: "b", answer: "Blue Whale" },
              { id: "c", answer: "Greenland Shark" },
              { id: "d", answer: "Galapagos Tortoise" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "What is the tallest mountain in North America?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Mount Elbert" },
              { id: "b", answer: "Denali" },
              { id: "c", answer: "Mount Whitney" },
              { id: "d", answer: "Mount Rainier" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "Which plant is known as the 'lungs of the Earth'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Pine Tree" },
              { id: "b", answer: "Bamboo" },
              { id: "c", answer: "Mangrove" },
              { id: "d", answer: "Rainforest Trees" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "Which ocean is the deepest in the world?",
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
        id: 12,
        question: [
          {
            label: "Which animal is known for changing its color?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Octopus" },
              { id: "b", answer: "Peacock" },
              { id: "c", answer: "Chameleon" },
              { id: "d", answer: "Cuttlefish" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "What is the most abundant gas in the Earth's atmosphere?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Oxygen" },
              { id: "b", answer: "Nitrogen" },
              { id: "c", answer: "Carbon Dioxide" },
              { id: "d", answer: "Argon" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label: "Which animal is the largest land carnivore?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Lion" },
              { id: "b", answer: "Tiger" },
              { id: "c", answer: "Grizzly Bear" },
              { id: "d", answer: "Polar Bear" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "Which desert is the largest in the world?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Sahara Desert" },
              { id: "b", answer: "Arabian Desert" },
              { id: "c", answer: "Gobi Desert" },
              { id: "d", answer: "Kalahari Desert" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    subject: "history",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "Who was the first President of the United States?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "George Washington" },
              { id: "b", answer: "Thomas Jefferson" },
              { id: "c", answer: "John Adams" },
              { id: "d", answer: "James Madison" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "In which year did World War I begin?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "1912" },
              { id: "b", answer: "1916" },
              { id: "c", answer: "1914" },
              { id: "d", answer: "1918" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "Who was known as the 'Iron Lady'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Indira Gandhi" },
              { id: "b", answer: "Margaret Thatcher" },
              { id: "c", answer: "Golda Meir" },
              { id: "d", answer: "Angela Merkel" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Which empire was ruled by Alexander the Great?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Macedonian Empire" },
              { id: "b", answer: "Roman Empire" },
              { id: "c", answer: "Ottoman Empire" },
              { id: "d", answer: "Persian Empire" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "What was the primary cause of the American Civil War?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Industrialization" },
              { id: "b", answer: "Territorial expansion" },
              { id: "c", answer: "Taxation" },
              { id: "d", answer: "Slavery" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "In which year did the Berlin Wall fall?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "1987" },
              { id: "b", answer: "1988" },
              { id: "c", answer: "1989" },
              { id: "d", answer: "1990" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "Who discovered America in 1492?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Ferdinand Magellan" },
              { id: "b", answer: "Christopher Columbus" },
              { id: "c", answer: "James Cook" },
              { id: "d", answer: "Leif Erikson" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "Which country was the first to land a man on the moon?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "United States" },
              { id: "b", answer: "Soviet Union" },
              { id: "c", answer: "China" },
              { id: "d", answer: "France" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label:
              "What was the name of the ship that brought the Pilgrims to America in 1620?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Santa Maria" },
              { id: "b", answer: "Endeavour" },
              { id: "c", answer: "Bounty" },
              { id: "d", answer: "Mayflower" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "Which ancient civilization built the pyramids?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Maya" },
              { id: "b", answer: "Roman" },
              { id: "c", answer: "Egyptian" },
              { id: "d", answer: "Greek" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "Who was the British Prime Minister during World War II?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Neville Chamberlain" },
              { id: "b", answer: "Winston Churchill" },
              { id: "c", answer: "Clement Attlee" },
              { id: "d", answer: "Anthony Eden" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "What was the name of the first artificial Earth satellite?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Sputnik" },
              { id: "b", answer: "Explorer" },
              { id: "c", answer: "Voyager" },
              { id: "d", answer: "Hubble" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "Who was the first emperor of China?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Sun Yat-sen" },
              { id: "b", answer: "Mao Zedong" },
              { id: "c", answer: "Confucius" },
              { id: "d", answer: "Qin Shi Huang" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "What event started World War I?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Assassination of Archduke Franz Ferdinand" },
              { id: "b", answer: "Invasion of Poland" },
              { id: "c", answer: "Sinking of the Lusitania" },
              { id: "d", answer: "Attack on Pearl Harbor" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label:
              "Which empire was known as the 'Empire on which the sun never sets'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Roman Empire" },
              { id: "b", answer: "Ottoman Empire" },
              { id: "c", answer: "British Empire" },
              { id: "d", answer: "Mongol Empire" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label:
              "Who was the leader of the Soviet Union during World War II?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Vladimir Lenin" },
              { id: "b", answer: "Joseph Stalin" },
              { id: "c", answer: "Leon Trotsky" },
              { id: "d", answer: "Nikita Khrushchev" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    subject: "science",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "What is the chemical symbol for water?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "O2" },
              { id: "b", answer: "H2O" },
              { id: "c", answer: "CO2" },
              { id: "d", answer: "H2" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "What planet is known as the Red Planet?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Mars" },
              { id: "b", answer: "Venus" },
              { id: "c", answer: "Jupiter" },
              { id: "d", answer: "Saturn" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "What is the powerhouse of the cell?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Nucleus" },
              { id: "b", answer: "Ribosome" },
              { id: "c", answer: "Mitochondria" },
              { id: "d", answer: "Chloroplast" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "What gas do plants absorb from the atmosphere?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Oxygen" },
              { id: "b", answer: "Carbon dioxide" },
              { id: "c", answer: "Nitrogen" },
              { id: "d", answer: "Hydrogen" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "What is the hardest natural substance on Earth?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Diamond" },
              { id: "b", answer: "Gold" },
              { id: "c", answer: "Iron" },
              { id: "d", answer: "Silver" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "What is the speed of light?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "300,000 km/h" },
              { id: "b", answer: "150,000 km/s" },
              { id: "c", answer: "300,000 km/s" },
              { id: "d", answer: "150,000 km/h" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "What planet is known for its rings?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Jupiter" },
              { id: "b", answer: "Saturn" },
              { id: "c", answer: "Uranus" },
              { id: "d", answer: "Neptune" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "What force keeps us on the ground?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Magnetism" },
              { id: "b", answer: "Friction" },
              { id: "c", answer: "Centripetal force" },
              { id: "d", answer: "Gravity" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "What element does 'O' represent on the periodic table?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Oxygen" },
              { id: "b", answer: "Gold" },
              { id: "c", answer: "Osmium" },
              { id: "d", answer: "Oganesson" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "What is the most abundant gas in the Earth's atmosphere?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Oxygen" },
              { id: "b", answer: "Nitrogen" },
              { id: "c", answer: "Carbon dioxide" },
              { id: "d", answer: "Argon" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "What is the chemical symbol for gold?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Ag" },
              { id: "b", answer: "Fe" },
              { id: "c", answer: "Pb" },
              { id: "d", answer: "Au" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "What is the main gas found in the air we breathe?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Hydrogen" },
              { id: "b", answer: "Carbon dioxide" },
              { id: "c", answer: "Nitrogen" },
              { id: "d", answer: "Oxygen" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "Which planet is closest to the sun?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Mercury" },
              { id: "b", answer: "Venus" },
              { id: "c", answer: "Earth" },
              { id: "d", answer: "Mars" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "What is the largest organ in the human body?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Heart" },
              { id: "b", answer: "Skin" },
              { id: "c", answer: "Liver" },
              { id: "d", answer: "Lungs" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label: "What type of galaxy is the Milky Way?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Elliptical" },
              { id: "b", answer: "Irregular" },
              { id: "c", answer: "Spiral" },
              { id: "d", answer: "Lenticular" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "What is the most common type of star in the Milky Way?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Red giant" },
              { id: "b", answer: "White dwarf" },
              { id: "c", answer: "Blue giant" },
              { id: "d", answer: "Red dwarf" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    subject: "geography",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "What is the capital of France?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Madrid" },
              { id: "b", answer: "Berlin" },
              { id: "c", answer: "Paris" },
              { id: "d", answer: "Lisbon" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Which country has the largest land area?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Canada" },
              { id: "b", answer: "Russia" },
              { id: "c", answer: "China" },
              { id: "d", answer: "United States" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "What is the longest river in the world?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Nile" },
              { id: "b", answer: "Amazon" },
              { id: "c", answer: "Yangtze" },
              { id: "d", answer: "Mississippi" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Which continent is known as the 'Dark Continent'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Asia" },
              { id: "b", answer: "Africa" },
              { id: "c", answer: "South America" },
              { id: "d", answer: "Australia" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "What is the smallest country in the world by area?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Monaco" },
              { id: "b", answer: "San Marino" },
              { id: "c", answer: "Liechtenstein" },
              { id: "d", answer: "Vatican City" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "Which ocean is the largest?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Pacific Ocean" },
              { id: "b", answer: "Atlantic Ocean" },
              { id: "c", answer: "Indian Ocean" },
              { id: "d", answer: "Southern Ocean" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "Mount Everest is located in which mountain range?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Andes" },
              { id: "b", answer: "Rockies" },
              { id: "c", answer: "Himalayas" },
              { id: "d", answer: "Alps" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "What is the capital of Australia?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Sydney" },
              { id: "b", answer: "Melbourne" },
              { id: "c", answer: "Brisbane" },
              { id: "d", answer: "Canberra" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "The Great Barrier Reef is located in which country?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Australia" },
              { id: "b", answer: "Philippines" },
              { id: "c", answer: "Indonesia" },
              { id: "d", answer: "Malaysia" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "Which desert is the largest in the world?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Gobi Desert" },
              { id: "b", answer: "Sahara Desert" },
              { id: "c", answer: "Arabian Desert" },
              { id: "d", answer: "Kalahari Desert" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "What is the capital of Canada?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Toronto" },
              { id: "b", answer: "Vancouver" },
              { id: "c", answer: "Ottawa" },
              { id: "d", answer: "Montreal" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "What is the most populous country in the world?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "United States" },
              { id: "b", answer: "Indonesia" },
              { id: "c", answer: "India" },
              { id: "d", answer: "China" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "What is the capital of Egypt?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Cairo" },
              { id: "b", answer: "Alexandria" },
              { id: "c", answer: "Giza" },
              { id: "d", answer: "Luxor" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "Which country is known as the Land of the Rising Sun?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "South Korea" },
              { id: "b", answer: "China" },
              { id: "c", answer: "Japan" },
              { id: "d", answer: "Vietnam" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label: "Which country has the most natural lakes?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Finland" },
              { id: "b", answer: "Canada" },
              { id: "c", answer: "Sweden" },
              { id: "d", answer: "United States" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "What is the longest mountain range in the world?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Andes" },
              { id: "b", answer: "Rockies" },
              { id: "c", answer: "Himalayas" },
              { id: "d", answer: "Alps" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    subject: "literature",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "Who wrote '1984'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Aldous Huxley" },
              { id: "b", answer: "Ray Bradbury" },
              { id: "c", answer: "George Orwell" },
              { id: "d", answer: "J.K. Rowling" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Who is the author of 'Pride and Prejudice'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Emily Brontë" },
              { id: "b", answer: "Jane Austen" },
              { id: "c", answer: "Charlotte Brontë" },
              { id: "d", answer: "Mary Shelley" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "In which novel would you find the character Atticus Finch?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "To Kill a Mockingbird" },
              { id: "b", answer: "The Great Gatsby" },
              { id: "c", answer: "Catch-22" },
              { id: "d", answer: "Of Mice and Men" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Who wrote 'Moby-Dick'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Mark Twain" },
              { id: "b", answer: "Nathaniel Hawthorne" },
              { id: "c", answer: "Herman Melville" },
              { id: "d", answer: "Edgar Allan Poe" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label:
              "What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Samwise Gamgee" },
              { id: "b", answer: "Peregrin Took" },
              { id: "c", answer: "Meriadoc Brandybuck" },
              { id: "d", answer: "Frodo Baggins" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "Who wrote 'One Hundred Years of Solitude'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Isabel Allende" },
              { id: "b", answer: "Gabriel Garcia Marquez" },
              { id: "c", answer: "Mario Vargas Llosa" },
              { id: "d", answer: "Jorge Luis Borges" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "Who is the author of 'The Catcher in the Rye'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "J.D. Salinger" },
              { id: "b", answer: "F. Scott Fitzgerald" },
              { id: "c", answer: "Ernest Hemingway" },
              { id: "d", answer: "John Steinbeck" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "Who wrote 'Brave New World'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "George Orwell" },
              { id: "b", answer: "Ray Bradbury" },
              { id: "c", answer: "Philip K. Dick" },
              { id: "d", answer: "Aldous Huxley" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "Which novel starts with 'Call me Ishmael'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Heart of Darkness" },
              { id: "b", answer: "The Old Man and the Sea" },
              { id: "c", answer: "Moby-Dick" },
              { id: "d", answer: "Don Quixote" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "Who is the author of 'The Great Gatsby'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "F. Scott Fitzgerald" },
              { id: "b", answer: "Ernest Hemingway" },
              { id: "c", answer: "William Faulkner" },
              { id: "d", answer: "John Steinbeck" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "Who wrote 'The Picture of Dorian Gray'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Bram Stoker" },
              { id: "b", answer: "Oscar Wilde" },
              { id: "c", answer: "Mary Shelley" },
              { id: "d", answer: "Robert Louis Stevenson" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "Which book series is authored by J.K. Rowling?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "The Chronicles of Narnia" },
              { id: "b", answer: "The Lord of the Rings" },
              { id: "c", answer: "Harry Potter" },
              { id: "d", answer: "Percy Jackson" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "Who wrote 'The Road'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Cormac McCarthy" },
              { id: "b", answer: "Kurt Vonnegut" },
              { id: "c", answer: "Harper Lee" },
              { id: "d", answer: "Jack Kerouac" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "Who is the author of 'War and Peace'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Leo Tolstoy" },
              { id: "b", answer: "Fyodor Dostoevsky" },
              { id: "c", answer: "Anton Chekhov" },
              { id: "d", answer: "Alexander Pushkin" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label: "Who wrote 'The Grapes of Wrath'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Ernest Hemingway" },
              { id: "b", answer: "F. Scott Fitzgerald" },
              { id: "c", answer: "John Steinbeck" },
              { id: "d", answer: "William Faulkner" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "Who wrote 'The Odyssey'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Virgil" },
              { id: "b", answer: "Homer" },
              { id: "c", answer: "Ovid" },
              { id: "d", answer: "Sophocles" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    subject: "art",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "Who painted the Mona Lisa?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Leonardo da Vinci" },
              { id: "b", answer: "Vincent van Gogh" },
              { id: "c", answer: "Pablo Picasso" },
              { id: "d", answer: "Claude Monet" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Which artist is famous for his 'Starry Night' painting?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Claude Monet" },
              { id: "b", answer: "Vincent van Gogh" },
              { id: "c", answer: "Salvador Dalí" },
              { id: "d", answer: "Michelangelo" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "In which country was Pablo Picasso born?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Italy" },
              { id: "b", answer: "France" },
              { id: "c", answer: "Spain" },
              { id: "d", answer: "Portugal" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label:
              "What is the art style characterized by abstract shapes and bright colors, founded by Wassily Kandinsky?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Impressionism" },
              { id: "b", answer: "Surrealism" },
              { id: "c", answer: "Cubism" },
              { id: "d", answer: "Abstract Art" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "Who painted 'The Persistence of Memory'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "René Magritte" },
              { id: "b", answer: "Salvador Dalí" },
              { id: "c", answer: "Max Ernst" },
              { id: "d", answer: "Giorgio de Chirico" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "What is the primary medium used in fresco painting?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Oil" },
              { id: "b", answer: "Acrylic" },
              { id: "c", answer: "Water" },
              { id: "d", answer: "Ink" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "Who sculpted 'The Thinker'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Auguste Rodin" },
              { id: "b", answer: "Donatello" },
              { id: "c", answer: "Michelangelo" },
              { id: "d", answer: "Henry Moore" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label:
              "Which artist is known for painting large-scale, close-up flowers?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Frida Kahlo" },
              { id: "b", answer: "Joan Miró" },
              { id: "c", answer: "Jackson Pollock" },
              { id: "d", answer: "Georgia O'Keeffe" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "What art movement is Claude Monet associated with?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Cubism" },
              { id: "b", answer: "Impressionism" },
              { id: "c", answer: "Surrealism" },
              { id: "d", answer: "Baroque" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "Which of these artists is famous for his drip paintings?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Andy Warhol" },
              { id: "b", answer: "Roy Lichtenstein" },
              { id: "c", answer: "Jackson Pollock" },
              { id: "d", answer: "Mark Rothko" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label:
              "What medium did Michelangelo use to create the Sistine Chapel ceiling?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Fresco" },
              { id: "b", answer: "Oil paint" },
              { id: "c", answer: "Tempera" },
              { id: "d", answer: "Acrylic" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "Who painted 'Guernica'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Henri Matisse" },
              { id: "b", answer: "Pablo Picasso" },
              { id: "c", answer: "Salvador Dalí" },
              { id: "d", answer: "Joan Miró" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "Which artist is known for his surreal, melting clocks?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "René Magritte" },
              { id: "b", answer: "Max Ernst" },
              { id: "c", answer: "Salvador Dalí" },
              { id: "d", answer: "Giorgio de Chirico" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "In which museum is the 'Mona Lisa' displayed?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "The Louvre" },
              { id: "b", answer: "The British Museum" },
              { id: "c", answer: "The Prado" },
              { id: "d", answer: "The Uffizi" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label:
              "What is the primary subject of Edvard Munch's famous painting 'The Scream'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "A landscape" },
              { id: "b", answer: "A crowd" },
              { id: "c", answer: "A dance" },
              { id: "d", answer: "A figure with a haunting expression" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "Which artist is known for co-founding the Cubist movement?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Henri Matisse" },
              { id: "b", answer: "Pablo Picasso" },
              { id: "c", answer: "Salvador Dalí" },
              { id: "d", answer: "Georges Seurat" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    subject: "music",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "Who is known as the 'King of Pop'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Michael Jackson" },
              { id: "b", answer: "Elvis Presley" },
              { id: "c", answer: "Prince" },
              { id: "d", answer: "Freddie Mercury" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Which composer wrote the opera 'The Magic Flute'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Ludwig van Beethoven" },
              { id: "b", answer: "Johann Sebastian Bach" },
              { id: "c", answer: "Wolfgang Amadeus Mozart" },
              { id: "d", answer: "Richard Wagner" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "Which band is famous for the song 'Bohemian Rhapsody'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "The Beatles" },
              { id: "b", answer: "The Rolling Stones" },
              { id: "c", answer: "Led Zeppelin" },
              { id: "d", answer: "Queen" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Who is the lead singer of the band U2?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Sting" },
              { id: "b", answer: "Bono" },
              { id: "c", answer: "Mick Jagger" },
              { id: "d", answer: "David Bowie" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "Which instrument does Yo-Yo Ma play?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Cello" },
              { id: "b", answer: "Violin" },
              { id: "c", answer: "Piano" },
              { id: "d", answer: "Guitar" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "What is the title of the first Beatles album?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Help!" },
              { id: "b", answer: "Rubber Soul" },
              { id: "c", answer: "Please Please Me" },
              { id: "d", answer: "Revolver" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "Which genre is Louis Armstrong famous for?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Rock" },
              { id: "b", answer: "Classical" },
              { id: "c", answer: "Pop" },
              { id: "d", answer: "Jazz" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "Who is the composer of 'The Four Seasons'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Johann Sebastian Bach" },
              { id: "b", answer: "Antonio Vivaldi" },
              { id: "c", answer: "George Frideric Handel" },
              { id: "d", answer: "Franz Schubert" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "Which female artist released the album 'Lemonade'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Rihanna" },
              { id: "b", answer: "Adele" },
              { id: "c", answer: "Beyoncé" },
              { id: "d", answer: "Taylor Swift" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "What is the name of the lead singer of Coldplay?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Chris Martin" },
              { id: "b", answer: "Thom Yorke" },
              { id: "c", answer: "Brandon Flowers" },
              { id: "d", answer: "Alex Turner" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "Which artist is known for the song 'Purple Rain'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "David Bowie" },
              { id: "b", answer: "Elton John" },
              { id: "c", answer: "Stevie Wonder" },
              { id: "d", answer: "Prince" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "Which band released the album 'Dark Side of the Moon'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "The Who" },
              { id: "b", answer: "Led Zeppelin" },
              { id: "c", answer: "Pink Floyd" },
              { id: "d", answer: "The Doors" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "Who is known as the 'Queen of Soul'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Whitney Houston" },
              { id: "b", answer: "Aretha Franklin" },
              { id: "c", answer: "Diana Ross" },
              { id: "d", answer: "Tina Turner" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label:
              "Which composer is known for his symphonies and his hearing loss?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Ludwig van Beethoven" },
              { id: "b", answer: "Franz Schubert" },
              { id: "c", answer: "Wolfgang Amadeus Mozart" },
              { id: "d", answer: "Johannes Brahms" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label: "Who is the lead singer of the band Foo Fighters?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Eddie Vedder" },
              { id: "b", answer: "Kurt Cobain" },
              { id: "c", answer: "Dave Grohl" },
              { id: "d", answer: "Billy Corgan" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "Which classical composer wrote 'Clair de Lune'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Frédéric Chopin" },
              { id: "b", answer: "Johannes Brahms" },
              { id: "c", answer: "Claude Debussy" },
              { id: "d", answer: "Maurice Ravel" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    subject: "movies",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "Who directed the movie 'Inception'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Steven Spielberg" },
              { id: "b", answer: "Christopher Nolan" },
              { id: "c", answer: "James Cameron" },
              { id: "d", answer: "Quentin Tarantino" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Which movie features the song 'My Heart Will Go On'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Titanic" },
              { id: "b", answer: "The Bodyguard" },
              { id: "c", answer: "Moulin Rouge!" },
              { id: "d", answer: "Frozen" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "Who played the character of Jack Dawson in 'Titanic'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Brad Pitt" },
              { id: "b", answer: "Johnny Depp" },
              { id: "c", answer: "Leonardo DiCaprio" },
              { id: "d", answer: "Tom Cruise" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Which movie won the first Academy Award for Best Picture?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Gone with the Wind" },
              { id: "b", answer: "Casablanca" },
              { id: "c", answer: "Citizen Kane" },
              { id: "d", answer: "Wings" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "Who played the character of Forrest Gump?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Harrison Ford" },
              { id: "b", answer: "Tom Hanks" },
              { id: "c", answer: "Robin Williams" },
              { id: "d", answer: "Mel Gibson" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label:
              "Which movie is known for the quote 'Here's looking at you, kid'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Casablanca" },
              { id: "b", answer: "The Godfather" },
              { id: "c", answer: "Gone with the Wind" },
              { id: "d", answer: "Sunset Boulevard" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "Which actor portrayed the Joker in 'The Dark Knight'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Jared Leto" },
              { id: "b", answer: "Jack Nicholson" },
              { id: "c", answer: "Heath Ledger" },
              { id: "d", answer: "Joaquin Phoenix" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "What is the highest-grossing movie of all time?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Titanic" },
              { id: "b", answer: "Avatar" },
              { id: "c", answer: "Avengers: Endgame" },
              { id: "d", answer: "Star Wars: The Force Awakens" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "Which movie features the character 'Neo'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "The Matrix" },
              { id: "b", answer: "Blade Runner" },
              { id: "c", answer: "Inception" },
              { id: "d", answer: "The Terminator" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "Which movie features the famous line 'I'll be back'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Predator" },
              { id: "b", answer: "Commando" },
              { id: "c", answer: "The Terminator" },
              { id: "d", answer: "Total Recall" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "Who directed 'Pulp Fiction'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Martin Scorsese" },
              { id: "b", answer: "Francis Ford Coppola" },
              { id: "c", answer: "Steven Spielberg" },
              { id: "d", answer: "Quentin Tarantino" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label:
              "What is the name of the fictional African country in 'Black Panther'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Wakanda" },
              { id: "b", answer: "Zamunda" },
              { id: "c", answer: "Genovia" },
              { id: "d", answer: "Latveria" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label:
              "Who played the character of Tony Stark in the Marvel Cinematic Universe?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Chris Hemsworth" },
              { id: "b", answer: "Robert Downey Jr." },
              { id: "c", answer: "Chris Evans" },
              { id: "d", answer: "Mark Ruffalo" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label:
              "Which movie won the Academy Award for Best Picture in 2020?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "1917" },
              { id: "b", answer: "Joker" },
              { id: "c", answer: "Parasite" },
              { id: "d", answer: "Once Upon a Time in Hollywood" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label:
              "Who played the character of 'Rocky' in the 'Rocky' film series?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Sylvester Stallone" },
              { id: "b", answer: "Arnold Schwarzenegger" },
              { id: "c", answer: "Bruce Willis" },
              { id: "d", answer: "Jean-Claude Van Damme" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label:
              "Which actress played the character of Hermione Granger in the 'Harry Potter' series?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Natalie Portman" },
              { id: "b", answer: "Keira Knightley" },
              { id: "c", answer: "Emma Stone" },
              { id: "d", answer: "Emma Watson" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    subject: "sports",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "Which country won the FIFA World Cup in 2018?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Brazil" },
              { id: "b", answer: "France" },
              { id: "c", answer: "Germany" },
              { id: "d", answer: "Argentina" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "How many players are on a basketball team?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "5" },
              { id: "b", answer: "6" },
              { id: "c", answer: "7" },
              { id: "d", answer: "5" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "Which sport is known as the 'king of sports'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Soccer" },
              { id: "b", answer: "Basketball" },
              { id: "c", answer: "Tennis" },
              { id: "d", answer: "Cricket" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label:
              "Who holds the record for the most goals scored in World Cup history?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Cristiano Ronaldo" },
              { id: "b", answer: "Pelé" },
              { id: "c", answer: "Maradona" },
              { id: "d", answer: "Miroslav Klose" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label:
              "What is the maximum score in a single game of ten-pin bowling?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "200" },
              { id: "b", answer: "300" },
              { id: "c", answer: "250" },
              { id: "d", answer: "400" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "Which country is famous for originating the sport of Judo?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Japan" },
              { id: "b", answer: "China" },
              { id: "c", answer: "Korea" },
              { id: "d", answer: "Thailand" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "In which sport would you perform a slam dunk?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Soccer" },
              { id: "b", answer: "Basketball" },
              { id: "c", answer: "Volleyball" },
              { id: "d", answer: "Baseball" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "How many rounds are there in a standard boxing match?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "12" },
              { id: "b", answer: "10" },
              { id: "c", answer: "15" },
              { id: "d", answer: "8" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "Which tennis Grand Slam is played on grass?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Australian Open" },
              { id: "b", answer: "French Open" },
              { id: "c", answer: "US Open" },
              { id: "d", answer: "Wimbledon" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label:
              "Which country won the most Olympic gold medals in the 2008 Beijing Games?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "China" },
              { id: "b", answer: "USA" },
              { id: "c", answer: "Russia" },
              { id: "d", answer: "UK" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "In which sport is the term 'hole-in-one' used?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Tennis" },
              { id: "b", answer: "Soccer" },
              { id: "c", answer: "Golf" },
              { id: "d", answer: "Hockey" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "Which NFL team has won the most Super Bowls?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "New England Patriots" },
              { id: "b", answer: "Dallas Cowboys" },
              { id: "c", answer: "Pittsburgh Steelers" },
              { id: "d", answer: "San Francisco 49ers" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "What is the standard distance of a marathon race?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "20 miles" },
              { id: "b", answer: "26.2 miles" },
              { id: "c", answer: "30 miles" },
              { id: "d", answer: "15 miles" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "Which sport uses the term 'hat-trick'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Tennis" },
              { id: "b", answer: "Golf" },
              { id: "c", answer: "Hockey" },
              { id: "d", answer: "Baseball" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label:
              "Which swimmer holds the record for the most Olympic gold medals?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Ian Thorpe" },
              { id: "b", answer: "Michael Phelps" },
              { id: "c", answer: "Mark Spitz" },
              { id: "d", answer: "Ryan Lochte" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "What is the term for a soccer game that ends in a tie?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Draw" },
              { id: "b", answer: "Overtime" },
              { id: "c", answer: "Penalty Shootout" },
              { id: "d", answer: "Extra Time" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    subject: "technology",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "What does CPU stand for?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Central Process Unit" },
              { id: "b", answer: "Central Processing Unit" },
              { id: "c", answer: "Computer Personal Unit" },
              { id: "d", answer: "Central Processor Unit" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Who is known as the father of the World Wide Web?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Bill Gates" },
              { id: "b", answer: "Steve Jobs" },
              { id: "c", answer: "Linus Torvalds" },
              { id: "d", answer: "Tim Berners-Lee" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "What does 'HTML' stand for?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Hypertext Markup Language" },
              { id: "b", answer: "Hyperlink Text Markup Language" },
              { id: "c", answer: "Hypertext Multi-language" },
              { id: "d", answer: "High-level Text Markup Language" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "What year was the first iPhone released?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "2005" },
              { id: "b", answer: "2006" },
              { id: "c", answer: "2007" },
              { id: "d", answer: "2008" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "What does 'URL' stand for?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Uniform Resource Locator" },
              { id: "b", answer: "Uniform Resource Locator" },
              { id: "c", answer: "Universal Resource Locator" },
              { id: "d", answer: "Uniform Resource Link" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "Which company developed the Android operating system?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Google" },
              { id: "b", answer: "Microsoft" },
              { id: "c", answer: "Apple" },
              { id: "d", answer: "Amazon" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "What is the primary function of a graphics card?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Enhance CPU performance" },
              { id: "b", answer: "Store data" },
              { id: "c", answer: "Manage network connections" },
              { id: "d", answer: "Render images and videos" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "What is the main function of an operating system?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Run applications" },
              { id: "b", answer: "Design hardware" },
              { id: "c", answer: "Manage hardware and software resources" },
              { id: "d", answer: "Control the internet" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "What does 'RAM' stand for?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Read Access Memory" },
              { id: "b", answer: "Random Access Module" },
              { id: "c", answer: "Read Active Memory" },
              { id: "d", answer: "Random Access Memory" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label:
              "Which programming language is known for its 'write once, run anywhere' capability?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "C++" },
              { id: "b", answer: "Java" },
              { id: "c", answer: "Python" },
              { id: "d", answer: "JavaScript" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "What is the primary use of SQL?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Database management" },
              { id: "b", answer: "Web development" },
              { id: "c", answer: "Graphic design" },
              { id: "d", answer: "Operating system management" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "What is the name of Apple's mobile operating system?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Android" },
              { id: "b", answer: "Windows Mobile" },
              { id: "c", answer: "Symbian" },
              { id: "d", answer: "iOS" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "What is the main purpose of an IP address?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Identify a computer's location" },
              { id: "b", answer: "Identify a computer on a network" },
              { id: "c", answer: "Encrypt data" },
              { id: "d", answer: "Control access to the internet" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "What technology does 'Wi-Fi' use to communicate?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Bluetooth" },
              { id: "b", answer: "Infrared" },
              { id: "c", answer: "Radio waves" },
              { id: "d", answer: "Ultrasound" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label:
              "Which company is known for the creation of the Linux operating system?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Linus Torvalds" },
              { id: "b", answer: "Bill Gates" },
              { id: "c", answer: "Steve Jobs" },
              { id: "d", answer: "Mark Zuckerberg" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label:
              "What is the term for malicious software designed to harm or exploit computers?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Virus" },
              { id: "b", answer: "Firewall" },
              { id: "c", answer: "Antivirus" },
              { id: "d", answer: "Malware" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    subject: "mythology",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "Who is the king of the Greek gods?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Zeus" },
              { id: "b", answer: "Poseidon" },
              { id: "c", answer: "Hades" },
              { id: "d", answer: "Apollo" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "In Norse mythology, who is the god of thunder?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Odin" },
              { id: "b", answer: "Thor" },
              { id: "c", answer: "Loki" },
              { id: "d", answer: "Frey" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "Who was the mother of the Greek hero Achilles?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Athena" },
              { id: "b", answer: "Hera" },
              { id: "c", answer: "Demeter" },
              { id: "d", answer: "Thetis" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Which Roman goddess is associated with love and beauty?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Venus" },
              { id: "b", answer: "Juno" },
              { id: "c", answer: "Minerva" },
              { id: "d", answer: "Ceres" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "In Egyptian mythology, who is the god of the underworld?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Ra" },
              { id: "b", answer: "Horus" },
              { id: "c", answer: "Osiris" },
              { id: "d", answer: "Anubis" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "Which Greek goddess is known for wisdom and warfare?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Aphrodite" },
              { id: "b", answer: "Artemis" },
              { id: "c", answer: "Demeter" },
              { id: "d", answer: "Athena" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "In Japanese mythology, who is the sun goddess?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Tsukuyomi" },
              { id: "b", answer: "Amaterasu" },
              { id: "c", answer: "Susanoo" },
              { id: "d", answer: "Inari" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "Which hero completed the Twelve Labors in Greek mythology?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Heracles" },
              { id: "b", answer: "Perseus" },
              { id: "c", answer: "Jason" },
              { id: "d", answer: "Theseus" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label:
              "In Celtic mythology, who is the goddess of fertility and harvest?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Morrigan" },
              { id: "b", answer: "Brigid" },
              { id: "c", answer: "Epona" },
              { id: "d", answer: "Danu" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "Who is the Greek god of the sea?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Zeus" },
              { id: "b", answer: "Poseidon" },
              { id: "c", answer: "Apollo" },
              { id: "d", answer: "Hermes" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label:
              "In Hindu mythology, who is the god of destruction and regeneration?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Vishnu" },
              { id: "b", answer: "Brahma" },
              { id: "c", answer: "Shiva" },
              { id: "d", answer: "Krishna" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label:
              "Which Egyptian deity is the goddess of motherhood and fertility?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Isis" },
              { id: "b", answer: "Hathor" },
              { id: "c", answer: "Sekhmet" },
              { id: "d", answer: "Bastet" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "In Norse mythology, who is the trickster god?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Thor" },
              { id: "b", answer: "Loki" },
              { id: "c", answer: "Odin" },
              { id: "d", answer: "Baldur" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "Who is the Roman equivalent of the Greek god Ares?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Jupiter" },
              { id: "b", answer: "Neptune" },
              { id: "c", answer: "Mars" },
              { id: "d", answer: "Apollo" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label:
              "Which mythological creature is known for guarding treasures and having three heads?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Hydra" },
              { id: "b", answer: "Cerberus" },
              { id: "c", answer: "Chimera" },
              { id: "d", answer: "Griffin" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "In which mythology is the phoenix a symbol of rebirth?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Greek" },
              { id: "b", answer: "Norse" },
              { id: "c", answer: "Egyptian" },
              { id: "d", answer: "Roman" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    subject: "philosophy",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "Who is considered the father of Western philosophy?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Socrates" },
              { id: "b", answer: "Plato" },
              { id: "c", answer: "Aristotle" },
              { id: "d", answer: "Descartes" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Which philosopher wrote 'The Republic'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Aristotle" },
              { id: "b", answer: "Plato" },
              { id: "c", answer: "Socrates" },
              { id: "d", answer: "Nietzsche" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "What is the main focus of existentialism?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Objective reality" },
              { id: "b", answer: "Empirical science" },
              { id: "c", answer: "Individual freedom and choice" },
              { id: "d", answer: "Social justice" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Who is the author of 'Critique of Pure Reason'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Hume" },
              { id: "b", answer: "Kant" },
              { id: "c", answer: "Hegel" },
              { id: "d", answer: "Descartes" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "What is 'tabula rasa' in philosophy?",
            rightAnswer: "a",
            answers: [
              {
                id: "a",
                answer: "The idea that the mind is a blank slate at birth",
              },
              { id: "b", answer: "A form of logical reasoning" },
              { id: "c", answer: "A theory of ethics" },
              { id: "d", answer: "A political theory" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label:
              "Which philosopher is known for the statement 'I think, therefore I am'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Nietzsche" },
              { id: "b", answer: "Hume" },
              { id: "c", answer: "Descartes" },
              { id: "d", answer: "Locke" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "What does 'utilitarianism' advocate?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Maximizing individual rights" },
              { id: "b", answer: "Religious adherence" },
              { id: "c", answer: "The pursuit of personal happiness" },
              {
                id: "d",
                answer: "The greatest happiness for the greatest number",
              },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "Who is known for the concept of 'the will to power'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Nietzsche" },
              { id: "b", answer: "Hegel" },
              { id: "c", answer: "Kant" },
              { id: "d", answer: "Sartre" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "Which philosopher wrote 'Being and Time'?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Nietzsche" },
              { id: "b", answer: "Heidegger" },
              { id: "c", answer: "Hume" },
              { id: "d", answer: "Berkeley" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "What is 'empiricism'?",
            rightAnswer: "a",
            answers: [
              {
                id: "a",
                answer:
                  "The theory that knowledge comes from sensory experience",
              },
              { id: "b", answer: "The belief in innate ideas" },
              { id: "c", answer: "A form of ethical reasoning" },
              { id: "d", answer: "A political philosophy" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label:
              "Which philosopher is known for his work 'The Social Contract'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Kant" },
              { id: "b", answer: "Hegel" },
              { id: "c", answer: "Hume" },
              { id: "d", answer: "Rousseau" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "What does 'skepticism' refer to in philosophy?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "The belief in absolute truths" },
              {
                id: "b",
                answer: "The pursuit of knowledge through empirical methods",
              },
              {
                id: "c",
                answer:
                  "The questioning of the possibility of certainty in knowledge",
              },
              { id: "d", answer: "The acceptance of metaphysical claims" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "Who wrote 'Beyond Good and Evil'?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Nietzsche" },
              { id: "b", answer: "Hume" },
              { id: "c", answer: "Kant" },
              { id: "d", answer: "Sartre" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "What is 'rationalism'?",
            rightAnswer: "b",
            answers: [
              {
                id: "a",
                answer:
                  "The belief in empirical evidence as the source of knowledge",
              },
              {
                id: "b",
                answer:
                  "The belief that reason is the primary source of knowledge",
              },
              {
                id: "c",
                answer: "The belief in the importance of sensory experience",
              },
              { id: "d", answer: "A form of social philosophy" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label:
              "Which philosopher is known for 'A Treatise of Human Nature'?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Locke" },
              { id: "b", answer: "Hume" },
              { id: "c", answer: "Berkeley" },
              { id: "d", answer: "Kant" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "What does 'dialectic' refer to in philosophy?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "A type of political philosophy" },
              { id: "b", answer: "The belief in empiricism" },
              {
                id: "c",
                answer:
                  "A method of argument involving contradiction and reconciliation",
              },
              { id: "d", answer: "A form of ethical reasoning" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    subject: "languages",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "What is the most spoken language in the world?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "English" },
              { id: "b", answer: "Mandarin Chinese" },
              { id: "c", answer: "Spanish" },
              { id: "d", answer: "Hindi" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Which language uses the Cyrillic alphabet?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Russian" },
              { id: "b", answer: "Greek" },
              { id: "c", answer: "Hebrew" },
              { id: "d", answer: "Arabic" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "In which language is the book 'Don Quixote' written?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "French" },
              { id: "b", answer: "Spanish" },
              { id: "c", answer: "Italian" },
              { id: "d", answer: "Portuguese" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Which language is officially spoken in Brazil?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Spanish" },
              { id: "b", answer: "French" },
              { id: "c", answer: "English" },
              { id: "d", answer: "Portuguese" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "What language is primarily spoken in Japan?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Chinese" },
              { id: "b", answer: "Korean" },
              { id: "c", answer: "Japanese" },
              { id: "d", answer: "Vietnamese" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "Which language is spoken in Ethiopia?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Amharic" },
              { id: "b", answer: "Swahili" },
              { id: "c", answer: "Somali" },
              { id: "d", answer: "Hausa" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "What is the official language of Egypt?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Arabic" },
              { id: "b", answer: "Egyptian Arabic" },
              { id: "c", answer: "English" },
              { id: "d", answer: "French" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "Which language is written in Devanagari script?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Bengali" },
              { id: "b", answer: "Punjabi" },
              { id: "c", answer: "Hindi" },
              { id: "d", answer: "Urdu" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "Which language is known for its click sounds?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Zulu" },
              { id: "b", answer: "Swahili" },
              { id: "c", answer: "Xhosa" },
              { id: "d", answer: "All of the above" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "Which language is spoken in the Philippines?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Chinese" },
              { id: "b", answer: "Tagalog" },
              { id: "c", answer: "Thai" },
              { id: "d", answer: "Burmese" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "What is the primary language of Australia?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "English" },
              { id: "b", answer: "French" },
              { id: "c", answer: "German" },
              { id: "d", answer: "English" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "Which language is an official language of Switzerland?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "German" },
              { id: "b", answer: "Italian" },
              { id: "c", answer: "French" },
              { id: "d", answer: "All of the above" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label:
              "Which language is used in the United Nations for official documents?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Spanish" },
              { id: "b", answer: "Russian" },
              { id: "c", answer: "Chinese" },
              { id: "d", answer: "All of the above" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "Which language is native to the Basque region?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Basque" },
              { id: "b", answer: "Catalan" },
              { id: "c", answer: "Galician" },
              { id: "d", answer: "Spanish" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label: "What language is the film 'La La Land' primarily in?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "French" },
              { id: "b", answer: "Spanish" },
              { id: "c", answer: "Italian" },
              { id: "d", answer: "English" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "Which language is spoken in the region of Catalonia?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Spanish" },
              { id: "b", answer: "Catalan" },
              { id: "c", answer: "French" },
              { id: "d", answer: "Italian" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 13,
    subject: "politics",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "Who is the current President of the United States?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Donald Trump" },
              { id: "b", answer: "Joe Biden" },
              { id: "c", answer: "Barack Obama" },
              { id: "d", answer: "George W. Bush" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Which country is led by Prime Minister Narendra Modi?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "India" },
              { id: "b", answer: "Pakistan" },
              { id: "c", answer: "Bangladesh" },
              { id: "d", answer: "Sri Lanka" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label:
              "Who was the first female Prime Minister of the United Kingdom?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Margaret Thatcher" },
              { id: "b", answer: "Theresa May" },
              { id: "c", answer: "Priti Patel" },
              { id: "d", answer: "Clementine Churchill" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "What is the capital of Canada?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Toronto" },
              { id: "b", answer: "Vancouver" },
              { id: "c", answer: "Ottawa" },
              { id: "d", answer: "Montreal" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label:
              "Which political party is associated with the color red in the United States?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Republican Party" },
              { id: "b", answer: "Democratic Party" },
              { id: "c", answer: "Libertarian Party" },
              { id: "d", answer: "Green Party" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "Which leader is known for the 'New Deal' reforms?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Abraham Lincoln" },
              { id: "b", answer: "Franklin D. Roosevelt" },
              { id: "c", answer: "John F. Kennedy" },
              { id: "d", answer: "Theodore Roosevelt" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "What is the name of the German Parliament?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Bundestag" },
              { id: "b", answer: "Reichstag" },
              { id: "c", answer: "Bundesrat" },
              { id: "d", answer: "Landtag" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label:
              "Which country is known for its neutrality and has not been involved in a war since 1815?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Sweden" },
              { id: "b", answer: "Ireland" },
              { id: "c", answer: "Austria" },
              { id: "d", answer: "Switzerland" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label: "Which country has the largest number of political parties?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "India" },
              { id: "b", answer: "Brazil" },
              { id: "c", answer: "United States" },
              { id: "d", answer: "Germany" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label:
              "Who was the first African American President of the United States?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Colin Powell" },
              { id: "b", answer: "Condoleezza Rice" },
              { id: "c", answer: "Barack Obama" },
              { id: "d", answer: "Kamala Harris" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label:
              "Which country is the largest democracy in the world by population?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "India" },
              { id: "b", answer: "United States" },
              { id: "c", answer: "Brazil" },
              { id: "d", answer: "Indonesia" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label:
              "Which political leader is known for the 'Iron Curtain' speech?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Winston Churchill" },
              { id: "b", answer: "Franklin D. Roosevelt" },
              { id: "c", answer: "Dwight D. Eisenhower" },
              { id: "d", answer: "Harry S. Truman" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "What was the name of the agreement that ended World War I?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Treaty of Versailles" },
              { id: "b", answer: "Treaty of Paris" },
              { id: "c", answer: "Treaty of Brest-Litovsk" },
              { id: "d", answer: "Treaty of Ghent" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label:
              "Which organization is known for its peacekeeping missions around the world?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "European Union" },
              { id: "b", answer: "United Nations" },
              { id: "c", answer: "NATO" },
              { id: "d", answer: "World Bank" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label: "Which U.S. President signed the Emancipation Proclamation?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Abraham Lincoln" },
              { id: "b", answer: "Ulysses S. Grant" },
              { id: "c", answer: "Andrew Johnson" },
              { id: "d", answer: "James Buchanan" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "What is the name of the French legislative body?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Assemblée Nationale" },
              { id: "b", answer: "Senate" },
              { id: "c", answer: "Parliament" },
              { id: "d", answer: "Assemblée Générale" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 14,
    subject: "astronomy",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "What is the closest planet to the Sun?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Mercury" },
              { id: "b", answer: "Venus" },
              { id: "c", answer: "Earth" },
              { id: "d", answer: "Mars" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Which planet is known as the Red Planet?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Jupiter" },
              { id: "b", answer: "Mars" },
              { id: "c", answer: "Saturn" },
              { id: "d", answer: "Uranus" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "What is the name of our galaxy?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Andromeda" },
              { id: "b", answer: "Triangulum" },
              { id: "c", answer: "Milky Way" },
              { id: "d", answer: "Whirlpool" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "Which celestial object is known for its rings?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Jupiter" },
              { id: "b", answer: "Mars" },
              { id: "c", answer: "Neptune" },
              { id: "d", answer: "Saturn" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "What is the largest planet in our solar system?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Earth" },
              { id: "b", answer: "Mars" },
              { id: "c", answer: "Uranus" },
              { id: "d", answer: "Jupiter" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "Which planet is known as the Evening Star?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Mars" },
              { id: "b", answer: "Venus" },
              { id: "c", answer: "Mercury" },
              { id: "d", answer: "Jupiter" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label: "What is the name of the fifth planet from the Sun?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Jupiter" },
              { id: "b", answer: "Saturn" },
              { id: "c", answer: "Uranus" },
              { id: "d", answer: "Neptune" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "Which planet has the most moons?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Earth" },
              { id: "b", answer: "Saturn" },
              { id: "c", answer: "Jupiter" },
              { id: "d", answer: "Uranus" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label:
              "What is the name of the first manned mission to land on the Moon?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Apollo 11" },
              { id: "b", answer: "Apollo 12" },
              { id: "c", answer: "Apollo 13" },
              { id: "d", answer: "Apollo 14" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label: "Which planet is known as the 'Giant Planet'?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Mars" },
              { id: "b", answer: "Venus" },
              { id: "c", answer: "Jupiter" },
              { id: "d", answer: "Neptune" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label:
              "What is the name of the phenomenon when the Moon passes between the Earth and the Sun?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Lunar Eclipse" },
              { id: "b", answer: "Solar Flare" },
              { id: "c", answer: "Meteor Shower" },
              { id: "d", answer: "Solar Eclipse" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label:
              "What is the name of the closest star to Earth after the Sun?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Sirius" },
              { id: "b", answer: "Proxima Centauri" },
              { id: "c", answer: "Alpha Centauri" },
              { id: "d", answer: "Betelgeuse" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label: "What is the hottest planet in our solar system?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Mercury" },
              { id: "b", answer: "Mars" },
              { id: "c", answer: "Venus" },
              { id: "d", answer: "Jupiter" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label: "Which planet is famous for its Great Red Spot?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Jupiter" },
              { id: "b", answer: "Saturn" },
              { id: "c", answer: "Uranus" },
              { id: "d", answer: "Neptune" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label: "What is the name of the largest moon of Saturn?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Enceladus" },
              { id: "b", answer: "Rhea" },
              { id: "c", answer: "Titania" },
              { id: "d", answer: "Titan" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label:
              "What do we call a small body that orbits the Sun and is composed mostly of ice and dust?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Asteroid" },
              { id: "b", answer: "Meteorite" },
              { id: "c", answer: "Comet" },
              { id: "d", answer: "Meteoroid" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    subject: "islamic",
    quiz: [
      {
        id: 0,
        question: [
          {
            label: "What is the first month of the Islamic calendar?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Muharram" },
              { id: "b", answer: "Ramadan" },
              { id: "c", answer: "Shawwal" },
              { id: "d", answer: "Safar" },
            ],
          },
        ],
      },
      {
        id: 1,
        question: [
          {
            label: "Who was the Prophet Muhammad's first wife?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Aisha" },
              { id: "b", answer: "Khadijah" },
              { id: "c", answer: "Hafsa" },
              { id: "d", answer: "Zainab" },
            ],
          },
        ],
      },
      {
        id: 2,
        question: [
          {
            label: "In which city was the Prophet Muhammad born?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Medina" },
              { id: "b", answer: "Jerusalem" },
              { id: "c", answer: "Mecca" },
              { id: "d", answer: "Cairo" },
            ],
          },
        ],
      },
      {
        id: 3,
        question: [
          {
            label: "What is the name of the holy book of Islam?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Bible" },
              { id: "b", answer: "Torah" },
              { id: "c", answer: "Gita" },
              { id: "d", answer: "Quran" },
            ],
          },
        ],
      },
      {
        id: 4,
        question: [
          {
            label: "How many times a day are Muslims required to pray?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Five" },
              { id: "b", answer: "Three" },
              { id: "c", answer: "Seven" },
              { id: "d", answer: "Two" },
            ],
          },
        ],
      },
      {
        id: 5,
        question: [
          {
            label: "Which prophet is known for building the Kaaba?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Moses" },
              { id: "b", answer: "Ibrahim" },
              { id: "c", answer: "Noah" },
              { id: "d", answer: "Jesus" },
            ],
          },
        ],
      },
      {
        id: 6,
        question: [
          {
            label:
              "What is the name of the Islamic festival at the end of Ramadan?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Eid al-Adha" },
              { id: "b", answer: "Eid al-Ghadeer" },
              { id: "c", answer: "Eid al-Fitr" },
              { id: "d", answer: "Eid al-Mawlid" },
            ],
          },
        ],
      },
      {
        id: 7,
        question: [
          {
            label: "Which angel delivered the Quran to Prophet Muhammad?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Gabriel" },
              { id: "b", answer: "Michael" },
              { id: "c", answer: "Raphael" },
              { id: "d", answer: "Azrael" },
            ],
          },
        ],
      },
      {
        id: 8,
        question: [
          {
            label:
              "What is the name of the pilgrimage that Muslims undertake to Mecca?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Umrah" },
              { id: "b", answer: "Hajj" },
              { id: "c", answer: "Sadaqah" },
              { id: "d", answer: "Zakat" },
            ],
          },
        ],
      },
      {
        id: 9,
        question: [
          {
            label:
              "Which day of the week is considered the holiest day for Muslims?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Monday" },
              { id: "b", answer: "Friday" },
              { id: "c", answer: "Saturday" },
              { id: "d", answer: "Sunday" },
            ],
          },
        ],
      },
      {
        id: 10,
        question: [
          {
            label: "What is the term for the charity given to those in need?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Hajj" },
              { id: "b", answer: "Sadaqah" },
              { id: "c", answer: "Zakat" },
              { id: "d", answer: "Sawm" },
            ],
          },
        ],
      },
      {
        id: 11,
        question: [
          {
            label: "Which prophet is known for his patience and endurance?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Moses" },
              { id: "b", answer: "Job" },
              { id: "c", answer: "Isaac" },
              { id: "d", answer: "David" },
            ],
          },
        ],
      },
      {
        id: 12,
        question: [
          {
            label:
              "What is the Islamic term for fasting during the month of Ramadan?",
            rightAnswer: "d",
            answers: [
              { id: "a", answer: "Hajj" },
              { id: "b", answer: "Zakat" },
              { id: "c", answer: "Sadaqah" },
              { id: "d", answer: "Sawm" },
            ],
          },
        ],
      },
      {
        id: 13,
        question: [
          {
            label:
              "What is the name of the Islamic prayer performed before dawn?",
            rightAnswer: "a",
            answers: [
              { id: "a", answer: "Fajr" },
              { id: "b", answer: "Dhuhr" },
              { id: "c", answer: "Asr" },
              { id: "d", answer: "Maghrib" },
            ],
          },
        ],
      },
      {
        id: 14,
        question: [
          {
            label: "Who is considered the final prophet in Islam?",
            rightAnswer: "c",
            answers: [
              { id: "a", answer: "Moses" },
              { id: "b", answer: "Jesus" },
              { id: "c", answer: "Muhammad" },
              { id: "d", answer: "Isaiah" },
            ],
          },
        ],
      },
      {
        id: 15,
        question: [
          {
            label: "What is the term for the Islamic declaration of faith?",
            rightAnswer: "b",
            answers: [
              { id: "a", answer: "Sawm" },
              { id: "b", answer: "Shahada" },
              { id: "c", answer: "Hajj" },
              { id: "d", answer: "Zakat" },
            ],
          },
        ],
      },
    ],
  },
];
