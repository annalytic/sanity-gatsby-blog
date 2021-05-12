export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609c2920dd07ec10aa6160d0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8b5xga55",
                  apiId: "eee9e325-2e89-4ddc-8575-78b7a81ab109",
                },
                {
                  buildHookId: "609c2920a31b980f76883b5c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ihd3qhxt",
                  apiId: "62450a5e-151b-4690-a15c-4d30a7fc0801",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/annalytic/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ihd3qhxt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
