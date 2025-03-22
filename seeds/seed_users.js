export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  const users = [
    {
      id: 1,
      name: "Aisha Khan",
      email: "aisha.khan@brain.io",
      password: "password",
      role: "physio_therapist",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "Raj Patel",
      email: "raj.patel@brain.io",
      password: "password",
      role: "physio_therapist",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      email: "miguel.rodriguez@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      name: "Li Wei",
      email: "li.wei@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 5,
      name: "Fatima Al-Hassan",
      email: "fatima.al-hassan@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 6,
      name: "Santiago Garcia",
      email: "santiago.garcia@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 7,
      name: "Yara Nasser",
      email: "yara.nasser@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 8,
      name: "Amir El-Sayed",
      email: "amir.el-sayed@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 9,
      name: "Bao Nguyen",
      email: "bao.nguyen@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 10,
      name: "Priya Reddy",
      email: "priya.reddy@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 11,
      name: "Kwame Mensah",
      email: "kwame.mensah@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 12,
      name: "Zara Ibrahim",
      email: "zara.ibrahim@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 13,
      name: "Carlos Mendez",
      email: "carlos.mendez@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 14,
      name: "Ananya Singh",
      email: "ananya.singh@brain.io",
      password: "password",
      role: "client",
      physiotherapistId: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  await knex("users").insert(users);
}
