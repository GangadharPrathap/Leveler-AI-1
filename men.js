const workoutData = {
  beginner: [
    {
      day: 1,
      title: "Full Body Foundation",
      exercises: [
       {
        name: "Push-ups",
        img: "/placeholder.svg?height=250&width=400",
        duration: "3 sets x 10-20 reps (adjust as per fitness level)",
        targetMuscles: "Chest, Triceps, Shoulders, Core",
        intensity: "Moderate to High",
        description: "A classic bodyweight exercise that builds upper body strength and improves core stability. Great for developing chest and arm muscles with no equipment needed.",
        tips: [
          "Keep your body in a straight line from head to heels—avoid sagging hips.",
          "Place hands shoulder-width apart and lower your chest close to the ground.",
          "Engage your core throughout to protect your spine and enhance stability.",
          "Inhale as you lower your body, and exhale as you push back up.",
          "Start with knee push-ups if you're building up strength, and progress to full push-ups."
        ]
      },
      {
          name: "Squats",
          img: "/placeholder.svg?height=250&width=400",
          duration: "3 sets x 15 reps",
          targetMuscles: "Quads, Glutes, Hamstrings, Core",
          intensity: "Moderate",
          description: "A fundamental lower-body movement that strengthens the legs and core while improving balance and mobility. Squats can be done with or without added weights.",
          tips: [
            "Keep your feet shoulder-width apart and toes slightly pointed out.",
            "Push your hips back and lower down as if sitting in a chair.",
            "Keep your chest lifted and back straight throughout the movement.",
            "Drive through your heels to return to standing.",
            "Avoid letting your knees collapse inward—track them in line with your toes."
          ]
      },
      {
        name: "Plank",
        img: "/placeholder.svg?height=250&width=400",
        duration: "Hold for 30 seconds (or more as strength improves)",
        targetMuscles: "Core, Shoulders, Back",
        intensity: "Moderate",
        description: "A static core-strengthening exercise that builds endurance in the abs, back, and shoulders. It's an effective move for posture and overall body stability.",
        tips: [
          "Position your elbows under shoulders and forearms flat on the ground.",
          "Keep your body in a straight line from head to heels.",
          "Engage your core and avoid arching your back or letting your hips sag.",
          "Breathe steadily—don't hold your breath.",
          "Increase duration gradually as your endurance improves."
        ]
      },
      {
        name: "Jumping Jacks",
        img: "/placeholder.svg?height=250&width=400",
        duration: "3 sets x 25 reps",
        targetMuscles: "Full Body (especially Legs, Shoulders, and Heart)",
        intensity: "Moderate to High",
        description: "A dynamic cardio exercise that boosts heart rate, warms up the body, and improves coordination and endurance. Ideal for full-body activation.",
        tips: [
          "Start with feet together and hands at your sides.",
          "Jump while spreading your legs and bringing arms overhead, then return to start.",
          "Land softly on the balls of your feet to reduce joint impact.",
          "Maintain a rhythmic pace for cardio benefits.",
          "Modify with step jacks if you need a lower-impact version."
        ]
      },
        {
 name: "Arm Circles",
 img: "/placeholder.svg?height=250&width=400",
 duration: "30 seconds (each direction if possible)",
 targetMuscles: "Shoulders, Upper Arms",
 intensity: "Low",
 description: "A simple yet effective mobility exercise that warms up the shoulder joints and improves flexibility and blood flow in the upper body.",
 tips: [
   "Stand tall with arms extended straight out to the sides at shoulder height.",
   "Make small controlled circles forward for half the time, then reverse.",
   "Keep arms straight and avoid shrugging shoulders.",
   "Start with small circles and increase the range as you warm up.",
   "Perfect as part of a warm-up or cool-down routine."
 ]
},
      ],
    },
    {
      day: 2,
      title: "Lower Body Focus",
      exercises: [
        {
 name: "Brisk Walk",
 img: "/placeholder.svg?height=250&width=400",
 duration: "20 minutes",
 targetMuscles: "Legs, Cardiovascular System",
 intensity: "Low to Moderate",
 description: "A steady-paced walk that boosts cardiovascular health, burns calories, and enhances mood. Perfect for warm-up or low-impact cardio.",
 tips: [
   "Maintain a steady, moderate pace without overexerting.",
   "Swing your arms naturally to engage more muscles.",
   "Keep a good posture with your head up and back straight.",
   "Wear supportive shoes for comfort and joint protection.",
   "Can be done outdoors or on a treadmill."
 ]
},
       {
 name: "Crunches",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 reps",
 targetMuscles: "Abdominals",
 intensity: "Moderate",
 description: "A core-targeting movement that strengthens the abdominal muscles and helps build a toned midsection.",
 tips: [
   "Lie flat with knees bent and hands behind your head.",
   "Lift your shoulders off the floor using your abs—don’t pull your neck.",
   "Exhale as you crunch up, inhale as you return down.",
   "Keep lower back on the ground to prevent strain.",
   "Slow and controlled movement is more effective than speed."
 ]
},{
 name: "Leg Raises",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Lower Abdominals, Hip Flexors",
 intensity: "Moderate",
 description: "A powerful core exercise that strengthens the lower abs and improves hip mobility and control.",
 tips: [
   "Lie on your back with legs straight and hands under your hips.",
   "Raise your legs slowly to 90°, then lower them without touching the ground.",
   "Keep your core tight throughout to avoid arching your lower back.",
   "Exhale as you raise, inhale as you lower.",
   "Use a mat for comfort and back support."
 ]
},{
 name: "High Knees",
 img: "/placeholder.svg?height=250&width=400",
 duration: "20 seconds (3 sets recommended)",
 targetMuscles: "Cardio, Legs, Core",
 intensity: "High",
 description: "A high-intensity cardio exercise that boosts heart rate, builds coordination, and activates the core and lower body.",
 tips: [
   "Run in place while lifting knees to hip level.",
   "Keep your core tight and land softly.",
   "Pump your arms for momentum.",
   "Start slow and increase speed as you get comfortable.",
   "Wear proper shoes to reduce joint impact."
 ]
},
{
 name: "Russian Twists",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 reps (10 each side)",
 targetMuscles: "Obliques, Core",
 intensity: "Moderate",
 description: "A rotational movement that targets the obliques and helps sculpt the waistline while enhancing balance and core strength.",
 tips: [
   "Sit with knees bent, lean back slightly, and lift your feet if possible.",
   "Twist your torso to tap the ground on each side.",
   "Use a weight or ball for added challenge.",
   "Move with control rather than speed.",
   "Keep spine neutral and avoid slouching."
 ]
},
      ],
    },
    {
      day: 3,
      title: "Rest Day Stretches",
      exercises: [
      {
 name: "Shoulder Taps",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps (each side counts as one)",
 targetMuscles: "Shoulders, Core, Triceps",
 intensity: "Moderate",
 description: "A bodyweight stability move that challenges shoulder endurance and core control by resisting rotation during alternating taps.",
 tips: [
   "Start in a high plank position with feet shoulder-width apart.",
   "Tap your left shoulder with your right hand, then alternate.",
   "Keep hips stable—avoid swaying side to side.",
   "Engage your core and glutes throughout.",
   "Move slowly and with control rather than rushing."
 ]
},
{
 name: "DB Shoulder Press",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Shoulders (Deltoids), Triceps",
 intensity: "Moderate to High",
 description: "A strength-training move using dumbbells to build the shoulder muscles and improve upper-body pressing power.",
 tips: [
   "Sit or stand with dumbbells at shoulder height, palms facing forward.",
   "Press the dumbbells upward until arms are fully extended.",
   "Lower them back down slowly and repeat.",
   "Avoid arching your lower back—engage your core.",
   "Keep wrists straight and aligned with forearms."
 ]
},
{
 name: "Bicep Curls",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Biceps",
 intensity: "Moderate",
 description: "A classic arm exercise to build strength and size in the biceps using dumbbells or resistance bands.",
 tips: [
   "Stand with arms down, palms forward, and elbows close to your torso.",
   "Curl the dumbbells up while keeping upper arms still.",
   "Squeeze your biceps at the top, then lower slowly.",
   "Avoid swinging or using momentum.",
   "Maintain a controlled pace for maximum effect."
 ]
},
{
 name: "Tricep Dips",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Triceps, Shoulders, Chest",
 intensity: "Moderate",
 description: "A bodyweight movement using a chair or bench to target the triceps and improve pushing strength.",
 tips: [
   "Place hands behind you on a bench or chair with feet extended forward.",
   "Lower your body by bending elbows to about 90 degrees.",
   "Push back up until arms are straight.",
   "Keep your back close to the bench and elbows pointing back.",
   "Avoid locking elbows at the top."
 ]
},
{
 name: "Wall Push-ups",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Chest, Shoulders, Triceps",
 intensity: "Low to Moderate",
 description: "An easier version of the standard push-up, great for beginners or those with limited mobility. It helps build upper-body strength gently.",
 tips: [
   "Stand facing a wall with hands shoulder-width apart, at chest level.",
   "Lean forward and press against the wall, then push back.",
   "Maintain a straight line from head to heels.",
   "Engage core and avoid sagging at the hips.",
   "Step farther from the wall to increase difficulty."
 ]
},
      ],
    },
    {
      day: 4,
      title: "Cardio & Core",
      exercises: [
       {
 name: "Light Stretching",
 img: "/placeholder.svg?height=250&width=400",
 duration: "5-10 minutes",
 targetMuscles: "Full Body",
 intensity: "Low",
 description: "A gentle series of stretches to loosen muscles, improve blood flow, and increase mobility. Ideal for warm-up or cool-down phases.",
 tips: [
   "Focus on slow, controlled movements without bouncing.",
   "Hold each stretch for 15-30 seconds.",
   "Breathe deeply and relax into each stretch.",
   "Target major muscle groups like legs, arms, and back.",
   "Do not stretch to the point of pain—only mild tension."
 ]
},
{
 name: "Neck Rotations",
 img: "/placeholder.svg?height=250&width=400",
 duration: "10 rotations (5 each direction)",
 targetMuscles: "Neck, Upper Spine",
 intensity: "Very Low",
 description: "A gentle mobility movement that eases neck tension and enhances flexibility in the cervical spine area.",
 tips: [
   "Sit or stand upright with relaxed shoulders.",
   "Slowly rotate your head in a full circle—first clockwise, then counterclockwise.",
   "Keep the movement slow and controlled to avoid dizziness.",
   "Avoid jerky movements or overextension.",
   "Useful for warming up before workouts or relieving desk-job stiffness."
 ]
},
{
 name: "Arm Stretches",
 img: "/placeholder.svg?height=250&width=400",
 duration: "20 seconds per arm",
 targetMuscles: "Shoulders, Triceps, Biceps",
 intensity: "Low",
 description: "A simple stretching routine to loosen up the upper body and reduce tightness in the shoulders and arms.",
 tips: [
   "Extend one arm across your chest and use the other arm to pull it in gently.",
   "Hold the stretch without bouncing.",
   "Switch sides after 20 seconds.",
   "Keep the stretched arm relaxed—don’t tense it.",
   "Use during warm-ups, cool-downs, or post-workout recovery."
 ]
},
{
 name: "Walking",
 img: "/placeholder.svg?height=250&width=400",
 duration: "10 minutes",
 targetMuscles: "Legs, Cardiovascular System",
 intensity: "Low",
 description: "A light, steady-paced walk used to gradually bring the heart rate down after a workout or as a gentle form of movement.",
 tips: [
   "Keep a relaxed pace while focusing on deep breathing.",
   "Let arms swing naturally by your sides.",
   "Maintain good posture with shoulders back and chin up.",
   "Ideal after intense workouts to prevent muscle soreness.",
   "Can be done indoors or outdoors."
 ]
},
{
 name: "Breathing",
 img: "/placeholder.svg?height=250&width=400",
 duration: "5 minutes",
 targetMuscles: "Lungs, Nervous System",
 intensity: "Very Low",
 description: "Intentional deep breathing to help calm the nervous system, reduce stress, and enhance post-workout recovery or mental clarity.",
 tips: [
   "Inhale slowly through the nose for 4-5 seconds.",
   "Hold for 2-3 seconds, then exhale through the mouth for 5-6 seconds.",
   "Focus entirely on your breath and let go of other thoughts.",
   "Use a seated or lying position for comfort.",
   "Pair with meditation or light music for deeper relaxation."
 ]
},
      ],
    },
    {
      day: 5,
      title: "Balance & Stability",
      exercises: [
        {
 name: "Squats",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Quads, Glutes, Hamstrings, Core",
 intensity: "Moderate",
 description: "A fundamental lower-body movement that strengthens the legs and core while improving balance and mobility.",
 tips: [
   "Feet shoulder-width apart, toes slightly out.",
   "Push hips back as if sitting in a chair.",
   "Keep chest upright and spine neutral.",
   "Drive through heels to return to standing.",
   "Knees should align with toes—not collapse inward."
 ]
},
{
 name: "Lunges",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps (each leg)",
 targetMuscles: "Glutes, Quads, Hamstrings, Calves",
 intensity: "Moderate",
 description: "A single-leg bodyweight exercise that builds strength and stability in the legs and hips while improving balance.",
 tips: [
   "Step forward and lower your body until both knees are at 90° angles.",
   "Keep the front knee aligned with your ankle.",
   "Push through the front heel to return to start.",
   "Maintain an upright torso—don’t lean forward.",
   "Alternate legs for balanced development."
 ]
},
{
 name: "Calf Raises",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 reps",
 targetMuscles: "Calves",
 intensity: "Low to Moderate",
 description: "A simple but effective exercise to strengthen the calf muscles and improve ankle stability and endurance.",
 tips: [
   "Stand with feet shoulder-width apart.",
   "Raise your heels as high as possible, then slowly lower.",
   "Keep knees slightly bent—not locked.",
   "Use a wall or chair for balance if needed.",
   "Can be done on stairs for increased range of motion."
 ]
},
{
 name: "Glute Bridge",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Glutes, Hamstrings, Core",
 intensity: "Moderate",
 description: "A floor-based exercise that activates the glutes and strengthens the posterior chain, often used for hip mobility and lower back support.",
 tips: [
   "Lie on your back with knees bent and feet flat on the floor.",
   "Press through your heels to lift your hips upward.",
   "Squeeze your glutes at the top, then lower slowly.",
   "Avoid arching your lower back—keep core engaged.",
   "Place arms at your sides for stability."
 ]
},
{
 name: "Step-ups",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps (each leg)",
 targetMuscles: "Quads, Glutes, Hamstrings, Calves",
 intensity: "Moderate",
 description: "A functional strength exercise using a raised surface to build leg power, balance, and coordination.",
 tips: [
   "Use a bench, step, or sturdy platform about knee-height.",
   "Step up with one leg and bring the other to meet it.",
   "Push through the heel of the leading leg.",
   "Avoid using momentum—control the movement.",
   "Switch legs each rep or alternate every set."
 ]
},

      ],
    },
    {
      day: 6,
      title: "Light Yoga Flow",
      exercises: [
        {
 name: "Jog",
 img: "/placeholder.svg?height=250&width=400",
 duration: "20 minutes",
 targetMuscles: "Legs, Cardiovascular System",
 intensity: "Moderate",
 description: "A steady aerobic activity that improves heart health, endurance, and leg strength. It can be done outdoors or on a treadmill.",
 tips: [
   "Start with a warm-up walk before jogging.",
   "Maintain a relaxed, natural stride and arm swing.",
   "Breathe rhythmically—inhale through the nose, exhale through the mouth.",
   "Stay hydrated and wear supportive running shoes.",
   "Listen to your body—don’t overexert if you're just starting out."
 ]
},
{
 name: "Mountain Climbers",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 reps (10 each leg)",
 targetMuscles: "Core, Legs, Shoulders, Cardio",
 intensity: "High",
 description: "A dynamic, fast-paced movement that combines cardio with core strengthening. Great for full-body activation and calorie burn.",
 tips: [
   "Start in a plank position with shoulders over wrists.",
   "Drive knees alternately toward your chest.",
   "Maintain a flat back and tight core.",
   "Move quickly but with control—don’t bounce your hips.",
   "Focus on steady breathing throughout."
 ]
},
{
 name: "Skaters",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps (each side)",
 targetMuscles: "Glutes, Quads, Hamstrings, Calves, Core",
 intensity: "Moderate to High",
 description: "A lateral jumping exercise that builds agility, coordination, and leg strength while also offering a cardio boost.",
 tips: [
   "Hop sideways from one foot to the other, landing softly.",
   "Swing arms for balance and momentum.",
   "Keep your core engaged and land in a slight squat position.",
   "Increase speed for a cardio burn or slow down for control.",
   "Stay light on your feet to reduce impact."
 ]
},
{
 name: "Side Shuffles",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps (each direction)",
 targetMuscles: "Glutes, Quads, Calves, Core",
 intensity: "Moderate",
 description: "A lateral movement drill that improves agility, leg strength, and coordination, often used in athletic training.",
 tips: [
   "Bend your knees slightly and stay low in an athletic stance.",
   "Shuffle quickly from side to side, maintaining posture.",
   "Keep your steps light and controlled—don’t cross your feet.",
   "Engage your core to stay balanced.",
   "Use cones or a set distance for structure."
 ]
},
{
 name: "Butt Kicks",
 img: "/placeholder.svg?height=250&width=400",
 duration: "25 seconds",
 targetMuscles: "Hamstrings, Glutes, Cardio System",
 intensity: "Moderate to High",
 description: "A fast-paced cardio move that strengthens the hamstrings and glutes while increasing heart rate. Ideal for warm-ups or conditioning circuits.",
 tips: [
   "Jog in place while kicking heels up toward your glutes.",
   "Keep your upper body upright and relaxed.",
   "Swing arms naturally for balance.",
   "Land softly to reduce joint stress.",
   "Increase speed as you get comfortable."
 ]
},

      ],
    },
    {
      day: 7,
      title: "Active Recovery Day",
      exercises: [
       {
 name: "Yoga",
 img: "/placeholder.svg?height=250&width=400",
 duration: "20 minutes",
 targetMuscles: "Full Body, Mind",
 intensity: "Low to Moderate",
 description: "A calming practice combining breath, flexibility, balance, and strength. Yoga helps reduce stress, improve mobility, and support recovery.",
 tips: [
   "Choose a beginner-friendly flow (e.g., Sun Salutation or gentle Vinyasa).",
   "Focus on breathing deeply through each pose.",
   "Use a mat and comfortable clothing.",
   "Don’t force flexibility—work within your range.",
   "End with a relaxation pose like Savasana for full-body calmness."
 ]
},
{
 name: "Ankle Rolls",
 img: "/placeholder.svg?height=250&width=400",
 duration: "10 rotations (5 each direction per foot)",
 targetMuscles: "Ankles, Lower Legs",
 intensity: "Very Low",
 description: "A gentle mobility drill to loosen the ankle joints and improve flexibility and blood flow to the lower extremities.",
 tips: [
   "Sit or stand and lift one foot off the ground.",
   "Slowly rotate the ankle in a circular motion.",
   "Complete rotations in both directions for balance.",
   "Repeat on the other leg.",
   "Great as a warm-up or for preventing ankle stiffness."
 ]
},
{
 name: "Hamstring Stretch",
 img: "/placeholder.svg?height=250&width=400",
 duration: "30 seconds per leg",
 targetMuscles: "Hamstrings, Calves",
 intensity: "Low",
 description: "A lengthening movement that improves flexibility in the back of the legs and reduces tightness after lower-body workouts.",
 tips: [
   "Sit or stand and reach toward your toes with a straight back.",
   "Keep the stretched leg extended and the other slightly bent for support.",
   "Hold without bouncing—just until a gentle stretch is felt.",
   "Exhale as you reach deeper.",
   "Switch legs after holding for 30 seconds."
 ]
},
{
 name: "Cat-Cow",
 img: "/placeholder.svg?height=250&width=400",
 duration: "10 reps (5 cycles of Cat + Cow)",
 targetMuscles: "Spine, Core, Shoulders",
 intensity: "Very Low",
 description: "A gentle yoga flow to improve spinal flexibility and posture, while relieving tension in the back and neck.",
 tips: [
   "Start on hands and knees with a neutral spine.",
   "Inhale and arch your back (Cow), lifting chest and tailbone.",
   "Exhale and round your back (Cat), tucking chin and pelvis.",
   "Move slowly and match breath with movement.",
   "Focus on how each movement feels—not range of motion."
 ]
},
{
 name: "Deep Breathing",
 img: "/placeholder.svg?height=250&width=400",
 duration: "5 minutes",
 targetMuscles: "Lungs, Nervous System",
 intensity: "Passive / Very Low",
 description: "A relaxation technique that promotes mental calmness, lowers stress levels, and supports post-workout recovery.",
 tips: [
   "Sit or lie in a comfortable position with eyes closed.",
   "Inhale deeply through the nose for 4 seconds.",
   "Hold the breath for 2 seconds, then exhale slowly for 6 seconds.",
   "Focus solely on your breath and body sensations.",
   "Practice daily or after workouts for best results."
 ]
},
      ],
    },
  ],
  intermediate: [
    {
      day: 1,
      title: "Strength & Cardio Blast",
      exercises: [
       {
 name: "Barbell Bench Press",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 8 reps",
 targetMuscles: "Chest, Triceps, Shoulders",
 intensity: "High",
 description: "A compound strength movement that builds upper body pressing power, focusing on the chest and supporting muscles.",
 tips: [
   "Lie flat on the bench, feet grounded.",
   "Grip the bar slightly wider than shoulder-width.",
   "Lower the bar to mid-chest, then push up explosively.",
   "Keep wrists straight and core tight.",
   "Use a spotter or safety pins for heavy loads."
 ]
},
{
 name: "Incline DB Press",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Upper Chest, Shoulders, Triceps",
 intensity: "Moderate to High",
 description: "Targets the upper portion of the chest using dumbbells for a greater range of motion and muscle engagement.",
 tips: [
   "Set bench to 30-45° incline.",
   "Press dumbbells up from chest with palms forward.",
   "Lower slowly and control the motion.",
   "Avoid flaring elbows out too wide.",
   "Keep core engaged for back support."
 ]
},
{
 name: "Chest Fly",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Chest",
 intensity: "Moderate",
 description: "An isolation move for the chest, focusing on stretching and contracting the pecs without pushing motion.",
 tips: [
   "Lie on a flat bench with dumbbells held above chest.",
   "Slightly bend your elbows and open arms wide.",
   "Lower until you feel a chest stretch, then bring arms together.",
   "Move in a hugging motion, not straight up and down.",
   "Keep wrists in neutral alignment."
 ]
},
{
 name: "Triceps Pushdown",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Triceps",
 intensity: "Moderate",
 description: "A cable machine isolation movement that targets the triceps and enhances arm definition and pushing strength.",
 tips: [
   "Grip bar or rope attachment with elbows tucked in.",
   "Push downward while keeping upper arms still.",
   "Squeeze at the bottom, then return slowly.",
   "Avoid using momentum or flaring elbows.",
   "Use lighter weights for better form focus."
 ]
},
{
 name: "DB Kickbacks",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Triceps",
 intensity: "Moderate",
 description: "An effective triceps exercise performed with dumbbells, enhancing arm tone and elbow extension strength.",
 tips: [
   "Hinge forward at hips with a flat back.",
   "Keep elbows tucked in and upper arms parallel to the ground.",
   "Extend forearms backward until straight.",
   "Control the return—don’t swing.",
   "Avoid shrugging or rounding shoulders."
 ]
},
      ],
    },
    {
      day: 2,
      title: "Upper Body Power",
      exercises: [
      {
 name: "Deadlifts",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 6 reps",
 targetMuscles: "Glutes, Hamstrings, Lower Back, Lats",
 intensity: "High",
 description: "A powerful compound lift that engages nearly the entire posterior chain. Great for building strength, posture, and total-body coordination.",
 tips: [
   "Stand with feet hip-width apart and bar over midfoot.",
   "Grip the bar just outside your knees and keep a flat back.",
   "Drive through your heels to lift, keeping bar close to the body.",
   "Lock out at the top with hips and shoulders aligned.",
   "Lower with control—don’t drop the bar."
 ]
},
{
 name: "Lat Pulldown",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Lats, Biceps, Upper Back",
 intensity: "Moderate",
 description: "A machine-based pull exercise targeting the lats and upper body width. It mimics the pull-up but allows for adjustable resistance.",
 tips: [
   "Grip the bar slightly wider than shoulder-width.",
   "Pull down to your upper chest while leaning back slightly.",
   "Squeeze shoulder blades together at the bottom.",
   "Avoid using momentum or pulling behind the neck.",
   "Control the return to maximize muscle engagement."
 ]
},
{
 name: "Seated Row",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Mid Back, Lats, Biceps",
 intensity: "Moderate",
 description: "A horizontal pulling exercise that builds back thickness and improves posture and pulling strength.",
 tips: [
   "Sit upright with feet flat on the platform.",
   "Pull the handle toward your torso while keeping elbows close.",
   "Avoid leaning back or jerking—use your back, not momentum.",
   "Squeeze shoulder blades together at the end of each rep.",
   "Return slowly to stretch the back muscles."
 ]
},
{
 name: "Barbell Curl",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Biceps",
 intensity: "Moderate",
 description: "A fundamental arm exercise for building bicep size and strength using a barbell for heavier loads and consistent tension.",
 tips: [
   "Grip the bar shoulder-width with palms facing up.",
   "Keep elbows close to your sides and curl the bar up.",
   "Squeeze at the top, then lower slowly.",
   "Avoid swinging or using your back.",
   "Stand tall and engage your core."
 ]
},
{
 name: "Hammer Curl",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Biceps, Brachialis, Forearms",
 intensity: "Moderate",
 description: "A variation of the curl that targets deeper arm muscles and improves forearm and grip strength using a neutral wrist position.",
 tips: [
   "Hold dumbbells with palms facing each other.",
   "Curl both weights upward, keeping elbows still.",
   "Squeeze at the top, then lower with control.",
   "Avoid using momentum—go slow and steady.",
   "Great for overall arm development and joint health."
 ]
},
      ],
    },
    {
      day: 3,
      title: "Leg Day Endurance",
      exercises: [
        {
 name: "Squats",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Quads, Glutes, Hamstrings, Core",
 intensity: "Moderate to High",
 description: "A foundational lower-body movement that strengthens the legs, glutes, and core while enhancing mobility and functional strength.",
 tips: [
   "Keep feet shoulder-width apart, toes slightly out.",
   "Lower hips back and down until thighs are parallel to the ground.",
   "Keep your chest up and spine neutral.",
   "Drive through the heels to stand back up.",
   "Avoid letting knees cave inward."
 ]
},
{
 name: "Leg Press",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Quads, Glutes, Hamstrings",
 intensity: "High",
 description: "A machine-based compound movement that targets the lower body and allows for safe loading of leg muscles without straining the spine.",
 tips: [
   "Place feet shoulder-width apart on the platform.",
   "Lower the platform slowly until knees are at 90°.",
   "Do not lock your knees when pressing upward.",
   "Keep lower back in contact with the seat pad.",
   "Avoid letting your knees collapse inward or outward."
 ]
},
{
 name: "Walking Lunges",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 steps",
 targetMuscles: "Glutes, Quads, Hamstrings, Core",
 intensity: "Moderate",
 description: "A dynamic movement that strengthens the lower body and improves balance, coordination, and core engagement.",
 tips: [
   "Step forward with one foot and lower into a lunge.",
   "Keep front knee above ankle, back knee near the floor.",
   "Push through the front heel to rise and step forward.",
   "Maintain an upright posture and tight core.",
   "Alternate legs with each step."
 ]
},
{
 name: "Leg Curl",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Hamstrings",
 intensity: "Moderate",
 description: "An isolation exercise that targets the hamstrings using a seated or lying machine. Helps improve hamstring strength and knee joint stability.",
 tips: [
   "Adjust the machine so the roller rests just above your heels.",
   "Slowly curl the weight by bending your knees.",
   "Squeeze the hamstrings at the top of the motion.",
   "Lower the weight with control—don't let it drop.",
   "Avoid arching your back or using momentum."
 ]
},
{
 name: "Calf Raises",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 25 reps",
 targetMuscles: "Calves (Gastrocnemius, Soleus)",
 intensity: "Low to Moderate",
 description: "An effective lower-leg exercise to build calf strength and definition. Useful for ankle stability and explosive movements.",
 tips: [
   "Stand with feet hip-width apart or on a raised surface.",
   "Push through the balls of your feet to lift your heels.",
   "Pause and squeeze at the top before lowering slowly.",
   "Keep movement controlled—avoid bouncing.",
   "Hold weights for added resistance."
 ]
},
      ],
    },
    {
      day: 4,
      title: "Core & Stability",
      exercises: [
       {
 name: "Push-ups",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 reps",
 targetMuscles: "Chest, Shoulders, Triceps, Core",
 intensity: "Moderate",
 description: "A classic bodyweight compound movement that strengthens the upper body and core. Great for building muscular endurance and stability.",
 tips: [
   "Keep your body in a straight line from head to heels.",
   "Place hands slightly wider than shoulder-width.",
   "Lower chest to just above the ground while keeping elbows at 45°.",
   "Engage your core throughout the movement.",
   "Modify by dropping to knees if needed."
 ]
},
{
 name: "Pull-ups",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 5 reps",
 targetMuscles: "Back, Biceps, Shoulders, Core",
 intensity: "High",
 description: "A challenging bodyweight exercise that primarily targets the back and arms, while improving grip strength and upper body control.",
 tips: [
   "Grip the bar with palms facing away (overhand).",
   "Pull yourself up until your chin clears the bar.",
   "Keep your core tight and avoid swinging.",
   "Lower down slowly with control.",
   "Use assistance bands if you're a beginner."
 ]
},
{
 name: "Plank",
 img: "/placeholder.svg?height=250&width=400",
 duration: "Hold for 1 minute",
 targetMuscles: "Core, Shoulders, Glutes, Back",
 intensity: "Moderate",
 description: "A core stabilization exercise that builds endurance in the abs, shoulders, and lower back. Improves posture and balance.",
 tips: [
   "Place elbows directly under shoulders.",
   "Maintain a straight line from head to heels.",
   "Engage your abs and glutes throughout.",
   "Avoid arching your back or raising hips too high.",
   "Focus on steady breathing."
 ]
},
{
 name: "Flutter Kicks",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 reps (10 per leg)",
 targetMuscles: "Lower Abs, Hip Flexors",
 intensity: "Moderate",
 description: "A core-targeting movement that activates the lower abs and hip flexors, also useful for improving endurance and coordination.",
 tips: [
   "Lie flat with hands under your hips.",
   "Lift legs a few inches off the floor and alternate quick kicks.",
   "Keep legs straight and core tight.",
   "Do not let your heels touch the ground.",
   "Keep your lower back flat on the mat."
 ]
},
{
 name: "Side Plank",
 img: "/placeholder.svg?height=250&width=400",
 duration: "Hold for 30 sec per side",
 targetMuscles: "Obliques, Core, Shoulders, Glutes",
 intensity: "Moderate",
 description: "A variation of the traditional plank that targets the obliques and stabilizing muscles for side-body strength and balance.",
 tips: [
   "Stack your feet and rest on one forearm.",
   "Lift your hips to form a straight line from head to feet.",
   "Keep the supporting shoulder aligned over the elbow.",
   "Engage your glutes and core.",
   "Switch sides after the hold."
 ]
},
      ],
    },
    {
      day: 5,
      title: "High-Intensity Interval Training (HIIT)",
      exercises: [
       {
 name: "Dumbbell Shoulder Press",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Deltoids (Shoulders), Triceps, Upper Chest",
 intensity: "Moderate",
 description: "A compound movement that strengthens the shoulder muscles and triceps, enhancing upper body power and stability.",
 tips: [
   "Sit or stand with dumbbells at shoulder level, palms facing forward.",
   "Press the weights overhead until arms are fully extended.",
   "Lower slowly and with control back to start.",
   "Avoid arching your back—engage your core.",
   "Exhale on the press, inhale on the return."
 ]
},
{
 name: "Lateral Raise",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Lateral Deltoids",
 intensity: "Moderate",
 description: "An isolation movement that targets the outer deltoid muscles, helping create width and definition in the shoulders.",
 tips: [
   "Stand tall with a dumbbell in each hand at your sides.",
   "Raise arms to shoulder height with a slight bend in elbows.",
   "Control the movement both up and down.",
   "Avoid swinging or using momentum.",
   "Keep shoulders relaxed and down."
 ]
},
{
 name: "Front Raise",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Anterior Deltoids (Front Shoulders)",
 intensity: "Moderate",
 description: "A shoulder-focused exercise that targets the front deltoids and improves shoulder mobility and strength.",
 tips: [
   "Hold dumbbells in front of thighs, palms facing down.",
   "Lift arms straight up to shoulder level.",
   "Pause briefly, then lower with control.",
   "Avoid leaning back or swinging.",
   "Engage your core for balance."
 ]
},
{
 name: "Shrugs",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Trapezius (Upper Back/Neck)",
 intensity: "Low to Moderate",
 description: "A simple movement to build and strengthen the traps, improving posture and upper back support.",
 tips: [
   "Hold a dumbbell in each hand at your sides.",
   "Lift shoulders straight up toward your ears.",
   "Pause briefly, then lower slowly.",
   "Do not roll your shoulders—just lift and lower.",
   "Keep arms straight and relaxed."
 ]
},
{
 name: "Upright Row",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Deltoids, Traps, Biceps",
 intensity: "Moderate",
 description: "A compound movement that works the shoulders and upper back, helping increase upper body strength and mass.",
 tips: [
   "Grip the barbell or dumbbells with hands shoulder-width apart.",
   "Pull weights upward toward your chin, elbows leading.",
   "Keep the weights close to your body.",
   "Pause briefly at the top, then lower slowly.",
   "Avoid jerking the weight—use a steady motion."
 ]
},
      ],
    },
    {
      day: 6,
      title: "Full Body Challenge",
      exercises: [
{
 name: "Treadmill Intervals",
 img: "/placeholder.svg?height=250&width=400",
 duration: "30 minutes (interval format)",
 targetMuscles: "Heart, Legs, Full Body (Cardiovascular)",
 intensity: "High",
 description: "Alternating between bursts of high-speed running and recovery walking/jogging, treadmill intervals are a powerful method to boost endurance, burn fat, and improve heart health.",
 tips: [
   "Start with a 5-minute warm-up walk or jog.",
   "Alternate 1-2 minutes of fast running with 1-2 minutes of slower recovery.",
   "Adjust speed and incline to challenge yourself without overexertion.",
   "Keep good posture—eyes forward, arms relaxed.",
   "Cool down for 5 minutes at the end."
 ]
},
{
 name: "Jump Rope",
 img: "/placeholder.svg?height=250&width=400",
 duration: "2 minutes (or broken into intervals)",
 targetMuscles: "Calves, Quads, Shoulders, Core",
 intensity: "High",
 description: "A fast-paced cardio activity that improves coordination, agility, and cardiovascular endurance while burning a high number of calories in a short time.",
 tips: [
   "Use a rope size that fits your height—handles should reach armpits.",
   "Jump with both feet slightly off the ground.",
   "Keep your elbows close and wrists doing the turning.",
   "Land softly to reduce impact.",
   "Start with shorter intervals and build up gradually."
 ]
},

{
 name: "Burpees",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Full Body (Chest, Legs, Core, Shoulders)",
 intensity: "Very High",
 description: "A powerful full-body movement combining a squat, push-up, and jump to build strength and cardiovascular fitness simultaneously.",
 tips: [
   "Begin standing, then squat down and kick your feet back into plank.",
   "Do a push-up, then jump your feet back in.",
   "Explode up with a vertical jump and repeat.",
   "Maintain good form during the plank and push-up phases.",
   "Pace yourself—quality over speed."
 ]
},
{
 name: "Mountain Climbers",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 25 reps (each leg counts as one)",
 targetMuscles: "Core, Shoulders, Legs, Cardiovascular System",
 intensity: "High",
 description: "A cardio-core move that mimics a running motion while in a plank position, increasing heart rate and engaging multiple muscle groups.",
 tips: [
   "Start in a plank with hands under shoulders.",
   "Drive knees alternately toward your chest.",
   "Keep your back flat and core tight.",
   "Move quickly, but with control.",
   "Breathe steadily—don't hold your breath."
 ]
},
{
 name: "Box Jumps",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Glutes, Quads, Calves, Core",
 intensity: "High",
 description: "A plyometric power exercise that builds explosive lower body strength and enhances athletic performance and agility.",
 tips: [
   "Choose a sturdy box or platform at knee height or lower.",
   "Stand with feet shoulder-width apart, bend knees, and swing arms.",
   "Jump onto the box and land softly with bent knees.",
   "Step down carefully between reps to avoid injury.",
   "Focus on explosive power and clean form, not just height."
 ]
},

          ],
    },
    {
      day: 7,
      title: "Active Recovery",
      exercises: [
       {
 name: "Foam Roll",
 img: "/placeholder.svg?height=250&width=400",
 duration: "10 minutes",
 targetMuscles: "Fascia, Muscles (Full Body)",
 intensity: "Low / Recovery",
 description: "A self-myofascial release technique using a foam roller to reduce muscle soreness, improve flexibility, and increase blood flow after workouts.",
 tips: [
   "Roll slowly over each muscle group—avoid quick movements.",
   "Pause on tight or tender spots for 20-30 seconds.",
   "Avoid rolling directly over joints or bones.",
   "Breathe deeply to help release tension.",
   "Use post-workout or during rest days for recovery."
 ]
},
{
 name: "Yoga",
 img: "/placeholder.svg?height=250&width=400",
 duration: "30 minutes",
 targetMuscles: "Full Body + Nervous System",
 intensity: "Low to Moderate",
 description: "A flow of poses and controlled breathing that enhances flexibility, reduces stress, improves posture, and promotes recovery for both mind and body.",
 tips: [
   "Use a yoga mat for support and stability.",
   "Focus on your breath throughout each movement.",
   "Modify poses as needed to suit your mobility.",
   "Start slow and progress into deeper stretches.",
   "Stay consistent to feel cumulative benefits."
 ]
},
{
 name: "Walking",
 img: "/placeholder.svg?height=250&width=400",
 duration: "15 minutes (casual pace)",
 targetMuscles: "Legs, Heart, Mind",
 intensity: "Low",
 description: "A simple, gentle way to stay active, aid circulation, clear your mind, and serve as a cool-down or active recovery.",
 tips: [
   "Maintain a relaxed, natural stride.",
   "Keep your head up and shoulders back.",
   "Use it after workouts or on rest days.",
   "Walk outdoors when possible for added mood boost.",
   "Pair with music or silence depending on your goal."
 ]
},
{
 name: "Static Stretching",
 img: "/placeholder.svg?height=250&width=400",
 duration: "20-30 seconds per stretch",
 targetMuscles: "Major Muscle Groups (Quads, Hamstrings, Back, Chest)",
 intensity: "Very Low",
 description: "Holding a stretch position to gently elongate muscles and connective tissue, ideal for improving flexibility and cooling down.",
 tips: [
   "Stretch after your workout, not before intense activity.",
   "Hold each stretch without bouncing.",
   "Feel a mild tension, never pain.",
   "Breathe deeply to enhance relaxation.",
   "Focus on all major muscle groups."
 ]
},
{
 name: "Deep Breathing",
 img: "/placeholder.svg?height=250&width=400",
 duration: "5 minutes (or longer if needed)",
 targetMuscles: "Diaphragm, Nervous System",
 intensity: "Passive / Recovery",
 description: "A calming technique that activates the parasympathetic nervous system, promoting relaxation, stress relief, and mental clarity.",
 tips: [
   "Sit or lie down in a comfortable position.",
   "Inhale deeply through your nose for 4-5 seconds.",
   "Hold your breath for 2-3 seconds.",
   "Exhale slowly through your mouth for 6-7 seconds.",
   "Repeat and focus your attention on your breath."
 ]
},
      ],
    },
  ],
  advanced: [
    {
      day: 1,
      title: "Lower Body Strength & Power",
      exercises: [
        {
 name: "Weighted Push-ups",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Chest, Triceps, Core, Shoulders",
 intensity: "High",
 description: "A more intense variation of the standard push-up using added weight (vest or plate) to build chest and upper body strength.",
 tips: [
   "Use a weight vest or carefully placed plate on the upper back.",
   "Maintain a straight body line and tight core.",
   "Lower slowly and push explosively for strength gains.",
   "Do not let your hips sag under load.",
   "Ensure the weight is secure to avoid injury."
 ]
},
{
 name: "Bench Press",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3-4 sets x 6 reps",
 targetMuscles: "Chest, Triceps, Shoulders",
 intensity: "High",
 description: "A foundational compound lift that builds upper body mass and pressing power, primarily targeting the chest.",
 tips: [
   "Keep feet flat, back slightly arched, and shoulders retracted.",
   "Lower the bar to mid-chest with control.",
   "Push up with power while keeping elbows at about 45°.",
   "Use a spotter for safety with heavy weights.",
   "Warm up shoulders and triceps beforehand."
 ]
},
{
 name: "Cable Crossover",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Chest (Inner & Outer), Shoulders",
 intensity: "Moderate",
 description: "An isolation chest exercise that emphasizes muscle stretch and contraction for definition and shape.",
 tips: [
   "Keep a slight bend in the elbows throughout.",
   "Start with hands wide and draw them together in front of the chest.",
   "Squeeze the chest at the peak of contraction.",
   "Control the movement during the return phase.",
   "Adjust pulley height to target different chest angles."
 ]
},
{
 name: "Skull Crushers",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Triceps",
 intensity: "Moderate",
 description: "A triceps isolation exercise performed lying on a bench using an EZ bar or dumbbells to develop arm size and strength.",
 tips: [
   "Keep elbows stationary and close to your head.",
   "Lower the weight slowly toward your forehead.",
   "Do not lock out elbows fully to maintain tension.",
   "Use a spotter when going heavy.",
   "Warm up elbows before starting."
 ]
},
{
 name: "Diamond Push-ups",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Triceps, Chest, Shoulders",
 intensity: "High",
 description: "A bodyweight push-up variation that places more emphasis on the triceps using a close-hand placement.",
 tips: [
   "Place hands under chest with thumbs and index fingers forming a diamond.",
   "Keep elbows close to the body during the movement.",
   "Lower your body slowly and push up with control.",
   "Maintain a straight line from head to heels.",
   "Do fewer reps if needed, focusing on form."
 ]
},

      ],
    },
    {
      day: 2,
      title: "Upper Body Hypertrophy",
      exercises: [
        {
 name: "Weighted Pull-ups",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 8 reps",
 targetMuscles: "Lats, Biceps, Upper Back, Core",
 intensity: "High",
 description: "An advanced variation of the pull-up with added resistance to build significant upper body strength and muscle mass.",
 tips: [
   "Use a dip belt with plates or wear a weighted vest.",
   "Engage your core and avoid swinging.",
   "Pull your chin above the bar and lower under control.",
   "Start with bodyweight if new to weighted variations.",
   "Ensure your shoulders are active at the bottom (don’t hang passively)."
 ]
},
{
 name: "Deadlifts",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3-4 sets x 5 reps",
 targetMuscles: "Glutes, Hamstrings, Lower Back, Core, Lats",
 intensity: "High",
 description: "A full-body strength movement that targets the posterior chain and builds functional strength and power.",
 tips: [
   "Keep your back straight and bar close to your body.",
   "Engage your lats before lifting.",
   "Push through your heels, not your toes.",
   "Lock out at the top by squeezing glutes.",
   "Do not round your lower back."
 ]
},
{
 name: "T-Bar Row",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Lats, Rhomboids, Traps, Biceps",
 intensity: "Moderate to High",
 description: "A rowing exercise using a landmine setup or T-bar machine to develop thickness in the mid-back.",
 tips: [
   "Keep a neutral spine and avoid rounding.",
   "Pull the handle toward your chest and squeeze the back.",
   "Use a full range of motion with controlled form.",
   "Brace your core and avoid jerky movements.",
   "Experiment with grip width to target different areas."
 ]
},
{
 name: "Preacher Curl",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Biceps (especially short head)",
 intensity: "Moderate",
 description: "An isolation exercise that locks your arms in place to prevent cheating and isolate the biceps for size and definition.",
 tips: [
   "Keep upper arms flat on the pad throughout.",
   "Avoid swinging or using momentum.",
   "Lower the weight slowly to increase time under tension.",
   "Don’t fully lock out at the bottom.",
   "Choose a weight that allows for full control."
 ]
},
{
 name: "Concentration Curl",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps each arm",
 targetMuscles: "Biceps (peak contraction)",
 intensity: "Moderate",
 description: "A seated curl that emphasizes the peak of the biceps by isolating the muscle with slow, strict reps.",
 tips: [
   "Keep your elbow pinned against your inner thigh.",
   "Curl the dumbbell slowly while squeezing the biceps.",
   "Do not swing or use your torso to lift.",
   "Exhale as you lift, inhale as you lower.",
   "Hold the top position briefly to intensify the contraction."
 ]
},


      ],
    },
   {
      day: 3,
      title: "Leg Day Strength",
      exercises: [
      {
 name: "Front Squat",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 8 reps",
 targetMuscles: "Quads, Glutes, Core",
 intensity: "High",
 description: "A barbell squat variation that places the weight on the front of the shoulders, emphasizing quad and core engagement while reducing lower back stress.",
 tips: [
   "Keep elbows high and chest up to support the bar.",
   "Use a clean grip or crossed-arm grip for comfort.",
   "Descend until your thighs are parallel or lower.",
   "Push through the heels to stand tall.",
   "Maintain a neutral spine and tight core throughout."
 ]
},
{
 name: "Bulgarian Split Squat",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps (each leg)",
 targetMuscles: "Quads, Glutes, Hamstrings, Core",
 intensity: "High",
 description: "A challenging unilateral lower-body movement that improves balance, coordination, and leg strength.",
 tips: [
   "Place your rear foot on a bench and step forward with the other leg.",
   "Lower your back knee toward the floor while keeping your chest upright.",
   "Push through the front heel to return to the start.",
   "Avoid leaning too far forward or inward knee collapse.",
   "Hold dumbbells for added resistance once bodyweight becomes easy."
 ]
},
{
 name: "Hack Squat",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Quads, Glutes, Hamstrings",
 intensity: "High",
 description: "A machine-based squat that targets the quads with a guided range of motion, great for building leg size with reduced spinal stress.",
 tips: [
   "Keep your feet shoulder-width apart on the platform.",
   "Lower until your thighs are parallel to the floor or slightly below.",
   "Push through your heels to return to the top.",
   "Avoid locking out your knees at the top.",
   "Control the descent to protect your joints."
 ]
},
{
 name: "Romanian Deadlift",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Hamstrings, Glutes, Lower Back",
 intensity: "Moderate to High",
 description: "A hip-hinge movement focusing on hamstring and glute development, often performed with a barbell or dumbbells.",
 tips: [
   "Keep a slight bend in the knees and hinge at the hips.",
   "Lower the weight while maintaining a flat back.",
   "Stop when you feel a good stretch in the hamstrings.",
   "Squeeze glutes to return to standing.",
   "Avoid rounding the back or overextending at the top."
 ]
},
{
 name: "Seated Calf Raise",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 30 reps",
 targetMuscles: "Soleus (lower calf)",
 intensity: "Moderate",
 description: "An isolation movement that strengthens and builds the soleus muscle of the calves using a seated calf raise machine or weight-loaded setup.",
 tips: [
   "Ensure knees are bent at 90 degrees during the exercise.",
   "Lower heels fully to stretch the calf before pressing up.",
   "Pause and squeeze at the top of each rep.",
   "Do not bounce—control both up and down phases.",
   "Increase reps or weight gradually for calf growth."
 ]
},

      ],
    },
    {
      day: 4,
      title: "Leg Day Strength",
      exercises: [
      {
 name: "HIIT Sprints",
 img: "/placeholder.svg?height=250&width=400",
 duration: "8 rounds x 30 sec sprint / 1 min rest",
 targetMuscles: "Full Body (focus on legs, lungs, heart)",
 intensity: "Very High",
 description: "High-Intensity Interval Training using short sprints to boost cardiovascular fitness, fat burning, and explosiveness.",
 tips: [
   "Warm up with light jogging and dynamic stretches.",
   "Sprint at 90-100% effort for 30 seconds.",
   "Use active rest (walking or slow jog) for recovery.",
   "Maintain posture: upright chest, arms pumping.",
   "Cool down and hydrate after the session."
 ]
},
{
 name: "Burpee Pull-ups",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Chest, Back, Arms, Core, Legs",
 intensity: "High",
 description: "A compound movement that combines a burpee and a pull-up for a full-body, strength-boosting cardio workout.",
 tips: [
   "Perform a standard burpee with a jump toward the pull-up bar.",
   "Grab the bar and do a pull-up immediately after the jump.",
   "Land softly and repeat fluidly.",
   "Engage core and glutes to maintain form.",
   "Scale by removing the pull-up if needed."
 ]
},
{
 name: "Battle Ropes",
 img: "/placeholder.svg?height=250&width=400",
 duration: "30 seconds x 3-5 rounds",
 targetMuscles: "Shoulders, Arms, Core, Back",
 intensity: "High",
 description: "Explosive rope slams or waves that boost endurance, coordination, and upper body strength.",
 tips: [
   "Grip the ropes firmly with knees slightly bent.",
   "Move the ropes in waves or slams using both arms or alternating.",
   "Keep your core tight and chest lifted.",
   "Breathe rhythmically and don’t rush—focus on quality.",
   "Try intervals (30 sec on, 30 sec off) to build endurance."
 ]
},
{
 name: "Kettlebell Swings",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Glutes, Hamstrings, Core, Shoulders",
 intensity: "High",
 description: "A powerful hip hinge movement using a kettlebell to develop explosive power and conditioning.",
 tips: [
   "Swing with the hips, not the arms—it's a hinge, not a squat.",
   "Keep the kettlebell at chest height in the swing arc.",
   "Engage glutes and core at the top of the movement.",
   "Avoid rounding the back—keep a strong spine.",
   "Use both hands on the kettlebell for control."
 ]
},
{
 name: "Plank to Push-up",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Chest, Triceps, Core, Shoulders",
 intensity: "Moderate to High",
 description: "A dynamic movement transitioning between forearm plank and push-up position to build core and upper body strength.",
 tips: [
   "Start in forearm plank position with a tight core.",
   "Push up one arm at a time to reach full push-up position.",
   "Lower back down to forearms one arm at a time.",
   "Avoid rocking hips—keep movement stable.",
   "Alternate lead arm each rep or set."
 ]
},

      ],
    },
    {
      day: 5,
      title: "Plyometric & Core",
      exercises: [
      {
 name: "Arnold Press",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 reps",
 targetMuscles: "Shoulders (Front, Side, Rear Delts)",
 intensity: "Moderate to High",
 description: "A variation of the dumbbell shoulder press that rotates through all heads of the deltoid for balanced shoulder development.",
 tips: [
   "Start with palms facing you at chest level.",
   "Rotate wrists as you press the dumbbells overhead.",
   "Pause briefly at the top and reverse the motion.",
   "Keep your core tight to avoid arching your back.",
   "Use controlled movement to maximize muscle activation."
 ]
},
{
 name: "Cable Lateral Raise",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Lateral Deltoids (Side Shoulders)",
 intensity: "Moderate",
 description: "An isolation move using a cable machine to precisely target the side delts and build shoulder width.",
 tips: [
   "Stand tall, holding the cable handle at your side.",
   "Lift the arm out to the side with a slight elbow bend.",
   "Raise to shoulder level, then slowly lower.",
   "Avoid swinging or using momentum.",
   "Maintain tension on the cable throughout the movement."
 ]
},
{
 name: "Military Press",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 8 reps",
 targetMuscles: "Shoulders, Triceps, Upper Chest",
 intensity: "High",
 description: "A strict barbell overhead press done standing to build raw shoulder and upper body strength.",
 tips: [
   "Grip the bar just outside shoulder width.",
   "Press the bar straight overhead in a controlled motion.",
   "Keep your core braced and glutes engaged.",
   "Avoid leaning back excessively.",
   "Lower the bar to just below chin level each rep."
 ]
},
{
 name: "Barbell Shrugs",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 reps",
 targetMuscles: "Trapezius (Upper Traps)",
 intensity: "Moderate",
 description: "A simple yet effective lift for building upper trap size and strength.",
 tips: [
   "Stand tall holding the barbell at your thighs.",
   "Shrug your shoulders straight up toward your ears.",
   "Pause at the top, then lower slowly.",
   "Avoid rolling the shoulders—shrug straight up.",
   "Use a hook grip or straps if needed for heavier weight."
 ]
},
{
 name: "Reverse Pec Deck",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 15 reps",
 targetMuscles: "Rear Delts, Upper Back",
 intensity: "Moderate",
 description: "An isolation machine exercise that strengthens the rear deltoids and improves posture and shoulder balance.",
 tips: [
   "Adjust seat height so arms are parallel to the floor.",
   "Pull the handles outward in a reverse fly motion.",
   "Squeeze shoulder blades together at the peak.",
   "Avoid jerking or using momentum.",
   "Control the return phase to maximize engagement."
 ]
},

      ],
    },
    {
      day: 6,
      title: "Full Body Max Effort",
      exercises: [
      {
 name: "Box Jump",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 12 reps",
 targetMuscles: "Glutes, Quads, Hamstrings, Calves",
 intensity: "High",
 description: "An explosive plyometric exercise that builds lower-body power, speed, and coordination by jumping onto a sturdy elevated platform.",
 tips: [
   "Use a box height suitable for your skill level.",
   "Swing your arms to generate upward momentum.",
   "Land softly with knees slightly bent.",
   "Step down one leg at a time to prevent injury.",
   "Keep your core tight and back straight throughout."
 ]
},
{
 name: "Tire Flips",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 10 flips",
 targetMuscles: "Full Body (Glutes, Hamstrings, Back, Core, Shoulders)",
 intensity: "Very High",
 description: "A dynamic full-body power move that involves flipping a heavy tire forward using explosive strength and coordination.",
 tips: [
   "Bend at the hips and knees to get under the tire.",
   "Grip the bottom of the tire firmly.",
   "Drive through your legs and hips to lift.",
   "Push with your chest and flip the tire forward.",
   "Maintain a neutral spine to protect your back."
 ]
},
{
 name: "Sled Push",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 meters",
 targetMuscles: "Quads, Glutes, Hamstrings, Core, Shoulders",
 intensity: "High",
 description: "A high-intensity strength and conditioning exercise that mimics pushing resistance over a distance for full-body engagement.",
 tips: [
   "Lean forward and keep your arms extended.",
   "Push through the balls of your feet with short, powerful steps.",
   "Keep your core tight and avoid overextending your spine.",
   "Choose resistance based on your goals (speed vs strength).",
   "Use smooth and controlled movement throughout."
 ]
},
{
 name: "Agility Ladder Drills",
 img: "/placeholder.svg?height=250&width=400",
 duration: "2-3 rounds (various footwork patterns)",
 targetMuscles: "Calves, Quads, Core, Ankles",
 intensity: "Moderate to High",
 description: "A sequence of fast footwork drills using a flat ladder to improve speed, coordination, balance, and agility.",
 tips: [
   "Start with basic drills like one-foot or two-foot runs.",
   "Progress to more complex patterns like in-and-outs or lateral steps.",
   "Focus on precision and quick foot contact.",
   "Maintain a low athletic stance with knees bent.",
   "Use light shoes with good grip for better control."
 ]
},
{
 name: "Jump Lunges",
 img: "/placeholder.svg?height=250&width=400",
 duration: "3 sets x 20 reps (10 per leg)",
 targetMuscles: "Glutes, Quads, Hamstrings, Calves",
 intensity: "High",
 description: "A plyometric variation of lunges that builds lower-body strength, power, and endurance while improving balance and coordination.",
 tips: [
   "Start in a lunge position with one foot forward.",
   "Explosively jump and switch legs in midair.",
   "Land softly and lower into the next lunge.",
   "Keep your torso upright and core engaged.",
   "Use arms to assist with rhythm and balance."
 ]
},

      ],
    },
    {
      day: 7,
      title: "Active Recovery",
      exercises: [
       {
 name: "Ice Bath (if available)",
 img: "/placeholder.svg?height=250&width=400",
 duration: "5-15 minutes",
 targetMuscles: "Full Body (Recovery)",
 intensity: "Passive / Recovery",
 description: "A post-workout cold immersion technique used to reduce inflammation, muscle soreness, and enhance recovery.",
 tips: [
   "Ensure water temperature is between 10-15°C (50-59°F).",
   "Ease into the bath slowly to acclimate your body.",
   "Wear warm clothing on upper body if needed.",
   "Limit sessions to under 15 minutes to avoid cold stress.",
   "Avoid ice baths if you have cardiovascular issues."
 ]
},
{
 name: "Foam Rolling",
 img: "/placeholder.svg?height=250&width=400",
 duration: "10 minutes",
 targetMuscles: "Muscle Fascia (Full Body)",
 intensity: "Low to Moderate",
 description: "A self-myofascial release technique using a foam roller to alleviate muscle tightness, soreness, and improve mobility.",
 tips: [
   "Focus on sore or tight areas with slow, steady rolls.",
   "Avoid rolling directly over joints or bones.",
   "Breathe deeply and relax while rolling.",
   "Pause on tender spots for 20-30 seconds.",
   "Incorporate into both warm-up and cool-down routines."
 ]
},
{
 name: "Full-body Stretch",
 img: "/placeholder.svg?height=250&width=400",
 duration: "10-15 minutes",
 targetMuscles: "Entire Body",
 intensity: "Low",
 description: "A post-workout cooldown routine targeting all major muscle groups to restore flexibility, prevent soreness, and promote circulation.",
 tips: [
   "Hold each stretch for at least 20-30 seconds.",
   "Don’t bounce; stretch slowly and steadily.",
   "Breathe deeply into the stretch.",
   "Focus on areas that were worked during your session.",
   "Stretch both sides equally."
 ]
},
{
 name: "Mobility Work",
 img: "/placeholder.svg?height=250&width=400",
 duration: "10-15 minutes",
 targetMuscles: "Joints, Tendons, Supporting Muscles",
 intensity: "Low to Moderate",
 description: "Dynamic and controlled movements that enhance joint range of motion, reduce injury risk, and support overall movement quality.",
 tips: [
   "Include controlled circles, swings, and pulses.",
   "Focus on shoulders, hips, ankles, and spine.",
   "Use tools like resistance bands for assistance.",
   "Perform slowly with good posture.",
   "Great as warm-up or cool-down."
 ]
},
{
 name: "Meditation",
 img: "/placeholder.svg?height=250&width=400",
 duration: "10 minutes",
 targetMuscles: "Mind & Nervous System",
 intensity: "Passive",
 description: "A mindfulness-based practice that calms the mind, reduces stress, and improves mental clarity and recovery.",
 tips: [
   "Sit or lie down in a quiet, comfortable place.",
   "Close your eyes and focus on your breath.",
   "Let thoughts pass without judgment.",
   "Use guided apps if needed for structure.",
   "Try to make it a consistent habit, post-workout or before bed."
 ]
},

      ],
    },
  ],
}

let currentLevel = ""
let currentDay = 1
const completedTasks = new Set()

// Utility to show/hide pages
function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
  })
  document.getElementById(pageId).classList.add("active")
}

function showDays(level) {
  currentLevel = level
  showPage("days-page")
  document.getElementById("level-title").innerText = level.charAt(0).toUpperCase() + level.slice(1) + " Level"
}

function backToLevels() {
  showPage("levels-page")
  currentLevel = ""
  currentDay = 1
  completedTasks.clear()
}

function backToDays() {
  showPage("days-page")
  currentDay = 1
  completedTasks.clear()
}

function showWorkouts(day) {
  currentDay = day
  completedTasks.clear()
  showPage("workout-page")
  updateWorkoutDisplay()
}

function updateWorkoutDisplay() {
  const currentDayWorkout = workoutData[currentLevel][currentDay - 1]
  if (!currentDayWorkout) {
    console.error("Workout data not found for current level and day.")
    return
  }

  // Update main workout title
  document.getElementById("workout-title").innerText = `Day ${currentDay}: ${currentDayWorkout.title}`

  const exercises = currentDayWorkout.exercises

  // Update main workout content
  const workoutDiv = document.getElementById("workout-tasks")
  workoutDiv.innerHTML = "" // Clear previous exercises

  exercises.forEach((exercise, index) => {
    const exerciseDiv = document.createElement("div")
    exerciseDiv.className = "exercise"
    exerciseDiv.id = `exercise-${index}`

    const isCompleted = completedTasks.has(index)
    const intensityClass = exercise.intensity.toLowerCase().replace(/\s/g, "-")

    exerciseDiv.innerHTML = `
      <img src="${exercise.img}" alt="${exercise.name}" onclick="toggleTaskCompleted(${index})">
      <div class="exercise-content">
        <div class="exercise-header">
          <h4>${exercise.name}</h4>
          <span class="exercise-intensity-badge ${intensityClass}">${exercise.intensity.charAt(0).toUpperCase() + exercise.intensity.slice(1)}</span>
        </div>

        <div class="exercise-details-grid">
          <div class="exercise-detail-item">
            <div class="exercise-detail-icon-circle blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p class="exercise-detail-label">Duration</p>
              <p class="exercise-detail-value">${exercise.duration}</p>
            </div>
          </div>
          <div class="exercise-detail-item">
            <div class="exercise-detail-icon-circle green">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-4 h-4"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <div>
              <p class="exercise-detail-label">Target Muscles</p>
              <p class="exercise-detail-value">${exercise.targetMuscles}</p>
            </div>
          </div>
          <div class="exercise-detail-item">
            <div class="exercise-detail-icon-circle purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-4 h-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div>
              <p class="exercise-detail-label">Intensity</p>
              <p class="exercise-detail-value">${exercise.intensity.charAt(0).toUpperCase() + exercise.intensity.slice(1)}</p>
            </div>
          </div>
        </div>

        <h5 class="exercise-description-title">Exercise Description</h5>
        <p class="exercise-description-text">${exercise.description}</p>

        ${
          exercise.tips && exercise.tips.length > 0
            ? `
        <h5 class="exercise-tips-title">Tips:</h5>
        <ul class="exercise-tips">
          ${exercise.tips.map((tip) => `<li>${tip}</li>`).join("")}
        </ul>
        `
            : ""
        }

        <div class="exercise-badge ${isCompleted ? "completed" : "incomplete"}" id="badge-${index}">
          ${isCompleted ? "Completed" : "Click image to mark complete"}
        </div>
      </div>
    `
    workoutDiv.appendChild(exerciseDiv)
  })

  // Update progress tracker
  updateProgressTracker(exercises)
  updateProgressStats(exercises.length)
  updateProgressBadge()
}

function updateProgressTracker(exercises) {
  const exerciseList = document.getElementById("exercise-list")
  exerciseList.innerHTML = "" // Clear previous checklist items

  exercises.forEach((exercise, index) => {
    const checklistItem = document.createElement("div")
    checklistItem.className = "checklist-item"
    checklistItem.id = `checklist-${index}`
    checklistItem.onclick = () => toggleTaskCompleted(index)

    const isCompleted = completedTasks.has(index)
    if (isCompleted) {
      checklistItem.classList.add("completed")
    }

    checklistItem.innerHTML = `
      <div class="checklist-icon ${isCompleted ? "completed" : "incomplete"}" id="checklist-icon-${index}">
        ${isCompleted ? "✓" : "○"}
      </div>
      <div class="checklist-content">
        <div class="checklist-name ${isCompleted ? "text-green-800" : ""}">${exercise.name}</div>
        <div class="checklist-info">${exercise.tips[exercise.tips.length - 1]}</div>
      </div>
    `
    exerciseList.appendChild(checklistItem)
  })
}

function toggleTaskCompleted(index) {
  const isCompleted = completedTasks.has(index)

  if (isCompleted) {
    completedTasks.delete(index)
  } else {
    completedTasks.add(index)
  }

  // Update main exercise card
  const exerciseDiv = document.getElementById(`exercise-${index}`)
  const badge = document.getElementById(`badge-${index}`)

  if (completedTasks.has(index)) {
    exerciseDiv.classList.add("completed")
    badge.classList.remove("incomplete")
    badge.classList.add("completed")
    badge.innerText = "Completed"
  } else {
    exerciseDiv.classList.remove("completed")
    badge.classList.remove("completed")
    badge.classList.add("incomplete")
    badge.innerText = "Click image to mark complete"
  }

  // Update checklist item
  const checklistItem = document.getElementById(`checklist-${index}`)
  const checklistIcon = document.getElementById(`checklist-icon-${index}`)

  if (completedTasks.has(index)) {
    checklistItem.classList.add("completed")
    checklistIcon.classList.remove("incomplete")
    checklistIcon.classList.add("completed")
    checklistIcon.innerText = "✓"
  } else {
    checklistItem.classList.remove("completed")
    checklistIcon.classList.remove("completed")
    checklistIcon.classList.add("incomplete")
    checklistIcon.innerText = "○"
  }

  // Update progress stats and badge
  const totalExercises = workoutData[currentLevel][currentDay - 1].exercises.length
  updateProgressStats(totalExercises)
  updateProgressBadge()
}

function updateProgressStats(totalExercises) {
  const completedCount = completedTasks.size
  const remainingCount = totalExercises - completedCount
  const percentage = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0

  // Update progress bar
  document.getElementById("progress-bar").style.width = `${percentage}%`

  // Update text elements
  document.getElementById("progress-count").innerText = `${completedCount}/${totalExercises}`
  document.getElementById("progress-percentage").innerText = `${percentage}% Complete`
  document.getElementById("completed-count").innerText = completedCount
  document.getElementById("remaining-count").innerText = remainingCount

  // Show/hide completion status
  const completionStatus = document.getElementById("completion-status")
  if (completedCount === totalExercises && totalExercises > 0) {
    completionStatus.style.display = "block"
    completionStatus.querySelector(".completion-subtitle").innerText = `Great job finishing Day ${currentDay}!`
  } else {
    completionStatus.style.display = "none"
  }
}

function updateProgressBadge() {
  const totalExercises = workoutData[currentLevel][currentDay - 1].exercises.length
  const completedCount = completedTasks.size
  document.getElementById("progress-badge").innerText =
    `Progress: ${completedCount}/${totalExercises} exercises completed`
}

// Initial page load
document.addEventListener("DOMContentLoaded", () => {
  showPage("levels-page")
})


// --- NEW: THEME TOGGLE SCRIPT ---
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Function to apply the saved theme
  const applyTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };

  // Toggle theme on button click
  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Save the new theme preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Apply theme on initial load
  applyTheme();
});

// --- THEME & INITIALIZATION SCRIPT ---

/**
 * Sets the theme (light/dark) for the page and updates the background video.
 * @param {string} theme - The theme to set ('light' or 'dark').
 */
function setTheme(theme) {
  const body = document.body;
  const backgroundVideo = document.getElementById('background-video');
  const lightVideoSrc = '../workout-bg.mp4';
  const darkVideoSrc = '../workout-bg-dark.mp4';
  const lightIcon = document.getElementById('theme-toggle-light-icon');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');

  if (theme === 'dark') {
    body.classList.add('dark');
    if (backgroundVideo) backgroundVideo.src = darkVideoSrc;
    if (lightIcon) lightIcon.style.display = 'none';
    if (darkIcon) darkIcon.style.display = 'block';
  } else {
    body.classList.remove('dark');
    if (backgroundVideo) backgroundVideo.src = lightVideoSrc;
    if (lightIcon) lightIcon.style.display = 'block';
    if (darkIcon) darkIcon.style.display = 'none';
  }

  if (backgroundVideo) {
    backgroundVideo.load();
  }
  
  localStorage.setItem('theme', theme);
}

// Main initialization on page load
document.addEventListener("DOMContentLoaded", () => {
  // Set initial page view
  showPage("levels-page");

  // Setup theme toggle button
  const themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleBtn.addEventListener("click", () => {
    const isDarkMode = document.body.classList.contains("dark");
    setTheme(isDarkMode ? "light" : "dark");
  });

  // Apply saved theme on initial load
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});