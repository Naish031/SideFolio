import knkassociates from "public/images/knk_landing_page.png";
import knkassociates2 from "public/images/knk_about_page.png";
import knkassociates3 from "public/images/knk_contact_page.png";
import flash from "public/images/flash_landing_page.png";
import flash2 from "public/images/flash_second_page.png";
import flash3 from "public/images/flash_about_page.png";
import mda from "public/images/mda_landing_page.png";
import mda2 from "public/images/mda_heritage_page.png";
import mda3 from "public/images/mda_search_page.png";
import naish from "public/images/naish_portfolio_landing_page.png";
import naish2 from "public/images/naish_portfolio_second_page.png";
import naish3 from "public/images/naish_portfolio_contact_page.png";
import nextRep from "public/images/nextRep_landing_page.png";
import nextRep2 from "public/images/nextRep_second_page.png";
import nextRep3 from "public/images/nextRep_product_page.png";

export const products = [
  {
    href: "https://www.knkassociates.org/",
    title: "Knkassociates",
    description:
      "A premier construction and engineering consultancy delivering innovative infrastructure solutions across Pakistan.",
    thumbnail: knkassociates,
    images: [knkassociates2, knkassociates3],
    stack: ["Nextjs", "Tailwindcss", "Motion"],
    slug: "Knkassociates",
    content: (
      <div>
        <p>
          KNK Associates is a leading multidisciplinary firm specializing in
          turnkey construction solutions, architectural engineering, and project
          management services. With decades of experience shaping
          Pakistan&apos;s urban landscape, we deliver excellence in commercial
          complexes, hospitality infrastructure, and public facilities - from
          conceptual design through precision execution. Our portfolio includes
          landmark projects like the Multan Cricket Stadium and Serena Hotel
          developments, showcasing our commitment to blending innovative
          engineering with sustainable practices.
        </p>
        <p>
          Our team of certified engineers, architects, and project managers
          combines cutting-edge BIM technologies with hands-on site expertise to
          overcome complex construction challenges. We partner with both public
          institutions and private enterprises to create resilient structures
          that meet international quality standards while respecting local
          environmental and cultural contexts. From mechanical system
          installations to full-scale facility management, KNK Associates
          remains dedicated to building Pakistan&apos;s future through
          technically sound, deadline-driven project delivery.
        </p>
      </div>
    ),
  },
  {
    href: "https://next-rep-store.vercel.app/",
    title: "NextRep - AI-Powered Ecommerce Revolution",
    description:
      "A cutting-edge e-commerce platform enhanced with an AI shopping assistant for personalized product discovery.",
    thumbnail: nextRep,
    images: [nextRep2, nextRep3],
    stack: ["Nextjs", "Tailwindcss", "Shopify CMS", "OpenAI API"],
    slug: "NextRep",
    content: (
      <div>
        <p>
          NextRep reimagines online shopping by integrating a conversational AI
          assistant directly into its retail experience. This final-year project
          demonstrates modern e-commerce capabilities with features like dynamic
          product categorization, real-time inventory management, and a
          GPT-powered chatbot that understands natural language queries. The AI
          assistant guides users through personalized recommendations, answers
          product-specific questions, and streamlines the path to purchase –
          exemplifying how machine learning can elevate user engagement in
          digital marketplaces.
        </p>
        <p>
          Built with Next.js for blazing-fast performance and styled using
          Tailwind CSS, NextRep combines robust functionality with sleek
          minimalism. The platform showcases core e-commerce operations
          including cart management, checkout workflows, and order tracking,
          while its AI component adds an innovative layer of interactivity. This
          project highlights technical mastery of full-stack development, API
          integration, and ethical AI implementation, serving as a blueprint for
          the future of intelligent, user-centric online retail.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://mda.space/",
    title: "MDA Space",
    description:
      "A cutting-edge creative studio website showcasing immersive 3D animations and interactive experiences",
    thumbnail: mda,
    images: [mda2, mda3],
    stack: ["Nextjs", "Tailwindcss", "GSAP"],
    slug: "mda-space",
    content: (
      <div>
        <p>
          MDA Space is a digital innovation lab specializing in 3D visualization
          and interactive web experiences for luxury brands. The platform serves
          as both a portfolio and technical showcase, featuring fluid geometric
          animations and dynamic scroll-triggered sequences that demonstrate
          their capability to transform complex architectural concepts into
          engaging digital narratives. The website targets high-end clients in
          architecture and product design industries.
        </p>
        <p>
          As UI lead, I architected the complete visual experience including
          custom GSAP scroll animations for the hero section&apos;s morphing
          geometries and Three.js-powered 3D rotations. Developed a responsive
          layout system maintaining visual fidelity from desktop to mobile, with
          particular focus on touch-friendly interaction patterns. Implemented
          complex timeline animations for case study transitions and designed
          the particle effect loading screen. Optimized WebGL renders for
          performance without compromising visual quality across devices.
        </p>
      </div>
    ),
  },
  {
    href: "https://flashcosmetics.com/",
    title: "Flash Cosmetics",
    description:
      "Modern e-commerce platform for premium beauty products with AI-powered recommendations",
    thumbnail: flash,
    images: [flash2, flash3],
    stack: ["HTML", "Tailwindcss"],
    slug: "flash-cosmetics",
    content: (
      <div>
        <p>
          Flash Cosmetics is a direct-to-consumer beauty brand offering curated
          skincare and makeup collections. The platform combines e-commerce
          functionality with educational content through a clean, approachable
          interface that emphasizes product photography and ingredient
          transparency. Features include virtual try-on capabilities and
          personalized regimen builders for a tailored shopping experience.
        </p>
        <p>
          Led UI development with focus on creating a mobile-first responsive
          layout system that adapts to product catalog complexity. Designed and
          implemented the gradient-based color system ensuring brand consistency
          across 120+ product pages. Developed custom Framer Motion transitions
          for collection filtering and cart interactions. Created a modular
          component library in Storybook to maintain design consistency across
          team members. Optimized image loading sequences to handle
          high-resolution product galleries without compromising page speed.
        </p>
      </div>
    ),
  },
  {
    href: "https://itsnaish.vercel.app/",
    title: "Developer Portfolio v1.0",
    description:
      "A modern interactive portfolio showcasing full-stack development projects with smooth animations and responsive design.",
    thumbnail: naish,
    images: [naish2, naish3],
    stack: ["Nextjs", "Tailwindcss", "Motion"],
    slug: "itsnaish",
    content: (
      <div>
        <p>
          This portfolio iteration combines minimalist design with dynamic
          interactions, built using Next.js for optimal performance and Tailwind
          CSS for pixel-perfect responsiveness. The interface features smooth
          scroll animations and hover transitions powered by Framer Motion,
          creating an engaging user experience. It showcases diverse web
          development projects through interactive cards while maintaining a
          clean, content-first approach that puts technical skills and work
          samples at the forefront.
        </p>
        <p>
          The architecture demonstrates modern web practices with optimized
          asset loading and strategic component composition. A dark/light theme
          toggle enhances accessibility, while the project filtering system
          allows targeted exploration of different tech stacks. The contact
          section integrates seamlessly with email services, completing a
          professional package that balances aesthetic appeal with functional
          depth. Performance optimizations ensure swift loading times across
          devices, making it both a portfolio and a testament to development
          expertise.
        </p>
      </div>
    ),
  },
];
