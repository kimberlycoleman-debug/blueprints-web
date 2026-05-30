export function BPButton({ children, ...props }: any) {
  return (
    <button className="bp-btn" {...props}>
      {children}
    </button>
  );
}
