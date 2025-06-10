import "dotenv/config";

export default {
  expo: {
    name: "MyApp",
    slug: "myapp",
    extra: {
      apiKey: process.env.API_KEY,
    },
  },
};
