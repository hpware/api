export default defineEventHandler((event) => {
    setHeader(event, "Content-Type", "applicaton/json");
    return {
      recentevents: true,
      events: [
        {
          item: 0,
          name: "2025",
          date: "2025-05-21",
          dmImage: "#",
          link: "/eventDetails/data",
        },
        {
          item: 1,
          name: "20203",
          date: "2025-02-21",
          dmImage: "https://images.unsplash.com/photo-1721100152646-1bbfeb581505",
          link: "#",
        },
        {
          item: 2,
          name: "20203",
          date: "2025-02-21",
          dmImage: "https://images.unsplash.com/photo-1721100152646-1bbfeb581505",
          link: "#",
        },
        {
          item: 3,
          name: "20203",
          date: "2025-02-21",
          dmImage: "https://images.unsplash.com/photo-1721100152646-1bbfeb581505",
          link: "#",
        },
        {
          item: 4,
          name: "20203",
          date: "2025-02-21",
          dmImage: "https://images.unsplash.com/photo-1721100152646-1bbfeb581505",
          link: "#",
        }
      ]
    }
  });
  