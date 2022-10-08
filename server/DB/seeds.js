use projectdb;
db.dropDatabase();

db.organs.insertMany([




    {
      name: 'Brain',

      info: 'The brain controls complex behaviour. It is made of billions of interconnected neurones and has different regions that carry out different functions. There are four main areas in the brain: 1. The cerebrum (the outer layer is called the cerebral cortex), which is split into two hemispheres and is highly folded. It controls intelligence, personality, conscious thought and high-level functions, such as language and verbal memory. 2. The cerebellum, which controls balance, co-ordination of movement and muscular activity. 3. The medulla, which controls unconscious activities such as heart rate and breathing rate, 4. The hypothalamus, which is the regulating centre for temperature and water balance within the body.',

      quiz: [
        {
          id: 1,
          question: 'How many areas does the brain have?',
          answer: '4',
        },
        {
          id: 2,
          question:
            'Which area controls intelligence, personality, conscious thought and high-level functions?',
          answer: 'cerebrum',
        },
        {
          id: 3,
          question: 'Which area controls body co-ordination?',
          answer: 'cerebellum',
        },
        {
          id: 4,
          question: 'Which area controls unconscious activities?',
          answer: 'medulla',
        },
        {
          id: 5,
          question: 'What does the hypothalamus regulate within the body?',
          answer: 'temperature and water balance',
        },
      ],
    },

    {
      name: 'Heart',

      info: 'The heart is a muscular organ. Its function is to pump blood. The right side pumps blood through the pulmonary circuit, while the left side pumps blood through the systemic circuit. A septum separates the right and left sides. The left side has thicker walls because it needs to put the blood under higher pressure than the right side. In general, blood flows into the heart from a vein, goes into an atrium, then a ventricle, and out through an artery. The heart contains valves to prevent the blood flowing backwards: the right side has a tricuspid valve (a valve with three flaps), the left side has a bicuspid valve (a valve with two flaps). Both sides have semi-lunar valves (at the entrances to the pulmonary artery and aorta).',

      quiz: [
        {
          id: 6,
          question:
            'Which circuit does the right side of the heart pump blood through?',
          answer: 'Pulmonary circuit',
        },
        {
          id: 7,
          question:
            'Which circuit does the left side of the heart pump blood through?',
          answer: 'systemic circuit',
        },
        {
          id: 8,
          question: 'Which valve is on the right hand side?',
          answer: 'tricuspid',
        },
        {
          id: 9,
          question: 'How many flaps does this valve have?',
          answer: 'three',
        },
        {
          id: 10,
          question: 'Which valve do both sides have in common?',
          answer: 'semi lunar valve',
        },
      ],
    },
    {
      name: 'Kidneys',

      info: 'The kidney is a small organ, well, it is actually a pair. They are small, bean-shaped organs that are tucked into the sides of our abdomen.The kidney is one of the most important organs within our bodies, it is thought to be as important as the heart. The human body needs at least one kidney to survive. They are about 13 cm long and sit on each side of the lower back. One of the main jobs of the kidneys is to filter out the waste in our blood. This waste is usually nutrients that our body already has enough of. This waste then travels to the bladder to be removed.',

      quiz: [
        {
          id: 11,
          question: 'How many kidneys do you have?',
          answer: '2',
        },
        {
          id: 12,
          question: 'What shape are the kidneys?',
          answer: 'Bean',
        },
        {
          id: 13,
          question: 'True or false: The kidneys are around 13cm long',
          answer: 'True',
        },
      ],
    },
    {
      name: 'Stomach',

      info: 'The stomach is a large processor for food and liquid in the body. Within the stomach, food is broken down into smaller pieces that are easier for the body to fully digest.In terms of appearance, the stomach is ‘J’ shaped, and is located near the top of the abdomen. Once a person swallows their food, it makes its way down to the stomach. This journey involves moving down the throat and into the oesophagus. Once it has reached the end of the oesophagus, the food enters the stomach.',

      quiz: [
        {
          id: 16,
          question: 'How many stomachs do you have?',
          answer: 'One',
        },
        {
          id: 17,
          question: 'What shape is the stomach?',
          answer: 'J',
        },
        {
          id: 18,
          question: 'Does the stomach contain acid?',
          answer: 'Yes',
        },
      ],
    },
    {
      name: 'Intestines',

      info: 'The small intestine is a narrow, coiled-up tube (around six to seven metres long) which connects to the stomach and absorbs nutrients from the food after it leaves the stomach.Water and food that cannot be digested are passed from the small intestine into the large intestine, where it is turned into waste. The large intestine is around 1.5 metres long.',

      quiz: [
        {
          id: 21,
          question: 'Is the small intestine over 10 metres long?',
          answer: 'No',
        },
        {
          id: 22,
          question:
            'True or false: The Large intestine is around 1.5 meters long?',
          answer: 'True',
        },
        {
          id: 23,
          question: 'What does the intestines absorb?',
          answer: 'Nutrients',
        },
      ],
    },
    {
      name: 'Gallbladder',

      info: 'The gall bladder is a small pouch that sits just under your liver. This is where the bile that the liver produces is stored.',

      quiz: [
        {
          id: 26,
          question: 'Does the Gallbladder help in digestion?',
          answer: 'Yes',
        },
        {
          id: 27,
          question: 'Does the Gallbladder sit in your head?',
          answer: 'No',
        },
        {
          id: 28,
          question: 'Can you live without your Gallbladder?',
          answer: 'Yes',
        },
      ],
    },
    {
      name: 'Liver',

      info: 'The liver does not secrete any enzymes, but it plays an important role in digestion, and then processing food molecules that have been absorbed.The liver produces bile. Bile emulsifies lipids, breaking them up physically into tiny droplets. Tiny droplets have a much larger surface area, over which lipases can work, than larger pieces, or drops of lipid. Contains sodium hydrogencarbonate, which is an alkali. It neutralises stomach acid and produces the optimum pH for pancreatic enzymes. Is produced in the liver, but stored and concentrated in the gall bladder.',

      quiz: [
        {
          id: 31,
          question: 'Does the liver secrete any enzymes?',
          answer: 'no',
        },
        { id: 32, question: 'What does the liver produce?', answer: 'bile' },
        {
          id: 33,
          question:
            'What is the advantage of breaking lipids into tiny droplets?',
          answer: 'larger surface area',
        },
        {
          id: 34,
          question: 'Is sodium hydrogencardonate an acid or alkali?',
          answer: 'alkali',
        },
        {
          id: 35,
          question: 'What does sodium hydrogencardonate neutralise? ',
          answer: 'stomach acid',
        },
      ],
    },
    {
      name: 'Lungs',

      info: 'The lungs make use of the large space behind our breastplate and ribcage. They expand and contract as they fill with air and as it is breathed out again. The lungs allow you to inhale and exhale. Breathing in allows fresh air and oxygen to enter your blood and breathing out removes stale air, made up of carbon dioxide, from your blood.',

      quiz: [
        {
          id: 36,
          question: 'How many lungs do you have?',
          answer: 'two',
        },
        {
          id: 37,
          question: 'Breathing in air takes what into your body?',
          answer: 'oxygen',
        },
        {
          id: 38,
          question: 'And breathing out expels what?',
          answer: 'carbon dioxide',
        },
        {
          id: 39,
          question: 'Is smoking cigarettes good for the lungs?',
          answer: 'no',
        },
      ]
    }])
