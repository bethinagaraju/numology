type NumberRingProps = {
  number: number | string;
  label?: string;
};

export function NumberRing({ number, label }: NumberRingProps) {
  return (
    <div className="number-ring">
      <div className="ring ring-one" />
      <div className="ring ring-two" />
      <strong>{number}</strong>
      {label && <small>{label}</small>}
    </div>
  );
}
