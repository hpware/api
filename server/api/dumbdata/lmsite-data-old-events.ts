export default defineEventHandler((event) => {
    setHeader(event, "Content-Type", "applicaton/json");
    return {
      recentevents: true,
      events: [
        {
            item: 0,
            name: "hello",
            year: 2024,
            dmImage: "#",
            link: "/eventDetails/data"
        },
        {
            item: 1,
            name: "43t",
            year: 2024,
            dmImage: "https://images.unsplash.com/photo-1721100152646-1bbfeb581505",
            link: "#"
        },
        {
            item: 2,
            name: "4scd",
            year: 2022,
            dmImage: "https://images.unsplash.com/photo-1721100152646-1bbfeb581505",
            link: "#"
        },
        {
            item: 3,
            name: "wfecs",
            year: 2025,
            dmImage: "https://images.unsplash.com/photo-1721100152646-1bbfeb581505",
            link: "#"
        },
      ]
    }
  });
  