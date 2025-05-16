import NextAuth from "next-auth";
import TikTok from "next-auth/providers/tiktok";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    TikTok({
      async profile(profile, tokens) {
        const res = await fetch("https://open.tiktokapis.com/v2/user/info/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
            "Content-Type": "application/json",
          },
        });

        const { data } = await res.json();
        console.log("Data_user", data);
        return {
          id: data.user.open_id,
          name: data.user.display_name,
          image: data.user.avatar_url,
        };
      },
    }),
  ],
});
