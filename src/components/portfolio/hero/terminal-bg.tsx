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
    { kind: "out", t: "On branch ", em: "feature/client-cms", em2: "green" },
    {
      kind: "out",
      t: "Working tree ready for ",
      em: "handover",
      em2: "cyan",
      t2: ".",
    },
    { kind: "out", t: "" },
    { kind: "out", t: "Recent changes:" },
    {
      kind: "out",
      t: "  modified:   ",
      em: "app/Http/Controllers/AdminController.php",
      em2: "green",
    },
    { kind: "out", t: "  modified:   ", em: "resources/views/dashboard.blade.php", em2: "green" },
    { kind: "out", t: "  new file:   ", em: "docs/client-handover.md", em2: "green" },
  ],
  () => [
    { kind: "prompt", cmd: "pnpm build" },
    { kind: "out", t: "> curiousteam.github.io@0.1.0 build" },
    { kind: "out", t: "> next build", em: "", em2: "gray" },
    { kind: "out", t: "" },
    { kind: "out", t: "   Next.js 16.2.4 ", em: "(static export)", em2: "gray" },
    { kind: "out", t: "   Route:         ", em: "/", em2: "cyan" },
    { kind: "out", t: "   Output:        ", em: "out/", em2: "yellow" },
    { kind: "out", t: "" },
    { kind: "out", t: " OK Ready in ", em: "1.2s", em2: "green" },
    { kind: "out", t: " OK Compiled ", em: "/portfolio", em2: "green", t2: " in 412ms" },
  ],
  () => [
    { kind: "prompt", cmd: "php artisan route:list --path=api" },
    {
      kind: "out",
      t: "GET|HEAD  ",
      em: "api/projects",
      em2: "cyan",
      t2: "  ProjectController@index",
    },
    {
      kind: "out",
      t: "POST      ",
      em: "api/payments/paypal",
      em2: "cyan",
      t2: "  PaymentController@store",
    },
    {
      kind: "out",
      t: "PUT       ",
      em: "api/users/{id}/role",
      em2: "cyan",
      t2: "  UserRoleController@update",
    },
    { kind: "out", t: "OK ", em: "REST endpoints documented", em2: "green" },
  ],
  () => [
    { kind: "prompt", cmd: "wp theme status curious-business" },
    {
      kind: "out",
      t: "OK ",
      em: "Theme active",
      em2: "green",
      t2: " (Elementor + Astra)",
    },
    { kind: "out", t: "  Pages: ", em: "12 optimized", em2: "cyan" },
    { kind: "out", t: "  SEO:   ", em: "clean URLs enabled", em2: "yellow" },
    { kind: "out", t: "  Speed: ", em: "cache warmed", em2: "green" },
  ],
  () => [
    { kind: "prompt", cmd: "vendor/bin/phpunit --testsuite=Feature" },
    { kind: "out", t: " OK ", em: "AuthFlowTest", em2: "green", t2: "       (8)" },
    { kind: "out", t: " OK ", em: "PaymentGatewayTest", em2: "green", t2: " (12)" },
    { kind: "out", t: " OK ", em: "AdminReportTest", em2: "green", t2: "    (5)" },
    { kind: "out", t: "" },
    { kind: "out", t: " Test Files  ", em: "3 passed", em2: "green", t2: " (3)" },
    { kind: "out", t: "      Tests  ", em: "25 passed", em2: "green", t2: " (25)" },
  ],
  () => [
    { kind: "prompt", cmd: "ls -la services/" },
    { kind: "out", t: "drwxr-xr-x   ", em: "laravel-apps", em2: "cyan" },
    { kind: "out", t: "drwxr-xr-x   ", em: "wordpress-sites", em2: "cyan" },
    { kind: "out", t: "drwxr-xr-x   ", em: "api-integrations", em2: "cyan" },
    { kind: "out", t: "-rw-r--r--   ", em: "handover-checklist.md", em2: "white" },
    { kind: "out", t: "-rw-r--r--   ", em: "support-plan.md", em2: "yellow" },
  ],
  () => [
    { kind: "prompt", cmd: "curl https://curiousteam.github.io/status.json" },
    { kind: "out", t: "{" },
    { kind: "out", t: '  "availability": ', em: '"open"', em2: "green", t2: "," },
    { kind: "out", t: '  "websites":     ', em: '"50+"', em2: "yellow", t2: "," },
    { kind: "out", t: '  "software":     ', em: '"10+"', em2: "cyan", t2: "," },
    { kind: "out", t: '  "timezone":     ', em: '"GMT+6"', em2: "green" },
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
      pushLine({ kind: "banner", t: "~/curious-team - zsh - 132x42" });
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
        <span className="title">curious-team - zsh - 132x42</span>
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
                <span className="t-branch-name">feature/client-cms</span>
                <span className="t-branch">) </span>
                <span className="t-arrow">&gt; </span>
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
