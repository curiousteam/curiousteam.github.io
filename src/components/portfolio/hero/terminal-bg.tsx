"use client";

import { useEffect, useRef, useState } from "react";

type ColorClass = "green" | "cyan" | "yellow" | "red" | "magenta" | "gray" | "white";

type LineKind = "banner" | "prompt" | "out";

type RawLine =
  | { kind: "banner"; t: string }
  | { kind: "prompt"; cmd: string }
  | { kind: "out"; t: string; em?: string; em2?: ColorClass | ""; t2?: string };

type Line = RawLine & { id: number; typing?: boolean };

type Script = () => RawLine[];

const SCRIPTS: Script[] = [
  () => [
    { kind: "prompt", cmd: "git status" },
    { kind: "out", t: "On branch ", em: "feat/agent-loop", em2: "green" },
    {
      kind: "out",
      t: "Your branch is ahead of ",
      em: "'origin/main'",
      em2: "cyan",
      t2: " by 4 commits.",
    },
    { kind: "out", t: "" },
    { kind: "out", t: "Changes to be committed:" },
    { kind: "out", t: "  modified:   ", em: "src/agents/orchestrator.ts", em2: "green" },
    { kind: "out", t: "  modified:   ", em: "src/lib/rag/pinecone.ts", em2: "green" },
    { kind: "out", t: "  new file:   ", em: "src/prompts/router.md", em2: "green" },
  ],
  () => [
    { kind: "prompt", cmd: "pnpm dev" },
    { kind: "out", t: "> atlas@0.4.1 dev" },
    { kind: "out", t: "> next dev --turbo", em: "", em2: "gray" },
    { kind: "out", t: "" },
    { kind: "out", t: "   ▲ Next.js 15.0.3 ", em: "(turbo)", em2: "gray" },
    { kind: "out", t: "   - Local:        ", em: "http://localhost:3000", em2: "cyan" },
    { kind: "out", t: "   - Environments: ", em: ".env.local", em2: "yellow" },
    { kind: "out", t: "" },
    { kind: "out", t: " ✓ Ready in ", em: "1.2s", em2: "green" },
    { kind: "out", t: " ○ Compiling ", em: "/dashboard", em2: "cyan", t2: " ..." },
    { kind: "out", t: " ✓ Compiled ", em: "/dashboard", em2: "green", t2: " in 412ms" },
  ],
  () => [
    { kind: "prompt", cmd: 'claude run --agent ops --task "summarize tickets"' },
    { kind: "out", t: "◐ ", em: "thinking", em2: "magenta", t2: "..." },
    {
      kind: "out",
      t: "→ ",
      em: "tool_call",
      em2: "cyan",
      t2: '  list_tickets({ status: "open" })',
    },
    { kind: "out", t: "← ", em: "12 tickets", em2: "green", t2: " returned (240ms)" },
    { kind: "out", t: "→ ", em: "tool_call", em2: "cyan", t2: '  embed_query("priority signals")' },
    { kind: "out", t: "← ", em: "8 matches", em2: "green", t2: " (ada-002, 0.84 avg)" },
    { kind: "out", t: "✓ ", em: "Summary written", em2: "green", t2: " to /reports/2026-05-04.md" },
  ],
  () => [
    { kind: "prompt", cmd: "shopify theme push --store verdant-goods" },
    {
      kind: "out",
      t: "✓ ",
      em: "Theme uploaded",
      em2: "green",
      t2: " (verdant-goods.myshopify.com)",
    },
    { kind: "out", t: "  Files: ", em: "187 changed", em2: "cyan" },
    { kind: "out", t: "  Speed: ", em: "+12 Lighthouse pts", em2: "yellow" },
    { kind: "out", t: "  Preview: ", em: "https://vrd.gd/p/8f2a", em2: "cyan" },
  ],
  () => [
    { kind: "prompt", cmd: "vitest run --coverage" },
    { kind: "out", t: " ✓ ", em: "agents/orchestrator.test.ts", em2: "green", t2: "  (8)" },
    { kind: "out", t: " ✓ ", em: "lib/rag/retriever.test.ts", em2: "green", t2: "   (12)" },
    { kind: "out", t: " ✓ ", em: "api/router.test.ts", em2: "green", t2: "         (5)" },
    { kind: "out", t: "" },
    { kind: "out", t: " Test Files  ", em: "3 passed", em2: "green", t2: " (3)" },
    { kind: "out", t: "      Tests  ", em: "25 passed", em2: "green", t2: " (25)" },
    { kind: "out", t: "   Coverage  ", em: "94.2%", em2: "cyan", t2: " lines" },
  ],
  () => [
    { kind: "prompt", cmd: "ls -la apps/" },
    { kind: "out", t: "drwxr-xr-x   ", em: "atlas", em2: "cyan" },
    { kind: "out", t: "drwxr-xr-x   ", em: "helios", em2: "cyan" },
    { kind: "out", t: "drwxr-xr-x   ", em: "promptforge", em2: "cyan" },
    { kind: "out", t: "-rw-r--r--   ", em: "README.md", em2: "white" },
    { kind: "out", t: "-rw-r--r--   ", em: "package.json", em2: "yellow" },
  ],
  () => [
    { kind: "prompt", cmd: "curl https://api.curiousteam.dev/status" },
    { kind: "out", t: "{" },
    { kind: "out", t: '  "status": ', em: '"online"', em2: "green", t2: "," },
    { kind: "out", t: '  "agents": ', em: "4", em2: "yellow", t2: "," },
    { kind: "out", t: '  "uptime": ', em: '"42d 18h"', em2: "cyan", t2: "," },
    { kind: "out", t: '  "queue":  ', em: "0", em2: "green" },
    { kind: "out", t: "}" },
  ],
];

const MAX_LINES = 60;

function isLineKind(value: unknown): value is LineKind {
  return value === "banner" || value === "prompt" || value === "out";
}

export function TerminalBg() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const lineIdRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const wait = (ms: number): Promise<void> =>
      new Promise((resolve) => {
        const t = setTimeout(resolve, ms);
        timeouts.push(t);
      });

    const cap = (next: Line[]): Line[] =>
      next.length > MAX_LINES ? next.slice(next.length - MAX_LINES) : next;

    const scrollToBottom = () => {
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      });
    };

    const pushLine = (raw: RawLine) => {
      if (cancelled) return;
      setLines((prev) => cap([...prev, { ...raw, id: ++lineIdRef.current }]));
      scrollToBottom();
    };

    const typeCommand = async (cmd: string) => {
      const id = ++lineIdRef.current;
      setLines((prev) => cap([...prev, { kind: "prompt", cmd: "", typing: true, id }]));
      for (let i = 1; i <= cmd.length; i++) {
        if (cancelled) return;
        await wait(28 + Math.random() * 40);
        setLines((prev) => prev.map((l) => (l.id === id ? { ...l, cmd: cmd.slice(0, i) } : l)));
        scrollToBottom();
      }
      setLines((prev) => prev.map((l) => (l.id === id ? { ...l, typing: false } : l)));
    };

    const runScript = async (script: RawLine[]) => {
      for (const line of script) {
        if (cancelled) return;
        if (line.kind === "prompt") {
          await typeCommand(line.cmd);
          await wait(300 + Math.random() * 200);
        } else {
          pushLine(line);
          await wait(60 + Math.random() * 100);
        }
      }
    };

    void (async () => {
      pushLine({ kind: "banner", t: "Last login: Mon May  4 09:42:18 on ttys004" });
      await wait(400);
      pushLine({ kind: "banner", t: "~/curious-team — zsh — 132x42" });
      await wait(300);

      let i = 0;
      while (!cancelled) {
        const script = SCRIPTS[i % SCRIPTS.length]!();
        await runScript(script);
        await wait(900 + Math.random() * 600);
        i++;
      }
    })();

    return () => {
      cancelled = true;
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div className="terminal-bg" ref={containerRef} aria-hidden>
      <div className="terminal-chrome">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="title">curious-team — zsh — 132×42</span>
      </div>
      <div className="terminal-body">
        {lines.map((line) => {
          if (!isLineKind(line.kind)) return null;
          if (line.kind === "banner") {
            return (
              <div key={line.id} className="t-line t-dim">
                {line.t}
              </div>
            );
          }
          if (line.kind === "prompt") {
            return (
              <div key={line.id} className="t-line">
                <span className="t-user">curious</span>
                <span className="t-at">@</span>
                <span className="t-host">team</span>
                <span className="t-sep">:</span>
                <span className="t-path">~/curious-team</span>
                <span className="t-branch"> git:(</span>
                <span className="t-branch-name">feat/agent-loop</span>
                <span className="t-branch">) </span>
                <span className="t-arrow">➜ </span>
                <span className="t-cmd">{line.cmd}</span>
                {line.typing ? <span className="t-cursor" /> : null}
              </div>
            );
          }
          const colorClass = line.em2 ? `t-${line.em2}` : "t-white";
          return (
            <div key={line.id} className="t-line">
              <span>{line.t}</span>
              {line.em ? <span className={colorClass}>{line.em}</span> : null}
              {line.t2 ? <span>{line.t2}</span> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
