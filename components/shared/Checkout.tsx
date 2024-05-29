"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { checkoutCoins } from "@/lib/actions/transaction.actions";
import { useToast } from "@/components/ui/use-toast";

const Checkout = (
  {
    plan,
    amount,
    coins,
    buyerId,
  }: {
    plan: string;
    amount: number;
    coins: number;
    buyerId: string;
  }
) => {
  
  const { toast } = useToast();

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast({
        title: "Order placed!",
        description: "You will receive an email confirmation",
        duration: 5000,
        className: "success-toast",
      });
    }

    if (query.get("canceled")) {
      toast({
        title: "Order canceled!",
        description: "Continue to shop around and checkout when you're ready",
        duration: 5000,
        className: "error-toast",
      });
    }
  }, []);
  
  const onCheckout = async () => {
    const transaction = {
      plan,
      amount,
      coins,
      buyerId,
    };

    await checkoutCoins(transaction);
  };

  return (
    <form action={onCheckout} method="POST">
      <section>
        <Button
          type="submit"
          role="link"
          className="w-full rounded-full"
        >
          Buy Coins
        </Button>
      </section>
    </form>
  );
};

export default Checkout;