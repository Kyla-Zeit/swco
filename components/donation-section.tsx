"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Shield, CreditCard, Droplets } from "lucide-react";

type CheckedState = boolean | "indeterminate";

const donationAmounts = [
  { amount: 25, impact: "Provides clean water for 1 person for 2 weeks" },
  { amount: 50, impact: "Provides clean water for a family for 1 month" },
  { amount: 100, impact: "Supports well maintenance for 3 months" },
  { amount: 250, impact: "Funds water system installation for a school" },
];

export function DonationSection() {
  // keep as strings; UI components expect string values
  const [selectedAmount, setSelectedAmount] = React.useState<string>("50");
  const [customAmount, setCustomAmount] = React.useState<string>("");
  const [isMonthly, setIsMonthly] = React.useState<boolean>(false);

  const [donorInfo, setDonorInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleDonate = () => {
    const amount =
      selectedAmount === "custom" ? customAmount.trim() : selectedAmount;

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    alert(
      `Thank you! This would redirect to a secure payment processor.\n\nAmount: $${amount} CAD\nType: ${
        isMonthly ? "Monthly" : "One-time"
      }`
    );
  };

  const currentAmount =
    selectedAmount === "custom" ? customAmount.trim() : selectedAmount;

  return (
    <section id="donate" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            Your donation directly funds clean water projects that transform lives
            in East African communities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center space-x-2">
                <Heart className="w-6 h-6 text-primary" />
                <span>Donate Now</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* type */}
              <div className="flex items-center justify-center space-x-3 p-4 bg-secondary rounded-lg">
                <Checkbox
                  id="monthly"
                  checked={isMonthly}
                  onCheckedChange={(checked: CheckedState) =>
                    setIsMonthly(checked === true)
                  }
                />
                <Label htmlFor="monthly" className="text-sm font-medium">
                  Make this a monthly donation
                </Label>
              </div>

              {/* amount */}
              <div>
                <Label className="text-base font-semibold mb-3 block">
                  Select Amount (CAD)
                </Label>

                <RadioGroup
                  value={selectedAmount}
                  onValueChange={(v: string) => setSelectedAmount(v)}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {donationAmounts.map((option) => {
                      const v = String(option.amount);
                      return (
                        <div key={v} className="relative">
                          <RadioGroupItem
                            value={v}
                            id={`amt-${v}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`amt-${v}`}
                            className="flex flex-col p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-colors"
                          >
                            <span className="text-xl font-bold">${v}</span>
                            <span className="text-xs text-muted-foreground mt-1">
                              {option.impact}
                            </span>
                          </Label>
                        </div>
                      );
                    })}
                  </div>

                  {/* custom */}
                  <div className="mt-4">
                    <RadioGroupItem
                      value="custom"
                      id="custom"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="custom"
                      className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-colors"
                    >
                      <span className="mr-3">Custom Amount:</span>
                      <Input
                        type="number"
                        inputMode="numeric"
                        min={1}
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount("custom");
                        }}
                        className="flex-1"
                      />
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* donor info */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  Donor Information
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={donorInfo.firstName}
                      onChange={(e) =>
                        setDonorInfo((d) => ({ ...d, firstName: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={donorInfo.lastName}
                      onChange={(e) =>
                        setDonorInfo((d) => ({ ...d, lastName: e.target.value }))
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={donorInfo.email}
                    onChange={(e) =>
                      setDonorInfo((d) => ({ ...d, email: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={donorInfo.phone}
                    onChange={(e) =>
                      setDonorInfo((d) => ({ ...d, phone: e.target.value }))
                    }
                  />
                </div>
              </div>

              {/* submit */}
              <Button
                onClick={handleDonate}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-4 btn-caps"
                disabled={
                  !currentAmount ||
                  Number(currentAmount) <= 0 ||
                  !donorInfo.firstName ||
                  !donorInfo.lastName ||
                  !donorInfo.email
                }
              >
                <CreditCard className="mr-2 w-5 h-5" />
                Donate ${currentAmount || "0"} {isMonthly ? "Monthly" : "Now"}
              </Button>

              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Secure donation powered by industry-standard encryption</span>
              </div>
            </CardContent>
          </Card>

          {/* INFO / IMPACT */}
          <div className="space-y-8">
            <Card className="border-0 bg-primary-foreground/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Droplets className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold">Your Impact</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-primary-foreground/20">
                    <span>$25</span>
                    <span className="text-sm">Clean water for 1 person (2 weeks)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-primary-foreground/20">
                    <span>$50</span>
                    <span className="text-sm">Clean water for a family (1 month)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-primary-foreground/20">
                    <span>$100</span>
                    <span className="text-sm">Well maintenance (3 months)</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span>$250</span>
                    <span className="text-sm">School water system installation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-primary-foreground/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Why Donate to Samawada?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>100% of donations go directly to water projects</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Registered Canadian charity (tax receipts available)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Community-driven sustainable solutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Regular updates on project progress</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
