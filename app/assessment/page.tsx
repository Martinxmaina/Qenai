"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const QUESTIONS = [
  {
    id: 1,
    category: "Data Strategy",
    question: "How is data currently managed within your organization?",
    options: [
      {
        title: "Siloed & Fragmented",
        description: "Data lives in disconnected spreadsheets or legacy systems with limited access.",
        value: 1
      },
      {
        title: "Centralized Warehouse",
        description: "We have a single source of truth, but analysis is mostly manual or retrospective.",
        value: 2
      },
      {
        title: "Predictive & Automated",
        description: "AI models actively drive decision making with real-time data pipelines.",
        value: 3
      }
    ]
  },
  {
    id: 2,
    category: "Team Capability",
    question: "What is your team's current AI/ML expertise level?",
    options: [
      {
        title: "No In-House Expertise",
        description: "We rely entirely on external vendors or consultants for any data-related work.",
        value: 1
      },
      {
        title: "Basic Analytics Team",
        description: "We have data analysts who can run reports and create dashboards.",
        value: 2
      },
      {
        title: "Advanced ML Engineers",
        description: "We have dedicated data scientists and ML engineers building and deploying models.",
        value: 3
      }
    ]
  },
  {
    id: 3,
    category: "Technology Infrastructure",
    question: "How would you describe your current data infrastructure?",
    options: [
      {
        title: "Legacy Systems",
        description: "Outdated tools with minimal integration capabilities.",
        value: 1
      },
      {
        title: "Modern Cloud-Based",
        description: "Cloud infrastructure with some integration, but limited scalability.",
        value: 2
      },
      {
        title: "Enterprise AI Platform",
        description: "Fully integrated, scalable cloud infrastructure ready for AI workloads.",
        value: 3
      }
    ]
  },
  {
    id: 4,
    category: "Strategic Alignment",
    question: "Has your leadership defined AI objectives and KPIs?",
    options: [
      {
        title: "No Strategy",
        description: "AI is not currently part of our strategic roadmap.",
        value: 1
      },
      {
        title: "Exploratory Phase",
        description: "We're interested in AI but haven't defined specific goals yet.",
        value: 2
      },
      {
        title: "Clear Objectives",
        description: "We have well-defined AI goals with executive buy-in and budget allocation.",
        value: 3
      }
    ]
  }
];

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswerSelect = (value: number) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswers({ ...answers, [currentQuestion]: selectedOption });
      
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(answers[currentQuestion + 1] || null);
      } else {
        // Assessment complete - calculate score
        const totalScore = Object.values({ ...answers, [currentQuestion]: selectedOption }).reduce((sum, val) => sum + val, 0);
        const maxScore = QUESTIONS.length * 3;
        const percentage = Math.round((totalScore / maxScore) * 100);
        alert(`Assessment Complete! Your AI Readiness Score: ${percentage}%`);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
    }
  };

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
  const question = QUESTIONS[currentQuestion];

  return (
    <main className="flex-1 bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Side Info */}
            <div className="lg:col-span-2 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-medium text-primary mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse-slow"></span>
                Free 3-Minute Assessment
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Is Your Business <br className="hidden lg:block" />
                Ready for <span className="text-primary">AI?</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover where you stand in the AI landscape. Our interactive tool evaluates your data infrastructure, team capability, and strategic alignment to generate a personalized roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <div className="bg-green-100 rounded-full p-1">
                    <span className="material-symbols-outlined text-green-600 text-sm font-bold">check</span>
                  </div>
                  Instant Readiness Score
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <div className="bg-green-100 rounded-full p-1">
                    <span className="material-symbols-outlined text-green-600 text-sm font-bold">check</span>
                  </div>
                  Gap Analysis
                </div>
              </div>
            </div>

            {/* Assessment Card */}
            <div className="lg:col-span-3 w-full animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden relative">
                {/* Header */}
                <div className="bg-white border-b border-slate-100 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-lg">analytics</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Readiness Assessment</h3>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-1 rounded-md">
                    Step {currentQuestion + 1} of {QUESTIONS.length}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-50 h-1.5">
                  <div 
                    className="bg-primary h-1.5 rounded-r-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                {/* Question Content */}
                <div className="p-6 md:p-8">
                  <span className="text-sm text-slate-400 font-medium mb-2 block uppercase tracking-wide text-xs">
                    {question.category}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">
                    {question.question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-4">
                    {question.options.map((option, index) => (
                      <label key={index} className="block cursor-pointer group">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          className="sr-only"
                          checked={selectedOption === option.value}
                          onChange={() => handleAnswerSelect(option.value)}
                        />
                        <div
                          className={`flex items-start p-4 rounded-xl border-2 transition-all duration-200 relative ${
                            selectedOption === option.value
                              ? "border-primary bg-primary/5"
                              : "border-slate-100 hover:border-blue-200 hover:bg-slate-50 group-hover:shadow-sm"
                          }`}
                        >
                          <div className="flex items-center h-5 mr-4 mt-0.5">
                            <div
                              className={`h-5 w-5 rounded-full border-2 transition-all ${
                                selectedOption === option.value
                                  ? "border-primary border-[5px]"
                                  : "border-slate-300 bg-white"
                              }`}
                            ></div>
                          </div>
                          <div className="flex-1">
                            <span
                              className={`block text-base font-semibold transition-colors ${
                                selectedOption === option.value ? "text-primary" : "text-slate-900"
                              }`}
                            >
                              {option.title}
                            </span>
                            <span className="block text-sm text-slate-500 mt-1">
                              {option.description}
                            </span>
                          </div>
                          {selectedOption === option.value && (
                            <div className="absolute top-4 right-4 text-primary">
                              <span className="material-symbols-outlined">check_circle</span>
                            </div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="p-6 pt-2 bg-white flex justify-between items-center mt-2 border-t border-slate-50">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className="text-slate-400 font-medium text-sm hover:text-slate-600"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className="bg-primary hover:bg-primary-dark text-white pl-6 pr-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
                  >
                    {currentQuestion === QUESTIONS.length - 1 ? "Complete" : "Next Question"}
                    <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Assess Section */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Why assess your AI Readiness?
            </h2>
            <p className="text-muted-foreground">
              Understanding your current capabilities is the first step towards a successful AI transformation. Our tool provides clarity in minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "search",
                title: "Strategic Gap Analysis",
                description: "Identify specific bottlenecks in your data infrastructure and workforce capabilities that are holding you back from adoption."
              },
              {
                icon: "score",
                title: "Industry Benchmarking",
                description: "See how your organization stacks up against competitors and industry leaders in your sector with a quantified readiness score."
              },
              {
                icon: "map",
                title: "Actionable Roadmap",
                description: "Receive a tailored step-by-step plan to level up your AI maturity, from data collection to model deployment."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-border bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Unlock your full <span className="text-primary">Potential</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Don't guess where to start. Get data-driven insights to power your next strategic move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full text-base font-medium shadow-md hover:-translate-y-0.5 transition-all"
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setSelectedOption(null);
              }}
            >
              Restart Assessment
              <span className="material-symbols-outlined text-sm ml-2">refresh</span>
            </Button>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            No credit card required. Your data is secure and private.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
      </section>
    </main>
  );
}
