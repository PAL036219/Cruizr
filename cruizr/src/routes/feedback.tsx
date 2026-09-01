import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, MessageSquare, ClipboardList, Activity, CreditCard, Rocket, FileText } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/feedback")({
  component: Feedback,
});

function Feedback() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mzebdbol", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("Feedback submitted successfully!", {
          description: "Thank you for helping us shape the future of CRUIZR.",
        });
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        toast.error("Oops! There was a problem submitting your feedback.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 md:pt-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-semibold text-[var(--orange)] shadow-sm">
              <MessageSquare size={14} />
              <span>We value your input</span>
            </div>
            <h1 className="mt-6 font-heading text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Help us build <span className="text-gradient">better rides</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
              Your detailed feedback directly shapes the CRUIZR roadmap. Tell us how you ride and what you need most.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <form onSubmit={handleSubmit} className="p-6 md:p-12">
              <div className="space-y-16">
                
                {/* 1. Usage context */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 border-b border-border pb-4 text-xl font-bold text-foreground">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--orange)]/10 text-[var(--orange)]">
                      <ClipboardList size={20} />
                    </div>
                    <h2>1. Usage Context</h2>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">How often do you ride?</Label>
                    <RadioGroup defaultValue="weekends" name="ride-frequency" className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                      {["Daily", "Few times a week", "Weekends only", "Rarely"].map((option) => (
                        <div key={option} className="flex items-center space-x-2 rounded-lg border border-border bg-background p-3 hover:bg-muted/50">
                          <RadioGroupItem value={option.toLowerCase().replace(/ /g, '-')} id={`freq-${option}`} />
                          <Label htmlFor={`freq-${option}`} className="w-full cursor-pointer font-medium">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Which CRUIZR features have you used? (Select all that apply)</Label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {["GPS group tracking", "Intercom", "Riding clubs", "Live streaming", "Offline maps"].map((feature) => (
                        <div key={feature} className="flex items-center space-x-3 rounded-lg border border-border bg-background p-4 hover:bg-muted/50">
                          <Checkbox id={`feature-${feature}`} name={`Feature Used: ${feature}`} value="Yes" />
                          <Label htmlFor={`feature-${feature}`} className="w-full cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {feature}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Do you usually ride solo, in a small group, or with a club?</Label>
                    <RadioGroup defaultValue="small-group" name="group-size" className="grid gap-3 sm:grid-cols-3">
                      {["Solo", "Small group", "Club"].map((option) => (
                        <div key={option} className="flex items-center space-x-2 rounded-lg border border-border bg-background p-3 hover:bg-muted/50">
                          <RadioGroupItem value={option.toLowerCase().replace(/ /g, '-')} id={`group-${option}`} />
                          <Label htmlFor={`group-${option}`} className="w-full cursor-pointer font-medium">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                {/* 2. Signal/mesh relevance */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 border-b border-border pb-4 text-xl font-bold text-foreground">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
                      <Activity size={20} />
                    </div>
                    <h2>2. Connectivity on the Road</h2>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">How often do you ride through low or no-signal areas (highways, hills, rural stretches)?</Label>
                    <Select defaultValue="sometimes" name="no-signal-frequency">
                      <SelectTrigger className="h-14 bg-background text-base">
                        <SelectValue placeholder="Select frequency..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="often">Often (Almost every long ride)</SelectItem>
                        <SelectItem value="sometimes">Sometimes (Occasionally lose signal)</SelectItem>
                        <SelectItem value="rarely">Rarely (Mostly ride in cities)</SelectItem>
                        <SelectItem value="never">Never (Always have full signal)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Have you ever lost intercom connection with your group due to bad signal?</Label>
                    <RadioGroup defaultValue="occasionally" name="lost-intercom" className="grid gap-3 sm:grid-cols-3">
                      {["Yes, often", "Occasionally", "Never"].map((option) => (
                        <div key={option} className="flex items-center space-x-2 rounded-lg border border-border bg-background p-3 hover:bg-muted/50">
                          <RadioGroupItem value={option.toLowerCase().replace(/ /g, '-')} id={`intercom-${option}`} />
                          <Label htmlFor={`intercom-${option}`} className="w-full cursor-pointer font-medium">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                {/* 3. Pricing & willingness to pay */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 border-b border-border pb-4 text-xl font-bold text-foreground">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
                      <CreditCard size={20} />
                    </div>
                    <h2>3. Pricing & Preferences</h2>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Which would you prefer for premium features?</Label>
                    <RadioGroup defaultValue="monthly" name="pricing-preference" className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center space-x-2 rounded-lg border border-border bg-background p-4 hover:bg-muted/50">
                        <RadioGroupItem value="pay-per-ride" id="price-ride" />
                        <Label htmlFor="price-ride" className="w-full cursor-pointer font-medium">Pay-per-ride pass</Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-lg border border-border bg-background p-4 hover:bg-muted/50">
                        <RadioGroupItem value="monthly" id="price-monthly" />
                        <Label htmlFor="price-monthly" className="w-full cursor-pointer font-medium">Monthly subscription</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">What's the most you'd pay per month for offline mesh intercom + off-grid SOS?</Label>
                    <Select defaultValue="50-99" name="willingness-to-pay">
                      <SelectTrigger className="h-14 bg-background text-base">
                        <SelectValue placeholder="Select amount..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">₹0 (Wouldn't pay)</SelectItem>
                        <SelectItem value="1-49">₹1 - ₹49</SelectItem>
                        <SelectItem value="50-99">₹50 - ₹99</SelectItem>
                        <SelectItem value="100-149">₹100 - ₹149</SelectItem>
                        <SelectItem value="more">More than ₹150</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Would you rather pay individually, or would your riding club pay for a group/club plan?</Label>
                    <RadioGroup defaultValue="individually" name="payment-method" className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center space-x-2 rounded-lg border border-border bg-background p-4 hover:bg-muted/50">
                        <RadioGroupItem value="individually" id="pay-indiv" />
                        <Label htmlFor="pay-indiv" className="w-full cursor-pointer font-medium">Pay individually</Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-lg border border-border bg-background p-4 hover:bg-muted/50">
                        <RadioGroupItem value="club" id="pay-club" />
                        <Label htmlFor="pay-club" className="w-full cursor-pointer font-medium">Club/Group plan</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* 4. Feature priorities */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 border-b border-border pb-4 text-xl font-bold text-foreground">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-purple-500">
                      <Rocket size={20} />
                    </div>
                    <h2>4. Feature Roadmap Priorities</h2>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Select your TOP 2 most wanted upcoming features:</Label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {["Offline mesh intercom", "Club management tools", "Invite-only paid rides", "GoPro telemetry overlay", "Offline 3D map downloads"].map((feature) => (
                        <div key={feature} className="flex items-center space-x-3 rounded-lg border border-border bg-background p-4 hover:bg-muted/50">
                          <Checkbox id={`priority-${feature}`} name={`Top Priority: ${feature}`} value="Yes" />
                          <Label htmlFor={`priority-${feature}`} className="w-full cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {feature}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. Open feedback */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 border-b border-border pb-4 text-xl font-bold text-foreground">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--orange)]/10 text-[var(--orange)]">
                      <FileText size={20} />
                    </div>
                    <h2>5. Open Feedback</h2>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="one-thing" className="text-base font-semibold">What's the one thing that would make you use CRUIZR more?</Label>
                    <Textarea
                      id="one-thing"
                      name="Requested Feature"
                      placeholder="Share your thoughts..."
                      className="min-h-[120px] resize-y bg-background text-base"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="bugs" className="text-base font-semibold">Any bugs or issues you've run into? (Optional)</Label>
                    <Textarea
                      id="bugs"
                      name="Bug Report"
                      placeholder="Describe any issues, crashes, or weird behavior..."
                      className="min-h-[100px] resize-y bg-background text-base"
                    />
                  </div>
                </div>

                {/* Contact info (optional) */}
                <div className="space-y-4 border-t border-border pt-8">
                  <p className="text-sm text-muted-foreground">
                    If you'd like us to follow up with you about your feedback, leave your email (optional).
                  </p>
                  <div className="max-w-md">
                    <Input id="email" name="Email" type="email" placeholder="your@email.com" className="h-12 bg-background" />
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="h-14 w-full rounded-full bg-[var(--orange)] text-lg font-bold text-white transition-all hover:scale-[1.02] hover:bg-[#e0561b] hover:shadow-[0_8px_30px_rgba(255,107,43,0.3)] md:w-auto md:px-12"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                        <span>Submitting Survey...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send size={20} />
                        <span>Submit Feedback Survey</span>
                      </div>
                    )}
                  </Button>
                </div>
                
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
