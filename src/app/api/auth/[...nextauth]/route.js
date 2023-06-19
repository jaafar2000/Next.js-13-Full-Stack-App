import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.G_C_ID,
      clientSecret: process.env.G_C_S,
    }),
    CredentialsProvider({
      id: "credentials",
      name: " Credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswprdCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswprdCorrect) {
              return user;
            } else {
              throw new Error("wrong credentials");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages:{
    error:'/dashboard/login'
  }
});
export { handler as GET, handler as POST };
