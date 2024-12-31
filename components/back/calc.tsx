"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalculatorIcon, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CalculatorPage() {
  const [calculationType, setCalculationType] = useState("dividend");
  const [amount, setAmount] = useState("");
  const [members, setMembers] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const totalAmount = parseFloat(amount);
    const memberCount = parseInt(members);

    if (isNaN(totalAmount) || isNaN(memberCount)) return;

    const calculatedResult = totalAmount / memberCount;
    setResult(calculatedResult);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Calculator</h2>
        <p className="text-muted-foreground">
          Calculate dividends and distributions
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent">
            <CardHeader>
              <CardTitle>Distribution Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Calculation Type</Label>
                <Select
                  value={calculationType}
                  onValueChange={setCalculationType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select calculation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dividend">
                      Dividend Distribution
                    </SelectItem>
                    <SelectItem value="savings">
                      Savings Distribution
                    </SelectItem>
                    <SelectItem value="loan">Loan Distribution</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Total Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Number of Members</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="0"
                    value={members}
                    onChange={(e) => setMembers(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <Button onClick={calculate} className="w-full" size="lg">
                <CalculatorIcon className="mr-2 h-4 w-4" />
                Calculate
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {result !== null && (
            <Card className="bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent">
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Amount per Member</Label>
                  <div className="text-4xl font-bold text-green-600">
                    ${result.toFixed(2)}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Total Amount
                    </span>
                    <span className="font-medium">${amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Number of Members
                    </span>
                    <span className="font-medium">{members}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Calculation Type
                    </span>
                    <span className="font-medium capitalize">
                      {calculationType}
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
