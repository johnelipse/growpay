import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calculator, Calendar, PiggyBank, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Members
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Savings
            </CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$518.75</div>
            <p className="text-xs text-muted-foreground">Per member</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Meeting</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 Mar</div>
            <p className="text-xs text-muted-foreground">In 12 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Savings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  member: "John Doe",
                  amount: "$250",
                  date: "2024-03-01",
                  status: "Completed",
                },
                {
                  member: "Jane Smith",
                  amount: "$300",
                  date: "2024-03-01",
                  status: "Pending",
                },
                {
                  member: "Robert Johnson",
                  amount: "$200",
                  date: "2024-02-29",
                  status: "Completed",
                },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{row.member}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        row.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      )}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Calculator Card */}
      <Card>
        <CardHeader>
          <CardTitle>Savings Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Total Savings</label>
              <input
                type="number"
                className="w-full rounded-md border px-3 py-2"
                placeholder="Enter total amount"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Number of Members</label>
              <input
                type="number"
                className="w-full rounded-md border px-3 py-2"
                placeholder="Enter number of members"
              />
            </div>
            <div className="md:col-span-2">
              <Button className="w-full">Calculate Distribution</Button>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium">
                  Each member would receive:
                </p>
                <p className="text-2xl font-bold">$518.75</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
