"use server";

import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import { handleError } from "../utils";
import { connectToDB } from "../database/mongoose";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDB();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectToDB();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDB();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDB();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// USE COINS :
export async function updateCoins(userId: string, freeCoins: number) {
  try {
    await connectToDB();

    const updatedUserCoins = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { coinsBalance: freeCoins }},
      { new: true }
    )

    if(!updatedUserCoins) throw new Error("User coins update failed");

    return JSON.parse(JSON.stringify(updatedUserCoins));
  } catch (error) {
    handleError(error);
  }
}