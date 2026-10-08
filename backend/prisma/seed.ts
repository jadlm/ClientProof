import { PrismaClient, Plan, ImageType, LeadStatus, EventType } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();

// Initialize Supabase for file upload simulation
const supabase = createClient(
  process.env.SUPABASE_URL || "http://localhost:54321",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "dummy-key"
);

async function uploadPlaceholderImage(
  bucket: string,
  path: string,
  type: "before" | "after" | "gallery"
): Promise<string> {
  const colors: Record<string, string> = {
    before: "8B7355", // Brown for before
    after: "E8D5C4", // Cream for after
    gallery: "D4A5A5", // Mauve for gallery
  };

  return `https://via.placeholder.com/800x600/${colors[type]}/FFFFFF?text=${type.toUpperCase()}`;
}

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing data
  await prisma.analyticsEvent.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.projectImage.deleteMany();
  await prisma.project.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.businessProfile.deleteMany();
  await prisma.user.deleteMany();

  // Create demo user
  const user = await prisma.user.create({
    data: {
      id: "demo-user-001",
      email: "designer@clientproof.app",
      name: "Couronne Urban",
      avatar:
        "https://via.placeholder.com/200x200/111111/FFFFFF?text=Couronne",
    },
  });

  console.log("✅ User created:", user.email);

  // Create business profile
  const businessProfile = await prisma.businessProfile.create({
    data: {
      userId: user.id,
      businessName: "Couronne Urban",
      slug: "couronne-urban",
      category: "Interior Design",
      description:
        "Premium interior design studio specializing in luxury residential projects. We transform spaces into beautiful, functional environments that reflect your style.",
      logo: "https://via.placeholder.com/200x200/111111/FFFFFF?text=CU",
      coverImage:
        "https://via.placeholder.com/1600x400/F8F7F4/111111?text=Couronne+Urban",
      phone: "+212 5 22 12 34 56",
      email: "hello@couronne.ma",
      website: "https://couronne.ma",
    },
  });

  console.log("✅ Business profile created");

  const projectsData = [
    {
      title: "Modern Kitchen",
      slug: "modern-kitchen-casablanca",
      category: "Interior Design",
      description: `Transform your culinary space into a modern masterpiece.`,
      location: "Casablanca, Morocco",
      completionDate: new Date("2024-06-15"),
      duration: "8 weeks",
      budget: "45,000 - 65,000 MAD",
    },
    {
      title: "Moroccan Living Room",
      slug: "moroccan-living-room-marrakech",
      category: "Interior Design",
      description: `Experience the warmth and elegance of traditional Moroccan design meets contemporary comfort.`,
      location: "Marrakech, Morocco",
      completionDate: new Date("2024-05-20"),
      duration: "10 weeks",
      budget: "55,000 - 80,000 MAD",
    },
    {
      title: "Custom Dressing",
      slug: "custom-dressing-rabat",
      category: "Interior Design",
      description: `A bespoke dressing room designed for luxury and organization.`,
      location: "Rabat, Morocco",
      completionDate: new Date("2024-04-10"),
      duration: "6 weeks",
      budget: "35,000 - 50,000 MAD",
    },
    {
      title: "Luxury Bedroom",
      slug: "luxury-bedroom-fes",
      category: "Interior Design",
      description: `A serene sanctuary designed for ultimate comfort and elegance.`,
      location: "Fes, Morocco",
      completionDate: new Date("2024-07-05"),
      duration: "7 weeks",
      budget: "40,000 - 60,000 MAD",
    },
    {
      title: "TV Wall",
      slug: "tv-wall-tanger",
      category: "Interior Design",
      description: `A statement TV wall that combines technology and design seamlessly.`,
      location: "Tangier, Morocco",
      completionDate: new Date("2024-08-12"),
      duration: "5 weeks",
      budget: "25,000 - 40,000 MAD",
    },
    {
      title: "Custom Woodwork",
      slug: "custom-woodwork-agadir",
      category: "Interior Design",
      description: `Bespoke wooden installations that showcase master craftsmanship and attention to detail.`,
      location: "Agadir, Morocco",
      completionDate: new Date("2024-09-20"),
      duration: "12 weeks",
      budget: "70,000 - 100,000 MAD",
    }
  ];

  for (const projectData of projectsData) {
    const project = await prisma.project.create({
      data: {
        ...projectData,
        userId: user.id,
        businessProfileId: businessProfile.id,
        published: true,
      },
    });

    await prisma.projectImage.createMany({
      data: [
        { projectId: project.id, url: await uploadPlaceholderImage('test', 'test', 'before'), type: 'BEFORE', sortOrder: 0, caption: 'Before' },
        { projectId: project.id, url: await uploadPlaceholderImage('test', 'test', 'after'), type: 'AFTER', sortOrder: 1, caption: 'After' },
        { projectId: project.id, url: await uploadPlaceholderImage('test', 'test', 'gallery'), type: 'GALLERY', sortOrder: 2, caption: 'Gallery 1' },
      ]
    });

    await prisma.testimonial.create({
      data: {
        projectId: project.id,
        clientName: "Happy Client",
        rating: 5,
        comment: "Excellent work!",
        approved: true
      }
    });

    await prisma.lead.create({
      data: {
        businessProfileId: businessProfile.id,
        projectId: project.id,
        name: "Test Lead",
        email: "test@lead.com",
        phone: "+212 6 12 34 56 78",
        status: "NEW"
      }
    });

    console.log(`✅ Project created: ${project.title}`);
  }

  console.log("🌱 Database seed complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
