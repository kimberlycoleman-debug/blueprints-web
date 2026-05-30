const OS_BASE =
  process.env.NEXT_PUBLIC_OS_API ?? "https://os.kymistrycollection.com/api";

async function handleResponse(res: Response) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`OS API error: ${res.status} ${text}`);
  }
  try {
    return await res.json();
  } catch {
    return null;
  }
}

export async function osGet(path: string, options: RequestInit = {}) {
  const res = await fetch(`${OS_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  return handleResponse(res);
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

  return handleResponse(res);
}
