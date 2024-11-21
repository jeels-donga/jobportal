import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { sendEmail } from "@/helpers/mailer";
connect();
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const reqBody = await request.json();
    const hashPassword = (password: any) => {
      return bcrypt.hash(password, 10);
    };
    const todayDate = () => {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
    };

    const formattedDate = todayDate();
    const { firstName, lastName, email, phone, password } = reqBody;
    const created_at = formattedDate;
    // Check if the user already exists
    const hashedPassword = await hashPassword(password);
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({
        status: 400,
        msg: "Already Register Please Enter Different Email",
      });
    } else if (user) {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: hashedPassword,
        created_at: created_at,
      };
      let savedUserData = await User.create(userData);

      if (savedUserData) {
        savedUserData.accessToken = jwt.sign(
          { userId: savedUserData._id },
          process.env.JWT_SECRET!
        );

        NextResponse.json({
          status: 200,
          data: savedUserData,
          msg: "Successfully Added",
        });
      } else {
        NextResponse.json({
          status: 400,
          msg: "Something happened wrong, please try again after sometime.",
        });
      }
    }
  } catch (error: any) {
    console.error("Error in user registration:", error.message);

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
