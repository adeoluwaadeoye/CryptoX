import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Wallet,
  TrendingUp,
  Activity,
} from "lucide-react";


export default function DashboardPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Live portfolio overview</p>
        </div>

        <Button className="bg-linear-to-r from-emerald-500 to-cyan-500">
          Deposit Funds
        </Button>
      </div>

      {/* STATS */}
      <section className="grid md:grid-cols-3 gap-6">

        <Card className="bg-card border-border">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-muted-foreground text-sm">Portfolio</p>
              <h2 className="text-2xl font-bold">$24,890</h2>
            </div>
            <Wallet className="text-emerald-500" />
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-muted-foreground text-sm">Profit</p>
              <h2 className="text-2xl font-bold">+$3,120</h2>
            </div>
            <TrendingUp className="text-emerald-500" />
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-muted-foreground text-sm">Trades</p>
              <h2 className="text-2xl font-bold">42</h2>
            </div>
            <Activity className="text-emerald-500" />
          </CardContent>
        </Card>
      </section>
      {/* TRANSACTIONS */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">
            Recent Transactions
          </h2>

          <div className="space-y-3">
            {["BTC", "ETH", "SOL"].map((coin, i) => (
              <div key={i} className="flex justify-between border-b border-border pb-2">

                <div>
                  <p className="font-medium">Bought {coin}</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>

                <Badge className="bg-emerald-500/10 text-emerald-500">
                  Success
                </Badge>

              </div>
            ))}
          </div>

        </CardContent>
      </Card>
    </>
  );
}