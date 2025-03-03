export default defineEventHandler((event) => {
    setHeader(event, "Content-Type", "applicaton/json");
    return {
      database_status: true,
      routes: [
        { 
            slug: "data", 
            title: "DAT30", 
            date: "2025-12-22", 
            mdContents: '# Hello World'
        },
        { 
            slug: "ygr", 
            title: "ygw",
            date: "2025-12-22", 
            mdContents: "# Hello World"
        },
      ]
    }
  });
  