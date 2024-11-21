import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();
async function validatePassword(plainPassword: any, hashedPassword: any) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
// POST /api/auth/login
export default async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ status: "400", message: "User not found" });
    }
    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) {
      return NextResponse.json({
        status: 400,
        message: "Invalid password",
      });
    }

    if (user.role !== "Admin") {
      return NextResponse.json({
        status: "error",
        message: "You don't have permission to access this platform",
      });
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: "8h" } // Optional: Add an expiration time
    );

    await User.findByIdAndUpdate(user._id, { accessToken });

    // Respond with the user data and access token
    return NextResponse.json({
      status: 200,
      data: { ...user.toObject(), accessToken },
      message: "Login successfully",
    });
  } catch (error: any) {
    NextResponse.json({ status: 500, message: error.message });
  }
}
