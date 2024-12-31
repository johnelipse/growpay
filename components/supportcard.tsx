"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";

export function SupportCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 animate-gradient-slow" />
      <div className="relative z-10 space-y-6">
        <div className="space-y-2 text-start md:text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold text-gray-950"
          >
            Choose Your Support Channel
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-950"
          >
            We{"'"}re here to help 24/7
          </motion.p>
        </div>

        <div className="grid gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-purple-400" />
            <span className="ml-3 text-gray-950">Live Chat</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Phone className="w-5 h-5 text-pink-400" />
            <span className="ml-3 text-gray-950">Call Support</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Mail className="w-5 h-5 text-orange-400" />
            <span className="ml-3 text-gray-950">Email Us</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
