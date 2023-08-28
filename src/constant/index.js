import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "PicturePerfctAI", href: "https://pictureperfect.ai/" },
      { title: "GravityBlogs", href: "https://gravityblogs.com/" },
      { title: "Ahrefs DR & Rank Checker", href: "https://rapidapi.com/ayushsomanime/api/ahrefs-dr-rank-checker/" },
      // { title: "Blog 101", href: "/work/blog101" },

      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      // { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];