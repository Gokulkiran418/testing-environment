"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

type TabType = "reduce-leakage" | "shorten-time" | "staff-capacity" | "lower-cost";

interface TabContent {
  title: string;
  whatWeFix: string[];
  how: string[];
  ctaText: string;
  backgroundImage: string;
  video: string;
}

const tabContent: Record<TabType, TabContent> = {
  "reduce-leakage": {
    title: "Reduce Leakage, Lower Denials",
    whatWeFix: [
      "Stalled referrals",
      "Missing documentation and payer prerequisites",
      "Missed callbacks",
    ],
    how: [
      "Referral completeness checks",
      "Automated outreach",
      "First‑time‑right scheduling",
      "Payer rule-pack completion check",
      "Analytics on drop‑offs",
      "Audit-ready trails",
    ],
    ctaText: "Identify your top three leakage points",
    backgroundImage: "https://d2h9x7vafti7jh.cloudfront.net/outcomes/reduce-leakage.webp",
    video: "https://d2h9x7vafti7jh.cloudfront.net/outcomes/reduce-leakage.mp4",
  },
  "shorten-time": {
    title: "Shorten Time‑to‑Appointment",
    whatWeFix: ["Holds", "Back‑and‑forth", "Template mismatches"],
    how: [
      "Policy‑aware slot proposals",
      "Agent‑assist for exceptions",
      "24/7 self‑service",
    ],
    ctaText: "Model your time‑to‑appointment gains",
    backgroundImage: "https://d2h9x7vafti7jh.cloudfront.net/outcomes/shorten-time.webp",
    video: "https://d2h9x7vafti7jh.cloudfront.net/outcomes/shorten-time.mp4",
  },
  "staff-capacity": {
    title: "Boost Your Staff Capacity Without Additional Resources",
    whatWeFix: ["Manual sorting", "Re‑keying", "Repetitive calls"],
    how: [
      "Inbox automation",
      "Extraction",
      "Governed scheduling",
      "Support deflection",
    ],
    ctaText: "Estimate FTE hours reclaimed",
    backgroundImage: "https://d2h9x7vafti7jh.cloudfront.net/outcomes/staff-capacity.webp",
    video: "https://d2h9x7vafti7jh.cloudfront.net/outcomes/staff-capacity.mp4",
  },
  "lower-cost": {
    title: "Lower Your Cost to Serve, Improve Your Profitability",
    whatWeFix: [
      "High labor costs of your order entry",
      "Scheduling & patient coordinator",
      "Clinic front desk team",
    ],
    how: [
      "Offloading work to Emily",
    ],
    ctaText: "Estimate your ROI",
    backgroundImage: "https://d2h9x7vafti7jh.cloudfront.net/outcomes/lower-cost.webp",
    video: "https://d2h9x7vafti7jh.cloudfront.net/outcomes/lower-cost.mp4",
  },
};

const tabs: { id: TabType; label: string }[] = [
  { id: "reduce-leakage", label: "Reduce Leakage, Lower Denials" },
  { id: "shorten-time", label: "Shorten Time‑to‑Appointment" },
  { id: "staff-capacity", label: "Boost Your Staff Capacity Without Additional Resources" },
  { id: "lower-cost", label: "Lower Your Cost to Serve, Improve Your Profitability" },
];

export default function Results() {
  const [activeTab, setActiveTab] = useState<TabType>("reduce-leakage");
  const [previousTab, setPreviousTab] = useState<TabType>("reduce-leakage");
  const content = tabContent[activeTab];

  // Handle tab change with direction tracking
  const handleTabChange = (newTab: TabType) => {
    setPreviousTab(activeTab);
    setActiveTab(newTab);
  };

  // Get current and previous indices to determine direction
  const getTabIndex = (tabId: TabType) => tabs.findIndex(t => t.id === tabId);
  const activeIndex = getTabIndex(activeTab);
  const previousIndex = getTabIndex(previousTab);
  const isMovingDown = activeIndex > previousIndex;

  return (
    <section
      id="outcomes"
      className="relative w-full flex flex-col items-center justify-center px-5 md:px-20 py-12 md:py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(185.57deg, #FFFFFF -10.98%, #FEF5D6 16.67%, #FFCC92 41.79%, #FFAB82 63.31%, rgba(255, 196, 167, 0.508135) 92.94%, rgba(255, 255, 255, 0) 123.54%), #ECECEC",
      }}
    >


      {/* Dark Background Image Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(194.7981613083407deg, rgba(25, 25, 25, 0.4) 10.315%, rgba(254, 245, 214, 0.4) 33.372%, rgba(255, 204, 146, 0.4) 54.311%, rgba(255, 171, 130, 0.4) 72.26%, rgba(255, 196, 167, 0.20325) 96.96%, rgba(25, 25, 25, 0.4) 122.48%), linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] flex flex-col gap-6 items-center">
        {/* Badge + Headline */}
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <div className="bg-[rgba(251,250,249,0.24)] border border-[#d8d2ca] rounded-full px-4 py-2">
            <p className="text-sm font-medium leading-5 text-white text-center">
              Outcomes
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center text-center max-w-[824px]">
            <h2 className="text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[60px] font-medium text-white tracking-[-0.5px] md:tracking-[-0.96px]">
              The Results Speak for Themselves
            </h2>
            <p className="text-base md:text-lg leading-6 md:leading-[26px] font-normal text-neutral-100 max-w-[900px]">
              Flow AI is trusted by leading Health Systems, Physician Groups, Radiology Groups, Home Healthcare Providers and Ambulatory Surgery Centers to improve their patient experience, operating efficiency and margins.
            </p>
          </div>
        </div>

        {/* Tab Component */}
        <div className="bg-[rgba(102,102,102,0.3)] rounded-2xl p-4 w-full">
          <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-stretch w-full">
            {/* Left Panel - Tabs */}
            <div className="flex flex-col gap-2 w-full xl:w-[602px] xl:h-full">
              {tabs.map((tab, index) => {
                const isActive = activeTab === tab.id;
                const tabData = tabContent[tab.id];

                // Determine if this tab is effectively "expanding"
                // If it's active, it's expanding

                return (
                  <motion.div
                    key={tab.id}
                    className="rounded-2xl overflow-hidden mb-2"
                    initial={false}
                    animate={{
                      backgroundColor: isActive
                        ? "rgba(255, 255, 255, 0.24)"
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Tab Header / Button */}
                    <button
                      onClick={() => handleTabChange(tab.id)}
                      className={`w-full flex gap-4 items-center justify-between p-6 transition-all text-left hover:bg-[rgba(255,255,255,0.05)] ${isActive ? "" : "cursor-pointer"
                        }`}
                    >
                      <p className={`flex-1 font-medium text-lg leading-[26px] whitespace-pre-wrap transition-opacity duration-300 ${isActive ? "text-white opacity-100" : "text-white opacity-50"
                        }`}>
                        {tab.label}
                      </p>
                      <div className="relative shrink-0 w-6 h-6">
                        <Image
                          src="/icons/right-arrow.svg"
                          alt=""
                          width={24}
                          height={24}
                          className={`w-6 h-6 transition-transform duration-300 ${isActive ? "rotate-90" : ""
                            }`}
                        />
                      </div>
                    </button>

                    {/* Tab Content - Accordion Expansion */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { height: "auto", opacity: 1 },
                            collapsed: { height: 0, opacity: 0 }
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 flex flex-col gap-4 xl:min-h-[415px] ">
                            {/* Mobile/Tablet Video */}
                            <div className="xl:hidden w-full h-[600px] md:h-[700px] relative rounded-2xl overflow-hidden bg-[#1f1f1f]">
                              <AnimatePresence>
                                <motion.div
                                  key={`video-${activeTab}`}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.8, ease: "easeInOut" }}
                                  className="absolute inset-0 w-full h-full md:origin-top"
                                >
                                  <video
                                    src={tabData.video}
                                    poster={tabData.backgroundImage}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover object-top"
                                  />
                                </motion.div>
                              </AnimatePresence>
                            </div>

                            {/* Content Sections */}
                            <motion.div
                              initial={{ y: isMovingDown ? -20 : 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: isMovingDown ? -20 : 20, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                              className="flex-1 flex flex-col gap-6"
                            >
                              <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1 flex flex-col gap-2">
                                  <p className="font-semibold text-base leading-6 text-white">
                                    What We Fix
                                  </p>
                                  <div className="flex flex-col gap-2">
                                    {tabData.whatWeFix.map((item, idx) => (
                                      <div key={idx} className="flex gap-2 items-center">
                                        <div className="relative shrink-0 w-5 h-5">
                                          <Image
                                            src="/icons/orange-checkbox.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                          />
                                        </div>
                                        <p className="flex-1 font-normal text-base leading-6 text-[#e0e0e0]">
                                          {item}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                  <p className="font-semibold text-base leading-6 text-white">
                                    How
                                  </p>
                                  <div className="flex flex-col gap-2">
                                    {tabData.how.map((item, idx) => (
                                      <div key={idx} className="flex gap-2 items-center">
                                        <div className="relative shrink-0 w-5 h-5">
                                          <Image
                                            src="/icons/orange-checkbox.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                          />
                                        </div>
                                        <p className="flex-1 font-normal text-base leading-6 text-[#e0e0e0]">
                                          {item}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <Button
                                variant="Primary"
                                size="sm"
                                className="w-full h-14 px-8"
                                href="/schedule-a-demo"
                              >
                                {tabData.ctaText}
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Panel - Video (Desktop Only) */}
            <div className="hidden xl:flex bg-[#1f1f1f] rounded-3xl overflow-hidden relative w-full xl:w-[630px] h-full min-h-[756px]">
              <AnimatePresence>
                <motion.div
                  key={`video-${activeTab}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <video
                    src={content.video}
                    poster={content.backgroundImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

