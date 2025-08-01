const workoutData = {
  beginner: [
    {
      day: 1,
      title: "Full Body Foundation",
      exercises: [
        {
          name: "Bodyweight Squats",
          img: "bodyweightsquats.gif?height=250&width=400",
          duration: "5 minutes",
          targetMuscles: "Quads, Glutes, Hamstrings",
          intensity: "Low",
          description:
            "A fundamental exercise for building lower body strength. Focus on proper form to engage the right muscles and prevent injury.",
          tips: [
            "Keep your feet shoulder-width apart, toes slightly turned out.",
            "Lower your hips back and down like sitting in a chair; keep chest up and knees over toes.",
            "10-15 reps",
          ],
        },
        {
          name: "Wall Push",
          img: "wallpushups..gif?height=250&width=400",
          duration: "3 minutes",
          targetMuscles: "Chest, Shoulders, Triceps",
          intensity: "Low",
          description: "A beginner-friendly alternative to push-ups, great for building upper body pushing strength.",
          tips: [
            "Stand an arm's length from a wall, hands shoulder-width on the wall.",
            "Bend elbows and lean in, keeping your body straight; push back to start.",
            "8-12 reps",
          ],
        },
        {
          name: "Arm Circles",
          img: "Arm-circles.gif?height=250&width=400",
          duration: "2 minutes",
          targetMuscles: "Shoulders, Upper Back",
          intensity: "Very Low",
          description: "A simple warm-up exercise to increase blood flow and mobility in your shoulders.",
          tips: [
            "Extend arms straight out to the sides.",
            "Rotate arms in small circles forward and backward.",
            "10 reps each direction",
          ],
        },
        {
          name: "Step Touch",
          img: "step touch.gif?height=250&width=400",
          duration: "4 minutes",
          targetMuscles: "Legs, Cardio",
          intensity: "Low",
          description: "A light cardio exercise to get your heart rate up and warm up your lower body.",
          tips: [
            "Step one foot to the side and bring the other to meet it.",
            "Repeat side-to-side, adding arm movements if desired.",
            "20 reps",
          ],
        },
        {
           name: "Calf Raises",
  img: "calf raises.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Calves (Gastrocnemius, Soleus)",
  intensity: "Low",
  description: "A simple yet effective exercise to strengthen and tone your calf muscles, improve ankle stability, and support better balance.",
  tips: [
    "Stand tall with feet hip-width apart, optionally near a wall or chair for balance.",
    "Slowly raise your heels to stand on your toes, squeezing your calves at the top.",
    "Lower your heels back down with control.",
    "12-20 reps"]

        },
      ],
    },
    {
      day: 2,
      title: "Lower Body Focus",
      exercises: [
        {
           name: "Brisk Walk",
  img: "/briskwalk.gif?height=250&width=400",
  duration: "5-10 minutes",
  targetMuscles: "Legs, Glutes, Core",
  intensity: "Low to Moderate",
  description: "A fast-paced walk that elevates heart rate and warms up the body, making it ideal as a warm-up or light cardio session.",
  tips: [
    "Walk at a pace where you can talk but not sing.",
    "Keep your posture upright and swing your arms naturally.",
    "Focus on landing heel to toe for better stride efficiency.",
    "Maintain steady breathing throughout."
]

        },
        {
  name: "Crunches",
  img: "crunches.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Abdominals (Rectus Abdominis)",
  intensity: "Moderate",
  description: "A classic core exercise that strengthens and tones the abdominal muscles using controlled, short-range motion.",
  tips: [
    "Lie on your back with knees bent and feet flat on the floor, hands behind your head or crossed over your chest.",
    "Engage your core and lift your shoulders off the ground using your abs, not your neck.",
    "Exhale as you crunch up, inhale as you return slowly.",
    "10-15 reps"]
},
       {
  name: "Glute Bridge",
  img: "glute bridge.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Glutes, Hamstrings, Core",
  intensity: "Low to Moderate",
  description: "A floor-based exercise that activates and strengthens the glutes and hamstrings while engaging the core.",
  tips: [
    "Lie on your back with knees bent, feet flat on the floor hip-width apart, arms at your sides.",
    "Press through your heels to lift your hips until your body forms a straight line from shoulders to knees.",
    "Squeeze your glutes at the top, then lower down slowly.",
    "10-15 reps"]
},
   {
  name: "Leg Raises",
  img: "legraises.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Lower Abdominals, Hip Flexors",
  intensity: "Moderate",
  description: "An effective core exercise targeting the lower abs, improving core stability and control.",
  tips: [
    "Lie flat on your back with your legs extended and hands under your hips for support.",
    "Keep your legs straight and slowly lift them up to a 90-degree angle.",
    "Lower them back down with control, avoiding contact with the floor.",
    "8-12 reps"]
},
{
  name: "Ankle Taps",
  img: "ankletap.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Obliques, Core",
  intensity: "Low to Moderate",
  description: "A great core isolation exercise that targets the obliques by engaging side-to-side motion while keeping tension on the abs.",
  tips: [
    "Lie on your back with knees bent, feet flat on the floor, and arms at your sides.",
    "Crunch slightly upward and reach your right hand toward your right ankle, then your left hand toward your left ankle.",
    "Keep your core engaged and movement controlled throughout.",
    "12-20 taps (6-10 each side)"]
},
      ],
    },
    {
      day: 3,
      title: "Rest Day Stretches",
      exercises: [
       {
  name: "Seated Arm Press",
  img: "seatedarmpress.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Shoulders, Triceps, Upper Chest",
  intensity: "Low",
  description: "A beginner-friendly upper body exercise performed from a seated position, ideal for building shoulder and arm strength using bodyweight or light resistance.",
  tips: [
    "Sit upright in a chair with feet flat on the ground and back straight.",
    "Bend elbows at 90 degrees, hands at shoulder level, palms facing forward.",
    "Press your arms upward until fully extended, then lower back to starting position.",
    "10-15 reps"]
},
{
  name: "Bicep Curls",
  img: "bicepcurls.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Biceps",
  intensity: "Low to Moderate",
  description: "A classic strength exercise that targets the biceps, helping to build arm size and strength. Can be done with dumbbells, resistance bands, or household items.",
  tips: [
    "Stand or sit with arms at your sides, holding weights or resistance bands with palms facing forward.",
    "Keep elbows close to your body and curl your hands up toward your shoulders.",
    "Squeeze the biceps at the top, then lower slowly with control.",
    "10-15 reps"]
},
{
  name: "Tricep Dips",
  img: "tricepdips.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Triceps, Shoulders, Chest",
  intensity: "Moderate",
  description: "A bodyweight exercise that effectively targets the triceps, often performed using a chair, bench, or low surface.",
  tips: [
    "Sit on the edge of a sturdy chair or bench with hands next to your hips.",
    "Slide your hips forward off the seat, supporting yourself with your arms.",
    "Lower your body by bending your elbows to about 90 degrees.",
    "Push through your palms to return to the starting position.",
    "8-12reps"]
},
{
  name: "Shoulder Taps",
  img: "shouldertaps.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Core, Shoulders, Triceps",
  intensity: "Moderate",
  description: "A dynamic bodyweight move that challenges core stability and shoulder strength through controlled alternating taps.",
  tips: [
    "Start in a high plank position with hands under shoulders and feet hip-width apart.",
    "Keep your body stable and core tight.",
    "Lift one hand to tap the opposite shoulder, then return and switch sides.",
    "Avoid swaying your hips—focus on control.",
    "10-20 taps (5-10 each side)"]
},
{
  name: "Marching in Place",
  img: "marchinginplace.gif?height=250&width=400",
  duration: "3-5 minutes",
  targetMuscles: "Legs, Hip Flexors, Core",
  intensity: "Low",
  description: "A gentle, low-impact cardio movement that warms up the body, improves circulation, and enhances coordination.",
  tips: [
    "Stand tall with arms relaxed by your sides.",
    "Lift one knee toward your chest while swinging the opposite arm forward.",
    "Alternate sides in a controlled rhythm, maintaining an upright posture.",
    "Engage your core and land softly with each step.",
    "Perform continuously for 30-60 seconds per set"]
},
      ],
    },
    {
      day: 4,
      title: "Cardio & Core",
      exercises: [
        {
  name: "Light Yoga",
  img: "lightyoga.gif?height=250&width=400",
  duration: "20 minutes",
  targetMuscles: "Full Body (Focus on Flexibility and Relaxation)",
  intensity: "Low",
  description: "A gentle 20-minute yoga flow designed to improve flexibility, calm the mind, and release muscle tension — ideal for beginners or active recovery.",
  tips: [
    "Begin with deep breathing and gentle neck or shoulder rolls.",
    "Flow through basic poses like Cat-Cow, Child's Pose, Downward Dog, and Seated Forward Fold.",
    "Hold each pose for 3-5 breaths, moving slowly and with awareness.",
    "Finish with a brief seated meditation or lying down in Savasana.",
    "Use a yoga mat or soft surface for comfort and stability."]
},
{
  name: "Butterfly Stretch",
  img: "butterflystretch.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Inner Thighs, Hips, Lower Back",
  intensity: "Low",
  description: "A seated stretch that gently opens the hips and stretches the inner thighs, promoting flexibility and relaxation in the lower body.",
  tips: [
    "Sit on the floor with your back straight and soles of your feet pressed together.",
    "Hold your feet with your hands and let your knees drop toward the ground.",
    "Gently press your knees down using your elbows for a deeper stretch if comfortable.",
    "Avoid bouncing; hold the stretch and breathe deeply.",
    "Hold for 20-30 seconds, repeat 2-3times"]
},
{
  name: "Breathing Exercises",
  img: "breathingexercise.gif?height=250&width=400",
  duration: "3-5 minutes",
  targetMuscles: "Diaphragm, Lungs, Nervous System (for relaxation)",
  intensity: "Low",
  description: "Controlled breathing techniques that help calm the nervous system, reduce stress, and improve oxygen flow — great for warm-ups, cooldowns, or mindfulness breaks.",
  tips: [
    "Sit or lie down in a comfortable position with a straight spine.",
    "Inhale slowly through your nose for a count of 4.",
    "Hold the breath for a count of 4.",
    "Exhale gently through your mouth for a count of 6-8.",
    "Repeat for 5-10 cycles, focusing on calm, rhythmic breaths"]
},
{
  name: "Neck Rolls",
  img: "neckrolls.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Neck, Upper Traps, Shoulders",
  intensity: "Low",
  description: "A gentle mobility exercise that helps relieve tension in the neck and upper shoulders, often used during warm-ups or desk breaks.",
  tips: [
    "Sit or stand tall with your shoulders relaxed.",
    "Slowly drop your chin toward your chest.",
    "Gently roll your head to the right, bringing your ear toward your shoulder, then circle back around to the left.",
    "Complete the circle slowly and smoothly, avoiding jerky movements.",
    "Perform 4-5 rolls in each direction"]
},
{
  name: "Cat-Cow Stretch",
  img: "catcow.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Spine, Back, Neck, Core",
  intensity: "Low",
  description: "A flowing stretch that improves spinal flexibility, relieves back tension, and warms up the body — perfect for morning routines or yoga flows.",
  tips: [
    "Start on all fours with wrists under shoulders and knees under hips.",
    "Inhale as you arch your back, lift your head and tailbone (Cow Pose).",
    "Exhale as you round your spine, tucking your chin and pelvis (Cat Pose).",
    "Move slowly with your breath and maintain control throughout.",
    "Repeat for 5-8rounds"]
},
      ],
    },
    {
      day: 5,
      title: "Balance & Stability",
      exercises: [
        {
  name: "Standing Kickbacks",
  img: "standingkickbacks.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Glutes, Hamstrings, Core",
  intensity: "Low",
  description: "A simple, low-impact exercise that activates the glutes and hamstrings, great for warming up or toning the lower body.",
  tips: [
    "Stand tall with feet hip-width apart, hands on hips or holding a wall/chair for balance.",
    "Shift your weight to one leg and extend the other leg straight back without arching your lower back.",
    "Squeeze your glutes at the top of the movement, then return slowly.",
    "Keep your torso stable and core engaged.",
    "15 reps per leg"]
},
{
  name: "Lunges",
  img: "lunges.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Quadriceps, Glutes, Hamstrings, Calves",
  intensity: "Moderate",
  description: "A powerful lower-body move that builds strength, balance, and stability, focusing on one leg at a time.",
  tips: [
    "Stand upright with feet hip-width apart.",
    "Step one leg forward and lower your body until both knees are bent at 90 degrees.",
    "Ensure your front knee stays above your ankle and your back knee hovers just above the ground.",
    "Push through your front heel to return to the starting position.",
    "10 reps per leg"]
},
{
  name: "Side Leg Raises",
  img: "sidelegraises.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Hip Abductors, Glutes, Outer Thighs",
  intensity: "Low",
  description: "A simple yet effective exercise to strengthen the outer thighs and hips, improving stability and hip mobility.",
  tips: [
    "Stand tall with your feet together and hands on your hips or holding a wall/chair for balance.",
    "Shift your weight to one leg and lift the other leg out to the side, keeping it straight.",
    "Pause briefly at the top, then lower with control.",
    "Keep your core engaged and avoid leaning to the side.",
    "15 reps per leg"]
},
{
  name: "Jumping Jacks",
  img: "jumpingjacks.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Full Body (Legs, Shoulders, Core, Calves)",
  intensity: "Moderate to High",
  description: "A classic cardio move that raises your heart rate, warms up the body, and engages multiple muscle groups with rhythmic full-body motion.",
  tips: [
    "Start standing with feet together and arms at your sides.",
    "Jump while spreading your legs and raising your arms overhead at the same time.",
    "Jump again to return to the starting position.",
    "Maintain a steady pace and soft knees to reduce impact.",
    "20 reps or 30-60 seconds"]
},
{
  name: "Side Bends",
  img: "sidebend.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Obliques, Core, Lower Back",
  intensity: "Low",
  description: "A standing core exercise that targets the obliques and improves lateral flexibility and torso mobility.",
  tips: [
    "Stand tall with feet shoulder-width apart and hands on your hips or arms raised overhead.",
    "Slowly bend your torso to one side without leaning forward or backward.",
    "Engage your core and feel the stretch along your side.",
    "Return to the center and repeat on the other side.",
    "15 reps per side"]
},
      ],
    },
    {
      day: 6,
      title: "Light Yoga Flow",
      exercises: [
        {
  name: "Jog in Place",
  img: "joginplace.gif?height=250&width=400",
  duration: "2-5 minutes",
  targetMuscles: "Legs, Glutes, Calves, Core",
  intensity: "Low to Moderate",
  description: "A convenient cardio move that gets your heart rate up and warms up the body without needing any space or equipment.",
  tips: [
    "Stand tall with your feet hip-width apart and arms relaxed.",
    "Begin jogging by lifting your knees one at a time while pumping your arms naturally.",
    "Keep your core engaged and land softly on the balls of your feet.",
    "Maintain a steady pace that challenges you without overexertion.",
    "Continue for 2-5 minutes depending on intensity"]
},
{
  name: "Plank",
  img: "planks.gif?height=250&width=400",
  duration: "20-60 seconds",
  targetMuscles: "Core, Shoulders, Back, Glutes",
  intensity: "Moderate",
  description: "An isometric core-strengthening exercise that also engages the shoulders and glutes, improving stability and posture.",
  tips: [
    "Start in a forearm or high plank position with your body in a straight line from head to heels.",
    "Keep your elbows under your shoulders and core tightly engaged.",
    "Avoid letting your hips sag or rise — maintain a neutral spine.",
    "Focus on breathing steadily and holding the position with control.",
    "Hold for 20-60 seconds, repeat if needed"]
},
{
  name: "Flutter Kicks",
  img: "flutterkicks.gif?height=250&width=400",
  duration: "30-60 seconds",
  targetMuscles: "Lower Abdominals, Hip Flexors, Core",
  intensity: "Moderate to High",
  description: "A core-focused movement that challenges lower abdominal strength and endurance through rapid, alternating leg motions.",
  tips: [
    "Lie on your back with hands under your hips for support and legs extended.",
    "Lift both legs slightly off the floor, then alternate kicking them up and down in a controlled motion.",
    "Keep your core engaged and lower back pressed to the floor.",
    "Avoid holding your breath — stay relaxed and breathe steadily.",
    "15 reps per leg or 30-60seconds"]
},
{
  name: "Skaters",
  img: "skaters.gif?height=250&width=400",
  duration: "30-60 seconds",
  targetMuscles: "Glutes, Quads, Hamstrings, Calves, Core",
  intensity: "Moderate to High",
  description: "A lateral cardio move that mimics speed skating, improving balance, coordination, and lower-body strength while raising the heart rate.",
  tips: [
    "Start standing, then leap to the right, landing on your right foot and sweeping your left foot behind you.",
    "Immediately jump to the left, landing on your left foot and sweeping your right foot behind.",
    "Swing your arms naturally to help with momentum and balance.",
    "Keep your chest up and land softly on each step.",
    "10-20 reps or 30-60seconds"]
},
{
  name: "Step-ups",
  img: "stepups.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Quadriceps, Glutes, Hamstrings, Calves",
  intensity: "Moderate",
  description: "A functional lower-body exercise that builds strength, balance, and coordination using a step, bench, or sturdy platform.",
  tips: [
    "Stand facing a step or platform with feet hip-width apart.",
    "Step up with one foot, pressing through the heel to lift your body.",
    "Bring the other foot up to stand tall, then step back down with control.",
    "Alternate leading legs or complete all reps on one side before switching.",
    "10 reps per leg"]
},
      ],
    },
    {
      day: 7,
      title: "Active Recovery Day",
      exercises: [
        {
  name: "Yoga (20 Minutes)",
  img: "yoga.gif?height=250&width=400",
  duration: "20 minutes",
  targetMuscles: "Full Body (Flexibility, Balance, Core Strength)",
  intensity: "Low to Moderate",
  description: "A gentle full-body yoga flow that promotes flexibility, relaxation, and mind-body connection — perfect for recovery, stress relief, or daily mobility.",
  tips: [
    "Begin with 1-2 minutes of deep breathing or seated centering.",
    "Flow through basic poses: Cat-Cow, Downward Dog, Forward Fold, Warrior I/II, Seated Twist.",
    "Hold each pose for 3-5 breaths, moving slowly and mindfully.",
    "Use a yoga mat for comfort and stability.",
    "End with gentle stretching and 2-3 minutes of Savasana (lying relaxation)."]
},
{
  name: "Hamstring Stretch",
  img: "hamstring.gif?height=250&width=400",
  duration: "30-60 seconds",
  targetMuscles: "Hamstrings, Calves, Lower Back",
  intensity: "Low",
  description: "A static stretch that helps lengthen the hamstrings, improve flexibility, and relieve tightness in the back of the legs and lower back.",
  tips: [
    "Sit on the floor with one leg extended and the other bent inward (or both legs extended for a double-leg stretch).",
    "Reach toward your toes, keeping your back straight and chest open.",
    "Stop when you feel a gentle stretch — avoid bouncing or forcing the movement.",
    "Hold the position and breathe deeply.",
    "Switch sides if stretching one leg at a time; hold for 30-60 seconds per leg"]
},
{
  name: "Deep Breathing",
  img: "deepbreathing.gif?height=250&width=400",
  duration: "5 minutes",
  targetMuscles: "Diaphragm, Lungs, Nervous System",
  intensity: "Low",
  description: "A calming breathing practice that helps reduce stress, lower heart rate, and promote relaxation — ideal for cooldowns or mindfulness moments.",
  tips: [
    "Sit or lie down in a comfortable position with a straight spine.",
    "Inhale deeply through your nose for 4 seconds, expanding your belly.",
    "Hold your breath for 4-5 seconds (optional for added calm).",
    "Exhale slowly through your mouth for 6-8 seconds.",
    "Repeat for 5 minutes, focusing on your breath and letting go of tension"]
},
{
  name: "Cobra Stretch",
  img: "cobra.gif?height=250&width=400",
  duration: "1030 seconds",
  targetMuscles: "Abdominals, Lower Back, Spine, Chest",
  intensity: "Low",
  description: "A gentle backbend stretch that opens up the chest and stretches the abdominal muscles while promoting spinal mobility.",
  tips: [
    "Lie face down with hands under your shoulders, elbows close to your body.",
    "Press through your palms to lift your chest off the floor, keeping hips grounded.",
    "Keep your elbows slightly bent and shoulders relaxed away from ears.",
    "Hold the stretch without straining your lower back.",
    "Hold for 10-30 seconds, breathing deeply"]
},
{
  name: "Child's Pose",
  img: "childpose.gif?height=250&width=400",
  duration: "10-30 seconds",
  targetMuscles: "Lower Back, Hips, Thighs, Ankles",
  intensity: "Low",
  description: "A gentle resting pose that stretches the lower back and hips, calms the mind, and relieves tension — perfect for cooldowns or yoga flows.",
  tips: [
    "Kneel on the floor with big toes touching and knees spread wide.",
    "Sit your hips back toward your heels and stretch your arms forward on the mat.",
    "Relax your forehead to the ground and breathe deeply.",
    "Let your chest melt toward the floor without forcing it.",
    "Hold for 10-30 seconds or longer as needed"]
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
  name: "Dumbbell Squats",
  img: "dumbbellsquats1.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Quadriceps, Glutes, Hamstrings, Core",
  intensity: "Moderate to High",
  description: "A weighted variation of the bodyweight squat that builds strength and muscle in the lower body while engaging the core for stability.",
  tips: [
    "Hold a dumbbell in each hand at your sides or one dumbbell close to your chest (goblet position).",
    "Stand with feet shoulder-width apart and toes slightly pointed out.",
    "Lower your body by bending your knees and hips, keeping your chest up and back straight.",
    "Push through your heels to return to the starting position.",
    "Perform 10-15 reps with control and proper form"]
},
       {
  name: "Glute Bridge",
  img: "glute bridge.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Glutes, Hamstrings, Core",
  intensity: "Low to Moderate",
  description: "A foundational floor exercise that targets the glutes and hamstrings while also engaging the core — excellent for strength, stability, and posture.",
  tips: [
    "Lie on your back with knees bent, feet flat on the floor hip-width apart, and arms at your sides.",
    "Press through your heels to lift your hips until your body forms a straight line from shoulders to knees.",
    "Squeeze your glutes at the top and avoid overextending your lower back.",
    "Lower your hips back down with control.",
    "Perform 10-15 reps, pausing briefly at the top of each rep"]
},
        {
  name: "Jumping Jacks",
  img: "jumpingjacks.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Full Body (Legs, Shoulders, Core, Calves)",
  intensity: "Moderate to High",
  description: "A classic cardio move that raises your heart rate, warms up the body, and engages multiple muscle groups with rhythmic full-body motion.",
  tips: [
    "Start standing with feet together and arms at your sides.",
    "Jump while spreading your legs and raising your arms overhead at the same time.",
    "Jump again to return to the starting position.",
    "Maintain a steady pace and soft knees to reduce impact.",
    "20 reps or 30-60 seconds"]
},
        {
  name: "Dumbbell Shoulder Press",
  img: "dumbbell shoulder press.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Shoulders (Deltoids), Triceps, Upper Chest",
  intensity: "Moderate to High",
  description: "A compound upper-body strength exercise that targets the shoulders and triceps, helping to build pressing power and shoulder stability.",
  tips: [
    "Sit or stand with a dumbbell in each hand at shoulder height, palms facing forward.",
    "Engage your core and press the weights overhead until your arms are fully extended.",
    "Avoid arching your back; keep your spine neutral.",
    "Lower the dumbbells back to the starting position with control.",
    "Perform 10-12 reps"]
},{
  name: "Bicycle Crunches",
  img: "bicyclecrunches.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Abdominals, Obliques, Hip Flexors",
  intensity: "Moderate to High",
  description: "A dynamic core exercise that targets the upper and lower abs along with the obliques, improving core strength and coordination.",
  tips: [
    "Lie on your back with hands behind your head and legs lifted, knees bent at 90 degrees.",
    "Bring your right elbow toward your left knee while extending the right leg.",
    "Switch sides in a pedaling motion, bringing left elbow toward right knee.",
    "Keep your core engaged and avoid pulling on your neck.",
    "Perform 15-20 reps per side"
  ]
},
      ],
    },
    {
      day: 2,
      title: "Upper Body Power",
      exercises: [
        {
  name: "Elliptical / Treadmill",
  img: "treadmill.gif?height=250&width=400",
  duration: "10-30 minutes",
  targetMuscles: "Legs, Glutes, Calves, Core, Cardiorespiratory System",
  intensity: "Low to High (adjustable)",
  description: "Cardio machine workouts that improve endurance, burn calories, and strengthen the lower body. Great for warm-ups, steady-state cardio, or interval training.",
  tips: [
    "Start with a 3-5 minute warm-up at a comfortable pace.",
    "Adjust speed and incline/resistance to suit your fitness level or goals.",
    "Maintain good posture: shoulders relaxed, core engaged, arms swinging naturally (or using handles on elliptical).",
    "Use intervals for added intensity (e.g., 1 min fast, 2 min slow).",
    "Cool down for 3-5 minutes at a slower pace"
  ]
},
{
  name: "Push-ups",
  img: "pushups.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Chest, Triceps, Shoulders, Core",
  intensity: "Moderate to High",
  description: "A fundamental bodyweight exercise that builds upper body strength and core stability. Push-ups are versatile and effective for all fitness levels.",
  tips: [
    "Start in a high plank position with hands slightly wider than shoulder-width.",
    "Keep your body in a straight line from head to heels.",
    "Lower your body by bending your elbows until your chest nearly touches the floor.",
    "Push through your palms to return to the starting position.",
    "Perform 10-15 reps or modify with knee push-ups if needed"
  ]
},
{
  name: "Plank",
  img: "planks.gif?height=250&width=400",
  duration: "20-60 seconds",
  targetMuscles: "Core, Shoulders, Glutes, Back",
  intensity: "Moderate",
  description: "A static isometric core exercise that builds endurance and stability in the abdominals, shoulders, and glutes. Great for posture and injury prevention.",
  tips: [
    "Start in a forearm or high plank position with your body in a straight line from head to heels.",
    "Keep elbows under shoulders and core tightly engaged.",
    "Avoid letting your hips sag or rise too high.",
    "Breathe steadily and focus on holding the position with control.",
    "Hold for 20-60 seconds, depending on fitness level"
  ]
},
{
  name: "Side Plank",
  img: "sideplank.gif?height=250&width=400",
  duration: "20-45 seconds per side",
  targetMuscles: "Obliques, Core, Shoulders, Glutes",
  intensity: "Moderate",
  description: "A static core hold that targets the obliques while improving balance, shoulder stability, and overall core strength.",
  tips: [
    "Lie on your side with legs extended and feet stacked.",
    "Place your elbow directly under your shoulder and lift your hips off the floor.",
    "Keep your body in a straight line from head to heels, engaging your core.",
    "Hold the position without letting your hips drop.",
    "Switch sides and hold for equal time (20-45 seconds)"
  ]
},
{
  name: "Flutter Kicks",
  img: "flutterkicks.gif?height=250&width=400",
  duration: "30-60 seconds",
  targetMuscles: "Lower Abdominals, Hip Flexors, Core",
  intensity: "Moderate to High",
  description: "A core-focused movement that strengthens the lower abs and hip flexors through small, rapid leg motions while lying on your back.",
  tips: [
    "Lie flat on your back with hands under your hips and legs extended.",
    "Lift both legs a few inches off the floor and keep them straight.",
    "Alternate kicking your legs up and down in a quick, controlled motion.",
    "Keep your core tight and lower back pressed into the ground.",
    "Perform for 30-60 seconds or 15-20 kicks per leg"
  ]
},
      ],
    },
    {
      day: 3,
      title: "Leg Day Endurance",
      exercises: [
        {
  name: "Bulgarian Split Squats",
  img: "bulgariansplitsquats.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Quads, Glutes, Hamstrings, Core",
  intensity: "High",
  description: "An advanced single-leg exercise that builds lower-body strength, balance, and stability by isolating each leg. Great for improving functional strength and correcting imbalances.",
  tips: [
    "Stand a few feet in front of a bench or sturdy surface and place one foot behind you on it.",
    "Keep your front foot flat and your torso upright.",
    "Lower your body by bending the front knee until your thigh is parallel to the ground.",
    "Push through the front heel to return to the start position.",
    "Perform 8-12 reps per leg"
  ]
},
{
  name: "Dumbbell Deadlifts",
  img: "dumbbelldeadlift.gif?height=250&width=400",
  duration: "2-3 minutes",
  targetMuscles: "Hamstrings, Glutes, Lower Back, Core",
  intensity: "Moderate to High",
  description: "A compound lower-body movement that strengthens the posterior chain using dumbbells. Ideal for improving hip hinge mechanics and overall strength.",
  tips: [
    "Stand with feet hip-width apart, holding a dumbbell in each hand in front of your thighs.",
    "Hinge at your hips, keeping your back straight and chest up as you lower the dumbbells along your legs.",
    "Go as low as your flexibility allows without rounding your back.",
    "Drive through your heels to return to standing.",
    "Perform 8-12 reps with controlled movement"]
},
{
  name: "Side Leg Raises",
  img: "sidelegraises1.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Glutes, Hip Abductors, Obliques",
  intensity: "Low to Moderate",
  description: "A simple and effective exercise for strengthening the outer thighs and hips, improving stability and mobility in the lower body.",
  tips: [
    "Lie on one side with legs extended and stacked.",
    "Support your head with your hand and place the other hand in front of you for balance.",
    "Lift the top leg slowly, keeping it straight and in line with your body.",
    "Pause at the top, then lower with control without touching the bottom leg.",
    "Perform 15-20 reps per side"
  ]
},
{
  name: "Donkey Kicks",
  img: "donkeykicks.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Glutes, Hamstrings, Core",
  intensity: "Low to Moderate",
  description: "A glute-isolating bodyweight move that strengthens and tones the backside while also engaging the core and improving hip mobility.",
  tips: [
    "Start on all fours with hands under shoulders and knees under hips.",
    "Keep your knee bent at 90 degrees and lift one leg up, pressing your foot toward the ceiling.",
    "Squeeze your glutes at the top, then lower without letting the knee touch the ground.",
    "Avoid arching your lower back or rotating your hips.",
    "Perform 12-15 reps per side"
  ]
},
{
  name: "Calf Raises",
  img: "calf raises.gif?height=250&width=400",
  duration: "1-2 minutes",
  targetMuscles: "Calves (Gastrocnemius, Soleus)",
  intensity: "Low to Moderate",
  description: "A simple lower-leg exercise that strengthens and tones the calves, improving ankle stability and muscular endurance.",
  tips: [
    "Stand upright with feet hip-width apart and toes pointing forward.",
    "Slowly raise your heels off the ground, balancing on the balls of your feet.",
    "Pause at the top and squeeze your calves, then slowly lower back down.",
    "Use a wall or chair for balance if needed.",
    "Perform 15-20 reps; increase difficulty by holding weights or doing single-leg raises"]
},

      ],
    },
    {
      day: 4,
      title: "Core & Stability",
      exercises: [
        {
  name: "Yoga Flow",
  img: "yogaflow.gif?height=250&width=400",
  duration: "15-30 minutes",
  targetMuscles: "Full Body (Core, Back, Legs, Shoulders)",
  intensity: "Low to Moderate",
  description: "A continuous sequence of yoga poses that enhances flexibility, balance, strength, and mindfulness. Ideal for warm-ups, cool-downs, or active recovery.",
  tips: [
    "Start with a few deep breaths and gentle stretches like Cat-Cow or Child’s Pose.",
    "Transition smoothly between poses such as Downward Dog, Cobra, Warrior, and Forward Fold.",
    "Focus on your breath—inhale as you expand, exhale as you fold or ground.",
    "Maintain control and flow through movements with intention.",
    "Modify poses as needed and hold each for 3-5 breaths"
  ]
},
{
  name: "Arm Circles",
  img: "Arm-circles.gif?height=250&width=400",
  duration: "2-5 minutes",
  targetMuscles: "Shoulders, Arms, Upper Back",
  intensity: "Low",
  description: "A simple mobility exercise that activates and loosens the shoulder joints and upper back. Ideal as a warm-up or part of an active recovery routine.",
  tips: [
    "Stand tall with arms extended straight out to the sides at shoulder height.",
    "Start with small forward circles, gradually increasing the size.",
    "After 30 seconds, reverse direction to perform backward circles.",
    "Keep arms straight but not locked, and shoulders relaxed.",
    "Engage your core and maintain a steady, controlled motion."
  ]
},
{
  name: "Wall Sits",
  img: "wallsits.gif?height=250&width=400",
  duration: "30-60 seconds per set",
  targetMuscles: "Quadriceps, Glutes, Hamstrings, Core",
  intensity: "Moderate to High",
  description: "An isometric lower-body exercise that builds strength and endurance in the thighs and glutes by holding a seated position against a wall without a chair.",
  tips: [
    "Stand with your back flat against a wall and feet shoulder-width apart, about 2 feet from the wall.",
    "Slide down the wall until your knees are at a 90-degree angle, thighs parallel to the floor.",
    "Keep your knees aligned over your ankles, not beyond your toes.",
    "Engage your core and press your back firmly into the wall.",
    "Hold the position for your target duration, then slowly rise back up."
  ]
},
{
  name: "Breathing Practice",
  img: "breathingexercise.gif?height=250&width=400",
  duration: "3-10 minutes",
  targetMuscles: "Diaphragm, Lungs, Nervous System",
  intensity: "Low",
  description: "A calming technique that focuses on deep, mindful breathing to promote relaxation, reduce stress, and improve lung capacity. Ideal before meditation, yoga, or winding down.",
  tips: [
    "Find a comfortable seated or lying position in a quiet space.",
    "Inhale deeply through your nose for a count of 4, feeling your belly expand.",
    "Hold your breath for a count of 4 (optional), then exhale slowly through your mouth for a count of 4-6.",
    "Continue this rhythm for several minutes, focusing on the breath.",
    "Keep your shoulders relaxed and eyes closed for deeper relaxation."
  ]
},
{
  name: "Cobra Stretch",
  img: "cobra.gif?height=250&width=400",
  duration: "20-30 seconds per set",
  targetMuscles: "Abdominals, Chest, Spine, Shoulders",
  intensity: "Low",
  description: "A gentle backbend stretch that opens up the chest and spine while strengthening the lower back. Commonly used in yoga as a part of the warm-up or cool-down sequence.",
  tips: [
    "Lie face down with legs extended and palms placed under your shoulders.",
    "Press into your hands and slowly lift your chest off the floor, keeping elbows slightly bent.",
    "Keep your hips and legs grounded while gently arching your back.",
    "Relax your shoulders down and away from your ears.",
    "Breathe deeply and hold the pose without straining your lower back."
  ]
},
      ],
    },
    {
      day: 5,
      title: "High-Intensity Interval Training (HIIT)",
      exercises: [
        {
  name: "Jump Rope",
  img: "jumprope.gif?height=250&width=400",
  duration: "5-15 minutes",
  targetMuscles: "Calves, Quads, Hamstrings, Shoulders, Core",
  intensity: "Moderate to High",
  description: "A high-energy cardiovascular exercise that improves coordination, endurance, and overall fitness. Great for warm-ups, HIIT, or full cardio sessions.",
  tips: [
    "Use a rope that reaches your armpits when stepped on in the middle.",
    "Hold the handles lightly and keep elbows close to your body.",
    "Jump only a few centimeters off the ground, landing softly on the balls of your feet.",
    "Maintain a steady rhythm and engage your core throughout.",
    "Start with basic jumps, then try variations like high knees or criss-cross for added challenge."
]
},
{
  name: "Triceps Kickbacks",
  img: "tricepkickbacks.gif?height=250&width=400",
  duration: "10-15 reps per arm, 2-3 sets",
  targetMuscles: "Triceps",
  intensity: "Moderate",
  description: "An isolation strength exercise that targets the triceps by extending the arm backward with control. Helps tone and build definition in the back of the upper arms.",
  tips: [
    "Hold a dumbbell in each hand and hinge slightly forward at the hips, keeping your back flat.",
    "Keep your elbows close to your body and bent at 90 degrees.",
    "Extend your arms straight back, squeezing your triceps at the top of the movement.",
    "Avoid swinging — use slow, controlled motion throughout.",
    "Exhale as you extend, and inhale as you return to the starting position."
  ]
},
{
  name: "Bicep Curls",
  img: "bicepcurls.gif?height=250&width=400",
  duration: "10-15 reps per set, 2-3 sets",
  targetMuscles: "Biceps",
  intensity: "Moderate",
  description: "A classic strength exercise that targets the biceps by lifting weights through an elbow-flexing motion. Helps build upper arm size and strength.",
  tips: [
    "Stand tall with a dumbbell in each hand, arms fully extended, palms facing forward.",
    "Keep elbows close to your torso and avoid swinging the arms or torso.",
    "Curl the weights upward while contracting your biceps.",
    "Pause at the top, then slowly lower the weights back to the starting position.",
    "Use a controlled motion throughout and breathe out while lifting."
  ]
},
{
  name: "Upright Rows",
  img: "uprightrow.gif?height=250&width=400",
  duration: "10-15 reps per set, 2-3 sets",
  targetMuscles: "Shoulders, Upper Traps, Biceps",
  intensity: "Moderate",
  description: "A strength training exercise that targets the shoulders and upper back by lifting weights vertically along the body. Great for building upper-body definition and posture.",
  tips: [
    "Stand upright holding a barbell or dumbbells with an overhand grip, hands shoulder-width apart.",
    "Keep the weights close to your body as you lift them toward your chin.",
    "Lead with your elbows, which should stay higher than your wrists.",
    "Pause at the top, then lower the weights slowly and with control.",
    "Avoid jerking or using momentum—engage your shoulders throughout the movement."
  ]
},
{
  name: "Russian Twists",
  img: "russiantwist.gif?height=250&width=400",
  duration: "20-30 reps (10-15 each side), 2-3 sets",
  targetMuscles: "Obliques, Core, Hip Flexors",
  intensity: "Moderate",
  description: "A core-strengthening exercise that targets the obliques through rotational movement. Often performed with bodyweight or added resistance for increased challenge.",
  tips: [
    "Sit on the floor with knees bent and feet flat or lifted slightly for more intensity.",
    "Lean back slightly while keeping your spine straight and chest lifted.",
    "Hold your hands together or use a weight, and rotate your torso side to side.",
    "Tap the floor beside your hip on each side for a full rep.",
    "Engage your core throughout and avoid rounding your back."
  ]
},

      ],
    },
    {
      day: 6,
      title: "Full Body Challenge",
      exercises: [
       {
  name: "Step Ups",
  img: "stepups.gif?height=250&width=400",
  duration: "10-15 reps per leg, 2-3 sets",
  targetMuscles: "Quads, Glutes, Hamstrings, Calves",
  intensity: "Moderate",
  description: "A functional lower-body exercise that builds leg strength, stability, and balance by stepping onto an elevated surface. Effective for developing power and endurance.",
  tips: [
    "Use a sturdy bench, box, or step that’s knee height or slightly lower.",
    "Step up with one foot, pressing through your heel to lift your body.",
    "Bring your other foot up to stand fully, then step down with the same foot.",
    "Keep your back straight and core engaged throughout the movement.",
    "Alternate legs or complete all reps on one side before switching."
  ]
},
{
  name: "Lunge + Curl Combo",
  img: "lunge+curl.gif?height=250&width=400",
  duration: "10-12 reps per leg, 2-3 sets",
  targetMuscles: "Quads, Glutes, Hamstrings, Biceps, Core",
  intensity: "Moderate to High",
  description: "A compound movement that combines a forward lunge with a bicep curl, building lower-body strength and upper-body muscle simultaneously. Great for coordination and full-body conditioning.",
  tips: [
    "Hold a dumbbell in each hand with arms at your sides, palms facing forward.",
    "Step forward into a lunge, bending both knees to 90 degrees.",
    "As you lower into the lunge, curl the weights up toward your shoulders.",
    "Keep your core tight and torso upright throughout the movement.",
    "Push off the front foot to return to standing and lower the weights back down before switching legs."
  ]
},
{
  name: "Burpees",
  img: "burpees.gif?height=250&width=400",
  duration: "8-15 reps, 2-4 sets",
  targetMuscles: "Full Body (Chest, Arms, Legs, Core)",
  intensity: "High",
  description: "A full-body explosive movement that combines a squat, jump, and push-up. Burpees are excellent for building strength, endurance, and cardiovascular fitness.",
  tips: [
    "Start standing with feet shoulder-width apart.",
    "Squat down and place your hands on the floor in front of you.",
    "Jump your feet back into a plank position and perform a push-up (optional).",
    "Jump your feet back toward your hands, then explosively jump straight up.",
    "Land softly and repeat with controlled, consistent form."
  ]
},
{
  name: "Skaters",
  img: "skaters.gif?height=250&width=400",
  duration: "30-45 seconds, 2-3 sets",
  targetMuscles: "Glutes, Quads, Hamstrings, Calves, Core",
  intensity: "Moderate to High",
  description: "A dynamic lateral movement that mimics a speed skater’s motion. Great for improving balance, agility, and lower-body power while also boosting cardio endurance.",
  tips: [
    "Start standing with a slight bend in your knees.",
    "Leap sideways to the right, landing on your right foot while sweeping your left foot behind you.",
    "Swing your arms across your body for balance and momentum.",
    "Immediately jump to the left, landing on your left foot and repeating the motion.",
    "Stay low, keep movements controlled, and try not to let the back foot touch the floor for an extra challenge."
  ]
},
{
  name: "Leg Raises",
  img: "legraises.gif?height=250&width=400",
  duration: "10-15 reps, 2-3 sets",
  targetMuscles: "Lower Abs, Hip Flexors, Core",
  intensity: "Low to Moderate",
  description: "A core-strengthening exercise that targets the lower abdominal muscles by lifting the legs off the ground while lying on your back. Great for building core stability and control.",
  tips: [
    "Lie flat on your back with your legs extended and arms by your sides or under your glutes for support.",
    "Keep your legs straight and together as you lift them toward the ceiling.",
    "Pause briefly at the top, then slowly lower them back down without touching the floor.",
    "Engage your core throughout the movement and avoid arching your lower back.",
    "Breathe out while lifting your legs and inhale as you lower them."
  ]
},
      ],
    },
    {
      day: 7,
      title: "Active Recovery",
      exercises: [
        {
  name: "Meditation",
  img: "meditation.gif?height=250&width=400",
  duration: "10 minutes",
  targetMuscles: "Mind, Nervous System, Breath Control",
  intensity: "Low",
  description: "A focused mindfulness practice designed to calm the mind, reduce stress, and improve mental clarity. Perfect as a daily habit for grounding and emotional balance.",
  tips: [
    "Find a quiet, comfortable space where you won't be disturbed.",
    "Sit or lie down with your spine straight and shoulders relaxed.",
    "Close your eyes and begin to focus on your natural breath.",
    "If your mind wanders, gently bring your attention back to your breath.",
    "Use a timer or guided audio to help stay focused and consistent."
  ]
},
{
  name: "Full Body Stretching",
  img: "fullbodystretch.gif?height=250&width=400",
  duration: "10-20 minutes",
  targetMuscles: "Full Body (Neck, Shoulders, Back, Hips, Legs)",
  intensity: "Low",
  description: "A gentle routine that includes stretches for all major muscle groups. Helps improve flexibility, reduce tension, and enhance overall mobility. Ideal for warm-up, cool-down, or recovery days.",
  tips: [
    "Begin with light movements or deep breathing to prepare your body.",
    "Hold each stretch for 20-30 seconds without bouncing.",
    "Focus on major areas like hamstrings, quads, hip flexors, back, shoulders, and neck.",
    "Stretch both sides of the body evenly and breathe deeply during each hold.",
    "Move slowly between positions and listen to your body—avoid overstretching."
  ]
},
{
  name: "Foam Rolling",
  img: "foamroll.gif?height=250&width=400",
  duration: "10-15 minutes",
  targetMuscles: "Full Body (Back, Quads, Hamstrings, Calves, Glutes)",
  intensity: "Low to Moderate",
  description: "A self-myofascial release technique using a foam roller to relieve muscle tightness, improve circulation, and enhance mobility. Ideal before or after workouts for recovery and injury prevention.",
  tips: [
    "Use slow, controlled movements over tight or sore muscle areas.",
    "Pause and breathe deeply on tender spots to release tension.",
    "Avoid rolling directly over joints or bones.",
    "Spend 30-60 seconds per muscle group (e.g., calves, quads, back).",
    "Stay relaxed and support your body with your hands or legs as needed."
  ]
},
{
  name: "Light Walk ",
  img: "lightwalk.gif?height=250&width=400",
  duration: "15 minutes",
  targetMuscles: "Legs, Hips, Core, Cardiovascular System",
  intensity: "Low",
  description: "A gentle, steady-paced walk that promotes circulation, reduces stress, and supports active recovery. Ideal as a warm-up, cool-down, or mid-day energy boost.",
  tips: [
    "Maintain good posture—stand tall with shoulders relaxed and arms swinging naturally.",
    "Walk at a comfortable pace where you can still hold a conversation.",
    "Breathe deeply and rhythmically to enhance relaxation and focus.",
    "Wear supportive footwear, especially if walking outdoors.",
    "Use this time to clear your mind or listen to calming music or a podcast."
  ]
},
{
  name: "Relaxation Breathing",
  img: "relaxationbreathing.gif?height=250&width=400",
  duration: "5-10 minutes",
  targetMuscles: "Diaphragm, Lungs, Nervous System",
  intensity: "Low",
  description: "A calming breathing technique that activates the parasympathetic nervous system, helping to reduce stress, lower heart rate, and promote a sense of calm and clarity.",
  tips: [
    "Sit or lie down comfortably in a quiet space with your spine straight.",
    "Inhale slowly through your nose for a count of 4, feeling your belly expand.",
    "Exhale gently through your mouth for a count of 6-8.",
    "Place one hand on your chest and the other on your belly to feel your breath move.",
    "Repeat the cycle for several minutes, focusing only on your breath and letting go of tension."
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
          name: "Barbell Back Squats",
          img: "barbellbacksquats.gif?height=250&width=400",
          duration: "10 minutes",
          targetMuscles: "Quads, Glutes, Hamstrings, Core",
          intensity: "High",
          description:
            "A cornerstone exercise for lower body strength. Focus on depth and maintaining a neutral spine.",
          tips: [
            "Bar positioned on upper traps.",
            "Keep spine neutral throughout movement.",
            "8-10 reps with heavy weight",
          ],
        },
        {
          name: "Jump Squats",
          img: "jumpsquat.gif?height=250&width=400",
          duration: "5 minutes",
          targetMuscles: "Quads, Glutes, Explosive Power",
          intensity: "High",
          description:
            "Develop explosive power in your lower body. Land softly and immediately transition into the next rep.",
          tips: ["Explode upward with maximum power.", "Land softly and immediately repeat.", "12-15 reps"],
        },
        {
          name: "Hip Thrusts",
          img: "hipthrusts.gif?height=250&width=400",
          duration: "7 minutes",
          targetMuscles: "Glutes, Hamstrings",
          intensity: "High",
          description: "One of the best exercises for glute development. Focus on a strong contraction at the top.",
          tips: ["Use bench for upper back support.", "Pause at top for 2 seconds.", "10-12 reps"],
        },
        {
          name: "Cable Kickbacks",
          img: "cablekickbacks.gif?height=250&width=400",
          duration: "6 minutes",
          targetMuscles: "Glutes",
          intensity: "Medium",
          description: "An isolation exercise to target and shape your glutes. Control the movement throughout.",
          tips: ["Extend leg fully behind you.", "Control the movement both ways.", "12 reps each leg"],
        },
        {
          name: "Ab Crunch Machine",
          img: "abcrunch.gif?height=250&width=400",
          duration: "5 minutes",
          targetMuscles: "Abs",
          intensity: "Medium",
          description: "Effectively target your abdominal muscles with controlled movements on the machine.",
          tips: ["Control the motion, don't use momentum.", "Focus on contracting abs.", "15-20 reps"],
        },
      ],
    },
    {
      day: 2,
      title: "Upper Body Hypertrophy",
      exercises: [
        {
  name: "Treadmill HIIT (25 Minutes)",
  img: "treadmill.gif?height=250&width=400",
  duration: "25 minutes",
  targetMuscles: "Legs, Glutes, Core, Cardiovascular System",
  intensity: "High",
  description: "A high-intensity interval training session on the treadmill that alternates between sprints and recovery walks or jogs. It boosts cardiovascular fitness, burns fat, and improves endurance in a short time.",
  tips: [
    "Begin with a 5-minute warm-up walk or light jog to prep your body.",
    "Alternate 30-60 seconds of sprinting with 60-90 seconds of walking or slow jogging.",
    "Repeat the sprint/recovery cycle for 15-18 minutes.",
    "Use the final 3-5 minutes for a cool-down walk and gentle stretching.",
    "Adjust speed and incline based on your fitness level—stay safe and controlled."
  ]
},
{
  name: "Deadlifts",
  img: "deadlift.gif?height=250&width=400",
  duration: "6-10 reps, 3-4 sets",
  targetMuscles: "Glutes, Hamstrings, Lower Back, Core, Traps",
  intensity: "High",
  description: "A powerful compound lift that targets the posterior chain by lifting a loaded barbell from the ground to standing. Deadlifts build total-body strength, stability, and functional power.",
  tips: [
    "Stand with feet hip-width apart and the barbell over the middle of your feet.",
    "Hinge at the hips and bend your knees to grip the bar just outside your legs.",
    "Keep your chest up, back flat, and core braced before lifting.",
    "Push through your heels to lift the bar, extending your hips and knees together.",
    "Lower the bar in a controlled motion by hinging at the hips, keeping it close to your body throughout."
  ]
},
{
  name: "TRX Rows",
  img: "trxrows.gif?height=250&width=400",
  duration: "10-15 reps, 2-3 sets",
  targetMuscles: "Upper Back, Lats, Biceps, Core",
  intensity: "Moderate",
  description: "A suspension training exercise that targets the upper back and arms while engaging the core. Great for improving posture, pulling strength, and joint stability using your body weight.",
  tips: [
    "Adjust the TRX straps to mid-length and grip the handles with palms facing each other.",
    "Lean back with your body straight, feet forward, and arms extended.",
    "Pull your chest toward the handles by squeezing your shoulder blades together.",
    "Keep your elbows close to your body and avoid shrugging your shoulders.",
    "Lower yourself slowly and maintain a tight core throughout the movement."
  ]
},
{
  name: "Weighted Lunges",
  img: "weightedlunges.gif?height=250&width=400",
  duration: "10-12 reps per leg, 2-3 sets",
  targetMuscles: "Quads, Glutes, Hamstrings, Calves, Core",
  intensity: "Moderate to High",
  description: "A strength-building lower-body exercise that adds resistance to traditional lunges using dumbbells or a barbell. Improves balance, coordination, and muscle development in the legs and glutes.",
  tips: [
    "Hold a dumbbell in each hand at your sides or place a barbell across your upper back.",
    "Step forward with one leg and lower your body until both knees are bent at 90 degrees.",
    "Keep your chest up, back straight, and front knee aligned over your ankle.",
    "Push through the heel of your front foot to return to the starting position.",
    "Alternate legs or complete all reps on one side before switching."
  ]
},
{
  name: "Leg Raises",
  img: "legraises.gif?height=250&width=400",
  duration: "10-15 reps, 2-3 sets",
  targetMuscles: "Lower Abs, Hip Flexors, Core",
  intensity: "Low to Moderate",
  description: "A core-focused bodyweight exercise that strengthens the lower abdominal muscles by lifting the legs while lying flat. Helps build control, stability, and abdominal endurance.",
  tips: [
    "Lie flat on your back with your legs extended and arms by your sides or under your hips for support.",
    "Keep your legs straight and together as you lift them toward the ceiling.",
    "Pause briefly at the top, then slowly lower your legs without letting them touch the floor.",
    "Engage your core and keep your lower back pressed into the ground throughout.",
    "Breathe out as you lift and inhale as you lower your legs under control."
  ]
},

      ],
    },
   {
      day: 3,
      title: "Leg Day Strength",
      exercises: [
        {
  name: "Clean & Press",
  img: "cleanandpress.gif?height=250&width=400",
  duration: "8 reps, 2-3 sets",
  targetMuscles: "Shoulders, Quads, Glutes, Hamstrings, Traps, Core",
  intensity: "High",
  description: "A powerful full-body movement combining a clean (lifting a weight from the floor to shoulders) and an overhead press. Builds explosive strength, coordination, and muscle endurance.",
  tips: [
    "Start with the barbell or dumbbells on the floor in front of you, feet shoulder-width apart.",
    "Hinge at the hips and bend your knees to grip the weight with a flat back and engaged core.",
    "Explosively pull the weight up to shoulder level (clean), using your hips and legs to drive the motion.",
    "Once at shoulder height, press the weight overhead until arms are fully extended.",
    "Lower the weight back to the floor with control and reset for the next rep."
  ]
},
{
  name: "Dumbbell Thrusters",
  img: "dumbbellthrusters.gif?height=250&width=400",
  duration: "10 reps, 2-3 sets",
  targetMuscles: "Quads, Glutes, Shoulders, Core",
  intensity: "High",
  description: "A compound movement that combines a front squat with an overhead press using dumbbells. Great for building strength, power, and cardiovascular endurance.",
  tips: [
    "Hold a dumbbell in each hand at shoulder height with elbows bent and feet shoulder-width apart.",
    "Lower into a deep squat, keeping your chest upright and knees tracking over your toes.",
    "Drive through your heels to stand up explosively, pressing the dumbbells overhead in one fluid motion.",
    "Lock out the arms at the top, then return to the starting position and repeat.",
    "Keep your core engaged and avoid arching your back during the press."
  ]
},
{
  name: "Box Jumps",
  img: "boxjumps.gif?height=250&width=400",
  duration: "10 reps, 2-3 sets",
  targetMuscles: "Quads, Glutes, Hamstrings, Calves, Core",
  intensity: "High",
  description: "An explosive plyometric exercise where you jump onto a sturdy box or platform. Improves power, coordination, and lower-body strength.",
  tips: [
    "Stand facing the box with feet shoulder-width apart and arms at your sides.",
    "Bend your knees into a partial squat and swing your arms back for momentum.",
    "Explosively jump onto the box, landing softly with both feet flat and knees slightly bent.",
    "Stand up fully at the top, then step back down carefully (avoid jumping off).",
    "Use a box height appropriate for your fitness level and focus on form over speed."
  ]
},
{
  name: "Mountain Climbers",
  img: "mountainclimbers.gif?height=250&width=400",
  duration: "30 seconds, 2-3 sets",
  targetMuscles: "Core, Shoulders, Quads, Hip Flexors, Cardiovascular System",
  intensity: "High",
  description: "A fast-paced, full-body movement that mimics a running motion in a plank position. Excellent for building core strength, agility, and cardiovascular endurance.",
  tips: [
    "Start in a high plank position with hands under shoulders and body in a straight line.",
    "Drive one knee toward your chest while keeping the other leg extended.",
    "Quickly switch legs, pumping your knees alternately as if running in place.",
    "Keep your core tight and hips level—avoid bouncing.",
    "Maintain a steady rhythm and focus on smooth, controlled movement."
  ]
},
{
  name: "Plank",
  img: "planks.gif?height=250&width=400",
  duration: "1 minute, 2-3 sets",
  targetMuscles: "Core, Shoulders, Glutes, Back",
  intensity: "Moderate",
  description: "A foundational isometric core exercise that strengthens the abdominal muscles, stabilizers, and lower back. Ideal for improving posture and building core endurance.",
  tips: [
    "Start in a forearm plank position with elbows directly under shoulders and forearms parallel.",
    "Keep your body in a straight line from head to heels—don’t let your hips sag or rise.",
    "Engage your core, glutes, and legs throughout the hold.",
    "Keep your neck neutral by gazing at the floor.",
    "Focus on controlled breathing and maintaining proper form rather than just holding longer."
  ]
},
      ],
    },
    {
      day: 4,
      title: "Leg Day Strength",
      exercises: [
        {
  name: "Pilates (30 Minutes)",
  img: "pilates.gif?height=250&width=400",
  duration: "30 minutes",
  targetMuscles: "Core, Glutes, Back, Hips, Shoulders",
  intensity: "Low to Moderate",
  description: "A low-impact workout focusing on core strength, flexibility, and posture. Pilates emphasizes controlled movements, breath coordination, and body alignment.",
  tips: [
    "Start with gentle mat-based movements like pelvic tilts and bridges.",
    "Focus on activating your core and maintaining a neutral spine.",
    "Move with slow, controlled precision—quality over quantity.",
    "Inhale to prepare and exhale during exertion or movement.",
    "Use a mat and modify positions as needed for your level."
  ]
},
{
  name: "Lateral Band Walks",
  img: "lateralbandwalk.gif?height=250&width=400",
  duration: "20 steps (10 each direction), 2-3 sets",
  targetMuscles: "Glutes (Medius & Minimus), Hips, Thighs",
  intensity: "Moderate",
  description: "A resistance band exercise that targets the outer glutes and hips. Great for activating the hip stabilizers and improving lateral strength and mobility.",
  tips: [
    "Place a resistance band around your thighs (just above the knees) or ankles for more challenge.",
    "Bend your knees slightly into a quarter-squat position, keeping your core engaged.",
    "Step sideways with one foot, then follow with the other to maintain tension in the band.",
    "Avoid letting your feet come too close together—keep steady resistance.",
    "Take controlled steps, 10 in each direction, maintaining good posture throughout."
  ]
},
{
  name: "Side Planks",
  img: "sideplank.gif?height=250&width=400",
  duration: "30 seconds per side, 2-3 sets",
  targetMuscles: "Obliques, Core, Shoulders, Glutes",
  intensity: "Moderate",
  description: "An isometric core exercise that strengthens the obliques and improves lateral stability. Great for posture, balance, and preventing lower back pain.",
  tips: [
    "Lie on your side with your elbow directly under your shoulder and feet stacked.",
    "Lift your hips off the floor, forming a straight line from head to feet.",
    "Keep your core tight and avoid sagging at the hips.",
    "Hold the position, breathing steadily, and switch sides after 30 seconds.",
    "For beginners, drop the bottom knee to the ground for support."
  ]
},
{
  name: "Glute Stretch",
  img: "stretchglutes.gif?height=250&width=400",
  duration: "30 seconds per side",
  targetMuscles: "Glutes, Lower Back, Hips",
  intensity: "Low",
  description: "A static stretch targeting the gluteal muscles to relieve tightness, improve mobility, and aid recovery. Ideal post-workout or during cool-down.",
  tips: [
    "Lie on your back and cross one ankle over the opposite knee.",
    "Reach through and gently pull the uncrossed leg toward your chest.",
    "Feel the stretch in the glute of the bent leg—hold for 30 seconds.",
    "Keep your head and shoulders relaxed on the floor.",
    "Switch sides and repeat, breathing deeply to deepen the stretch."
  ]
},
{
  name: "Foam Rolling",
  img: "foamroll.gif?height=250&width=400",
  duration: "5-10 minutes",
  targetMuscles: "Full Body (Glutes, Quads, Hamstrings, Calves, Back)",
  intensity: "Low",
  description: "A self-myofascial release technique using a foam roller to reduce muscle tension, improve mobility, and enhance recovery. Best used before or after workouts.",
  tips: [
    "Choose a moderate-density foam roller for comfort and effectiveness.",
    "Roll slowly over each muscle group, pausing on tight or sore spots.",
    "Avoid rolling directly over joints or the lower back.",
    "Spend at least 30 seconds on each area—glutes, quads, hamstrings, calves, and back.",
    "Breathe deeply and relax into the pressure for optimal release."
  ]
},
      ],
    },
    {
      day: 5,
      title: "Plyometric & Core",
      exercises: [
        {
  name: "Kettlebell Swings",
  img: "kettlebell.gif?height=250&width=400",
  duration: "15 reps, 2-4 sets",
  targetMuscles: "Glutes, Hamstrings, Core, Shoulders, Back",
  intensity: "Moderate to High",
  description: "A powerful hip-hinge movement that builds explosive strength, cardiovascular endurance, and full-body coordination using a kettlebell.",
  tips: [
    "Start with feet shoulder-width apart, kettlebell on the floor between your feet.",
    "Hinge at the hips, grasp the kettlebell, and hike it back between your legs.",
    "Drive through your hips to swing the kettlebell to chest level, keeping arms relaxed.",
    "Maintain a neutral spine and tight core throughout the movement.",
    "Let the kettlebell swing back naturally and repeat for 15 controlled reps."
  ]
},
{
  name: "Jump Rope",
  img: "jumprope.gif?height=250&width=400",
  duration: "2 minutes, 2-3 rounds",
  targetMuscles: "Calves, Quads, Hamstrings, Shoulders, Core",
  intensity: "Moderate to High",
  description: "A high-energy cardio workout that improves coordination, foot speed, endurance, and overall cardiovascular health using just a rope.",
  tips: [
    "Use a rope that reaches chest height when stepped on in the middle.",
    "Jump with both feet together, keeping knees soft and land lightly.",
    "Use wrists to turn the rope—keep arms relaxed at your sides.",
    "Start slow and build rhythm before increasing speed.",
    "Try variations like single-leg hops or high knees to mix it up."
  ]
},
{
  name: "Sled Push",
  img: "sledpush.gif?height=250&width=400",
  duration: "10 meters per set, 2-4 rounds",
  targetMuscles: "Legs, Glutes, Core, Chest, Shoulders",
  intensity: "High",
  description: "A strength and power-building movement that targets the lower body and core while also improving conditioning and explosiveness.",
  tips: [
    "Start in a forward-leaning athletic stance with hands on the sled handles.",
    "Drive through your legs with powerful steps, keeping your back straight.",
    "Engage your core and maintain steady breathing throughout.",
    "Push explosively over 10 meters and rest before repeating.",
    "Adjust the sled weight based on your goal—lighter for speed, heavier for strength."
  ]
},
{
  name: "Push-ups",
  img: "pushups.gif?height=250&width=400",
  duration: "15 reps, 2-4 sets",
  targetMuscles: "Chest, Triceps, Shoulders, Core",
  intensity: "Moderate",
  description: "A foundational bodyweight exercise that builds upper body strength and core stability. Push-ups require no equipment and can be done anywhere.",
  tips: [
    "Start in a plank position with hands slightly wider than shoulders.",
    "Lower your chest to the ground by bending your elbows, keeping your body straight.",
    "Engage your core and avoid sagging hips or flaring elbows.",
    "Push back up to the starting position with control.",
    "Modify by doing knee push-ups if needed to maintain form."
  ]
},
{
  name: "V-ups",
  img: "v-ups.gif?height=250&width=400",
  duration: "20 reps, 2-3 sets",
  targetMuscles: "Abdominals, Hip Flexors",
  intensity: "Moderate to High",
  description: "A dynamic core exercise that combines the upper and lower body to strengthen the entire abdominal region and improve coordination.",
  tips: [
    "Lie flat on your back with arms extended overhead and legs straight.",
    "Engage your core to lift both your arms and legs, reaching for your toes to form a 'V' shape.",
    "Keep your movements controlled and avoid using momentum.",
    "Lower your arms and legs back down slowly without touching the ground.",
    "Modify by bending your knees or alternating leg raises if needed."
  ]
},
      ],
    },
    {
      day: 6,
      title: "Full Body Max Effort",
      exercises: [
        {
  name: "Step-ups with Dumbbells",
  img: "stepupswithdumbbells.gif?height=250&width=400",
  duration: "15 reps per leg, 2-3 sets",
  targetMuscles: "Glutes, Quads, Hamstrings, Calves",
  intensity: "Moderate to High",
  description: "A strength and coordination exercise using dumbbells to build lower-body power and balance. Great for unilateral leg work and functional fitness.",
  tips: [
    "Hold dumbbells at your sides and face a sturdy bench or step.",
    "Step up with one foot, pressing through the heel to lift your body up.",
    "Bring the trailing leg up or keep it suspended for added core challenge.",
    "Step back down under control and repeat on the other leg.",
    "Keep your chest upright and core engaged throughout."
  ]
},
{
  name: "Squat Jumps",
  img: "jumpsquat.gif?height=250&width=400",
  duration: "12 reps, 2-3 sets",
  targetMuscles: "Quads, Glutes, Hamstrings, Calves, Core",
  intensity: "High",
  description: "A plyometric movement that builds explosive lower-body power and elevates heart rate. Great for conditioning and improving athletic performance.",
  tips: [
    "Start in a squat position with feet shoulder-width apart.",
    "Lower into a deep squat, then explode upward into a jump.",
    "Land softly back into the squat to absorb impact and maintain control.",
    "Keep your chest lifted and back straight throughout the movement.",
    "Use your arms to help generate upward momentum."
  ]
},
{
  name: "Hanging Leg Raises",
  img: "hanginglegraises.gif?height=250&width=400",
  duration: "12 reps, 2-3 sets",
  targetMuscles: "Abdominals, Hip Flexors, Grip",
  intensity: "Moderate to High",
  description: "A core-strengthening exercise performed while hanging from a bar, targeting the lower abdominals and improving grip and shoulder stability.",
  tips: [
    "Hang from a pull-up bar with your arms fully extended and legs together.",
    "Engage your core and raise your legs to a 90-degree angle or higher.",
    "Avoid swinging—control both the upward and downward motion.",
    "Breathe out as you raise your legs and inhale as you lower them.",
    "Bend your knees slightly or perform knee raises if full leg lifts are too challenging."
  ]
},
{
  name: "Battle Ropes",
  img: "battleropes.gif?height=250&width=400",
  duration: "30 seconds per round, 3-5 rounds",
  targetMuscles: "Shoulders, Arms, Core, Back, Legs",
  intensity: "High",
  description: "An intense, full-body conditioning exercise using heavy ropes to build strength, endurance, and cardiovascular fitness.",
  tips: [
    "Stand in an athletic stance with knees bent and core engaged.",
    "Grip the ends of the rope firmly and alternate slamming each arm up and down.",
    "Keep movements explosive but controlled—avoid leaning back or slouching.",
    "Breathe steadily and maintain a strong rhythm throughout the set.",
    "Try variations like double waves, slams, or side-to-side for added challenge."
  ]
},
{
  name: "Skaters",
  img: "skaters.gif?height=250&width=400",
  duration: "25 reps (alternating sides), 2-3 sets",
  targetMuscles: "Glutes, Quads, Hamstrings, Calves, Core",
  intensity: "Moderate to High",
  description: "A lateral plyometric move that improves agility, coordination, and lower-body power, while also engaging the core.",
  tips: [
    "Start with feet hip-width apart and knees slightly bent.",
    "Leap sideways to the right, landing on your right foot while sweeping the left foot behind.",
    "Immediately jump to the left and repeat, mimicking a speed skater motion.",
    "Keep your chest up and land softly to absorb impact.",
    "Increase speed or add a touch to the ground for more intensity."
  ]
},
      ],
    },
    {
      day: 7,
      title: "Active Recovery",
      exercises: [
        {
  name: "Ice Bath or Hot Shower Recovery",
  img: "icebath.jpg?height=250&width=400",
  duration: "10-15 minutes",
  targetMuscles: "Full Body (Recovery Focused)",
  intensity: "Very Low (Passive Recovery)",
  description: "A post-workout recovery method to reduce muscle soreness and inflammation. Ice baths decrease swelling, while hot showers relax muscles and improve circulation.",
  tips: [
    "Use an ice bath (10-15°C) for 10-15 minutes after intense training to minimize inflammation.",
    "Opt for a hot shower to relieve tension and promote blood flow to muscles.",
    "Contrast therapy (switching between hot and cold) may enhance recovery.",
    "Hydrate well before and after either method.",
    "Always listen to your body—avoid ice baths if you have circulation issues or dislike cold exposure."
  ]
},
{
  name: "Yoga",
  img: "yoga2.gif?height=250&width=400",
  duration: "20 minutes",
  targetMuscles: "Full Body (Flexibility & Mobility Focused)",
  intensity: "Low",
  description: "A calming and restorative yoga session focused on flexibility, breath control, and mental relaxation. Ideal for post-workout cool-down or active recovery.",
  tips: [
    "Begin with gentle poses like Child’s Pose or Cat-Cow to warm up the spine.",
    "Incorporate slow transitions between poses such as Downward Dog, Low Lunge, and Pigeon Pose.",
    "Hold each stretch for 3-5 breaths, focusing on your inhale and exhale.",
    "Avoid pushing to the point of pain—relax into each movement.",
    "End with a seated meditation or Savasana to reset your mind and body."
  ]
},
{
  name: "Deep Stretching",
  img: "deepstretches.gif?height=250&width=400",
  duration: "10-15 minutes",
  targetMuscles: "Hamstrings, Quads, Hip Flexors, Back, Shoulders",
  intensity: "Low",
  description: "A focused stretching session that targets tight or overused muscle groups to improve flexibility, range of motion, and aid muscle recovery.",
  tips: [
    "Hold each stretch for at least 30 seconds and up to 2 minutes for maximum effect.",
    "Breathe deeply and slowly—never rush through stretches.",
    "Avoid bouncing or jerking; ease gently into each stretch.",
    "Use props like yoga blocks or towels to assist deeper holds.",
    "Stretch both sides of the body equally to maintain balance."
  ]
},
{
  name: "Breathing Practice",
  img: "deepbreathing.gif?height=250&width=400",
  duration: "10 minutes",
  targetMuscles: "Lungs, Diaphragm (Mind-Body Focus)",
  intensity: "Very Low",
  description: "A mindful breathing session aimed at reducing stress, lowering heart rate, and promoting mental clarity and relaxation.",
  tips: [
    "Sit or lie down in a comfortable position with your spine relaxed and straight.",
    "Inhale slowly through your nose for 4-5 seconds, allowing your belly to expand.",
    "Hold the breath gently for a moment, then exhale slowly through your mouth for 5-6 seconds.",
    "Try techniques like box breathing (4-4-4-4) or 4-7-8 breathing for variety.",
    "If your mind wanders, gently bring your focus back to the breath without judgment."
  ]
},
{
  name: "Relaxation Music",
  img: "relaxationmusic.jpg?height=250&width=400",
  duration: "10-20 minutes (or as desired)",
  targetMuscles: "Mind & Nervous System",
  intensity: "Passive / Very Low",
  description: "A calming auditory experience using soft instrumental or ambient sounds to help unwind, lower stress levels, and promote recovery after workouts or before sleep.",
  tips: [
    "Choose instrumental, ambient, or nature-based sounds to avoid distraction.",
    "Use headphones for a more immersive experience, or play it softly in the background.",
    "Combine with breathing, stretching, or meditation for enhanced relaxation.",
    "Close your eyes, lie down, and focus on the rhythm and softness of the music.",
    "Create a personal playlist of tracks that soothe you the most."
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