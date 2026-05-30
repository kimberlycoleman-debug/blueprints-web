const OS_BASE = process.env.NEXT_PUBLIC_OS_API ?? "https://os.kymistrycollection.com/api";

export async function osGet(path: string, options: RequestInit = {}) {
  const res = await fetch(`${OS_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`OS API error: ${res.status}`);
  }

  return res.json();
}

export async function osPost(path: string, body: unknown, options: RequestInit = {}) {
  const res = await fetch(`${OS_BASE}${path}`, {
    method: "POST",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`OS API error: ${res.status}`);
  }

  return res.json();
}
