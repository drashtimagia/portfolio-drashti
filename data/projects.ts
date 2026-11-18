import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'AgentChaos',
    date: 'Nov 2026',
    problem:
      'AI agents fail silently under real-world conditions — rate limits, timeouts, malformed responses — with no standard way to measure resilience before shipping.',
    solution:
      'Designed and built a fault-injection middleware that intercepts tool calls, injects deterministic failures via a policy engine, and scores agent behavior across task success, safety, graceful degradation, and execution stability using a composite 0–100 resilience metric.',
    techStack: 'Python, Pydantic v2, MCP, Claude Agent SDK, OpenAI Agents SDK, LangGraph, OpenTelemetry, pytest, Docker',
    metrics:
      'Supports 4 agent frameworks with zero API keys required; ships a pytest plugin, GitHub Action, OTLP export, and HTML bench report — 158 tests, all passing.',
    logo: '/logos/react_icon.svg',
    github: 'https://github.com/drashtimagia/agentchaos',
    demo: 'https://github.com/drashtimagia/agentchaos',
    slug: 'agentchaos',
  },
  {
    title: 'Adaptive RLHF for Responsible LLM Personalization',
    date: 'Mar 2025 to May 2025',
    problem:
      'Built adaptive personalization while maintaining responsible model behavior at large scale.',
    solution:
      'Developed an RLHF pipeline in Python, PyTorch, and SageMaker in C++ with a custom reward model and API for real-time feedback.',
    techStack: 'Python, PyTorch, SageMaker (C++), RLHF, Reward Modeling APIs',
    metrics:
      'Delivered 22% alignment improvement and 20% lower latency at scale for 5M+ users.',
    logo: '/logos/react_icon.svg',
    github: 'https://github.com/drashtimagia',
    demo: 'https://github.com/drashtimagia',
    slug: 'adaptive-rlhf-responsible-llm-personalization',
  },
  {
    title: 'Distributed Task Scheduler and Load Balancer',
    date: 'Jan 2024 to May 2024',
    problem:
      'Needed higher throughput and stability for high-volume Kubernetes job orchestration.',
    solution:
      'Implemented lock-free queues and hash-based scheduling for Kubernetes clusters to improve distribution and concurrency.',
    techStack: 'Kubernetes, Distributed Systems, Lock-Free Queues, Hash-Based Scheduling',
    metrics:
      'Achieved 40% runtime gain and 98.9% uptime across 1M+ daily jobs.',
    logo: '/logos/vsc.svg',
    github: 'https://github.com/drashtimagia',
    demo: 'https://github.com/drashtimagia',
    slug: 'distributed-task-scheduler-load-balancer',
  },
  {
    title: 'Real-Time Indian Sign Language Recognition',
    date: 'Oct 2023 to Nov 2023',
    problem:
      'Required accurate and low-latency sign language recognition for real-time interactions.',
    solution:
      'Trained a multimodal transformer using PyTorch and ONNX, then optimized inference using TensorRT for faster serving.',
    techStack: 'PyTorch, ONNX, TensorRT, Multimodal Transformers, Real-Time Inference',
    metrics: 'Reached 95% accuracy with 40% faster response time.',
    logo: '/logos/js_icon.svg',
    github: 'https://github.com/drashtimagia',
    demo: 'https://github.com/drashtimagia',
    slug: 'real-time-indian-sign-language-recognition',
  },
];
