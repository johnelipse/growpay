"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUpCircle, ArrowDownCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddSavingsForm } from "./savingsForm";

export default function SavingsPage() {
  const [isAddingSavings, setIsAddingSavings] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex  justify-between gap-6 items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-bold tracking-tight">
            Savings
          </h2>
          <p className="text-muted-foreground text-[0.8rem] md:text-[1rem]">
            Manage and track your group savings
          </p>
        </div>
        <Dialog open={isAddingSavings} onOpenChange={setIsAddingSavings}>
          <DialogTrigger asChild>
            <Button size="lg">
              <Plus className="mr-2 h-4 w-4" />{" "}
              <span className="hidden md:block">Add Savings</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Savings</DialogTitle>
              <DialogDescription>
                Record a new savings transaction for a member.
              </DialogDescription>
            </DialogHeader>
            <AddSavingsForm onSuccess={() => setIsAddingSavings(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Savings
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Deposits
              </CardTitle>
              <ArrowUpCircle className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,395.00</div>
              <p className="text-xs text-muted-foreground">
                +8.2% from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Withdrawals
              </CardTitle>
              <ArrowDownCircle className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,205.00</div>
              <p className="text-xs text-muted-foreground">
                -4.5% from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {transactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center"
              >
                <div
                  className={`${
                    transaction.type === "deposit"
                      ? "bg-green-500/20 text-green-500"
                      : "bg-purple-500/20 text-purple-500"
                  } p-2 rounded-full mr-4`}
                >
                  {transaction.type === "deposit" ? (
                    <ArrowUpCircle className="h-4 w-4" />
                  ) : (
                    <ArrowDownCircle className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
                <div
                  className={`${
                    transaction.type === "deposit"
                      ? "text-green-500"
                      : "text-purple-500"
                  } font-medium`}
                >
                  {transaction.type === "deposit" ? "+" : "-"}$
                  {transaction.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const transactions = [
  {
    id: 1,
    type: "deposit",
    description: "Monthly Savings - John Doe",
    amount: "250.00",
    date: "March 1, 2024",
  },
  {
    id: 2,
    type: "withdrawal",
    description: "Emergency Fund Withdrawal - Jane Smith",
    amount: "100.00",
    date: "February 28, 2024",
  },
  {
    id: 3,
    type: "deposit",
    description: "Monthly Savings - Robert Johnson",
    amount: "300.00",
    date: "February 28, 2024",
  },
  {
    id: 4,
    type: "deposit",
    description: "Additional Contribution - Sarah Wilson",
    amount: "150.00",
    date: "February 27, 2024",
  },
  {
    id: 5,
    type: "withdrawal",
    description: "Loan Disbursement - Michael Brown",
    amount: "500.00",
    date: "February 26, 2024",
  },
];
