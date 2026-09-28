# Three Rooms

An instruction-only skill for Codex and Claude Code that guides an idea through the Dreamer, Realist, and Critic rooms, one conversation at a time.

The Dreamer explores complete success and pushes bigger twice. The Realist covers steps, people, money, and an action for this week. The Critic asks what's missing, what could go wrong, and who would hate it. The session ends with a one-sentence dream, a five-step plan, three holes with fixes, and the least-explored room.

No APIs, dependencies, or runtime scripts are required. The same `SKILL.md` works in both tools. Inspired by Walt Disney’s approach to exploring ideas through Dreamer, Realist, and Critic perspectives.

## Install

Until the initial pull request is merged, clone the published implementation branch. After merge, omit `--branch feat/portable-three-room-skill` to install from the default branch.

### Codex: available across projects

```sh
mkdir -p ~/.agents/skills
git clone --branch feat/portable-three-room-skill https://github.com/thesnug/three-rooms.git ~/.agents/skills/three-rooms
```

Invoke:

```text
$three-rooms My idea: a neighborhood repair cafe.
```

### Claude Code: available across projects

```sh
mkdir -p ~/.claude/skills
git clone --branch feat/portable-three-room-skill https://github.com/thesnug/three-rooms.git ~/.claude/skills/three-rooms
```

Invoke:

```text
/three-rooms My idea: a neighborhood repair cafe.
```

For a project-only installation, use `.agents/skills/three-rooms` or `.claude/skills/three-rooms` inside that project instead. The clone destination must not already exist. If the skill does not appear, restart the tool.

Installation locations and invocation syntax follow the official [Codex skills documentation](https://learn.chatgpt.com/docs/build-skills) and [Claude Code skills documentation](https://code.claude.com/docs/en/skills).

## Update

Run `git pull --ff-only` inside the installed folder. If installed from the initial implementation branch, switch to `main` after the pull request merges:

```sh
git fetch origin
git switch main
git pull --ff-only
```

## Facilitation details

The skill waits for actual answers and keeps later rooms out of the current conversation. Critic objections are recorded rather than debated. Unanswered prompts remain open; a user-requested stop or skip is marked incomplete.

The final attention comparison uses substantive user turns, reports ties, and treats the result as a possible habit to watch. It does not invent elapsed time or diagnose a lasting habit from one exercise.

## License

MIT. See [LICENSE](LICENSE).
