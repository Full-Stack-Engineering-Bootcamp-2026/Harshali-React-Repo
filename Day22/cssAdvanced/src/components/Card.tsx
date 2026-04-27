type Props = {
  title: string;
  error?: boolean;
};

export default function Card({ title, error }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {error && <p className="error-text">Error inside card</p>}
    </div>
  );
}