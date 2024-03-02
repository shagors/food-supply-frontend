import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

const CalculationUsers = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleSubs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast.success("Thanks for Subscribe our newsletter");
    setUserEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8 }}
      className="my-20 bg-slate-200 h-60 text-center p-10 rounded"
    >
      <h3 className="text-4xl mb-6">Hurry up! Subscribe our newsletter</h3>
      <form className="w-[420px] mx-auto flex items-center justify-center space-x-2">
        <Input
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Button type="submit" onClick={handleSubs}>
          Subscribe
        </Button>
      </form>
    </motion.div>
  );
};

export default CalculationUsers;
