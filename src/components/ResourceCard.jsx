export default function ResourceCard({ item, onOpen }) {
  return (
    <button
      onClick={() => onOpen(item)}
      style={{
        textAlign: "left",
        border: "1px solid #ddd",
        borderRadius: 12,
        overflow: "hidden",
        background: "white",
        cursor: "pointer"
      }}
    >
      <div style={{ aspectRatio: "16 / 9", background: "#f3f3f3" }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ padding: 12 }}>
        <div style={{ fontWeight: 700 }}>{item.title}</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>
          {item.grade} • {item.type.toUpperCase()}
        </div>
      </div>
    </button>
  );
}
