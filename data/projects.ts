import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'minivllm',
    date: 'Nov 2026',
    problem:
      'LLM serving throughput depends on how requests are batched and how KV cache memory is managed, and the techniques behind it are hard to understand without building them.',
    solution:
      'Built an inference engine from scratch in PyTorch with continuous batching, a paged KV cache with preemption, prefix caching, chunked prefill, and an OpenAI compatible streaming server. Every phase was gated by token-for-token agreement with Hugging Face transformers.',
    techStack: 'Python, PyTorch, FastAPI, safetensors, Prometheus, pytest, GitHub Actions',
    metrics:
      'Greedy output matches Hugging Face transformers token for token on 20 prompts in static, continuous, and chunked-prefill modes, backed by 89 automated tests. Benchmarks against vLLM are scripted but not yet run.',
    logo: '/logos/react_icon.svg',
    github: 'https://github.com/drashtimagia/minivllm',
    demo: 'https://github.com/drashtimagia/minivllm',
    slug: 'minivllm',
  },
  {
    title: 'AgentChaos',
    date: 'Nov 2026',
    problem:
      'AI agents fail silently under real-world conditions with no standard way to measure resilience before shipping.',
    solution:
      'Built a fault-injection middleware that intercepts tool calls, injects deterministic failures through a policy engine, and produces a composite resilience score across task success, safety, graceful degradation, and execution stability.',
    techStack: 'Python, Pydantic v2, MCP, Claude Agent SDK, OpenAI Agents SDK, LangGraph, OpenTelemetry, pytest, Docker',
    metrics:
      'Works across 4 agent frameworks with no API keys required. Ships a pytest plugin, GitHub Action, and OpenTelemetry export out of the box.',
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
