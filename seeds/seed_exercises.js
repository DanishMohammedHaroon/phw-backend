export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("exercises").del();

  const exercises = [
    {
      exercise_id: "Heel_Slide",
      title: "Heel Slide",
      description:
        "Lie on your back with your knees bent and feet flat on the floor. Slowly slide one heel along the floor until your leg is nearly straight, then slide it back.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["quadriceps"],
        secondary: ["hamstrings"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Heel_Slide/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Ankle_Pump",
      title: "Ankle Pump",
      description:
        "While sitting or lying down, extend one leg. Slowly flex your foot upward toward your shin and then point your toes away.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["calves"],
        secondary: ["ankle stabilizers"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Ankle_Pump/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Seated_March",
      title: "Seated March",
      description:
        "Sit upright on a sturdy chair with feet flat on the ground. Lift one knee upward in a controlled motion, then lower it and alternate legs.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["hip flexors"],
        secondary: ["quadriceps"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "compound",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Seated_March/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Knee_Extension",
      title: "Knee Extension",
      description:
        "Sit on a firm chair with your feet flat on the floor. Slowly extend one leg until it is straight, hold for a few seconds, and then lower it back down.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["quadriceps"],
        secondary: [],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Knee_Extension/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Arm_Raise",
      title: "Arm Raise",
      description:
        "Sit or stand with your back straight. Slowly raise one arm forward to shoulder height and then lower it back.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["shoulders"],
        secondary: [],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Arm_Raise/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Shoulder_Shrug",
      title: "Shoulder Shrug",
      description:
        "Stand or sit with relaxed shoulders. Lift your shoulders up toward your ears, hold for a moment, and then release them back down.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["trapezius"],
        secondary: [],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Shoulder_Shrug/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Wrist_Circles",
      title: "Wrist Circles",
      description:
        "Extend your arm with your palm facing down. Slowly rotate your wrist in a circular motion, then reverse the direction.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["wrist flexors"],
        secondary: ["wrist extensors"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Wrist_Circles/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Neck_Tilt",
      title: "Neck Tilt",
      description:
        "Sit up straight and slowly tilt your head toward one shoulder until you feel a gentle stretch on the opposite side. Hold for a few seconds and return to center. Repeat on the other side.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["neck muscles"],
        secondary: [],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Neck_Tilt/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Seated_Leg_Lift",
      title: "Seated Leg Lift",
      description:
        "Sit on a chair with your back straight. Slowly lift one leg straight out and hold it for a few seconds before lowering it back down.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["hip flexors"],
        secondary: ["quadriceps"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Seated_Leg_Lift/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Bridge",
      title: "Bridge",
      description:
        "Lie on your back with your knees bent and feet flat on the floor. Lift your hips toward the ceiling by squeezing your glutes, then lower them back slowly.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["glutes"],
        secondary: ["hamstrings", "lower back"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "compound",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Bridge/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Standing_Calf_Raise",
      title: "Standing Calf Raise",
      description:
        "Stand with your feet hip-width apart near a wall for balance. Slowly rise onto your toes, hold briefly, and then lower your heels back down.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["calves"],
        secondary: [],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Standing_Calf_Raise/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Quad_Sets",
      title: "Quad Sets",
      description:
        "Sit with your leg extended and supported on a firm surface. Tighten your quadriceps by pushing the back of your knee down, hold for 5 seconds, then relax.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["quadriceps"],
        secondary: [],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Quad_Sets/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Hamstring_Stretch",
      title: "Hamstring Stretch",
      description:
        "Sit on the floor with one leg extended and the other bent. Lean forward gently over the extended leg until you feel a stretch in the hamstring, then hold for 20-30 seconds.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["hamstrings"],
        secondary: [],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Hamstring_Stretch/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Cat_Cow_Stretch",
      title: "Cat-Cow Stretch",
      description:
        "Begin on your hands and knees in a tabletop position. Alternate between arching your back upward (cat) and dipping it downward (cow), moving slowly with your breath.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["back"],
        secondary: ["core"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "compound",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Cat_Cow_Stretch/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Childs_Pose",
      title: "Child's Pose",
      description:
        "Kneel on the floor and sit back on your heels. Slowly bend forward, extending your arms in front of you and lowering your chest toward the ground.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["back"],
        secondary: ["shoulders"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Childs_Pose/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Seated_Torso_Twist",
      title: "Seated Torso Twist",
      description:
        "Sit upright in a chair with your feet flat on the floor. Slowly twist your torso to one side, hold briefly, then return to center and twist to the opposite side.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["obliques"],
        secondary: ["lower back"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "compound",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Seated_Torso_Twist/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Wall_Pushup",
      title: "Wall Push-up",
      description:
        "Stand facing a wall, arms-length away. Place your palms on the wall and slowly bend your elbows to bring your chest toward the wall, then push back.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["chest"],
        secondary: ["triceps"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "compound",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Wall_Pushup/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Seated_Row",
      title: "Seated Row",
      description:
        "Sit on a chair with your back straight. Mimic the rowing motion by pulling your elbows back while squeezing your shoulder blades together, then release.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["upper back"],
        secondary: ["biceps"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "compound",
        equipment: "Resistance band/ Row machine",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Seated_Row/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Sitting_Spinal_Rotation",
      title: "Sitting Spinal Rotation",
      description:
        "Sit upright on a chair with your feet firmly on the ground. Slowly rotate your upper body to one side, hold for a few seconds, and then rotate to the opposite side.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["obliques"],
        secondary: ["lower back"],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "compound",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Sitting_Spinal_Rotation/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      exercise_id: "Standing_Hip_Abduction",
      title: "Standing Hip Abduction",
      description:
        "Stand next to a stable support with one hand lightly holding on for balance. Slowly lift the leg away from your body to the side, hold briefly, and then lower it back down.",
      level: "beginner",
      body_parts: JSON.stringify({
        primary: ["hip abductors"],
        secondary: [],
      }),
      exercise_details: JSON.stringify({
        force: "neutral",
        mechanic: "isolation",
        equipment: "none",
      }),
      category: "physiotherapy",
      images: JSON.stringify(["Standing_Hip_Abduction/0.jpg"]),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  await knex("exercises").insert(exercises);
}
