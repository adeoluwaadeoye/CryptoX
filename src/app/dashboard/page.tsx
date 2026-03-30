import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Wallet, TrendingUp, Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Dashboard
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Live portfolio overview
          </p>
        </div>

        <Button className="w-full sm:w-auto bg-linear-to-r from-emerald-500 to-cyan-700 cursor-pointer">
          Deposit Funds
        </Button>

      </div>

      {/* STATS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <Card>
          <CardContent className="p-4 sm:p-6 flex justify-between items-center">
            <div>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Portfolio
              </p>
              <h2 className="text-xl sm:text-2xl font-bold">
                $24,890
              </h2>
            </div>
            <Wallet className="text-orange-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6 flex justify-between items-center">
            <div>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Profit
              </p>
              <h2 className="text-xl sm:text-2xl font-bold">
                +$3,120
              </h2>
            </div>
            <TrendingUp className="text-blue-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6 flex justify-between items-center">
            <div>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Trades
              </p>
              <h2 className="text-xl sm:text-2xl font-bold">
                42
              </h2>
            </div>
            <Activity className="text-emerald-500" />
          </CardContent>
        </Card>

      </section>

      {/* TRANSACTIONS */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            Recent Transactions
          </h2>

          <div className="space-y-3">
            {["BTC", "ETH", "SOL"].map((coin, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b border-border pb-3"
              >

                <div>
                  <p className="font-medium text-sm sm:text-base">
                    Bought {coin}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Just now
                  </p>
                </div>

                <Badge className="w-fit bg-emerald-500/10 text-emerald-500 text-md">
                  Success
                </Badge>

              </div>
            ))}
          </div>

        </CardContent>
      </Card>

    </div>
  );
}